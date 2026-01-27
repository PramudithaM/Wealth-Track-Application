import React from 'react'
import { BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend
 } from 'recharts'

const IncomeExpensesChart = ({ data }) => {
  const chartData = Array.isArray(data) && data.length ? data : [];
  

  return (
    <div className='w-[850px] h-[380px] border  rounded-xl shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105 '>
        <h2 className='text-lg text-black font-bold  flex justify-center  '>
        Income vs Expenses
        </h2>

        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
                <XAxis dataKey='month'/>
                <YAxis />
                <Tooltip/>
                <Legend/>

                <Bar dataKey="income" fill="#2f00ffff" radius={[4,4,0,0]} />
                <Bar dataKey="expenses" fill="#ff0000ff" radius={[4,4,0,0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default IncomeExpensesChart