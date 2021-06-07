import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
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
          <Expenses expenses = {expenses}/>
      </header>
    </div>
  );
}

export default App;
