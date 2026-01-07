import React from 'react'
import { BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend
 } from 'recharts'

 const data = [
    {month: "Jan", income: 5000, expenses:3200},
    {month: "Feb", income: 4200, expenses:2800},
    {month: "Mar", income: 6100, expenses:4100},
    {month: "Apr", income: 4800, expenses:3600},
    {month: "May", income: 8900, expenses:5400},
    {month: "jun", income: 12000, expenses:1100},
 ]

const IncomeExpensesChart = () => {
  return (
    <div className='w-[700px] h-[240px] border  rounded-xl  '>
        <h2 className='text-lg text-black font-bold  flex justify-center  '>
        Income vs Expenses
        </h2>

        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
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