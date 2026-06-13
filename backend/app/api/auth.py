from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.services.jwt_service import create_access_token

from app.database.db import get_db
from app.database.models import User

from app.database.schemas import (
    UserRegister,
    UserLogin
)

from app.services.auth_service import (
    hash_password,
    verify_password
)

router = APIRouter()


@router.get("/auth-test")
def auth_test():

    return {
        "message": "Authentication API Working"
    }


@router.post("/register")
def register(
    user: UserRegister,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:

        return {
            "status": "failed",
            "message": "Email already registered"
        }

    new_user = User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "status": "success",
        "message": "User registered successfully"
    }


@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    db_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not db_user:

        return {
            "status": "failed",
            "message": "User not found"
        }

    if not verify_password(
        user.password,
        db_user.password
    ):

        return {
            "status": "failed",
            "message": "Invalid password"
        }

    token = create_access_token({
        "sub": user.email
    })

    return {
        "status": "success",
        "access_token": token,
        "token_type": "bearer"
    }