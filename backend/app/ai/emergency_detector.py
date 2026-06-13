EMERGENCY_KEYWORDS = [
    "chest pain",
    "difficulty breathing",
    "heart attack",
    "stroke",
    "unconscious",
    "heavy bleeding"
]

def is_emergency(text):
    text = text.lower()

    for keyword in EMERGENCY_KEYWORDS:
        if keyword in text:
            return True

    return False