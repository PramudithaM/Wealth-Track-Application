from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import uuid
from datetime import datetime, timedelta
from app.database import get_db
from app.models import Income
from app.schemas import IncomeCreate, IncomeResponse
from app.models import Expense
from app.schemas import ExpenseCreate, ExpenseResponse
from app.auth.firebase_auth import verify_firebase_token

router = APIRouter(prefix="/api/analytics", tags=["Analytics"])

# function to get date 3 months ago
def get_three_months_ago():
    return datetime.now().date() - timedelta(days=90)

# get 3 months income
@router.get("/income", response_model=List[IncomeResponse])
def get_income(db: Session = Depends(get_db)):
    """Get all income records for the last 3 months"""
    three_months_ago = get_three_months_ago()
    
    income_records = db.query(Income).filter(
        Income.date >= three_months_ago
    ).order_by(Income.date.desc()).all()
    
    return [
        {
            "id": record.id,
            "date": record.date.strftime("%Y-%m-%d"),
            "source": record.source or "",
            "amount": float(record.amount),
            "category": record.category or ""
        }
        for record in income_records
    ]

#get 3 months expense
@router.get("/expenses", response_model=List[ExpenseResponse])
def get_expenses(db: Session = Depends(get_db)):
    """Get all expense records for the last 3 months"""
    three_months_ago = get_three_months_ago()
    
    expense_records = db.query(Expense).filter(
        Expense.date >= three_months_ago
    ).order_by(Expense.date.desc()).all()
    
    return [
        {
            "id": record.id,
            "date": record.date.strftime("%Y-%m-%d"),
            "description": record.description or "",
            "amount": float(record.amount),
            "category": record.category or ""
        }
        for record in expense_records
    ]