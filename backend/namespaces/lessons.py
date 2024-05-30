from flask_restx import Api, Resource, Namespace, fields
from flask import Flask, jsonify, render_template, request,session
from flask_session import Session
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from models import User, Lesson, UserLesson
from exts import db
from functools import wraps
from datetime import datetime
from werkzeug.exceptions import HTTPException, NotFound, Unauthorized, Forbidden, BadRequest, InternalServerError



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


def handle_errors(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except DecodeError:
            return jsonify({"message": "Invalid token. Please log in again."}), 401
        except ExpiredSignatureError:
            return jsonify({"message": "Token has expired. Please log in again."}), 401
        except Unauthorized:
            return jsonify({"message": "Unauthorized access."}), 401
        except Forbidden:
            return jsonify({"message": "Forbidden access."}), 403
        except NotFound:
            return jsonify({"message": "Resource not found."}), 404
        except BadRequest as e:
            return jsonify({"message": str(e)}), 400
        except InternalServerError:
            return jsonify({"message": "Internal server error."}), 500
        except HTTPException as e:
            return jsonify({"message": e.description}), e.code
        except Exception as e:
            return jsonify({"message": "An unexpected error occurred: " + str(e)}), 500
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
    # @lessons_ns.marshal_list_with(lesson_model)
    @handle_errors
    def get(self):
        """Get all lessons"""
        user_id = session.get("user_id")
        if not user_id:
            print("User Id: ",user_id)
            return {"message":"Not Authorized"},401
        else:
            print(user_id)
            lessons = Lesson.query.all()
            return lessons

@lessons_ns.route('/<int:id>')
class LessonDetail(Resource):
    # @lessons_ns.marshal_with(lesson_model)
    def get(self, id):
        """Get a lesson by its ID"""
        lesson = Lesson.query.get_or_404(id)
        return lesson

@lessons_ns.route('/user_lesson/<int:lesson_id>')
class UserLessonCreate(Resource):
    @lessons_ns.expect(lesson_completion_model)
    @cognito_auth_required
    def post(self, lesson_id):
        """Create a new user lesson"""
        cognito_username= current_cognito_jwt['username']
        print("cognito_username: ", cognito_username)
        data = request.get_json()
        completed = data.get('completed', False)
        score = data.get('score', 0)
        completed_at = data.get('completed_at', datetime.utcnow())

        lesson = Lesson.query.get_or_404(lesson_id)

        user_lesson = UserLesson(
            user_id=cognito_username,
            lesson_id=lesson.id,
            completed=completed,
            score=score,
            completed_at=completed_at
        )
        db.session.add(user_lesson)
        db.session.commit()
        return {'message': 'User lesson created successfully'}, 201

