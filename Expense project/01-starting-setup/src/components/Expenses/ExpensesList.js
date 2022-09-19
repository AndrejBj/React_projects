import React from "react"

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

//prebacili smo iz expenses.js
/* const ExpensesList = () => {
    let expensesContent = <p>No expenses found</p>;

    if (filteredExpenses.length > 0) {
        expensesContent =  filteredExpenses.map((expense) => (      
          <ExpenseItem                                                                                             
            key={expense.id}                                                                                       
            title={expense.title}                                                                                  
            amount={expense.amount}                                                                                
            date={expense.date}
            />
          ))
      };
}

export default ExpensesList; */


//ali malo posle izmenili kod
/* const ExpensesList = () => {
    let expensesContent = <p>No expenses found</p>;

    if (props.items.length > 0) {
        expensesContent =  props.items.map((expense) => (      
          <ExpenseItem                                                                                             
            key={expense.id}                                                                                       
            title={expense.title}                                                                                  
            amount={expense.amount}                                                                                
            date={expense.date}
            />
          ))
      };
}

export default ExpensesList; */


//dalje smo izmenili kod ovako
const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
               <ExpenseItem                                                                                             
               key={expense.id}                                                                                       
               title={expense.title}                                                                                  
               amount={expense.amount}                                                                                
               date={expense.date} 
            />
            ))}
        </ul>
    );
};

export default ExpensesList;