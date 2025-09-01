import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    DATABASE_URL = os.getenv("DATABASE_URL")
    REDIS_URL = os.getenv("REDIS_URL")
    SECRET_KEY = os.getenv("SECRET_KEY")
    CEREBRAS_API_KEY = os.getenv("CEREBRAS_API_KEY")
    SESSION_TIMEOUT_MINUTES = int(os.getenv("SESSION_TIMEOUT_MINUTES", 30))
    RATE_LIMIT_IP = int(os.getenv("RATE_LIMIT_IP", 10))
    RATE_LIMIT_USER = int(os.getenv("RATE_LIMIT_USER", 5))
    RATE_LIMIT_GLOBAL = int(os.getenv("RATE_LIMIT_GLOBAL", 100))
    CLERK_PUBLISHABLE_KEY = os.getenv("CLERK_PUBLISHABLE_KEY")
    CLERK_SECRET_KEY = os.getenv("CLERK_SECRET_KEY")

    if not all([DATABASE_URL, REDIS_URL, SECRET_KEY, CEREBRAS_API_KEY, CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY]):
        raise ValueError("Missing required environment variables")

settings = Settings()
