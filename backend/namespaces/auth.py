from flask_restx import Api, Resource, Namespace, fields, marshal
from models import User
import boto3
from flask import jsonify, request, current_app, make_response, session
from flask_session import Session
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from exts import db
from main import CORS
import hmac
import hashlib
import base64
import jwt
from functools import wraps
import datetime



auth_ns = Namespace('auth', description='User Authentication APIs namespace')

# Function to get a Cognito client
def get_cognito_client():
    return boto3.client('cognito-idp', region_name=current_app.config['COGNITO_REGION'])

# Reusable error handling
def handle_cognito_error(error):
    if error.response['Error']['Code'] == 'UserNotFoundException':
        return {'message': 'User does not exist'}, 404
    elif error.response['Error']['Code'] == 'NotAuthorizedException':
        return {'message': 'Username or password is incorrect'}, 401
    else:
        return {'message': str(error)}, 400

#get secret hash
def get_secret_hash(username, client_id, client_secret):
    message = username + client_id
    dig = hmac.new(client_secret.encode('utf-8'), msg=message.encode('utf-8'), digestmod=hashlib.sha256).digest()
    return base64.b64encode(dig).decode()

def refresh_token_if_needed(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        access_token = session.get('access_token')
        refresh_token = session.get('refresh_token')
        username = session.get('username')

        if not access_token or not refresh_token or not username:
            return jsonify({"message": "Unauthorized"}), 401

        try:
            # Decode the token to check its expiration
            decoded_token = jwt.decode(access_token, options={"verify_signature": False})
            exp = decoded_token.get('exp')
            print("exp: ", exp)
            print("Need new token: ",datetime.datetime.fromtimestamp(exp) < datetime.datetime.now() )
            if exp and datetime.datetime.fromtimestamp(exp) < datetime.datetime.now():
                print("Creating new Refresh Token")
                # Token is expired, use the refresh token to get a new access token
                client = get_cognito_client()
                client_id = current_app.config['COGNITO_CLIENT_ID']
                client_secret = current_app.config['COGNITO_CLIENT_SECRET']
                secret_hash = get_secret_hash(username, client_id, client_secret)
                response = client.initiate_auth(
                    ClientId=client_id,
                    AuthFlow='REFRESH_TOKEN_AUTH',
                    AuthParameters={
                        'REFRESH_TOKEN': refresh_token,
                        'SECRET_HASH': secret_hash
                    }
                )
                auth_result = response['AuthenticationResult']
                new_access_token = auth_result.get('AccessToken')
                new_id_token = auth_result.get('IdToken')

                # Update session tokens
                session['access_token'] = new_access_token
                session['id_token'] = new_id_token
        except jwt.ExpiredSignatureError:
            return {"message": "Token expired"}, 401
        except Exception as e:
            return {"message": f"An error occurred: {str(e)}"}, 500

        return f(*args, **kwargs)
    return decorated_function

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print("User checked")
        if 'user_id' not in session:
            print("User Unauthorized")
            return {"message": "Unauthorized"}, 401
        return f(*args, **kwargs)
    return decorated_function

########################## MODELS #############
login_model = auth_ns.model('Login', {
    # 'email': fields.String(required=True, description='The user email'),
    'username': fields.String(required=True, description='The user username'),
     'password': fields.String(description='The user password'),
})
signup_model = auth_ns.model('Signup', {
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(description='The user password'),
    'username': fields.String(required=True, description='The user username'),
    
})
signup_confirmation_model = auth_ns.model('Signup_Confirmation', {
    'username': fields.String(required=True, description='The user username'),
    'email': fields.String(required=True, description='The user email'),
    'verification_code': fields.String(description='The verification string'),
})
auth_model = auth_ns.model('Auth', {
    'username': fields.String(required=True, description='The user username'),
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(description='The user password'),
    'verification_code': fields.String(description='The verification string'),
})
reset_password_request_model = auth_ns.model('ResetPasswordRequest', {
    # 'email': fields.String(required=True, description='The user email'),
    'username': fields.String(required=True, description='The user username'),
})
reset_password_confirmation_model = auth_ns.model('ResetPasswordConfirmation', {
    'username': fields.String(required=True, description='The user username'),
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(required=True, description='New password'),
    'verification_code': fields.String(required=True, description='Verification code sent to email')
})
logout_model = auth_ns.model('Logout', {
    'access_token': fields.String(required=True, description='User access code'),
})
######################### APIs #############################


@auth_ns.route('/signup')
class SignUp(Resource):
    @auth_ns.marshal_with(signup_model)
    @auth_ns.expect(signup_model)
    def post(self):
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        password = str(data.get('password'))
        email = str(data.get('email'))
        username = data.get('username')
        existing_user_by_email = User.query.filter_by(email=email).first()
        existing_user_by_username = User.query.filter_by(username=username).first()
        if existing_user_by_email:
            return {'message': 'Email already exists.'}, 400
        if existing_user_by_username:
            return {'message': 'Username already exists.'}, 400
        client = get_cognito_client()
        client_id = current_app.config['COGNITO_CLIENT_ID']
        client_secret = current_app.config['COGNITO_CLIENT_SECRET']
        secret_hash = get_secret_hash(username, client_id, client_secret)
        
        try:
            response = client.sign_up(
                ClientId=current_app.config['COGNITO_CLIENT_ID'],
                SecretHash=secret_hash,
                Username=username,  # Using email as the username
                Password=password,
                UserAttributes=[
                    {'Name': 'email', 'Value': email},
                    {'Name': 'preferred_username', 'Value': username},
                ],
            )
            
            print(response)
            return response, 200
        except client.exceptions.ClientError as error:
            print(error)
            return handle_cognito_error(error)

@auth_ns.route('/signup_resend_code')
class SignupResendCode(Resource):
    @auth_ns.marshal_with(reset_password_request_model)
    @auth_ns.expect(reset_password_request_model)
    def post(self):
        data = request.get_json()
        
        if not data:
            return {"error": "No data provided"}, 400
        username = str(data.get('username'))
        client = get_cognito_client()
        client_id = current_app.config['COGNITO_CLIENT_ID']
        client_secret = current_app.config['COGNITO_CLIENT_SECRET']
        secret_hash = get_secret_hash(username, client_id, client_secret)
        try:
            response = client.resend_confirmation_code(
                ClientId=current_app.config['COGNITO_CLIENT_ID'],
                SecretHash=secret_hash,
                Username=username,
            )
            return response, 200
        except client.exceptions.ClientError as error:
            return handle_cognito_error(error)

@auth_ns.route('/signup_confirmation')
class SignupConfirmation(Resource):
    @auth_ns.marshal_with(signup_confirmation_model)
    @auth_ns.expect(signup_confirmation_model)
    def post(self):
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        print("data",data)
        username = data.get('username')
        email = data.get('email')
        verification_code = str(data.get('verification_code'))
        client = get_cognito_client()
        client_id = current_app.config['COGNITO_CLIENT_ID']
        client_secret = current_app.config['COGNITO_CLIENT_SECRET']
        secret_hash = get_secret_hash(username, client_id, client_secret)
        try:
            client.confirm_sign_up(
                ClientId=current_app.config['COGNITO_CLIENT_ID'],
                Username=username,
                SecretHash=secret_hash,
                ConfirmationCode=verification_code,
            )

            user = User(username=username, email=email)
            user.save()
            return {'message': 'Email confirmed and user saved.'}, 200
        except client.exceptions.ClientError as error:
            print(error)
            return handle_cognito_error(error)


@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        print(f"Content-Type: {request.content_type}")  # Debugging line
        print(f"Request Data: {request.data}")  # Debugging line

        if request.content_type != 'application/json':
            return {'message': "Did not attempt to load JSON data because the request Content-Type was not 'application/json'."}, 400

        data = request.get_json()
        print(f"Parsed JSON Data: {data}")  # Debugging line

        if not data:
            return {'message': 'No data provided'}, 400

        username = data.get('username')
        password = data.get('password')
        print(f"Received login request for username: {username}")

        client = get_cognito_client()
        client_id = current_app.config['COGNITO_CLIENT_ID']
        client_secret = current_app.config['COGNITO_CLIENT_SECRET']
        secret_hash = get_secret_hash(username, client_id, client_secret)

        try:
            response = client.initiate_auth(
                ClientId=current_app.config['COGNITO_CLIENT_ID'],
                AuthFlow='USER_PASSWORD_AUTH',
                # SecretHash=secret_hash,
                AuthParameters={
                    'USERNAME': username,
                    'PASSWORD': password,
                    'SECRET_HASH': secret_hash,
                }
            )
            

            auth_result = response.get('AuthenticationResult', {})
            id_token = auth_result.get('IdToken')
            access_token = auth_result.get('AccessToken')
            refresh_token = auth_result.get('RefreshToken')
            # print("auth_result: ",auth_result)
            
            if not id_token or not access_token or not refresh_token:
                return {'message': 'Failed to retrieve tokens from Cognito'}, 500
            
            decoded = jwt.decode(id_token, options={"verify_signature": False})
            email=decoded["email"]
            # Save the user to the local DB if they don't exist
            #decode id_token to get email
            db_user = User.query.filter_by(username=username).first()
            if not db_user:
                db_user = User(username=username,email=email)
                db_user.save()
             # Save session data in SQLAlchemy session
            session['username'] = username
            session['user_id']=db_user.id
            session['email']=email
            session['refresh_token']=refresh_token
            session['access_token'] = access_token
            session['id_token'] = id_token
            # print("session",session)
            resp = jsonify({'message': 'Login successful'})
            # print("current app session: ",session['_id'])
            resp.set_cookie('session', session.sid, httponly=True)
            print("current id of session: ",session.sid)
            return resp
        except client.exceptions.ClientError as error:
            print("AWS Cognito ClientError:", error)
            return handle_cognito_error(error)
        except Exception as e:
            print("Unexpected error:", e)
            return {'message': 'An unexpected error occurred' }, 500




@auth_ns.route('/reset_forgotten_password_request')
class ResetForgottenPasswordRequest(Resource):
    @auth_ns.marshal_with(reset_password_request_model)
    @auth_ns.expect(reset_password_request_model)
    def post(self):
        data = request.get_json()
        username = data.get('username')
        client = get_cognito_client()
        client_id = current_app.config['COGNITO_CLIENT_ID']
        client_secret = current_app.config['COGNITO_CLIENT_SECRET']
        secret_hash = get_secret_hash(username, client_id, client_secret)
        try:
            response = client.forgot_password(
                ClientId=current_app.config['COGNITO_CLIENT_ID'],
                SecretHash=secret_hash,
                Username=username,
            )
            return response, 201
        except client.exceptions.ClientError as error:
            return handle_cognito_error(error)

@auth_ns.route('/reset_forgotten_password_confirmation')
class ResetForgottenPasswordConfirmation(Resource):
    @auth_ns.marshal_with(reset_password_confirmation_model)
    @auth_ns.expect(reset_password_confirmation_model)
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        verification_code = str(data.get('verification_code'))
        client = get_cognito_client()
        client_id = current_app.config['COGNITO_CLIENT_ID']
        client_secret = current_app.config['COGNITO_CLIENT_SECRET']
        secret_hash = get_secret_hash(username, client_id, client_secret)
        try:
            response = client.confirm_forgot_password(
                ClientId=current_app.config['COGNITO_CLIENT_ID'],
                Username=username,
                SecretHash=secret_hash,
                ConfirmationCode=verification_code,
                Password=password,
            )
            return response, 201
        except client.exceptions.CodeMismatchException:
            return {'message': 'Invalid verification code provided'}, 400
        except client.exceptions.InvalidPasswordException as e:
            return {'message': str(e)}, 400
        except client.exceptions.UserNotFoundException:
            return {'message': 'User not found'}, 404
        except client.exceptions.ClientError as e:
            return {'message': f'Unexpected error occurred: {e.response["Error"]["Message"]}'}, 500

@auth_ns.route('/logout')
class Logout(Resource):
    def post(self):
        client = get_cognito_client()
        session_token = request.cookies.get('session')
        if not session_token:
            return {"message":"Unauthorized"}, 401
        access_token = session.get('access_token')
        if not access_token:
            return {'message': 'Authorization header missing'}, 401
        try:
              # Extract token from header
            response = client.global_sign_out(
                AccessToken=access_token
            )
            if response['ResponseMetadata']['HTTPStatusCode'] == 200:
                # Clear session data
                session.clear()
                # Create a proper Flask Response object
                resp = make_response({'message': 'Successfully logged out'})
                resp.set_cookie(current_app.config['SESSION_COOKIE_NAME'], '', expires=0)
                return resp
            else:
                return {'message': 'Logout request was sent but received unexpected status code'}, response['ResponseMetadata']['HTTPStatusCode']
        except client.exceptions.ClientError as error:
            return handle_cognito_error(error)
        except Exception as e:
            return {'message': f'Error during logout: {str(e)}'}, 500


@auth_ns.route('/protected')
class Protected(Resource):
    @login_required
    @refresh_token_if_needed
    def get(self):
        print("protected area accessed!!")
        return {"message": "Authorized"}, 200

@auth_ns.route('/checklogin')
class CheckLogin(Resource):
    @login_required
    # @cognito_auth_required
    @refresh_token_if_needed
    def get(self):
        session_token = request.cookies.get('session')
        print("session cookie: ",request.cookies.get('session'))
        if not session_token:
            return {"message":"Unauthorized"}, 401
        user_id = session.get('user_id')
        username = session.get('username')
        email = session.get('email')
        # id_token = session.get('id_token')
        if not user_id:
            return {"message": "Invalid session token. Not logged in."}, 401
        return {"message": "User is logged in.", "user_id": user_id,"username":username, "email": email}, 200

