from flask_restx import Api, Resource, Namespace, fields
from flask import Flask, jsonify, render_template, request
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
# from ..models import User



lessons_ns = Namespace('lessons', description='Lessons API namespace.')

########################## MODELS ############################
user_model = lessons_ns.model('User_stats', {
    'id': fields.Integer(description='The user ID'),
    'username': fields.String(required=True, description='The user username'),
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(description='The user password'),
    'preferences': fields.Raw(description='User specific preferences in JSON format')
})
######################### APIs ###############################


@lessons_ns.route('/dashboard')
class Dashboard(Resource):

    @lessons_ns.marshal_with(user_model)
    @lessons_ns.expect(user_model)
    def get(self):
        pass