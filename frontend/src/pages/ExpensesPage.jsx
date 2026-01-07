import React, { useState } from 'react'
import DashBar from '../assets/component/DashBar'
import ExpenseDetails from '../assets/component/ExpenseDetails'
import ExpenseTitle from '../assets/component/ExpenseTitle'
import ExpenseAmount from '../assets/component/ExpenseAmount'
import ExpenseSelect from '../assets/component/ExpenseSelect'
import ExpneseCalander from '../assets/component/ExpneseCalander'
import ExpenseSourceSelect from '../assets/component/ExpenseSourceSelect'
import ExpenseNotes from '../assets/component/ExpenseNotes'
import AddButton from '../assets/component/AddButton'

const ExpensesPage = () => {

    const [title,setTitle] = useState('');
    const [expenseAmount,setExpenseAmount] = useState('');
    const [notes,setNotes] = useState('');
  return (
    <div className='pattern'>
        <DashBar/>
        <div className='wrapper  flex items-center justify-center'>
            <header>
                <h1>Add Expenses</h1>
                <p className='text-center font-[var(--font-poppins)] text-white text-white'>Track your expenses and  sources</p>
                <div className='movie-card mt-3'>
                    <div>
                        <ExpenseDetails text= "Title" />
                    <ExpenseTitle title={title} setTitle={setTitle} />
                    <ExpenseDetails text= "Amount ($)" />
                    <ExpenseAmount expenseAmount = {expenseAmount} setExpenseAmount = {setExpenseAmount} />
                    <ExpenseDetails text= "Category" />
                    <ExpenseSelect />
                    <ExpenseDetails text= "Date" />
                    <ExpneseCalander />
                    <ExpenseDetails text= "Payment Method" />
                    <ExpenseSourceSelect />
                    <ExpenseDetails text= "Note(Optional)" />
                    <ExpenseNotes notes={notes} setNotes ={setNotes} />
                    </div>
                    <div className=' flex justify-center'>
                        <AddButton  text = "Add Expenses"/>
                    </div>
                </div>
            </header>

        </div>
    </div>
  )
}

export default ExpensesPage