import React, { useState } from 'react';
import ExpensDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItems.css'
const ExpenseItem = (props) => {
    const [title, SetTitle] = useState(props.title)
    const clickHandler = ()=>{
        SetTitle("Updated")
    }
    return(
        <div className="expense-item">
            <ExpensDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>button</button>
            </div>
        </div>
    );
}
export default ExpenseItem;