from main import create_app
from config import DevConfig, TestConfig
from exts import db


config_used= TestConfig

app = create_app(TestConfig)



if __name__ == '__main__':
    port = int(TestConfig.PORT)
    with app.app_context():  # Create an application context if not in a request context
        db.create_all()
    app.run(debug=True,host='0.0.0.0', port=port)