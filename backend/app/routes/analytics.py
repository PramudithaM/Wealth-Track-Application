from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime, timedelta
from app.database import get_db
from app.models import Income, Expense
from app.schemas import IncomeResponse, ExpenseResponse
from app.auth.firebase_auth import verify_firebase_token

router = APIRouter(prefix="/api/analytics", tags=["Analytics"])

# Function to get date 3 months ago
def get_three_months_ago():
    return datetime.now() - timedelta(days=90)

# Get 3 months income for authenticated user
@router.get("/income", response_model=List[IncomeResponse])
async def get_income(
    user_id: str = Depends(verify_firebase_token),
    db: Session = Depends(get_db)
):
    """Get authenticated user's income records for the last 3 months"""
    three_months_ago = get_three_months_ago()
    
    income_records = db.query(Income).filter(
        Income.user_id == user_id,
        Income.date >= three_months_ago
    ).order_by(Income.date.desc()).all()
    
    return income_records

# Get 3 months expenses for authenticated user
@router.get("/expenses", response_model=List[ExpenseResponse])
async def get_expenses(
    user_id: str = Depends(verify_firebase_token),
    db: Session = Depends(get_db)
):
    """Get authenticated user's expense records for the last 3 months"""
    three_months_ago = get_three_months_ago()
    
    expense_records = db.query(Expense).filter(
        Expense.user_id == user_id,
        Expense.date >= three_months_ago
    ).order_by(Expense.date.desc()).all()
    
    return expense_records

# Get summary for authenticated user
@router.get("/summary")
async def get_summary(
    user_id: str = Depends(verify_firebase_token),
    db: Session = Depends(get_db)
):
    """Get authenticated user's summary for last 3 months"""
    three_months_ago = get_three_months_ago()
    
    # Get income records
    income_records = db.query(Income).filter(
        Income.user_id == user_id,
        Income.date >= three_months_ago
    ).all()
    
    # Get expense records
    expense_records = db.query(Expense).filter(
        Expense.user_id == user_id,
        Expense.date >= three_months_ago
    ).all()
    
    # Calculate totals
    total_income = sum(float(record.amount) for record in income_records)
    total_expenses = sum(float(record.amount) for record in expense_records)
    
    return {
        "user_id": user_id,
        "total_income": total_income,
        "total_expenses": total_expenses,
        "net_balance": total_income - total_expenses,
        "income_count": len(income_records),
        "expense_count": len(expense_records)
    }

# Get monthly breakdown for authenticated user
@router.get("/last-3-months")
async def get_last_3_months(
    user_id: str = Depends(verify_firebase_token),
    db: Session = Depends(get_db)
):
    """Get authenticated user's data grouped by month for last 3 months"""
    three_months_ago = get_three_months_ago()
    
    # Fetch income records
    income_records = db.query(Income).filter(
        Income.user_id == user_id,
        Income.date >= three_months_ago
    ).order_by(Income.date).all()
    
    # Fetch expense records
    expense_records = db.query(Expense).filter(
        Expense.user_id == user_id,
        Expense.date >= three_months_ago
    ).order_by(Expense.date).all()
    
    # Group by month
    monthly_data = {}
    
    # Process income
    for record in income_records:
        if record.date:
            month_key = record.date.strftime("%Y-%m")
            if month_key not in monthly_data:
                monthly_data[month_key] = {"income": [], "expenses": []}
            
            monthly_data[month_key]["income"].append({
                "id": record.id,
                "user_id": record.user_id,
                "title": record.title,
                "amount": float(record.amount),
                "category": record.category,
                "date": record.date.isoformat()
            })
    
    # Process expenses
    for record in expense_records:
        if record.date:
            month_key = record.date.strftime("%Y-%m")
            if month_key not in monthly_data:
                monthly_data[month_key] = {"income": [], "expenses": []}
            
            monthly_data[month_key]["expenses"].append({
                "id": record.id,
                "user_id": record.user_id,
                "title": record.title,
                "amount": float(record.amount),
                "category": record.category,
                "payment_method": record.payment_method,
                "note": record.note,
                "date": record.date.isoformat()
            })
    
    # Build response
    result = []
    for month in sorted(monthly_data.keys()):
        month_income = monthly_data[month].get("income", [])
        month_expenses = monthly_data[month].get("expenses", [])
        
        total_income = sum(item["amount"] for item in month_income)
        total_expenses = sum(item["amount"] for item in month_expenses)
        
        result.append({
            "month": month,
            "income": month_income,
            "expenses": month_expenses,
            "total_income": total_income,
            "total_expenses": total_expenses,
            "balance": total_income - total_expenses
        })
    
    return result

# Get category breakdown for authenticated user
@router.get("/categories")
async def get_category_breakdown(
    user_id: str = Depends(verify_firebase_token),
    db: Session = Depends(get_db)
):
    """Get authenticated user's category breakdown for last 3 months"""
    three_months_ago = get_three_months_ago()
    
    # Get income by category
    income_records = db.query(Income).filter(
        Income.user_id == user_id,
        Income.date >= three_months_ago
    ).all()
    
    income_by_category = {}
    for record in income_records:
        cat = record.category
        if cat not in income_by_category:
            income_by_category[cat] = 0
        income_by_category[cat] += float(record.amount)
    
    # Get expenses by category
    expense_records = db.query(Expense).filter(
        Expense.user_id == user_id,
        Expense.date >= three_months_ago
    ).all()
    
    expense_by_category = {}
    for record in expense_records:
        cat = record.category
        if cat not in expense_by_category:
            expense_by_category[cat] = 0
        expense_by_category[cat] += float(record.amount)
    
    return {
        "user_id": user_id,
        "income_by_category": income_by_category,
        "expense_by_category": expense_by_category
    }