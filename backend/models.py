from pydantic import BaseModel
from datetime import datetime


class Error(BaseModel):
    message: str


class CommentIn(BaseModel):
    name: str
    email: str
    comments: str


class CommentOut(BaseModel):
    id: int
    name: str
    email: str
    comments: str
    submit_time: datetime
