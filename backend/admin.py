# admin.py
from flask import Blueprint, render_template
from exts import db
from models import User, Lesson, UserLesson, Setting, Payment


admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

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


@admin_bp.route('/lessons')
def view_lessons():
    lessons = Lesson.query.all()
    return render_template('admin/lessons.html', lessons=lessons)


