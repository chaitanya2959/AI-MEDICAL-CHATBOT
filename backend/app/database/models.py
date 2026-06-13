from sqlalchemy import Column, Integer, String, Text
from app.database.db import Base


class ChatHistory(Base):

    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)

    user_email = Column(String(200), nullable=False)

    user_message = Column(Text)

    ai_response = Column(Text)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, nullable=False)
    email = Column(String(200), unique=True, nullable=False)
    password = Column(String(255), nullable=False)


class MedicalReport(Base):
    __tablename__ = "medical_reports"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String(255))
    report_text = Column(Text)
    analysis = Column(Text)

class ReportHistory(Base):

    __tablename__ = "report_history"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String(255))

    extracted_text = Column(Text)