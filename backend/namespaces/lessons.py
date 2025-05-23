from flask_restx import Api, Resource, Namespace, fields
from flask import Flask, jsonify, render_template, request,session
from flask_session import Session
from flask_cognito import CognitoAuth, cognito_auth_required, current_cognito_jwt
from models import User, Lesson, UserLesson, Setting
from exts import db
from functools import wraps
from datetime import datetime
from werkzeug.exceptions import HTTPException, NotFound, Unauthorized, Forbidden, BadRequest, InternalServerError
from namespaces.auth import login_required

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
    'topic': fields.String,
    'subtopic': fields.String,
    'keyboard_type': fields.String,
    'keys': fields.String,
    'words': fields.String,
    'difficulty': fields.String,
    'average_time': fields.Float,
    'success_rate': fields.Float,
    # 'content': fields.String
})

lesson_completion_model = lessons_ns.model('LessonCompletion', {
    'completed': fields.Boolean(required=True),
    'score': fields.Integer(required=True),
    'completion_time': fields.Float(required=True),
    'accuracy': fields.Float(required=True),
    'attempts': fields.Integer(required=True),
    'errors': fields.Integer(required=True),
    'error_keys': fields.Raw(required=True)  # Assuming error_keys is a dictionary
})
def lesson_to_dict(lesson):
    return {
        'id': lesson.id,
        'title': lesson.title,
        'description': lesson.description,
        'topic': lesson.topic,
        'subtopic': lesson.subtopic,
        'keyboard_type': lesson.keyboard_type,
        'keys': lesson.keys,
        'words': lesson.words,
        'difficulty': lesson.difficulty,
        # 'average_time': lesson.average_time,
        # 'success_rate': lesson.success_rate
    }

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

# def login_required(f):
#     @wraps(f)
#     def decorated_function(*args, **kwargs):
#         user_id = session.get('user_id')
#         if not user_id:
#             return jsonify({"message": "Unauthorized"}), 401
#         return f(*args, **kwargs)
#     return decorated_function

