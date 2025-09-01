from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from ..config.database import Base
from bleach import clean

class Question(Base):
    __tablename__ = "questions"
    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey("quizzes.id"))
    question_text = Column(Text)
    answer = Column(Text)

    quiz = relationship("Quiz")

    def sanitize(self):
        self.question_text = clean(self.question_text, strip=True)
        self.answer = clean(self.answer, strip=True)
