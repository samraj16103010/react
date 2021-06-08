import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
   const onSaveHandler = (oldEnteredData) => {
     const enteredData = {
        ...oldEnteredData,
        id:Math.random().toString()
     }
     //console.log(enteredData);
     props.onAddExpense(enteredData);
   }
   return <div className = "new-expense">
        <ExpenseForm onSaveData = {onSaveHandler}/>
   </div>
}

export default NewExpense;