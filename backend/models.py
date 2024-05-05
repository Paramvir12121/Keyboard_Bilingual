from datetime import datetime
from exts import db



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cognito_id = db.Column(db.String)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128))
    preferences = db.Column(db.JSON)  # Using JSON type for preferences
    
    
    todos = db.relationship('Todo', backref='user', lazy=True)
    # sessions = db.relationship('Session', backref='user', lazy=True)
    pomodoro_sessions = db.relationship('PomodoroSession', backref='user', lazy=True)

    def __repr__(self):
        return f"<User {self.username} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()



class Todo(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    priority = db.Column(db.String(50))
    status = db.Column(db.String(50), default='pending')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    # due_date = db.Column(db.DateTime)

    def __repr__(self):
        return f"<Todo {self.title} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, title, description, priority):
        self.title=title
        self.description=description
        self.priority=priority

        db.session.commit()