import streamlit as st
from clerk import Clerk
from .config.database import get_db
from .services.rate_limiter import rate_limit
from .services.ai_service import generate_teaser
from .services.security import sanitize_html
from .utils.validators import validate_input
from .utils.logger import log_security_event
from .config.settings import settings

st.set_page_config(page_title="Brain Teaser App", page_icon="🧠")

clerk = Clerk(publishable_key=settings.CLERK_PUBLISHABLE_KEY, secret_key=settings.CLERK_SECRET_KEY)

if "user" not in st.session_state:
    st.session_state.user = None

def login():
    st.title("Login with Clerk")
    if st.button("Sign In"):
        auth_url = clerk.get_sign_in_url()
        st.markdown(f"[Sign In]({auth_url})")
    # Handle callback after login (assume Clerk redirects back)
    token = st.query_params.get("token")
    if token:
        user = clerk.verify_token(token)
        if user:
            st.session_state.user = user
            st.success("Logged in")
        else:
            st.error("Invalid token")

def main_app():
    st.title("Brain Teaser Generator")
    if st.button("Logout"):
        st.session_state.user = None
        st.rerun()
    prompt = st.text_input("Enter a prompt for a brain teaser")
    if st.button("Generate"):
        if not rate_limit(f"user:{st.session_state.user['id']}", 5):
            st.error("Rate limit exceeded")
            return
        teaser = generate_teaser(prompt)
        st.write(sanitize_html(teaser))

if st.session_state.user:
    main_app()
else:
    login()
