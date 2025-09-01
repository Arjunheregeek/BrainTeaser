import requests
from ..config.settings import settings
from ..utils.validators import validate_input

def generate_teaser(prompt: str):
    if not validate_input(prompt, max_length=200, allowed_chars=r"[\w\s\?\!\.]"):
        return "Invalid prompt"
    headers = {"Authorization": f"Bearer {settings.CEREBRAS_API_KEY}"}
    response = requests.post("https://api.cerebras.ai/v1/generate", json={"prompt": prompt}, headers=headers)
    if response.status_code == 200:
        return response.json().get("text", "No response")
    return "Error generating teaser"
