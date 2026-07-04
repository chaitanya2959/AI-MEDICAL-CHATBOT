from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime,
)
from datetime import datetime

from app.database.db import Base


# ==============================
# User
# ==============================

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(
        String(100),
        unique=True,
        nullable=False
    )

    email = Column(
        String(200),
        unique=True,
        nullable=False
    )

    password = Column(
        String(255),
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


# ==============================
# Chat History
# ==============================

class ChatHistory(Base):
    __tablename__ = "chat_history"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_email = Column(
        String(200),
        nullable=False
    )

    user_message = Column(Text)

    ai_response = Column(Text)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


# ==============================
# Medical Reports
# ==============================

class MedicalReport(Base):
    __tablename__ = "medical_reports"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    filename = Column(
        String(255)
    )

    report_text = Column(Text)

    analysis = Column(Text)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


# ==============================
# Report History
# ==============================

class ReportHistory(Base):
    __tablename__ = "report_history"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    filename = Column(
        String(255)
    )

    extracted_text = Column(Text)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )