from flask_restx import Api, Resource, Namespace, fields
from flask import Flask, jsonify, render_template, request
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from models import User, Lesson, UserLesson
from exts import db
from functools import wraps




lessons_ns = Namespace('lessons', description='Lessons API namespace.')

########################## MODELS ############################
user_model = lessons_ns.model('User_stats', {
    'id': fields.Integer(description='The user ID'),
    'username': fields.String(required=True, description='The user username'),
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(description='The user password'),
    'preferences': fields.Raw(description='User specific preferences in JSON format')
})

# Models for API documentation
lesson_model = lessons_ns.model('Lesson', {
    'id': fields.Integer,
    'title': fields.String,
    'description': fields.String,
    'keys': fields.String,
    'words': fields.String,
    'difficulty': fields.String,
    'average_time': fields.Float,
    'success_rate': fields.Float,
    'content': fields.String
})

lesson_completion_model = lessons_ns.model('LessonCompletion', {
    'lesson_id': fields.Integer(required=True, description='The lesson ID'),
    'score': fields.Integer(required=True, description='The score'),
    'completion_time': fields.Float(required=True, description='Time taken to complete the lesson'),
    'accuracy': fields.Float(required=True, description='Accuracy percentage'),
    'attempts': fields.Integer(required=True, description='Number of attempts'),
    'errors': fields.Integer(required=True, description='Number of errors')
})

########################### Functions ################################

def payment_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user_id = current_cognito_jwt['sub']  # Assuming 'sub' is the user ID in JWT
        user = User.query.filter_by(cognito_id=user_id).first()

        if user and user.has_paid:
            return f(*args, **kwargs)
        return jsonify({"message": "Payment required to access this resource."}), 402

    return decorated_function

######################### APIs ###############################


@lessons_ns.route('/dashboard')
class Dashboard(Resource):

    @lessons_ns.marshal_with(user_model)
    @lessons_ns.expect(user_model)
    def get(self):
        pass



# API endpoints
@lessons_ns.route('/all')
class LessonList(Resource):
    @lessons_ns.marshal_list_with(lesson_model)
    def get(self):
        """Get all lessons"""
        lessons = Lesson.query.all()
        return lessons

@lessons_ns.route('/<int:id>')
class LessonDetail(Resource):
    @lessons_ns.marshal_with(lesson_model)
    def get(self, id):
        """Get a lesson by its ID"""
        lesson = Lesson.query.get_or_404(id)
        return lesson

@lessons_ns.route('/user_lesson')
class UserLessonCreate(Resource):
    @lessons_ns.expect(lesson_completion_model)
    @cognito_auth_required
    # @payment_required
    def post(self):
        """Create a new user lesson"""
        data = request.get_json()
        user_id = data.get('user_id')
        lesson_id = data.get('lesson_id')
        completed = data.get('completed', False)
        score = data.get('score', 0)
        completed_at = data.get('completed_at')

        user = User.query.get_or_404(user_id)
        lesson = Lesson.query.get_or_404(lesson_id)

        user_lesson = UserLesson(
            user_id=user.id,
            lesson_id=lesson.id,
            completed=completed,
            score=score,
            completed_at=completed_at
        )
        db.session.add(user_lesson)
        db.session.commit()

        return {'message': 'User lesson created successfully'}, 201


