import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";




const COLORS = ["#2f00ffff", "#ff0000ff", ];

const PiChart = ({totalIncome,totalExpense}) => {
  const data = [
  { name: "Income", value: totalIncome },
  { name: "Expenses", value: totalExpense },
 
];
  return (
    <div className="w-full flex h-85   ">
      <ResponsiveContainer width="60%" height="105%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        <div className='w-40 h-3 bg-gray-500 mb-2'></div>
        <div className='text-white font-bold text-lg mb-9'><span>Incomes</span></div>
        <div className='w-40 h-3 bg-gray-500 mb-2'></div>
        <div className='text-white font-bold text-lg mb-43'><span>Expenses</span></div>
        <div className='w-50 h-10 bg-green-500 rounded border-3xl flex justify-center items-center'>
            <span>Total Analysis</span>
        </div>
      </div>
    </div>
  );
}

export default PiChart