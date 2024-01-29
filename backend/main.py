from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import comments
import os

app = FastAPI()

app.include_router(comments.router, tags=["Comments"])

CORS_HOST = os.environ.get("CORS_HOST")
if not CORS_HOST:
    origins = (["http://localhost:5173", "http://www.badingo.net"],)
else:
    origins = [CORS_HOST]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "ROOT PATH PORTFOLIO"}
