from fastapi import APIRouter, Depends, Header
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.ai.llm_engine import medical_chat
from app.ai.emergency_detector import is_emergency
from app.ai.memory_engine import save_chat, get_memory

from app.database.db import get_db
from app.database.models import ChatHistory

from app.services.jwt_service import verify_token

router = APIRouter()


class ChatRequest(BaseModel):
    email: str
    message: str


@router.post("/chat")
def chat(
    data: ChatRequest,
    authorization: str = Header(None),
    db: Session = Depends(get_db)
):
    
    # Default user
    user_email = "guest"

    # Get email from JWT token
    if authorization:

        token = authorization.replace(
            "Bearer ",
            ""
        )

        payload = verify_token(token)

        if payload:

            user_email = payload.get(
                "sub",
                "guest"
            )

    # Load memory
    memory = get_memory()

    context = ""

    for item in memory:

        context += f"""
User: {item['user']}
Assistant: {item['assistant']}
"""

    # Build prompt
    prompt = f"""
Previous Conversation:

{context}

Current User Message:

{data.message}
"""

    # Generate AI response
    answer = medical_chat(prompt)

    # Emergency detection
    if is_emergency(data.message):

        answer = (
            "🚨 SEEK IMMEDIATE MEDICAL HELP.\n\n"
            + answer
        )

    # Save memory
    save_chat(
        data.message,
        answer
    )

    # Save to database
    chat_record = ChatHistory(
        user_email=data.email,
        user_message=data.message,
        ai_response=answer
    )

    db.add(chat_record)
    db.commit()

    return {
        "status": "success",
        "user": user_email,
        "response": answer
    }


@router.get("/history")
def get_chat_history(
    authorization: str = Header(None),
    db: Session = Depends(get_db)
):

    user_email = "guest"

    if authorization:

        token = authorization.replace(
            "Bearer ",
            ""
        )

        payload = verify_token(token)

        if payload:

            user_email = payload.get(
                "sub",
                "guest"
            )

    chats = db.query(ChatHistory).filter(
        ChatHistory.user_email == user_email
    ).all()

    result = []

    for chat in chats:

        result.append({
            "id": chat.id,
            "user_email": chat.user_email,
            "user_message": chat.user_message,
            "ai_response": chat.ai_response
        })

    return {
        "user": user_email,
        "total_chats": len(result),
        "history": result
    }