import './ExpenseDate.css';
function ExpenseDate(props){
  console.log(props.date);
  //console.log(props.getFullYear());
  const month = props.date.toLocaleString('en-US', { month : 'long' });
  const day = props.date.toLocaleString('en-US', { day:'2-digit' });
  const year = props.date.toLocaleString('en-US', { year:'2-digit' });
  console.log(month);

  return(
      <div className = "expense-date">
        <div className = "expense-date__month">{month}</div>
        <div className = "expense-date__day">{day}</div>
        <div className = "expense-date__year">{year}</div>
      </div>
  );
}

export default ExpenseDate;