import React, {useState} from "react";
import ExpenseItem from "./ExpenseItems.js";
import ExpenseFilter from "./ExpenseFIlter.js";
import Card from "./Card.js";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYeat] = useState('2020') 
  const filterChangeHandler = (selectYear)=>{
    setFilteredYeat(selectYear)
  }
  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
    </div>
  );
}

export default Expenses;
