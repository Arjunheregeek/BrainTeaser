import re
from email_validator import validate_email, EmailNotValidError

def validate_input(value: str, max_length: int = 100, allowed_chars: str = r"[\w\s]") -> bool:
    if not value or len(value) > max_length:
        return False
    return bool(re.match(f"^{allowed_chars}*$", value))

def validate_email_address(email: str) -> bool:
    try:
        validate_email(email)
        return True
    except EmailNotValidError:
        return False

def validate_password(password: str) -> bool:
    if len(password) < 8:
        return False
    if not re.search(r"[A-Z]", password) or not re.search(r"[a-z]", password) or not re.search(r"\d", password):
        return False
    return True
