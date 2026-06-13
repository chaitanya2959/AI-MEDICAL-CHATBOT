from fastapi import APIRouter, UploadFile, File
import shutil

from app.ai.speech_engine import speech_to_text
from app.ai.llm_engine import medical_chat

router = APIRouter()

@router.post("/voice")
async def voice_chat(audio: UploadFile = File(...)):

    file_path = f"uploads/audio/{audio.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(audio.file, buffer)

    text = speech_to_text(file_path)

    answer = medical_chat(text)

    return {
        "transcription": text,
        "response": answer
    }