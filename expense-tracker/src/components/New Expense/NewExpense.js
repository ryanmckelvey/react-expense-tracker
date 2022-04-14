import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "../New Expense/ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  //fires when data is saved in expense form
  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    //method from App.js
    props.onAddExpense(expenseData);
  };
  const [formToggle, setFormToggle] = useState(false);

  const formToggleHandler = () => {
    setFormToggle(!formToggle);
  };
  return (
    <div className="new-expense">
      {!formToggle && <button onClick={formToggleHandler} >Add New Expense</button>}
      {formToggle && <ExpenseForm onSaveExpenseData={saveDataHandler} onFormToggle={formToggleHandler}/>}
    </div>
  );
};

export default NewExpense;
