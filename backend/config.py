from decouple import config
import os
from datetime import timedelta

from dotenv import load_dotenv


load_dotenv()

BASE_DIR = os.path.dirname(os.path.realpath(__file__))


class Config:
    SECRET_KEY = config('SECRET_KEY', default='secret')
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool, default=False)
    STRIPE_API_KEY = config('STRIPE_API_KEY')

class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI = config('DATABASE_URI', default="sqlite:///dev.db")
    DEBUG = config('DEBUG', cast=bool, default=True)
    SQLALCHEMY_ECHO = config('SQLALCHEMY_ECHO', cast=bool, default=False)
    COGNITO_REGION = config('COGNITO_REGION')
    COGNITO_USERPOOL_ID = config('USER_POOL_ID')
    COGNITO_CLIENT_ID = config('COGNITO_CLIENT_ID')
    COGNITO_DOMAIN = config('COGNITO_DOMAIN')
    



class ProdConfig(Config):
    # SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///prod.db")
    # DEBUG = os.getenv("DEBUG", False)
    # SQLALCHEMY_ECHO = os.getenv("ECHO", False)
    # SQLALCHEMY_TRACK_MODIFICATIONS = os.getenv("SQLALCHEMY_TRACK_MODIFICATIONS", False)
    pass


class TestConfig(Config):
    # SQLALCHEMY_DATABASE_URI = "sqlite:///test.db"
    # SQLALCHEMY_ECHO = False
    # TESTING = True
    pass