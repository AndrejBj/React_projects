import React, { useState } from "react";                            
         
import Expenses from "./components/Expenses/expenses";            
import NewExpense from "./components/newExpense/newExpense";


const DUMMY_EXPENSES = [                                   //vadimo expenses iz App funkcije i preimenujemo ih u DUMMY_EXPENSES jer ce tu biti samo kao primer (zato su dummy) i stavljamo ih izvan nje ovamo 
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {         //pravimo novi expense           
 /*    console.log("in App.js"); 
    console.log(expenses); */
    //setExpenses([expense, ...expenses]);         //pozivamo setExpenses koji nas stari expenses niz pretvori u novi expenses niz, tako da novi expense deo stavi na prvo mesto, a nakon njega popuni sa starim expense vrednostima ostatak niza
    setExpenses((prevExpenses) => {                //gornji deo pisemo ipak ovako, jer kao sto smo pricali pre, zbog mogucnosti da se ne updateuje vec updateovan kod, moramo peske uraditi ovako
      return [expense, ...prevExpenses];
    });               
  };


  return (
    <div>
      <h2>Let's get started!</h2>

      <NewExpense onAddExpense={addExpenseHandler}/> 
      <Expenses items={expenses}></Expenses>
      <p>This is also visible!</p>
    </div>
  );
}

export default App;