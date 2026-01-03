from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime

class IncomeBase(BaseModel):
    amount: float
    source: str
    date: date
    description: Optional[str] = None

class IncomeCreate(IncomeBase):
    pass

class IncomeResponse(IncomeBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True
