import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Income", value: 400000 },
  { name: "Expenses", value: 30000 },
 
];


const COLORS = ["#2f00ffff", "#ff0000ff", "#f97316", "#ef4444"];

const AnalyticChart = () => {
  return (
    <div className=" h-155   ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={230}
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
  )
}

export default AnalyticChart