import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseForm from '../NewExpense/ExpenseForm';
function Expenses(props){
  console.log('Updated Props',props);
  const [year,setYear] = useState('2020');
  const onSaveFilter = (filterYear) => {
    setYear(filterYear);
  }
  return(
      <div>
        <Card className = "expenses">
          <ExpensesFilter selectedYear = {year} onChangeFilter = {onSaveFilter}/>
          {props.expenses.map((expense) => (<ExpenseItem 
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date}/>
            ))}
      </Card>
      </div>
  )
}

export default Expenses;