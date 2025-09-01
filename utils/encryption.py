from cryptography.fernet import Fernet
from ..config.settings import settings

cipher = Fernet(settings.SECRET_KEY.encode())

def encrypt_data(data: str) -> str:
    return cipher.encrypt(data.encode()).decode()

def decrypt_data(encrypted: str) -> str:
    return cipher.decrypt(encrypted.encode()).decode()
