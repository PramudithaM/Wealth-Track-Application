import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ExpensePercentageChart = () => {

    const data = [
  { name: "Completed", value: 75 },
  { name: "Remaining", value: 25 },
];

const COLORS = ["#22c55e", "#e5e7eb"];
  return (
    <div style={{ width: 300, height: 300 }}>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <h2 style={{ textAlign: "center", marginTop: "-160px" }}>
        50%
      </h2>
    </div>
  )
}

export default ExpensePercentageChart