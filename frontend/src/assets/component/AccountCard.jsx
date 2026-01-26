import React, { useState } from "react";

const AccountCard = ({mainAccountBalance,totalSalary,totalInvestment,totalBusinessIncome,totalFoodandDrink,totalHousing,totalTransportation}) => {
  const [activeTab, setActiveTab] = useState("income");
  const [loading,setLoading] = useState(true);

    

  // ---------------- HARD CODED DATA ----------------
  const expenseData = [
    { id: 1, category: "Food & Drink", amount: totalFoodandDrink },
    { id: 2, category: "Rent", amount: totalHousing },
    { id: 3, category: "Transport", amount: totalTransportation },
  ];
  const incomeData = [
    { id: 1, category: "Salary/Wadges", amount: totalSalary },
    { id: 2, category: "Investment", amount: totalInvestment },
    { id: 3, category: "Business Income", amount: totalBusinessIncome },
  ];

  // ---------------- CALCULATIONS ----------------
  const totalIncome = incomeData.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expenseData.reduce((sum, item) => sum + item.amount, 0);
  const mainBalance = mainAccountBalance;

  const activeData = activeTab === "income" ? incomeData : expenseData;

  // ---------------- UI ----------------
  return (
    <div className="w-[450px]  border  rounded-xl shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105">
      
      {/* Balance */}
      <div className="text-center">
        <p className="text-gray-500 font-medium">
          Main Account Balance
        </p>
        <h1 className="text-3xl font-bold mt-1">
          ${mainBalance}
        </h1>
      </div>

      {/* Switch Buttons */}
      <div className="flex mt-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("income")}
          className={`flex-1 py-2 rounded-md font-semibold transition ${
            activeTab === "income"
              ? "bg-green-500 text-white"
              : "text-red"
          }`}
        >
          Income
        </button>

        <button
          onClick={() => setActiveTab("expense")}
          className={`flex-1 py-2 rounded-md font-semibold transition ${
            activeTab === "expense"
              ? "bg-red-500 text-white"
              : "text-red"
          }`}
        >
          Expenses
        </button>
      </div>

      {/* Totals */}
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-500">
          {activeTab === "income" ? "Total Income" : "Total Expenses"}
        </p>
        <p className="text-xl font-bold">
          ${activeTab === "income" ? totalIncome : totalExpense}
        </p>
      </div>

      {/* Category List */}
      <div className="space-y-2">
        {activeData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md"
          >
            <span className="text-gray-700">{item.category}</span>
            <span className="font-semibold">${item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountCard;
