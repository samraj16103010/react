import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import { useState } from 'react';
function ExpenseItem(props){
  const [title,setTitle] = useState(props.title);
  const changeTitleHandler = () => {
     setTitle('Updated');
  }
    return(
        <Card className = "expense-item">
          <div>
            <ExpenseDate date = {props.date}/>
          </div>
          <div className = "expense-item__description">
            <h2>{title}</h2>
            <div className = "expense-item__price">${props.amount}</div>
            <button onClick = {changeTitleHandler}>Change Title!!</button>
          </div>
        </Card>

    );
}

export default ExpenseItem;