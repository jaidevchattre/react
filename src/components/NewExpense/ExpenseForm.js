import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTiltle] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');

  //Alternative to individual state
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
  const titleChangeHandler = (event) => {
    setEnteredTiltle(event.target.value);

    //React schedules state and can be old snapshot so do not use this approach
    // setUserInput({
    //     ... userInput,//spread operator to copy all other elements
    //     enteredTitle: event.target.value,
    // });
    
    //use this approach to make sure to always get latest snapshots of state
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle:event.target.value}
    // })

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler=(event)=>{

    //prevent page from reloading and prevent default behaviour
      event.preventDefault();

      const expenseData={
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
      };
      //calls function from parent 
      props.onSaveExpenseData(expenseData);//this is how we can communicate child component with parent component

      setEnteredAmount('');
      setEnteredDate('');
      setEnteredTiltle('');

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler} //two way binding
            min="2010-01-01"
            max="2022-12-31"
            value={enteredDate}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">ADD Expense</button>
        </div>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {};

export default ExpenseForm;
