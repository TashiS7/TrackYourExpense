import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Phone Bills",
    amount: 50.0,
    date: new Date(2020, 1, 27),
  },
  {
    id: "e2",
    title: "Book Subscriptions",
    amount: 37.77,
    date: new Date(2021, 7, 17),
  },
  {
    id: "e3",
    title: "Rent Expenses",
    amount: 950.0,
    date: new Date(2021, 12, 7),
  },
  {
    id: "e4",
    title: "New Laptop",
    amount: 750,
    date: new Date(2021, 3, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
