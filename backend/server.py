import boto3
from flask import Flask, jsonify, render_template, request, url_for, redirect
from flask_cors import CORS
from flask_restx import Api, Resource, fields, Namespace

from models import Todo, User
from exts import db
from config import DevConfig

from flask_migrate import Migrate

from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from flask_jwt_extended import JWTManager, jwt_required

###################### Forms ###########################

###################### APP ############################
app = Flask(__name__)

config_imported = DevConfig

app.config.from_object(config_imported)

cors = CORS(app, origins='*')
db.init_app(app)


api = Api(app, doc='/docs')
auth_ns = Namespace('auth', description='User Authentication APIs')
api.add_namespace(auth_ns)


migrate = Migrate(app,db)
JWTManager(app)

cognito = CognitoAuth(app)

# Initialize the Cognito client
cognito_client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)


@app.shell_context_processor
def make_shell_context():
    return {
        "db": db,
        "Todo": Todo,
        "User": User,
    }

# model Serializer
todo_model = api.model("Todo",
    {
    'title': fields.String(required=True, description='The title of the todo'),
    'description': fields.String(required=False, description='A description of the todo'),
    'priority': fields.String(required=True, description='The priority of the todo'),
    'status': fields.String(default='pending', description='The status of the todo'),
    'created_at': fields.DateTime(dt_format='rfc822'),
}
)


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
##################### VARIABLES ######################

def sync_users():
    user_pool_id = config_imported.COGNITO_USERPOOL_ID
    cognito_users = get_cognito_users(user_pool_id)
    for cognito_user in cognito_users:
        # email = next(attr['Value'] for attr in cognito_user['Attributes'] if attr['Name'] == 'email')
        email = cognito_user['Username']

        # Check if the user exists locally
        local_user = User.query.filter_by(email=email).first()
        if not local_user:
            # If not, add the user to the local database
            new_user = User(email=email)
            db.session.add(new_user)
    db.session.commit()

###################### ROUTES #########################
@api.route('/')
class HelloResource(Resource):
    def get(self):
        return {'hello': 'world'}
    

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
        










@api.route('/protected')
class ProtectedTest(Resource):
    @cognito_auth_required
    def get(self):
        """TO test if cognito auth is working"""
        return jsonify({'message': 'You have access to this endpoint!'})



@api.route('/todos')
class TodosResource(Resource):

    
    @api.marshal_list_with(todo_model) #To return JSON using serializer
    def get(self):
        """Get all Todos"""
        todos=Todo.query.all()
        return todos
    
    @api.expect(todo_model) #To test on swagger UI
    @api.marshal_with(todo_model) 
    def post(self):
        """Create new Todos"""
        # Get the current Cognito JWT token
        jwt_claims = current_cognito_jwt

        # Extract the user's email or another unique identifier from the claims
        # Adjust this line based on how your Cognito claims are structured
        user_email = jwt_claims['email']
        data = request.get_json()
        new_todo = Todo(
            title=data.get('title'),
            description=data.get('description'),
            priority=data.get('priority'),
            email=user_email
        )
        new_todo.save()
        return new_todo, 201

@api.route('/todo/<int:id>')
class TodoResource(Resource):

    @jwt_required
    @api.marshal_with(todo_model) 
    def get(self,id):
        """Get a todo by id"""
        todo = Todo.query.get_or_404(id)
        return todo, 201
    
    @jwt_required
    @api.expect(todo_model) #To test on swagger UI
    @api.marshal_with(todo_model)
    def put(self,id):
        """Update a todo by id"""
        todo_to_update= Todo.query.get_or_404(id)
        data=request.get_json()
        todo_to_update.update(data.get('title'),data.get('description'),data.get('priority') )
        return todo_to_update
    @jwt_required
    @api.marshal_with(todo_model)
    def delete(self,id):
        """Delete by id"""
        todo_to_delete = Todo.query.get_or_404(id)
        todo_to_delete.delete()
        return todo_to_delete
        








if __name__ == "__main__":
    app.run(debug=True,host='localhost', port=5000)