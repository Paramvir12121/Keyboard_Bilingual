from flask_restx import Api, Resource, Namespace, fields, marshal
from models import User
import boto3
from flask import jsonify, request, current_app, make_response
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from exts import db
from main import CORS
import hmac
import hashlib
import base64
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

########################## MODELS #############
login_model = auth_ns.model('Login', {
    # 'email': fields.String(required=True, description='The user email'),
    'password': fields.String(description='The user password'),
    'username': fields.String(required=True, description='The user username'),
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
        client = get_cognito_client()
        client_id = current_app.config['COGNITO_CLIENT_ID']
        client_secret = current_app.config['COGNITO_CLIENT_SECRET']
        secret_hash = get_secret_hash(username, client_id, client_secret)
        print(f"Client ID: {client_id}")
        print(f"Email ID: {email}")
        print(f"Client Secret: {client_secret}")
        print(f"Secret Hash: {secret_hash}")
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
            
            # client.admin_add_user_to_group(
            #     UserPoolId=current_app.config['COGNITO_USER_POOL_ID'],
            #     Username=email,
            #     GroupName='Basic'
            # )
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
            return jsonify({"error": "No data provided"}), 400
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
        email = data.get('email')
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
            print("AWS Cognito Response:", response)

            auth_result = response.get('AuthenticationResult', {})
            id_token = auth_result.get('IdToken')
            access_token = auth_result.get('AccessToken')
            refresh_token = auth_result.get('RefreshToken')
            print("auth_result: ",auth_result)
            if not id_token or not access_token or not refresh_token:
                return {'message': 'Failed to retrieve tokens from Cognito'}, 500

            # Save the user to the local DB if they don't exist
            db_user = User.query.filter_by(username=username).first()
            if not db_user:
                db_user = User(username=username,email=email)
                db_user.save()
            return {
                "id_token": id_token,
                "access_token": access_token,
                "refresh_token": refresh_token,
            }, 200
        except client.exceptions.ClientError as error:
            print("AWS Cognito ClientError:", error)
            return handle_cognito_error(error)
        except Exception as e:
            print("Unexpected error:", e)
            return {'message': 'An unexpected error occurred'}, 500

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
    @cognito_auth_required
    # @auth_ns.expect(logout_model)
    def post(self):
        client = get_cognito_client()
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return {'message': 'Authorization header missing'}, 401
        try:
            access_token = auth_header.split(" ")[1]  # Extract token from header
            response = client.global_sign_out(
                AccessToken=access_token
            )
            if response['ResponseMetadata']['HTTPStatusCode'] == 200:
                return jsonify({'message': 'Successfully logged out'})
            else:
                return jsonify({'message': 'Logout request was sent but received unexpected status code'}), response['ResponseMetadata']['HTTPStatusCode']
        except client.exceptions.ClientError as error:
            return handle_cognito_error(error)
        except Exception as e:
            return {'message': f'Error during logout: {str(e)}'}, 500


@auth_ns.route('/protected')
class Protected(Resource):
    @cognito_auth_required
    def post(self):
        print("protected area accessed!!")
        return make_response(jsonify({"message": "Authorized"}), 200)
