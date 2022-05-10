import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses.js';

function App() {
  const expense = [
    {
      id:'e1',
      title:'Car Inurance',
      amount:250.67,
      date:new Date(2022, 0,12)
    },
    {
      id:'e2',
      title:'wi-fi',
      amount:650.67,
      date:new Date(2022, 1,22)
    },
    {
      id:'e3',
      title:'Television',
      amount:150.89,
      date:new Date(2022, 3,18)
    },
    {
      id:'e4',
      title:'Phone',
      amount:67.67,
      date:new Date(2022, 7,1)
    }
  ]
  return (
    <div className="App">
      <h2>Lets Get Started</h2> 
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
