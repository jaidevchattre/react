import React from "react";
import './ExpenseDate.css'
import PropTypes from "prop-types";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("default", { month: "long" });
  const year = props.date.toLocaleString("default", { day: "2-digit" });
  const day = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year"> {year}</div>
      <div className="expense-date__day"> {day}</div>
    </div>
  );
};

ExpenseDate.propTypes = {};

export default ExpenseDate;
