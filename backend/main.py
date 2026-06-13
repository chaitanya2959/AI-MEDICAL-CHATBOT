from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.db import Base, engine
from app.api.auth import router as auth_router
from app.api.chatbot import router as chatbot_router
from app.api.image import router as image_router
from app.api.report import router as report_router
from app.api.dashboard import router as dashboard_router

app = FastAPI(
    title="AI Medical Chatbot API"
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(chatbot_router)
app.include_router(image_router)
app.include_router(report_router)
app.include_router(dashboard_router)


@app.get("/")
def home():

    return {
        "message": "AI Medical Chatbot API Running"
    }