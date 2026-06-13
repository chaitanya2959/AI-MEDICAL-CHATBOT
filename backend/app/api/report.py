from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
import shutil
import os
from app.database.models import ReportHistory
from app.ai.report_engine import extract_pdf_text
from app.ai.report_analyzer import analyze_medical_report

from app.database.db import SessionLocal
from app.database.models import MedicalReport

router = APIRouter()

os.makedirs("uploads/reports", exist_ok=True)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/report")
async def report_analysis(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    if not file.filename.lower().endswith(".pdf"):
        return {
            "status": "error",
            "message": "Only PDF reports are allowed"
        }

    file_path = f"uploads/reports/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    report_text = extract_pdf_text(file_path)

    if not report_text.strip():
        return {
            "status": "error",
            "message": "No readable text found in PDF"
        }

    analysis = analyze_medical_report(
        report_text[:5000]
    )

    report_record = ReportHistory(
        filename=file.filename,
        extracted_text=report_text[:5000]
    )

    db.add(report_record)
    db.commit()

    report = MedicalReport(
        filename=file.filename,
        report_text=report_text,
        analysis=analysis
    )

    db.add(report)
    db.commit()
    db.refresh(report)

    return {
        "status": "success",
        "report_id": report.id,
        "filename": file.filename,
        "analysis": analysis
    }


@router.get("/reports")
def get_reports(
    db: Session = Depends(get_db)
):

    reports = db.query(
        MedicalReport
    ).all()

    return reports