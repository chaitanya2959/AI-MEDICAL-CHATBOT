import fitz
from pdf2image import convert_from_path
import easyocr
import os


def extract_pdf_text(pdf_path):

    text = ""

    # Step 1: Try normal PDF text extraction
    try:
        doc = fitz.open(pdf_path)

        for page in doc:
            text += page.get_text()

        doc.close()

        if len(text.strip()) > 50:
            return text

    except Exception as e:
        print("PDF Text Extraction Error:", e)

    # Step 2: OCR for scanned/image PDFs
    print("Using OCR...")

    os.makedirs("uploads/report_images", exist_ok=True)

    images = convert_from_path(pdf_path)

    reader = easyocr.Reader(['en'])

    ocr_text = ""

    for i, image in enumerate(images):

        image_path = f"uploads/report_images/page_{i+1}.png"

        image.save(image_path)

        result = reader.readtext(
            image_path,
            detail=0
        )

        ocr_text += "\n".join(result)
        ocr_text += "\n\n"

    return ocr_text