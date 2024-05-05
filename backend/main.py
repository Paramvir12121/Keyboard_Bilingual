import boto3
from flask import Flask, jsonify
from flask_cors import CORS
from flask_restx import Api, Resource, Namespace

from models import User
from exts import db
from config import DevConfig

from flask_migrate import Migrate

from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from namespaces.auth import auth_ns



###################### Settings ###########################
config_imported=DevConfig


###################### APP ############################
def create_app(config_to_use):

    app = Flask(__name__)


    app.config.from_object(config_to_use)

    cors = CORS(app, origins='*')
    db.init_app(app)

    api = Api(app, doc='/docs')
    api.add_namespace(auth_ns)
    migrate = Migrate(app,db)
    # JWTManager(app)

    cognito = CognitoAuth(app)
    
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "User": User,
        }
    return app



# Initialize the Cognito client
cognito_client = boto3.client('cognito-idp', region_name=config_imported.COGNITO_REGION)








###################### ROUTES #########################
# @api.route('/')
# class HelloResource(Resource):
#     def get(self):
#         return {'hello': 'world'}
    

# @api.route('/protected')
# class ProtectedTest(Resource):
#     @cognito_auth_required
#     def get(self):
#         """TO test if cognito auth is working"""
#         return jsonify({'message': 'You have access to this endpoint!'})


        








# if __name__ == "__main__":
#     app.run(debug=True,host='localhost', port=5000)