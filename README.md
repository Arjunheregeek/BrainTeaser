# Brain Teaser App

A secure Streamlit application for generating brain teasers using AI, with Clerk authentication and Supabase database.

## Features
- User authentication via Clerk
- AI-powered brain teaser generation (Cerebras integration)
- Secure database with Supabase
- Rate limiting and input validation
- Logging for security events

## Setup
1. Clone the repo.
2. Create a virtual environment: `python -m venv venv` and activate it.
3. Install dependencies: `pip install -r requirements.txt`.
4. Set up environment variables in `.env` (copy from `.env.example`).
5. Run the app: `streamlit run app.py`.

## Requirements
- Python 3.8+
- Supabase account
- Clerk account
- Cerebras API key

## License
See LICENSE file.
