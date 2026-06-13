from pydantic import BaseModel, EmailStr


class ChatSchema(BaseModel):
    user_message: str
    ai_response: str


class UserRegister(BaseModel):
    username: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str