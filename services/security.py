from bleach import clean
from ..utils.validators import validate_input
import secrets

def sanitize_html(text: str) -> str:
    return clean(text, strip=True)

def generate_csrf_token() -> str:
    return secrets.token_urlsafe(32)

def validate_csrf_token(token: str, session_token: str) -> bool:
    return secrets.compare_digest(token, session_token)
