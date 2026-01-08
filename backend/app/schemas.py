from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional
from decimal import Decimal

# Income Schemas
class IncomeCreate(BaseModel):
    title: Optional[str] = Field(None, max_length=255, description="Income title/description")
    amount: Decimal = Field(..., gt=0, description="Amount must be positive")
    category: str = Field(..., description="Income category")
    date: Optional[datetime] = None

    class Config:
        json_schema_extra = {
            "example": {
                "title": "Monthly Salary",
                "amount": 5000.00,
                "category": "Salary/Wages",
                "date": "2025-01-08T10:00:00Z"
            }
        }


class IncomeResponse(BaseModel):
    id: str
    user_id: str
    title: Optional[str]
    amount: Decimal
    category: str
    date: Optional[datetime]
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True


# Expense Schemas
class ExpenseCreate(BaseModel):
    title: Optional[str] = Field(None, max_length=255, description="Expense title")
    amount: Decimal = Field(..., gt=0, description="Amount must be positive")
    category: str = Field(..., description="Expense category")
    payment_method: Optional[str] = Field(None, description="Payment method: Cash or Bank")
    note: Optional[str] = Field(None, description="Optional note")
    date: Optional[datetime] = None

    class Config:
        json_schema_extra = {
            "example": {
                "title": "Grocery Shopping",
                "amount": 150.50,
                "category": "Food & Drink",
                "payment_method": "Cash",
                "note": "Weekly groceries",
                "date": "2025-01-08T10:00:00Z"
            }
        }


class ExpenseResponse(BaseModel):
    id: str
    user_id: str
    title: Optional[str]
    amount: Decimal
    category: str
    payment_method: Optional[str]
    note: Optional[str]
    date: Optional[datetime]
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True


# Transaction Response (Combined)
class TransactionResponse(BaseModel):
    id: str
    type: str  # "income" or "expense"
    title: Optional[str]
    amount: Decimal
    category: str
    payment_method: Optional[str] = None  # Only for expenses
    note: Optional[str] = None  # Only for expenses
    date: Optional[datetime]
    created_at: datetime


# Update Schemas (for future use)
class IncomeUpdate(BaseModel):
    title: Optional[str] = None
    amount: Optional[Decimal] = None
    category: Optional[str] = None
    date: Optional[datetime] = None


class ExpenseUpdate(BaseModel):
    title: Optional[str] = None
    amount: Optional[Decimal] = None
    category: Optional[str] = None
    payment_method: Optional[str] = None
    note: Optional[str] = None
    date: Optional[datetime] = None