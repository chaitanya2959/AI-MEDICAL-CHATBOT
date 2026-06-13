from fastapi import APIRouter, UploadFile, File
import shutil

from app.ai.vision_engine import analyze_medical_image

router = APIRouter()

@router.post("/image")

async def image_analysis(image: UploadFile = File(...)):

    file_path = f"uploads/images/{image.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    result = analyze_medical_image(file_path)

    return {
        "status": "success",
        "filename": image.filename,
        "analysis": result
     }