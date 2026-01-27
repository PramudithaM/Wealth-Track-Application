import React, { useEffect, useState } from 'react'
import DashBar from '../assets/component/DashBar'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import IncomeExpensesChart from '../assets/component/IncomeExpensesChart';
import DashBoard from '../assets/component/DashBoard';
import PiChart from '../assets/component/PiChart';
import HoverCard from '../assets/component/HoverCard';
import { getAllIncomes } from '../services/incomeService'
import { getAllExpenses } from '../services/expenseService'
import { auth } from '../firebase'
import AccountCard from '../assets/component/AccountCard';
import LatesFiveIncomes from '../assets/component/LatesFiveIncomes';
import LatestFiveExpenses from '../assets/component/LatestFiveExpenses';

const data = [
  { month: "Jan", income: 4000, expenses: 2500 },
  { month: "Feb", income: 3000, expenses: 2000 },
  { month: "Mar", income: 5000, expenses: 3500 },
  { month: "Apr", income: 4200, expenses: 3000 },
  { month: "May", income: 6100, expenses: 4000 },
  { month: "June", income: 21000, expenses: 10000},
];


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Home = () => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  

  const fetchData = async () => {
    setLoading(true)
    try {
      const [incRes, expRes] = await Promise.all([getAllIncomes(), getAllExpenses()])

      console.log("Incomes from backend:", incRes)   // <<-- THIS LINE
    console.log("Expenses from backend:", expRes)
    
      setIncomes(Array.isArray(incRes) ? incRes : [])
      setExpenses(Array.isArray(expRes) ? expRes : [])
    } catch (err) {
      console.error('Error fetching incomes/expenses', err)
      setIncomes([])
      setExpenses([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) fetchData()
      else {
        setIncomes([])
        setExpenses([])
        setLoading(false)
      }
    })
    return () => unsub()
  }, []);

  const getTotalByCategory = (data, category) => {
  return data
    .filter(item => item.category === category)
    .reduce((sum, item) => sum + Number(item.amount), 0)
}
// Calculate Income by Category
const totalSalary = getTotalByCategory(incomes, "Salary/Wages")
const totalInvestment = getTotalByCategory(incomes, "Investment")
const  totalBusinessIncome = getTotalByCategory(incomes, "Business Income")

//Calculate Expense by Category

const totalFoodandDrink = getTotalByCategory(expenses, "Food & Drink")
const totalHousing = getTotalByCategory(expenses, "Housing")
const totalTransportation = getTotalByCategory(expenses, "Transportation") 

  // compute totals and monthly series for charts

  const totalIncome = incomes.reduce((s, i) => s + Number(i.amount || 0), 0)
  const totalExpense = expenses.reduce((s, e) => s + Number(e.amount || 0), 0)
  const mainAccountBalance = totalIncome-totalExpense
  

  const aggregateByMonth = (items) => {
    const months = Array(12).fill(0)
    items.forEach((it) => {
      const d = it.date ? new Date(it.date) : null
      const m = d instanceof Date && !isNaN(d) ? d.getMonth() : null
      if (m !== null) months[m] += Number(it.amount || 0)
    })
    return months
  }

  const incMonths = aggregateByMonth(incomes)
  const expMonths = aggregateByMonth(expenses)

  const chartData = monthNames.map((m, idx) => ({ month: m, income: incMonths[idx], expenses: expMonths[idx] }))

  //Transaction History
  const [transactions, setTransactions] = useState([]);

    const [toast, setToast] = useState(null);
  
    useEffect(() => {
      fetchTransactions();
    }, []);
  
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const data = await getAllTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setToast({ 
          message: error.message || 'Failed to load transactions', 
          type: 'error' 
        });
      } finally {
        setLoading(false);
      }
    };
  
    const formatDate = (dateString) => {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    };
  
    const formatAmount = (amount, type) => {
      const prefix = type === 'income' ? '+' : '-';
      const color = type === 'income' ? 'text-green-400' : 'text-red-400';
      return <span className={color}>{prefix}${parseFloat(amount).toFixed(2)}</span>;
    };
    // split transactions
const transactionincomes = transactions.filter(t => t.type === 'income');
const transactionexpenses = transactions.filter(t => t.type === 'expense');
//Newest transaction first
const sortByLatest = (a, b) =>
  new Date(b.created_at) - new Date(a.created_at);
//Latest 5
const latestIncomes = incomes
  .sort(sortByLatest)
  .slice(0, 5);

const latestExpenses = expenses
  .sort(sortByLatest)
  .slice(0, 5);




  return (
    <div className='bg-hero-pattern w-full h-screen bg-center bg-cover absolute top-0 left-0' >
      <DashBar />
      <div className='flex justify-center items-center'>
        <div className='px-5  xs:p-10 max-w-full mx-auto flex flex-col relative z-10  flex items-center justify-center '>
        <div className='w-full flex justify-between '>
            <div><AccountCard mainAccountBalance={mainAccountBalance} totalSalary={totalSalary} totalInvestment={totalInvestment} totalBusinessIncome = {totalBusinessIncome} totalFoodandDrink={totalFoodandDrink} totalHousing={totalHousing} totalTransportation= {totalTransportation}/></div>
            <div className=''>
              <IncomeExpensesChart data={chartData} />

            </div>
        </div>
        <div className='w-full flex justify-between gap-13'>
          
          <LatesFiveIncomes  latestIncomes = {latestIncomes} totalIncome = {totalIncome} />
        
        
          <LatestFiveExpenses latestExpenses = {latestExpenses} totalExpense = {totalExpense} />
        
        <div>
          <div className='w-160 bg-dark-100/20 px-2 py-5  rounded-lg mt-10  justify-center shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'>
           <div className='px-3'>
            <span className='text-white  text-2xl font-bold '>Analytics</span>
           </div>
           <div className=''><PiChart totalIncome = {totalIncome} totalExpense ={totalExpense}  /></div>            
          </div>
        </div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Home