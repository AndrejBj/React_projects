import React, { useState } from "react";

import ExpenseForm from "./expenseForm";
import "./newExpense.css";

const NewExpense = (props) => {
  //ovaj props uzima podatke od App.js
  const [isEditing, setIsEditing] = useState(false); //dodajemo novi state, koji kad kliknemo na dugme pokaze tekstualna polja gde unosimo podatke; znaci sad imamo 2 state-a -> jedno sa tekstualnim poljima gde unosimo podatke i jedno sa dugmetom koji kad kliknemo pokaze nam tekstualna polja

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, 
      id: Math.random().toString(), 
    };
    props.onAddExpense(expenseData); 
    //console.log(expenseData);
    setIsEditing(false);                                    //ovo ce sad kad submitujemo kroz tekstualna polja neki data, da vrati ponovo na dugme "Add New Expense" tj vratice iz true ponovo u false
  }; 

  const startEditingHandler = () => {
    //funkcija koja pretvara setIsEditing() u true, pa samim tim funkciju iz reda 7 promeni iz false u true i tada se ne vidi vise dumge "Add New Expense" vec se udje u deo gde se u tekstualna polja unose troskovi
    setIsEditing(true); //ispod se vidi kad se klikne dugme da se pretvara iz false u true i pokrece novi state sa tekstualnim poljima za unosenje troskova
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}                     //prosledjujemo u expenseForm.js fajl u onClick deo gde smo kroz props.onCancel pokrenuli tu funkciju stopEditingHandler i koja pretvara vrednost u false
        />
      )}
      <form></form>
    </div>
  );
};

export default NewExpense;

//dodali smo sada dugme u red 16, tako da cemo sad napravati da se tekstualna polja za troskove koji se upisuju na stranici pojaviti tek kad kliknemo to dugme
