import React from 'react'
import DashBar from '../assets/component/DashBar'
import IncomeDetails from '../assets/component/IncomeDetails'
import { useState } from 'react'
import Description from '../assets/component/Description'
import Amount from '../assets/component/Amount'
import IncomeSelect from '../assets/component/IncomeSelect'
import CalanderDate from '../assets/component/CalanderDate'
import DashBoard from '../assets/component/DashBoard'
import AddButton from '../assets/component/AddButton'



const IncomePage = () => {
    
    const [addDescription,setAddDescription] = useState('');

    const [incomeAmount,setIncomeAmount] = useState('');

    const [selected,setSelected] = useState('Choose a catogery');
    const [isOpen,setIsOpen] = useState(false);

  return (
    <div className='pattern'>
        <DashBar/>
        <div className='wrapper  flex items-center justify-center'>
            <header>
                <h1>Add Income</h1>
                <p className='text-center font-[var(--font-poppins)] text-white text-white'>Track your earnings and income sources</p>
                <div className='w-125 bg-dark-100 p-5 rounded-2xl shadow-inner shadow-light-100/10 mt-4'>
                    <div>
                        <IncomeDetails text = "Title"/>
                    <Description addDescription = {addDescription} setAddDescription = {setAddDescription} />
                    <IncomeDetails text = "Amount $" />
                    <Amount incomeAmount = {incomeAmount} setIncomeAmount = {setIncomeAmount} />
                    <IncomeDetails text = "Category"/>
                    <IncomeSelect />
                    <IncomeDetails text = "Date"/>
                    <CalanderDate />
                    </div>
                    <div className=' flex justify-center'>
                        <AddButton text = "Add Income" />
                    </div>
                </div>
                
            </header>
        </div>
    </div>
  )
}

export default IncomePage