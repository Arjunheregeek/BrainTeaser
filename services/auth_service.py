from clerk import Clerk
from ..config.settings import settings
from ..utils.logger import log_security_event

# Initialize Clerk client
clerk = Clerk(secret_key=settings.CLERK_SECRET_KEY)

def verify_clerk_token(token: str):
    """
    Verify a Clerk JWT token and return user data if valid.
    """
    try:
        user = clerk.verify_token(token)
        log_security_event(f"Token verified for user: {user.get('id')}")
        return user
    except Exception as e:
        log_security_event(f"Token verification failed: {str(e)}")
        return None

def get_current_user(token: str):
    """
    Get the current user from a session token.
    """
    return verify_clerk_token(token)

def is_authenticated(token: str) -> bool:
    """
    Check if the user is authenticated based on the token.
    """
    user = verify_clerk_token(token)
    return user is not None

def logout_user():
    """
    Handle logout (Clerk handles session invalidation on their end).
    """
    log_security_event("User logged out")
    # Note: Actual logout should redirect to Clerk's logout URL in the app
