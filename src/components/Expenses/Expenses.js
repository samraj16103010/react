import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
function Expenses(expenses){
  const [year,setYear] = useState('2020');
  const onSaveFilter = (filterYear) => {
    setYear(filterYear);
  }
  return(
      <div>
        <Card className = "expenses">
          <ExpensesFilter selectedYear = {year} onChangeFilter = {onSaveFilter}/>
         <ExpenseItem 
          title={expenses.expenses[0].title}
          amount = {expenses.expenses[0].amount}
          date = {expenses.expenses[0].date}
         />
         <ExpenseItem
         title={expenses.expenses[1].title}
          amount = {expenses.expenses[1].amount}
          date = {expenses.expenses[1].date}
         />
         <ExpenseItem
         title={expenses.expenses[2].title}
          amount = {expenses.expenses[2].amount}
          date = {expenses.expenses[2].date}
         />  
         <ExpenseItem
         title={expenses.expenses[3].title}
          amount = {expenses.expenses[3].amount}
          date = {expenses.expenses[3].date}
         />
      </Card>
      </div>
  )
}

export default Expenses;