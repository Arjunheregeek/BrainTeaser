import logging

logging.basicConfig(filename="security.log", level=logging.INFO, format="%(asctime)s - %(message)s")

def log_security_event(event: str):
    logging.info(event)
