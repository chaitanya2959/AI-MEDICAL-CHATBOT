from pydantic import (
    BaseModel,
    EmailStr,
    Field
)


# ==============================
# Chat
# ==============================

class ChatSchema(BaseModel):
    user_message: str
    ai_response: str


# ==============================
# Register
# ==============================

class UserRegister(BaseModel):

    username: str = Field(
        min_length=3,
        max_length=30
    )

    email: EmailStr

    password: str = Field(
        min_length=8
    )


# ==============================
# Login
# ==============================

class UserLogin(BaseModel):

    email: EmailStr

    password: str


# ==============================
# User Response
# ==============================

class UserResponse(BaseModel):

    id: int

    username: str

    email: EmailStr

    class Config:
        from_attributes = True


# ==============================
# JWT Response
# ==============================

class Token(BaseModel):

    status: str

    message: str

    access_token: str

    token_type: str

    user: UserResponse