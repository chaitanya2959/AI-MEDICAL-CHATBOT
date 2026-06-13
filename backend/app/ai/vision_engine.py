import base64
from groq import Groq
import os

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def analyze_medical_image(image_path):

    with open(image_path, "rb") as img:
        image_data = base64.b64encode(img.read()).decode("utf-8")

    response = client.chat.completions.create(
        model="meta-llama/llama-4-scout-17b-16e-instruct",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": """
                        Analyze this medical image.
                        Give:
                        1. What you observe
                        2. Possible concerns
                        3. When to consult a doctor
                        4. Mention that this is not a diagnosis
                        """
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{image_data}"
                        }
                    }
                ]
            }
        ]
    )

    return response.choices[0].message.content