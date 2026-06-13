from groq import Groq
import os

from app.rag.retriever import (
    retrieve_medical_context
)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def medical_chat(prompt):

    medical_context = retrieve_medical_context(
        prompt
    )

    final_prompt = f"""
Medical Knowledge:

{medical_context}

User Question:

{prompt}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": """
You are an advanced AI Medical Assistant.

Use provided medical knowledge.

Never diagnose diseases.

Never prescribe medicines.

Provide educational information only.
"""
            },
            {
                "role": "user",
                "content": final_prompt
            }
        ]
    )

    return response.choices[0].message.content