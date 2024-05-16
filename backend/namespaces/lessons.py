from flask_restx import Api, Resource, Namespace, fields
from flask import Flask, jsonify, render_template, request
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from models import User, Lesson, UserLesson
from exts import db




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

# Models for API documentation
lesson_model = lessons_ns.model('Lesson', {
    'id': fields.Integer(readonly=True),
    'title': fields.String(required=True, description='The lesson title'),
    'description': fields.String(description='The lesson description'),
    'content': fields.String(required=True, description='The lesson content'),
    'created_at': fields.DateTime,
    'updated_at': fields.DateTime,
})

user_lesson_model = lessons_ns.model('UserLesson', {
    'user_id': fields.Integer(required=True, description='The user ID'),
    'lesson_id': fields.Integer(required=True, description='The lesson ID'),
    'completed': fields.Boolean(description='Completion status'),
    'score': fields.Integer(description='The score'),
    'completed_at': fields.DateTime(description='Completion time'),
})

# API endpoints
@lessons_ns.route('/')
class LessonList(Resource):
    @lessons_ns.marshal_list_with(lesson_model)
    def get(self):
        """Get all lessons"""
        # lessons = Lesson.query.all()
        # return lessons
        pass

@lessons_ns.route('/<int:id>')
class LessonDetail(Resource):
    @lessons_ns.marshal_with(lesson_model)
    def get(self, id):
        """Get a lesson by its ID"""
        lesson = Lesson.query.get_or_404(id)
        return lesson

@lessons_ns.route('/user_lesson')
class UserLessonCreate(Resource):
    @lessons_ns.expect(user_lesson_model)
    @cognito_auth_required
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


