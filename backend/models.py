from datetime import datetime
from exts import db



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cognito_id = db.Column(db.String)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<User {self.username} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()


class Lesson(db.Model):
    __tablename__ = 'lessons'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<Lesson {self.title} >"

class UserLesson(db.Model):
    __tablename__ = 'user_lessons'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lessons.id'), nullable=False)
    completed = db.Column(db.Boolean, default=False)
    score = db.Column(db.Integer)
    completed_at = db.Column(db.DateTime)

    user = db.relationship('User', backref='user_lessons')
    lesson = db.relationship('Lesson', backref='user_lessons')

    def __repr__(self):
        return f"<{self.username} : lesson {self.title} >"

class Setting(db.Model):
    __tablename__ = 'settings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    setting_name = db.Column(db.String(50), nullable=False)
    setting_value = db.Column(db.String(200), nullable=False)

    user = db.relationship('User', backref='settings')

class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
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