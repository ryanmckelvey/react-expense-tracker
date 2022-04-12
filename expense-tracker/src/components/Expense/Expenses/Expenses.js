import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import ExpenseFilter from "../../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filter, setFilter] = useState("2021");

  const expenses = props.expenses;

  const selectionChangedHandler = (selection) => {
    setFilter(selection);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filter}
          onSelectionChanged={selectionChangedHandler}
        />
        {expenses.map((ex) => (
          <ExpenseItem
            title={ex.title}
            amount={ex.amount}
            date={ex.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
