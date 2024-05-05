# admin.py
from flask import Blueprint, render_template

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/')
def admin_index():
    return render_template('admin/index.html')

@admin_bp.route('/users')
def manage_users():
    return render_template('admin/users.html')

# In main.py or run.py, register the blueprint
# from admin import admin_bp
# app.register_blueprint(admin_bp)
