import React, { useState } from 'react';

import "./ExpenseItem.css";
import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  //Using state here to update title of expense items
  //This line of code sets the title to be updated by the setTitle method we call in changeTitle function
  const [title, setTitle] = useState(props.title);

  //On click of button event
  const changeTitle = () => {
    setTitle("New Title")
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}> </ExpenseDate>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> $ {props.amount} </div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
