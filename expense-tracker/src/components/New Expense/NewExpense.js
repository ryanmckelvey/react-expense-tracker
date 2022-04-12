import React from 'react';
import './NewExpense.css';

import ExpenseForm from '../New Expense/ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
    //fires when data is saved in expense form
    const saveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //method from App.js
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveDataHandler}/>
        </div>
    )
}

export default NewExpense;