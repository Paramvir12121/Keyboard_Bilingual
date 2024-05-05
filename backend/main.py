import boto3
from flask import Flask, jsonify
from flask_cors import CORS
from flask_restx import Api, Resource, Namespace

from models import User
from exts import db

from flask_migrate import Migrate

from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from namespaces.auth import auth_ns
from namespaces.lessons import lessons_ns

###################### Settings ###########################



###################### APP ############################
def create_app(config_to_use):

    app = Flask(__name__)


    app.config.from_object(config_to_use)

    cors = CORS(app, origins='*')
    db.init_app(app)

    api = Api(app, doc='/docs')
    api.add_namespace(auth_ns)
    api.add_namespace(lessons_ns)
    migrate = Migrate(app,db)
    # JWTManager(app)

    cognito = CognitoAuth(app)
    cognito_client = boto3.client('cognito-idp', region_name=config_to_use.COGNITO_REGION)
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "User": User,
        }
    return app

