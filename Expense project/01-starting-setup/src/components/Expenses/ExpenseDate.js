import React from "react";

import './ExpenseDate.css';

//ne smemo zaboraviti props ubaciti u argument funkcije
/* function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate; */


//ovde dodajemo stilizaciju
//ne smemo zaboraviti props ubaciti u argument funkcije
function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    
    return (
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div  className='expense-date__year'>{year}</div>
        <div  className='expense-day'>{day}</div>
      </div>
    );
  }
  
  export default ExpenseDate;