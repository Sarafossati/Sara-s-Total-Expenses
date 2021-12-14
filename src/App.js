import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Chart from "./components/Chart/Chart.js";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "iPhone 13",
    amount: 999.99,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "Holidays",
    amount: 345.49,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e3",
    title: "New Laptop",
    amount: 699.95,
    date: new Date(2021, 12, 28),
  },
  {
    id: "e4",
    title: "Apple Watch",
    amount: 499.99,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Chart></Chart>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
