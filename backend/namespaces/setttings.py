from flask_restx import Api, Resource, Namespace, fields
from flask import Flask, jsonify, render_template, request,session
from flask_session import Session
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from models import User, Lesson, UserLesson
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
    'setting_name': fields.String,
    'setting_value': fields.String
})