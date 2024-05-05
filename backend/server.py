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




###################### Settings ###########################
config_imported=DevConfig


###################### APP ############################
def create_app(config_to_use):

    app = Flask(__name__)


    app.config.from_object(config_to_use)

    cors = CORS(app, origins='*')
    db.init_app(app)

    api = Api(app, doc='/docs')
    migrate = Migrate(app,db)
    JWTManager(app)

    cognito = CognitoAuth(app)
    
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "Todo": Todo,
            "User": User,
        }
    return app

create_app(config_imported)

# Initialize the Cognito client
cognito_client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)



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