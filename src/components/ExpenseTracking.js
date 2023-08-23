import React, { useState } from "react";
import idb from "../idb"; // Import the idb library

function ExpenseTracking() {
  const [expenses, setExpenses] = useState([]);

  // Use idb to store and retrieve expense data
  const addExpense = async (newExpense) => {
    const db = await idb.createDB("expensesDB", 1);
    await db.addExpense(newExpense);
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <h2>Expense Tracking</h2>
      <button
        onClick={() => addExpense({ description: "Equipment", amount: 100 })}
      >
        Add Expense
      </button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracking;
