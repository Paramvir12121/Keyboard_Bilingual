from flask_restx import Api, Resource, Namespace, fields
from flask import Flask, jsonify, render_template, request,session
from flask_session import Session
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from models import Setting
from exts import db
from functools import wraps
from datetime import datetime
from werkzeug.exceptions import HTTPException, NotFound, Unauthorized, Forbidden, BadRequest, InternalServerError
from namespaces.auth import login_required


# Create a namespace
settings_ns = Namespace('settings', description='Settings API namespace.')


############### Models ################
# Models for API documentation
setting_model = settings_ns.model('Setting', {
    'id': fields.Integer,
    'user_id': fields.Integer,
    'keyboard_layout': fields.String(default='colemak'),
    'font_size': fields.String(default='medium'),

    # Audio feedback
    'key_press_sound': fields.Boolean(default=True),
    'completion_sound': fields.Boolean(default=True),
    'error_sound': fields.Boolean(default=True),
    'background_music_enabled': fields.Boolean(default=True),
    'background_music_volume': fields.Float(default=0.5),
    'background_music_track': fields.String(default=''),

    # Feedback settings
    'show_success_rate': fields.Boolean(default=True),
    'show_average_time': fields.Boolean(default=True),
    'enable_error_heatmap': fields.Boolean(default=True),

    # Advanced learning options
    'typing_speed_goal': fields.Integer(default=50),
    'accuracy_goal': fields.Integer(default=90),
    'custom_lessons': fields.List(fields.String, default=[]),

    # Account management
    # None for now- add change password, delete account, etc.

    # Notifications
    'email_notifications': fields.Boolean(default=True),
    'app_notifications': fields.Boolean(default=True),
    'reminders_enabled': fields.Boolean(default=True),
    'reminders_time': fields.String(default='18:00')
})




########################### Functions ################################


############### Routes ################

@settings_ns.route('/')
class Settings(Resource):
    @settings_ns.marshal_with(setting_model)
    @login_required
    def get(self):
        session_token = request.cookies.get('session')
        print("session cookie: ",request.cookies.get('session'))
        if not session_token:
            return {"message":"Unauthorized"}, 401
        user_id = session.get('user_id')
        username = session.get('username')
        email = session.get('email')
        if not user_id:
            return {"message": "Invalid session token. Not logged in."}, 401
        #search for user settings with user id in db
        settings = Setting.query.filter_by(user_id=user_id).first()
        if not settings:
            #create default settings for user
            settings = Setting(user_id=user_id)
            db.session.add(settings)
            db.session.commit()
            settings = Setting.query.filter_by(user_id=user_id).first()
        return settings,200
    
    @settings_ns.marshal_with(setting_model)
    @settings_ns.expect(setting_model)
    @login_required
    def post(self):
        session_token = request.cookies.get('session')
        if not session_token:
            return {"message": "Unauthorized"}, 401
        
        user_id = session.get('user_id')
        if not user_id:
            return {"message": "Invalid session token. Not logged in."}, 401
        
        data = request.get_json()
        print("data: ",data)
        settings = Setting.query.filter_by(user_id=user_id).first()

        if not settings:
            settings = Setting(user_id=user_id)
            db.session.add(settings)
        settings.update(**data)
        
        return {"message": "Settings updated successfully"}, 200

