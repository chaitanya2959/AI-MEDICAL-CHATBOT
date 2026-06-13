chat_memory = []

def save_chat(user_message, ai_response):

    chat_memory.append({
        "user": user_message,
        "assistant": ai_response
    })

def get_memory():

    return chat_memory[-5:]