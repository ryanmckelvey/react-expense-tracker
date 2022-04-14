import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import ExpenseFilter from "../../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";
import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses(props) {
  const [filter, setFilter] = useState("2022");

  const expenses = props.expenses;

  const selectionChangedHandler = (selection) => {
    setFilter(selection);
    console.log(selection);
  };

  const filteredItems = expenses.filter((x) => {
    return x.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filter}
          onSelectionChanged={selectionChangedHandler}
        />
        <ExpensesList items={filteredItems}/>
      </Card>
    </div>
  );
}

export default Expenses;
