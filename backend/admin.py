# admin.py
from flask import Blueprint, render_template, request, redirect, url_for
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


def view_lessons():
    lessons = Lesson.query.all()
    return render_template('admin/lessons.html', lessons=lessons)

# Add a new lesson
@admin_bp.route('/add_lesson', methods=['GET', 'POST'])
def add_lesson():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        content = request.form['content']
        new_lesson = Lesson(title=title, description=description, content=content)
        db.session.add(new_lesson)
        db.session.commit()
        return redirect(url_for('admin.view_lessons'))
    return render_template('admin/add_lesson.html')

# Delete a lesson
@admin_bp.route('/delete_lesson/<int:id>', methods=['POST'])
def delete_lesson(id):
    # lesson = Lesson.query.get(id)
    # if lesson:
    #     db.session.delete(lesson)
    #     db.session.commit()
    # return redirect(url_for('admin.view_lessons'))
    pass