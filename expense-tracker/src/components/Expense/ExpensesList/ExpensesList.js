import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "../ExpensesList/ExpensesList.css";

const ExpensesList = (props) => {
  {/*let expensesContent = <p>No Items Found.</p>;

  if (expenses.length > 0) {
    expensesContent = filteredItems.map((ex) => (
      <ExpenseItem
        key={ex.id}
        title={ex.title}
        amount={ex.amount}
        date={ex.date}
      ></ExpenseItem>
    ));
  }*/}

  if(props.items.length === 0){
      return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((ex) => (
        <ExpenseItem
          key={ex.id}
          title={ex.title}
          amount={ex.amount}
          date={ex.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
