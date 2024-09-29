from decouple import config
from exts import db
import os
from datetime import timedelta

from dotenv import load_dotenv


load_dotenv()

BASE_DIR = os.path.dirname(os.path.realpath(__file__))


class Config:
    SECRET_KEY = config('SECRET_KEY', default='secret')
    STRIPE_API_KEY = config('STRIPE_API_KEY')

class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI = config('DATABASE_URI', default="sqlite:///dev.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool, default=False)
    SESSION_TYPE = 'sqlalchemy'
    SESSION_SQLALCHEMY = db
    SESSION_SQLALCHEMY_TABLE = 'sessions'
    DEBUG = config('DEBUG', cast=bool, default=True)
    SQLALCHEMY_ECHO = config('SQLALCHEMY_ECHO', cast=bool, default=False)
    COGNITO_CLIENT_SECRET=config('COGNITO_CLIENT_SECRET')
    COGNITO_REGION = config('COGNITO_REGION')
    COGNITO_USERPOOL_ID = config('USER_POOL_ID')
    COGNITO_CLIENT_ID = config('COGNITO_CLIENT_ID')
    COGNITO_DOMAIN = config('COGNITO_DOMAIN')
    
class TestConfig(Config):
    DEBUG = config('DEBUG', cast=bool, default=True)
    SQLALCHEMY_ECHO = config('SQLALCHEMY_ECHO', cast=bool, default=False)
    SQLALCHEMY_DATABASE_URI = config('SUPABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool, default=False)

    # Cognito settings
    COGNITO_CLIENT_SECRET = config('COGNITO_CLIENT_SECRET')
    COGNITO_REGION = config('COGNITO_REGION')
    COGNITO_USERPOOL_ID = config('USER_POOL_ID')
    COGNITO_CLIENT_ID = config('COGNITO_CLIENT_ID')
    COGNITO_DOMAIN = config('COGNITO_DOMAIN')

    # Session management
    SESSION_TYPE = 'sqlalchemy'
    SESSION_SQLALCHEMY = db  # This uses the same SQLAlchemy instance for sessions
    SESSION_SQLALCHEMY_TABLE = 'sessions'

    



class ProdConfig(Config):
    # SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///prod.db")
    # DEBUG = os.getenv("DEBUG", False)
    # SQLALCHEMY_ECHO = os.getenv("ECHO", False)
    # SQLALCHEMY_TRACK_MODIFICATIONS = os.getenv("SQLALCHEMY_TRACK_MODIFICATIONS", False)
    pass


