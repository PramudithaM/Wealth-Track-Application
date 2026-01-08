from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models import Income, Expense
from app.schemas import TransactionResponse
from app.auth.firebase_auth import verify_firebase_token

router = APIRouter(prefix="/api/transactions", tags=["Transactions"])


@router.get("/", response_model=List[TransactionResponse])
async def get_all_transactions(
    user_id: str = Depends(verify_firebase_token),
    db: Session = Depends(get_db)
):
    """
    Get all transactions (incomes + expenses) for the authenticated user
    
    Returns combined list of all incomes and expenses sorted by date (newest first)
    """
    incomes = db.query(Income).filter(Income.user_id == user_id).all()
    expenses = db.query(Expense).filter(Expense.user_id == user_id).all()
    
    transactions = []
    
    # Add incomes
    for income in incomes:
        transactions.append({
            "id": income.id,
            "type": "income",
            "title": income.title,
            "amount": income.amount,
            "category": income.category,
            "payment_method": None,
            "note": None,
            "date": income.date,
            "created_at": income.created_at
        })
    
    # Add expenses
    for expense in expenses:
        transactions.append({
            "id": expense.id,
            "type": "expense",
            "title": expense.title,
            "amount": expense.amount,
            "category": expense.category,
            "payment_method": expense.payment_method,
            "note": expense.note,
            "date": expense.date,
            "created_at": expense.created_at
        })
    
    # Sort by date (newest first)
    transactions.sort(key=lambda x: x["date"] if x["date"] else x["created_at"], reverse=True)
    
    return transactions