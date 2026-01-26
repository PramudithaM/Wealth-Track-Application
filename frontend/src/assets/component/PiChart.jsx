import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";




const COLORS = ["#2f00ffff", "#ff0000ff", "#f97316", "#ef4444"];

const PiChart = ({totalIncome,totalExpense}) => {
  const data = [
  { name: "Income", value: totalIncome },
  { name: "Expenses", value: totalExpense },
 
];
  return (
    <div className="w-full h-85   ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PiChart