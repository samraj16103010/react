import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id:'e1',
      title:'Title1',
      amount:2345.6,
      date:new Date(2021,5,6)
    },
    {
      id:'e2',
      title:'Title2',
      amount:2341.6,
      date:new Date(2021,5,6)
    },
    {
      id:'e3',
      title:'Title3',
      amount:2145.6,
      date:new Date(2021,5,6)
    },
    {
      id:'e4',
      title:'Title4',
      amount:2349.6,
      date:new Date(2021,5,6)
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
          <h1><strong>Expense Tracker</strong></h1> 
         <ExpenseItem 
          expense = {expenses[0]}
         />
         <ExpenseItem
         expense = {expenses[1]}
         />
         <ExpenseItem
         expense = {expenses[2]}
         />  
         <ExpenseItem
         expense = {expenses[3]}
         />
      </header>
    </div>
  );
}

export default App;
