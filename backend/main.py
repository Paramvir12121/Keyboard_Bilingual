import boto3
from flask import Flask, jsonify
from flask_cors import CORS
from flask_restx import Api, Resource, Namespace
from flask_jwt_extended import JWTManager
from flask_session import Session


from models import User, Lesson, UserLesson
from exts import db

from flask_migrate import Migrate

from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from namespaces.auth import auth_ns
from namespaces.lessons import lessons_ns
from namespaces.payment import payment_ns
from namespaces.settings import settings_ns
# admin support WIP
# from admin import admin_bp


import rollbar
import rollbar.contrib.flask
import os
from flask import got_request_exception


###################### Settings ###########################
def init_rollbar(app,config_to_use):
    rollbar.init(
        # Your Rollbar access token
        access_token=config_to_use.ROLLBAR_TOKEN,
        # Environment settings ('development', 'production', etc.)
        environment='production',
        # Your application version
        root=os.path.dirname(os.path.realpath(__file__)),
        allow_logging_basic_config=False
    )
    
    # Attach Rollbar to Flask’s exception handling
    got_request_exception.connect(rollbar.contrib.flask.report_exception, app)

###################### APP ############################
def create_app(config_to_use):

    app = Flask(__name__)
    app.config.from_object(config_to_use)

    # Critical: Update session config for cross-domain
    app.config.update(
        SESSION_COOKIE_NAME     = "session",
        SESSION_COOKIE_SECURE   = True,
        SESSION_COOKIE_HTTPONLY = True,
        SESSION_COOKIE_SAMESITE = "None",
        SESSION_COOKIE_DOMAIN   = ".keyboard-learner.com",  # <-- key change
        SESSION_PERMANENT       = True,
        PERMANENT_SESSION_LIFETIME = 3600 * 24 * 30,
        SESSION_TYPE            = config_to_use.SESSION_TYPE  # redis, dynamodb, …
    )

    


    allowed_origins = [
        config_to_use.WEBSITE_URL,  # Website URL
        config_to_use.ALLOWED_ORIGIN_PROD,  # Production domain    
        # Add more allowed origins as needed
    ]


    CORS(app, 
         supports_credentials=True, 
         resources={r"/*": {
                "origins": allowed_origins,
                "supports_credentials": True
            }},
         allow_headers=["Content-Type", "Authorization"],
         methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"]
         )
    
    db.init_app(app)
    Session(app)
    app.config['SESSION_TYPE'] = config_to_use.SESSION_TYPE
    init_rollbar(app,config_to_use)

    api = Api(app, doc='/docs')
    api.add_namespace(auth_ns)
    api.add_namespace(lessons_ns)
    api.add_namespace(payment_ns)
    api.add_namespace(settings_ns)
    # app.register_blueprint(admin_bp)
    migrate = Migrate(app,db)
    JWTManager(app)

    # Rollbar test
    # @app.route('/raise-error')
    # def raise_error():
    #     raise Exception('Rollbar test 1')

    # to create the tables
    # with app.app_context():
    #     db.create_all()

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

