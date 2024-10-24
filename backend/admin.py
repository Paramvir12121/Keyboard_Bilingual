# admin.py
from flask import Blueprint, render_template, request, redirect, url_for, session, flash
from werkzeug.security import check_password_hash
from exts import db
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



admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Authenticate admin user
        user = User.query.filter_by(username=username).first()
        if user and user.role == 'admin' and user.check_password(password):
            # Successful login
            session['admin_logged_in'] = True
            session['admin_user_id'] = user.id
            flash('You have successfully logged in as admin.', 'success')
            return redirect(url_for('admin.admin_index'))
        else:
            # Failed login
            flash('Invalid username or password.', 'danger')
            return redirect(url_for('admin.admin_login'))
    return render_template('admin/login.html')

@admin_bp.route('/')
def admin_index():
    return render_template('admin/index.html')

@admin_bp.route('/users')
def view_users():
    users = User.query.all()
    return render_template('admin/users.html', users=users)

@admin_bp.route('/add_user', methods=['GET', 'POST'])
def add_user():
    # if request.method == 'POST':
    #     username = request.form['username']
    #     email = request.form['email']
    #     user = User(username=username, email=email)
    #     db.session.add(user)
    #     db.session.commit()
    #     return redirect(url_for('admin.view_users'))
    # return render_template('admin/add_user.html')
    pass

@admin_bp.route('/edit_user/<int:user_id>', methods=['GET', 'POST'])
def edit_user(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'POST':
        user.username = request.form['username']
        user.email = request.form['email']
        db.session.commit()
        return redirect(url_for('admin.view_users'))
    return render_template('admin/edit_user.html', user=user)

@admin_bp.route('/delete_user/<int:user_id>', methods=['POST'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
    return redirect(url_for('admin.view_users'))


@admin_bp.route('/lessons')
def view_lessons():
    lessons = Lesson.query.all()
    return render_template('admin/lessons.html', lessons=lessons)

# Add a new lesson
@admin_bp.route('/add_lesson', methods=['GET', 'POST'])
def add_lesson():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form.get('description', '')  # Optional field
        keys = request.form['keys']
        words = request.form['words']
        difficulty = request.form['difficulty']
        # average_time = request.form.get('average_time', 0.0)
        # success_rate = request.form.get('success_rate', 0.0)

        new_lesson = Lesson(
            title=title,
            description=description,
            keys=keys,
            words=words,
            difficulty=difficulty,
            # average_time=average_time,
            # success_rate=success_rate
        )
        db.session.add(new_lesson)
        db.session.commit()
        return redirect(url_for('admin.view_lessons'))

    return render_template('admin/add_lesson.html')

# Delete a lesson
@admin_bp.route('/delete_lesson/<int:lesson_id>', methods=['POST'])
def delete_lesson(lesson_id):
    lesson = Lesson.query.get_or_404(lesson_id)
    db.session.delete(lesson)
    db.session.commit()
    return redirect(url_for('admin.view_lessons'))


@admin_bp.route('/update_lesson/<int:lesson_id>', methods=['GET', 'POST'])
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