def handle_errors(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except Unauthorized as e:
            print(f"Unauthorized error: {str(e)}")
            return {"message": "Unauthorized access."}, 401
        except Forbidden as e:
            print(f"Forbidden error: {str(e)}")
            return {"message": "Forbidden access."}, 403
        except NotFound as e:
            print(f"Not found error: {str(e)}")
            return {"message": "Resource not found."}, 404
        except BadRequest as e:
            print(f"Bad request error: {str(e)}")
            return {"message": str(e)}, 400
        except InternalServerError as e:
            print(f"Internal server error: {str(e)}")
            return {"message": "Internal server error."}, 500
        except HTTPException as e:
            print(f"HTTP exception: {str(e)}")
            return {"message": e.description}, e.code
        except Exception as e:
            print(f"Unexpected error: {str(e)}")
            # THIS IS WHAT'S HAPPENING:
            # It catches the (dict, int) tuple from the "if not user_id:" block
            # if @login_required doesn't stop it first.
            # Then it tries to return it, but Flask-RESTX expects a JSON serializable object
            # or a Flask Response object from the main function body, not from an exception handler
            # that's trying to re-return what the function already tried to return.
            return {"message": "An unexpected error occurred: " + str(e)}, 500 # This is fine
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
    @login_required
    # @lessons_ns.marshal_list_with(lesson_model)
    @handle_errors
    def get(self):
        """Get all lessons filtered by the user's keyboard layout and return the list of completed lessons."""
        user_id = session.get('user_id')
        if not user_id:
            return {"message": "Unauthorized"}, 401

        # Get the user's learning layout
        user_settings = Setting.query.filter_by(user_id=user_id).first()
        user_learning_layout = user_settings.user_learning_layout

        # Get all lessons for the user's learning layout or for 'all'
        lessons = Lesson.query.filter(
            (Lesson.keyboard_type == user_learning_layout) | 
            (Lesson.keyboard_type == 'all')
        ).all()

        # Get all completed lessons for the user
        user_lessons = UserLesson.query.filter_by(user_id=user_id).all()

        # Create a list of lesson IDs that the user has completed
        completed_lessons = [
            user_lesson.lesson_id for user_lesson in user_lessons 
            if user_lesson.completed and 
            (user_lesson.lesson.keyboard_type == user_learning_layout or user_lesson.lesson.keyboard_type == 'all')
        ]
        #remove deplicates
        completed_lessons = list(set(completed_lessons)) 
        # sort the completed lessons
        completed_lessons.sort()
        # Calculate the completion percentage
        total_lessons = len(lessons)
        completed_count = len(completed_lessons)
        complete_percent = (completed_count / total_lessons) * 100 if total_lessons > 0 else 0
        complete_percent = int(round(complete_percent, 2))

        # # Remove duplicates in case of multiple completions
        # You can return the lessons and completed lessons as needed
        lessons_data = [lesson_to_dict(lesson) for lesson in lessons]
        data = {"lessons": lessons_data, "completed_lessons": completed_lessons, "completion_percentage": complete_percent}
        return data, 200


@lessons_ns.route('/<int:id>')
class LessonDetail(Resource):
    @login_required
    @handle_errors
    @lessons_ns.marshal_with(lesson_model)
    def get(self, id):
        """Get a lesson by its ID"""
        lesson = Lesson.query.get_or_404(id)
        print(lesson)
        return lesson

@lessons_ns.route('/user_lesson/<int:lesson_id>')
class UserLessonCreate(Resource):
    @lessons_ns.expect(lesson_completion_model)
    @login_required
    def post(self, lesson_id):
        """Create a new user lesson"""
        session_token = request.cookies.get('session')
       
        if not session_token:
            return {"message":"Unauthorized"}, 401
        data = request.get_json()
        username = session.get('username')
        completed = data.get('completed', False)
        score = data.get('score', 0)
        completion_time = data.get('completion_time', 0.0)
        accuracy = data.get('accuracy', 0.0)
        attempts = data.get('attempts', 0)
        errors = data.get('errors', 0)
        error_keys = data.get('error_keys', '')

        user_id = session.get('user_id')

        error_keys_str = ','.join([f"{key}:{value}" for key, value in error_keys.items()])
       
        

        user_lesson = UserLesson(
            user_id=user_id,
            lesson_id=lesson_id,
            completed=completed,
            score=score,
            completion_time=completion_time,
            accuracy=accuracy,
            attempts=attempts,
            errors=errors,
            error_keys=error_keys_str
        )
        db.session.add(user_lesson)
        db.session.commit()
        return {'message': 'User lesson created successfully'}, 201
    

@lessons_ns.route('/typingspeed')
class UserLessonTypingSpeed(Resource):
    @login_required
    @handle_errors
    def get(self):
        """Get the user's typing speed"""
        user_id = session.get('user_id')
        if not user_id:
            return {"message": "Unauthorized"}, 401
        
        user_lessons = UserLesson.query.filter_by(user_id=user_id).all()
        typing_speed_list = []
        # A

        # user_settings = Setting.query.filter_by(user_id=user_id).first()
        # typing_speed_goal = user_settings.typing_speed_goal
        
        
        for user_lesson in user_lessons:
            # Check if score and accuracy are not None before rounding
            if user_lesson.score is not None and user_lesson.accuracy is not None:
                user_lesson_score = round(user_lesson.score, 0)
                user_lesson_accuracy = round(user_lesson.accuracy, 0)
                user_error_keys = user_lesson.error_keys.split(',')
                user_lesson_name = user_lesson.lesson.title
                user_completion_time = user_lesson.completion_time
                lesson_id = user_lesson.lesson_id
                
                typing_data = {"score": user_lesson_score, 
                               "accuracy": user_lesson_accuracy,
                               "error_keys": user_error_keys,
                               "lesson": user_lesson_name,
                               "lesson_id": lesson_id,
                               "completion_time": user_completion_time}
                typing_speed_list.append(typing_data)

            else:
                # Handle the case where score or accuracy is None
                user_lesson_score = user_lesson.score
                user_lesson_accuracy = user_lesson.accuracy
                user_error_keys = user_lesson.error_keys.split(',')
                user_lesson_name = user_lesson.lesson.title
                lesson_id = user_lesson.lesson_id
                user_completion_time = user_lesson.completion_time
                typing_data = {"score": user_lesson_score, 
                               "accuracy": user_lesson_accuracy,
                               "lesson_id": lesson_id,
                               "error_keys": user_error_keys,
                               "lesson": user_lesson_name,
                               }
                typing_speed_list.append(typing_data)

        return typing_speed_list, 200


@lessons_ns.route('/error_keys')
class UserLessonErrorKeys(Resource):
    @login_required
    @handle_errors
    def get(self):
        """Get the user's error keys"""
        user_id = session.get('user_id')
        if not user_id:
            return {"message":"Unauthorized"}, 401
        user_lessons = UserLesson.query.filter_by(user_id=user_id).all()
        error_keys_list = []
        for user_lesson in user_lessons:
            error_keys = user_lesson.error_keys.split(',')
            error_keys_list.append(error_keys)
        return error_keys_list, 200
    
