import React from 'react';
import DashBar from '../assets/component/DashBar';
import IncomeDetails from '../assets/component/IncomeDetails';
import { useState } from 'react';
import Description from '../assets/component/Description';
import Amount from '../assets/component/Amount';
import IncomeSelect from '../assets/component/IncomeSelect';
import CalanderDate from '../assets/component/CalanderDate';
import DashBoard from '../assets/component/DashBoard';
import AddButton from '../assets/component/AddIncomeButton';
import api from "../api/api";
import AddIncomeButton from '../assets/component/AddIncomeButton';



const IncomePage = () => {
    
    const [addDescription,setAddDescription] = useState('');

    const [incomeAmount,setIncomeAmount] = useState('');
    const [selected, setSelected] = useState("");

    const [date, setDate] = useState(null);

    const handleAddIncome = async () => {
        if (!addDescription || !incomeAmount || !category || !date) {
            alert("Please fill all fields");
            return;
             }

        const payload = {
            user_id: "user_123", // later from auth
            title: addDescription,
            amount: Number(incomeAmount),
            category: category,
            date: date
        };

        try {
            await api.post("/income", payload);
            alert("Income added successfully");

            // reset form
            setAddDescription("");
            setIncomeAmount("");
            setCategory("");
            setDate(null);

        } catch (error) {
            console.error("Failed to add income", error);
        }
    };



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
                    <IncomeSelect selected={selected} setSelected={setSelected} />
                    <IncomeDetails text = "Date"/>
                    <CalanderDate date={date} setDate={setDate} />
                    </div>
                    <div className=' flex justify-center'>
                        <AddIncomeButton onClick={handleAddIncome}/>
                    </div>
                </div>
                
            </header>
        </div>
    </div>
  )
}

export default IncomePage