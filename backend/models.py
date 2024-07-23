from datetime import datetime
from exts import db



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cognito_id = db.Column(db.String)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    access_token = db.Column(db.String)
    refresh_token = db.Column(db.String)
    has_paid = db.Column(db.Boolean, default=False)  # New field to track payment status

    def __repr__(self):
        return f"<User {self.username} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update_access(self, access_token, refresh_token):
        self.access_token = access_token
        self.refresh_token = refresh_token
        db.session.commit()




class Lesson(db.Model):
    __tablename__ = 'lessons'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    topic = db.Column(db.String(100), nullable=False)
    subtopic = db.Column(db.String(100), nullable=False)
    keyboard_type = db.Column(db.String(50), nullable=False)  # Keyboard type (e.g., qwerty, dvorak)
    description = db.Column(db.Text)
    keys = db.Column(db.String(50), nullable=False)  # Keys to be practiced (e.g., 'a s d')
    words = db.Column(db.Text, nullable=False)  # Words or phrases using the keys
    difficulty = db.Column(db.String(20), nullable=False, default='easy')  # Difficulty level
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<Lesson {self.title} >"

class UserLesson(db.Model):
    __tablename__ = 'user_lessons'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lessons.id'), nullable=False)
    completed = db.Column(db.Boolean, default=False)
    score = db.Column(db.Integer)
    completion_time = db.Column(db.Float)  # Time taken to complete the lesson in seconds
    accuracy = db.Column(db.Float)  # Accuracy percentage (e.g., 0.95 for 95%)
    attempts = db.Column(db.Integer, default=0)  # Number of attempts
    errors = db.Column(db.Integer, default=0)  # Number of errors
    completed_at = db.Column(db.DateTime)

    user = db.relationship('User', backref='user_lessons')
    lesson = db.relationship('Lesson', backref='user_lessons')

    def __repr__(self):
        return f"<UserLesson {self.user_id} - Lesson {self.lesson_id}>"
    
    def save(self):
        db.session.add(self)
        db.session.commit()

class Setting(db.Model):
    __tablename__ = 'settings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    setting_name = db.Column(db.String(50), nullable=False)
    setting_value = db.Column(db.String(200), nullable=False)

    user = db.relationship('User', backref='settings')

class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    currency = db.Column(db.String(10), nullable=False)
    payment_date = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', backref='payments')

    def __repr__(self):
        return f"<Lesson {self.title} >"



# class Todo(db.Model):
#     id = db.Column(db.Integer(), primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     title = db.Column(db.String(), nullable=False)
#     description = db.Column(db.Text(), nullable=False)
#     priority = db.Column(db.String(50))
#     status = db.Column(db.String(50), default='pending')
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#     # due_date = db.Column(db.DateTime)

#     def __repr__(self):
#         return f"<Todo {self.title} >"
    
#     def save(self):
#         db.session.add(self)
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()

#     def update(self, title, description, priority):
#         self.title=title
#         self.description=description
#         self.priority=priority

#         db.session.commit()