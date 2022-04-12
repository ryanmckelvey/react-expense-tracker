import React, { useState } from "react";

import Expenses from "./components/Expense/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";


function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2025, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2024, 5, 12),
    },
  ];
  const [list, filterList] = useState(expenses);

  const newExepenseHandler = (expense) => {
    console.log(expense);
    console.log("in app.js");
  };

  const filterSelectionHandler = (selection) => {
    console.log(selection);
    filterList(list.filter(l => l.date.getFullYear().toString() === selection));
    console.log(list);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/*Example of child-to-parent communication*/}
        <NewExpense onAddExpense={newExepenseHandler} />
      </header>
      
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
