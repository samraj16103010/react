import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseForm from '../NewExpense/ExpenseForm';
import ExpensesList from'./ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(props){
  console.log('Updated Props',props);
  const [year,setYear] = useState(new Date().getFullYear());
  const onSaveFilter = (filterYear) => {
    setYear(filterYear);
  }

const filteredExpenses = props.expenses.filter(expense => {
  return expense.date.getFullYear().toString() === year.toString();
});

  return(
      <div>
        <Card className = "expenses">
          <ExpensesFilter selectedYear = {year} onChangeFilter = {onSaveFilter}/>
          <ExpensesChart expenses = {filteredExpenses}/>
          <ExpensesList items = {filteredExpenses}/>
       </Card>
      </div>
  )
}

export default Expenses;