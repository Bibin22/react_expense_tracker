import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const onSaveChangeDataHandler = (expenseData)=>{
        const NewExpenseData = {
            ...expenseData,
            id:Math.random.toString()
        }
        props.onAddExpense(NewExpenseData)
    }
    

    return (
        <div className="new-expense">
            <ExpenseForm onSaveChangeData={onSaveChangeDataHandler}/>
        </div>
    )
}

export default NewExpense;