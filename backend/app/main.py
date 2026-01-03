from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

# Import routers
from app.routes import income, expenses, transaction

app = FastAPI(title="WealthTrack API", version="1.0.0")

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Register routers
app.include_router(income.router, prefix="/api")
app.include_router(expenses.router, prefix="/api")
app.include_router(transaction.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to WealthTrack API"}