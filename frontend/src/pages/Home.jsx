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
  }, [])

  // compute totals and monthly series for charts
  const totalIncome = incomes.reduce((s, i) => s + Number(i.amount || 0), 0)
  const totalExpense = expenses.reduce((s, e) => s + Number(e.amount || 0), 0)

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

  return (
    <div className='bg-hero-pattern w-full h-screen bg-center bg-cover absolute top-0 left-0' >
      <DashBar />
      <div className='flex justify-center items-center'>
        <div className='px-5  xs:p-10 max-w-full mx-auto flex flex-col relative z-10  flex items-center justify-center '>
        <div className='w-full flex justify-between '>
            <div><AccountCard/></div>
            <div className=''>
              <IncomeExpensesChart data={chartData} />

            </div>
        </div>
        <div className='w-full flex justify-between gap-13'>
          <div>
          <div className='w-80 bg-light-100/8 px-2 py-5 border rounded-lg mt-10 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'>
            <div>
              <div className='flex justify-between items-center'>
                <div >
                  <div>
                  <span className='text-white'>Income</span>
                  </div>
                  <div>
                  <span className='text-xs text-white'>This Month</span>
                  </div>
                </div>
                <div>
                  <span className='text-white text-base'>$ 85,000</span>
                </div> 
              </div>
            </div>
            <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-1'>
              <div>
                <span className='text-white text-[11px]'>Income Scource</span>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Salary</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Salary</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Salary</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Salary</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Salary</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
              </div>

            </div>
              
          </div>
        </div>



        <div>
          <div className='w-80 bg-red-400/18 px-2 py-5 border rounded-lg mt-10 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'>
            <div>
              <div className='flex justify-between items-center'>
                <div >
                  <div>
                  <span className='text-white'>Expense</span>
                  </div>
                  <div>
                  <span className='text-xs text-white'>This Month</span>
                  </div>
                </div>
                <div>
                  <span className='text-white text-base'>$ 85,000</span>
                </div> 
              </div>
            </div>
            <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-1 '>
              <div>
                <span className='text-white text-[11px]'>Expenses</span>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Food & Drink</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Transportation</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>housing</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Bills & Utilities</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Health & Medical</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
              </div>

            </div>
              
          </div>
        </div>
        <div>
          <div className='w-160 bg-light-100/8 px-2 py-5 border rounded-lg mt-10  justify-center'>
           <div >
            <span className='text-white flex justify-center '>Analytics</span>
           </div>
           <div className='shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'><PiChart/></div>            
          </div>
        </div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Home