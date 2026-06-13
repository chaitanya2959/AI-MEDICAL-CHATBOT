from groq import Groq
import os

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def analyze_medical_report(report_text):

    prompt = f"""
You are an AI Medical Report Analyzer.

Analyze the report and provide:

1. Summary
2. Important Findings
3. Abnormal Values
4. Health Risks
5. Recommendations
6. When to consult a doctor

Medical Report:

{report_text}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content