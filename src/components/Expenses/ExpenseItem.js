import React,{ useState } from "react";
import PropTypes from "prop-types";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => { 
  // If you have data that might change and you want changes to be reflected on UI -make use of useState
  const [title, setTitle] = useState(props.title);

  //  const clickHandler = () => {
  //       setTitle('Updated!') ;
  //       console.log("Button clicked");

  // };
  
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button type="button" class="btn btn-light" onClick={clickHandler}>Click me</button> */}
    </Card>
  );
};

ExpenseItem.propTypes = {};

export default ExpenseItem;
