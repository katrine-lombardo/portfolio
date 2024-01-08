from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

CORS_HOST = os.environ.get("CORS_HOST")
if not CORS_HOST:
    origins = [
        "http://localhost:5173",
        "https://badingo.net",
    ]
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
def root():
    return {"message": "ROOT PATH PORTFOLIO"}
