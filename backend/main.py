import boto3
from flask import Flask, jsonify
from flask_cors import CORS
from flask_restx import Api, Resource, Namespace
from flask_jwt_extended import JWTManager

from models import User, Lesson, UserLesson
from exts import db

from flask_migrate import Migrate

from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from namespaces.auth import auth_ns
from namespaces.lessons import lessons_ns
from admin import admin_bp

###################### Settings ###########################



###################### APP ############################
def create_app(config_to_use):

    app = Flask(__name__)


    app.config.from_object(config_to_use)

    CORS(app, supports_credentials=True, origins="*")
    db.init_app(app)

    api = Api(app, doc='/docs')
    api.add_namespace(auth_ns)
    api.add_namespace(lessons_ns)
    app.register_blueprint(admin_bp)
    migrate = Migrate(app,db)
    JWTManager(app)

    cognito = CognitoAuth(app)
    cognito_client = boto3.client('cognito-idp', region_name=config_to_use.COGNITO_REGION)
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "User": User,
            "lessons": Lesson,
        }
    return app

