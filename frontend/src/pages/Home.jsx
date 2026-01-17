import React from 'react'
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
import { useEffect, useState } from "react";
import api from "../api/api";



const Home = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    api.get("/income")
      .then(res => {
        const grouped = {};

        res.data.forEach(item => {
          const month = new Date(item.date).toLocaleString("default", { month: "short" });

          if (!grouped[month]) {
            grouped[month] = { month, income: 0 };
          }

          grouped[month].income += Number(item.amount);
        });

        setChartData(Object.values(grouped));
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div className='bg-hero-pattern w-full h-screen bg-center bg-cover absolute top-0 left-0' >
      <DashBar />
      <div className='flex justify-center items-center'>
        <div className='px-5  xs:p-10 max-w-full mx-auto flex flex-col relative z-10  flex items-center justify-center '>
        <div className='w-full flex justify-between '>
            <div className='w-120 bg-light-100/8 px-5 py-5 border rounded-lg shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'>
              <div>
                <span className='text-white'>Main Account Balance</span>
              </div>
              <div>
                <span className='text-white text-xl'>$125,000,000</span>
              </div>
              <div>
                <span className='text-white mt-5'>-----------------------------------------------------------------------</span>
              </div>
              <div className='mt-13'>
                <div className='text-white text-xs flex justify-between pt-2'>
                  <span>Current Cash Balance</span>
                  <span>$125,000</span>
                </div>
                <div className='text-white text-xs flex justify-between pt-2'>
                  <span>Fix Deposite balance</span>
                  <span>$130,000</span>
                </div>
                <div className='text-white text-xs flex justify-between pt-2'>
                  <span>Pocket Money</span>
                  <span>$100,000</span>
                </div>
                <div className='text-white text-xs flex justify-between pt-2'>
                  <span>Investments</span>
                  <span>$1,500,000</span>
                </div>
              </div>
            </div>
            <div className=''>
              <IncomeExpensesChart data = {chartData}/>

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