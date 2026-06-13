from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.database.models import User, ChatHistory

router = APIRouter()

@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):

    total_users = db.query(User).count()

    total_chats = db.query(ChatHistory).count()

    return {
        "total_users": total_users,
        "total_chats": total_chats,
        "total_reports": 0
    }