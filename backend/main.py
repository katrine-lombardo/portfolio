from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import comments
import os
from databases import Database

app = FastAPI()

DATABASE_URL = f"mysql://{os.environ['DB_USER']}:{os.environ['DB_PASSWORD']}@{os.environ['DB_HOST']}:{os.environ['DB_PORT']}/{os.environ['DB_NAME']}"
db = Database(DATABASE_URL)

app.include_router(comments.router, tags=["Comments"])

CORS_HOST = os.environ.get("CORS_HOST")
if not CORS_HOST:
    origins = ["http://localhost:5173"]
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
