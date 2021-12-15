import React from 'react'
import PropTypes from 'prop-types'
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData= {
        ...enteredExpenseData,
        id:Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
};

    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

NewExpense.propTypes = {

}

export default NewExpense
