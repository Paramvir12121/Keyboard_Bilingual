from flask_restx import Api, Resource, Namespace, fields
from models import User
import boto3
from flask import Flask, jsonify, render_template, request, url_for, redirect
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from flask_jwt_extended import JWTManager, jwt_required


auth_ns = Namespace('auth', description='User Authentication APIs namespace')

api.add_namespace(auth_ns)

########################## MODELS #############
# User Model Serializer
user_model = api.model('User', {
    'id': fields.Integer(description='The user ID'),
    'username': fields.String(required=True, description='The user username'),
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(description='The user password'),
    'preferences': fields.Raw(description='User specific preferences in JSON format')
})

login_model = auth_ns.model('Login', {
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(description='The user password'),
})

signup_confirmation_model= auth_ns.model('Singup_Confirmation', {
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
    'email': fields.String(required=True, description='The user email')
})

reset_password_confirmation_model = auth_ns.model('ResetPasswordConfirmation', {
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(required=True, description='New password'),
    'verification_code': fields.String(required=True, description='Verification code sent to email')
})

######################### APIs #############################

@auth_ns.route('/signup')
class SignUp(Resource):

    @api.marshal_with(login_model) # adds swagger documentation ability
    @api.expect(login_model)
    def post(self):
        data = request.get_json()
        app.logger.debug("Received data: %s", data)
        print("Received data:", data)  # Log the received data
        if not data:
            return jsonify({"error": "No data provided"}), 400
        password = str(data.get('password'))
        email = str(data.get('email'))

        client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)
        try:
            response = client.sign_up(
                ClientId=config_imported.COGNITO_CLIENT_ID,
                Username=email,  # Using email as the username
                Password=password,
                UserAttributes=[
                    {'Name': 'email', 'Value': email},
                    # {'Name': 'short_username', 'Value': username}  # Verify the email by default
                ],
            )
            print("Signup Response: ", response)
            return response, 200
        except cognito_client.exceptions.ClientError as e:
            print("Exception Triggered")
            return jsonify(error=str(e)), 400

@auth_ns.route('/signup_resend_code')
class SignupResendCode(Resource):
    @api.marshal_with(reset_password_request_model) # adds swagger documentation ability
    @api.expect(reset_password_request_model)
    def post(self):
        data = request.get_json()
        app.logger.debug("Received data: %s", data)
        print("Received data:", data)  # Log the received data
        if not data:
            return jsonify({"error": "No data provided"}), 400
        email = str(data.get('email'))
        client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)
        response = client.resend_confirmation_code(
                ClientId=config_imported.COGNITO_CLIENT_ID,
                Username=email,
                )
        return response, 200
        

@auth_ns.route('/signup_confirmation')
class SignupConfirmation(Resource):
    @api.marshal_with(signup_confirmation_model) # adds swagger documentation ability
    @api.expect(signup_confirmation_model)
    def post(self):
        data = request.get_json()
        app.logger.debug("Received data: %s", data)
        print("Received data:", data)  # Log the received data
        if not data:
            return jsonify({"error": "No data provided"}), 400
        email = str(data.get('email'))
        verification_code = str(data.get('verification_code'))
        client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)
        try:
            # Confirm the user's signup in Cognito
            client.confirm_sign_up(
                ClientId=config_imported.COGNITO_CLIENT_ID,
                Username=email,
                ConfirmationCode=verification_code,
            )
            # Save the user to the database after successful confirmation
            user = User(email=email)
            user.save()
            return {'message': 'Email confirmed and user saved.'}, 200
        except client.exceptions.ClientError as e:
            return {'error': str(e)}, 400
        

@auth_ns.route('/login')
class Login(Resource):
    
    @api.marshal_with(login_model)
    @api.expect(login_model)
    def post(self):
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)
        try:
            # Making the call to AWS Cognito
            response = client.initiate_auth(
                ClientId=config_imported.COGNITO_CLIENT_ID,
                AuthFlow='USER_PASSWORD_AUTH',
                AuthParameters={
                    'USERNAME': email,
                    'PASSWORD': password
                }
            )
            # print(response)
            # If the login is successful, Cognito responds with tokens
            # access_token=response['AuthenticationResult']['AccessToken']
            
            # refresh_token=response['AuthenticationResult']['RefreshToken']
            return jsonify({
                'message': 'Login successful',
                'access_token': response['AuthenticationResult']['AccessToken'],
                'refresh_token': response['AuthenticationResult']['RefreshToken'],
                'id_token': response['AuthenticationResult']['IdToken']
            }), 200

        except client.exceptions.NotAuthorizedException:
            return {'message': 'Username or password is incorrect'}, 401
        except client.exceptions.UserNotFoundException:
            return {'message': 'User does not exist'}, 404
        except Exception as e:
            return {'message': str(e)}, 400


@auth_ns.route('/reset_forgotten_password_request')
class ResetForgottenPasswordRequest(Resource):

    @api.marshal_with(reset_password_request_model)
    @api.expect(reset_password_request_model)
    def post(self):
        data = request.get_json()
        email = data.get('email')
        client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)
        try:
            response = client.forgot_password(
            ClientId=config_imported.COGNITO_CLIENT_ID,
            Username=email,
            )
            return response, 201
        except client.exceptions.UserNotFoundException:
            return {'message': 'User not found'}, 404
        except client.exceptions.InvalidParameterException as e:
            return {'message': str(e)}, 400
        except client.exceptions.ClientError as e:
            return {'message': f'Unexpected error occurred: {e.response["Error"]["Message"]}'}, 500

@auth_ns.route('/reset_forgotten_password_Conformation')
class ResetForgottenPasswordConfirmation(Resource):

    @api.marshal_with(reset_password_confirmation_model)
    @api.expect(reset_password_confirmation_model)
    def post(self):
        data = request.get_json()
        email= data.get('email')
        password = data.get('password')
        verification_code = str(data.get('verification_code'))
        client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)
        try:
            response = client.confirm_forgot_password(
                ClientId=config_imported.COGNITO_CLIENT_ID,
                Username=email,
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
        client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return {'message': 'Authorization header missing'}, 401

        access_token = auth_header.split()[1]  # 'Bearer <token>'

        try:
            response = client.global_sign_out(
            AccessToken=access_token  
            )
            return jsonify({'message': 'Sucessfully logged out'})
        except cognito_client.exceptions.NotAuthorizedException:
            return {'message': 'Not authorized or already logged out'}, 401

        except Exception as e:
            return {'message': f'Error during logout: {str(e)}'}, 500
        
