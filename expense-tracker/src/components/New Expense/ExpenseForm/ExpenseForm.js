import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredAmount, setEnteredAmount] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangedHandler = (event) => {
    //(2024, 5, 12) need to format date
    const d = event.target.value.split('-')
    setUserInput((prevState) => {
      console.log(prevState)
      return { ...prevState, date: new Date(d[0],(d[1]-1),d[2]) };
    });
    //console.log(new Date(d[0],(d[1]-1),d[2]).toLocaleString('en-us',{month: "long"}))
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    //calls the passed in listener "onSaveExpenseData" from NewExpense on form submit
    props.onSaveExpenseData(userInput);
    setUserInput(() => {
      return {
        amount: "",
        date: "",
        title: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={userInput.date}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
