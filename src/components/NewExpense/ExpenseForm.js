import React,{useState} from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredExpense,setEnteredExpense] = useState();
    const [enteredDate,setEnteredDate] = useState('');

    const titleHandler = (event) => {
         setEnteredTitle(event.target.value);
    }

    const expenseHandler = (event) => {
         setEnteredExpense(event.target.value);
    }

    const dateHandler = (event) => {
         setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredData = {
            title:enteredTitle,
            amount:enteredExpense,
            date:new Date(enteredDate)
        };

        console.log('Entered Data',enteredData);
        props.onSaveData(enteredData);
        setEnteredTitle('');
        setEnteredExpense('');
        setEnteredDate('');
    }

   return <form onSubmit = {submitHandler}>
       <div className = "new-expense__controls">
           <div className = "new-expense__control">
               <label>Title</label>
               <input type = "text"value = {enteredTitle} onChange = {titleHandler}></input>
           </div>
           <div className = "new-expense__control">
               <label>Expense</label>
               <input type = "number" min = "0.01" step = "0.01" value = {enteredExpense} onChange = {expenseHandler}></input>
           </div>
           <div className = "new-expense__control">
               <label>Date</label>
               <input type = "date" min = "2019-01-01" max = "2022-12-31" value = {enteredDate} onChange = {dateHandler}></input>
           </div>
       </div>
       <div className = "new-expense__actions">
           <button type = "submit">Add Expense</button>
       </div>
   </form>
}

export default ExpenseForm;