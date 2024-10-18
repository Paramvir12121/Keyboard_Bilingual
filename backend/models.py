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
    # role = db.Column(db.String(50), default='user')
  


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
    #lesson_number = db.Column(db.Integer, nullable=False)  # Lesson number in the course
    # course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    description = db.Column(db.Text)
    keys = db.Column(db.String(50), nullable=False)  # Keys to be practiced (e.g., 'a s d')
    words = db.Column(db.Text, nullable=False)  # Words or phrases using the keys
    difficulty = db.Column(db.String(20), nullable=False, default='easy')  # Difficulty level
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    # final_lesson = db.Column(db.Boolean, default=False)  # Final lesson in the course

    def __repr__(self):
        return f"<Lesson {self.title} >"

class UserLesson(db.Model):
    __tablename__ = 'user_lessons'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lessons.id'), nullable=False)
    completed = db.Column(db.Boolean, default=False)
    score = db.Column(db.Integer)
    # wpm = db.Column(db.Float)  # Words per minute
    completion_time = db.Column(db.Float)  # Time taken to complete the lesson in seconds
    accuracy = db.Column(db.Float)  # Accuracy percentage (e.g., 0.95 for 95%)
    attempts = db.Column(db.Integer, default=0)  # Number of attempts
    errors = db.Column(db.Integer, default=0)  # Number of errors
    completed_at = db.Column(db.DateTime,default=datetime.utcnow)  # Date and time of completion
    error_keys = db.Column(db.String(200))  # Keys with errors
    user_learning_layout = db.Column(db.String(50))


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
    user_learning_layout = db.Column(db.String(50), default='qwerty')
    keyboard_layout = db.Column(db.String(50), default='colemak')
    font_size = db.Column(db.String(50), default='medium')
    show_keyboard = db.Column(db.Boolean, default=True)
    
    # Audio feedback
    key_press_sound = db.Column(db.Boolean, default=True)
    completion_sound = db.Column(db.Boolean, default=True)
    error_sound = db.Column(db.Boolean, default=True)
    background_music_enabled = db.Column(db.Boolean, default=True)
    background_music_volume = db.Column(db.Float, default=0.5)
    background_music_track = db.Column(db.String(200), default='')

    # Feedback settings
    show_success_rate = db.Column(db.Boolean, default=True)
    show_average_time = db.Column(db.Boolean, default=True)
    enable_error_heatmap = db.Column(db.Boolean, default=True)

    # Advanced learning options
    typing_speed_goal = db.Column(db.Integer, default=50)
    accuracy_goal = db.Column(db.Integer, default=90)
    custom_lessons = db.Column(db.PickleType, default=[])
    # Notifications
    email_notifications = db.Column(db.Boolean, default=True)
    app_notifications = db.Column(db.Boolean, default=True)
    reminders_enabled = db.Column(db.Boolean, default=True)
    reminders_time = db.Column(db.String(50), default='18:00')

    user = db.relationship('User', backref='settings')

    def __repr__(self):
        return f"<Settings {self.id} >"    
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self,id,user_id,show_keyboard,user_learning_layout,keyboard_layout, font_size, key_press_sound, completion_sound, error_sound, background_music_enabled, background_music_volume, background_music_track, show_success_rate, show_average_time, enable_error_heatmap, typing_speed_goal, accuracy_goal, custom_lessons, email_notifications, app_notifications, reminders_enabled, reminders_time):
        self.keyboard_layout = keyboard_layout
        self.user_learning_layout = user_learning_layout
        self.font_size = font_size
        self.key_press_sound = key_press_sound
        self.completion_sound = completion_sound
        self.error_sound = error_sound
        self.background_music_enabled = background_music_enabled
        self.background_music_volume = background_music_volume
        self.background_music_track = background_music_track
        self.show_success_rate = show_success_rate
        self.show_average_time = show_average_time
        self.enable_error_heatmap = enable_error_heatmap
        self.typing_speed_goal = typing_speed_goal
        self.accuracy_goal = accuracy_goal
        self.custom_lessons = custom_lessons
        self.email_notifications = email_notifications
        self.app_notifications = app_notifications
        self.reminders_enabled = reminders_enabled
        self.reminders_time = reminders_time
        self.show_keyboard = show_keyboard
        

    #     db.session.commit()


class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    currency = db.Column(db.String(10), nullable=False)
    payment_date = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', backref='payments')

    def __repr__(self):
        return f"<Payment {self.id} by User {self.user_id}>"

    