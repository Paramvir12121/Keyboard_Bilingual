from main import create_app
from config import DevConfig
from exts import db


if __name__ == '__main__':
    app=create_app(DevConfig)
    with app.app_context():  # Create an application context if not in a request context
        db.create_all()
    app.run(debug=True,host='localhost', port=5000)