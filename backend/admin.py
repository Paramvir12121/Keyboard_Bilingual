from flask import Blueprint, render_template, request, redirect, url_for, session, flash
import boto3
from models import db
from flask import current_app
from models import User, Lesson, UserLesson, Setting, Payment
from functools import wraps


def admin_login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('admin_logged_in'):
            flash('Please log in as admin to access this page.', 'warning')
            return redirect(url_for('admin.admin_login'))
        return f(*args, **kwargs)
    return decorated_function

def get_cognito_client():
    return boto3.client('cognito-idp', region_name=current_app.config['COGNITO_REGION'])

# Function to check if user is in the admin group
def is_user_in_admin_group(username):
    client = get_cognito_client()
    try:
        response = client.admin_list_groups_for_user(
            UserPoolId=current_app.config['COGNITO_USERPOOL_ID'],
            Username=username
        )
        groups = [group['GroupName'] for group in response['Groups']]
        return 'admin' in groups  # Check if 'admin' group exists in the user's groups
    except client.exceptions.ClientError as e:
        print(f"Error checking user groups: {str(e)}")
        return False
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return False


admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        print(f"Attempting login for user: {username}")
        
        # Authenticate with Cognito
        client = get_cognito_client()
        try:
            # AdminInitiateAuth for username and password authentication
            response = client.admin_initiate_auth(
                UserPoolId=current_app.config['COGNITO_USERPOOL_ID'],
                ClientId=current_app.config['COGNITO_CLIENT_ID'],
                AuthFlow='ADMIN_NO_SRP_AUTH',
                AuthParameters={
                    'USERNAME': username,
                    'PASSWORD': password
                }
            )
            print(f"Cognito authentication successful for user: {username}")
            
            # Retrieve tokens
            access_token = response['AuthenticationResult']['AccessToken']
            id_token = response['AuthenticationResult']['IdToken']
            
            # Store session data
            session['admin_logged_in'] = True
            session['admin_user_id'] = username  # Store username
            session['admin_access_token'] = access_token  # Store access token
            
            flash('You have successfully logged in.', 'success')
            return redirect(url_for('admin.admin_index'))
                
        except client.exceptions.NotAuthorizedException:
            print(f"NotAuthorizedException: Invalid username or password for {username}.")
            flash('Invalid username or password.', 'danger')
        except client.exceptions.UserNotFoundException:
            print(f"UserNotFoundException: User {username} does not exist.")
            flash('User does not exist.', 'danger')
        except Exception as e:
            print(f"An unexpected error occurred during login: {str(e)}")
            flash(f"An error occurred: {str(e)}", 'danger')
        
        return redirect(url_for('admin.admin_login'))
    
    return render_template('admin/login.html')




@admin_bp.route('/')
# @admin_login_required
def admin_index():
    users_count = User.query.count()
    lessons_count = Lesson.query.count()
    recent_users = User.query.order_by(User.created_at.desc()).limit(5).all()  # Example to show the 5 most recent users
    
    return render_template('admin/index.html', users_count=users_count, lessons_count=lessons_count, recent_users=recent_users)


@admin_bp.route('/users')
# @admin_login_required
def view_users():
    users = User.query.all()
    return render_template('admin/users.html', users=users)

@admin_bp.route('/add_user', methods=['GET', 'POST'])
# @admin_login_required
def add_user():
    pass

@admin_bp.route('/edit_user/<int:user_id>', methods=['GET', 'POST'])
# @admin_login_required
def edit_user(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'POST':
        user.username = request.form['username']
        user.email = request.form['email']
        db.session.commit()
        return redirect(url_for('admin.view_users'))
    return render_template('admin/edit_user.html', user=user)

@admin_bp.route('/delete_user/<int:user_id>', methods=['POST'])
# @admin_login_required
def delete_user(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
    return redirect(url_for('admin.view_users'))

@admin_bp.route('/lessons')
# @admin_login_required
def view_lessons():
    lessons = Lesson.query.all()
    return render_template('admin/lessons.html', lessons=lessons)

@admin_bp.route('/add_lesson', methods=['GET', 'POST'])
# @admin_login_required
def add_lesson():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form.get('description', '')  # Optional field
        keys = request.form['keys']
        words = request.form['words']
        difficulty = request.form['difficulty']

        new_lesson = Lesson(
            title=title,
            description=description,
            keys=keys,
            words=words,
            difficulty=difficulty,
        )
        db.session.add(new_lesson)
        db.session.commit()
        return redirect(url_for('admin.view_lessons'))

    return render_template('admin/add_lesson.html')

@admin_bp.route('/delete_lesson/<int:lesson_id>', methods=['POST'])
# @admin_login_required
def delete_lesson(lesson_id):
    lesson = Lesson.query.get_or_404(lesson_id)
    db.session.delete(lesson)
    db.session.commit()
    return redirect(url_for('admin.view_lessons'))

@admin_bp.route('/update_lesson/<int:lesson_id>', methods=['GET', 'POST'])
# @admin_login_required
def update_lesson(lesson_id):
    lesson = Lesson.query.get_or_404(lesson_id)
    if request.method == 'POST':
        lesson.title = request.form['title']
        lesson.description = request.form.get('description', '')  # Optional field
        lesson.keys = request.form['keys']
        lesson.words = request.form['words']
        lesson.difficulty = request.form['difficulty']
        lesson.average_time = request.form.get('average_time', 0.0)
        lesson.success_rate = request.form.get('success_rate', 0.0)
        db.session.commit()
        return redirect(url_for('admin.view_lessons'))
    return render_template('admin/add_lesson.html', lesson=lesson)
