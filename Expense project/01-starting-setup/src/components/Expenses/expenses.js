import React, { useState } from "react";

import "./expenses.css";
//import ExpenseItem from "./ExpenseItem";                                //ovo nam vise ne treba
import Card from "../UI/Card"; 
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

/* const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {                //filter funkcija prodje kroz sve elemente niza i ako je True, ostavlja element, ako je False, izbaci ga; to naravno radi tako sto inicijalni niz ne dira (da se ne izgube podaci) vec pravi novi filtrirani niz
    return expense.date.getFullYear().toString() === filteredYear;        //znaci iz expense ce izvuci datum, koji ce preko getFullYear() pretboriti u celu godinu, a preko toString() tu godinu pretvoriti u string i uporediti to sa filtereYear, pa ce samo filtrirati ono sto je True; ovo radimo jer imamo Date objekat
  });                                                                     //sad smo kod u redu 29 {props.items.map((expense) pretvorili u {filterExpenses.map((expense) da vraca filtrirane elemente

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (<p>No expenses found</p>) : (filteredExpenses.map((expense) => (         //preko ternarnog operatora smo ubacili ako filter izbaci prazno, tj ako nema podataka, izbacice "No expenses found", u suprotnom izbacuje filtrirane podatke                      
          <ExpenseItem                                                                                             //dole smo hardkodovali koji ce element u expense nizu iznad biti prosledjen u ExpenseItem komponentu i prikazan na stranici; u ovom delu sad to menjamo da bude dinamicki, koristeci map() koji objekte iz expense niza iznad pretvara u JSX objekte i salje u ExpenseItem.js
            key={expense.id}                                                                                       //props.items predstavljaju pokupljeni elementi tog expense niza
            title={expense.title}                                                                                  //POSTO MAPIRAMO LISTU ELEMENATA TROSKA, DA BI REACT MOGAO DA IH RAZLIKUJE IZMEDJU SEBE, MORAMO STAVITI OVAJ SPECIJALNI PROP KAKO BI REACT PREPOZNAO TACNO KOJI ITEM TJ TROSAK DODAJEMO, JER SU NJEMU SVI ELEMENTI TROSKA ISTI, A MI SMO STAVILI DA SE RAZLIKUJU PO ID-u
            amount={expense.amount}                                                                                //dinamicko dodeljivanje expense vrednosti 
            date={expense.date}
          />))
/*         {filteredExpenses.map((expense) => (                                                                    //ne koristimo vise ovaj deo koda 
          <ExpenseItem                                                    
            key={expense.id}                                              
            title={expense.title}                                        
            amount={expense.amount}
            date={expense.date}
          /> */
/*        )}
      </Card>
    </div>
  );
};

export default Expenses; */


//kako bi nam bilo citljivije, ternarni operator iznad mozemo drugacije da napisemo koristeci &&, koji ima istu funkciju ali se moze kod razdvojiti pa je preglednije
/* const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {                
    return expense.date.getFullYear().toString() === filteredYear;       
  });                                                                     

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}                           //u redu 68 sa && stavimo uslov, a u sledecem redu ako ne isupnjava taj uslov, desava se filtriranje podataka
        />
        {filteredExpenses.length === 0 && <p>No expenses found</p>}       
        {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (      
          <ExpenseItem                                                                                             
            key={expense.id}                                                                                       
            title={expense.title}                                                                                  
            amount={expense.amount}                                                                                
            date={expense.date}
          />))
        }
      </Card>
    </div>
  );
};

export default Expenses; */


//3. nacin je preko ubacivanje varijable na koju pokazivac iz JSX koda pokazuje
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {                
    return expense.date.getFullYear().toString() === filteredYear;       
  });                                                                     

  /* let expensesContent = <p>No expenses found</p>;                        //ubacujemo promenljivu na koju pokazuje pokazivac iz reda 116; prebacili smo taj kod u ExpensesList.js
  if (filteredExpenses.length > 0) {
    expensesContent =  filteredExpenses.map((expense) => (      
      <ExpenseItem                                                                                             
        key={expense.id}                                                                                    
        title={expense.title}                                                                                  
        amount={expense.amount}                                                                                
        date={expense.date}
        />
      ))
  }; */

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}                   //{expensesContent} je bio pokazivac u redu 116 ali ne moze da se zakomentarise; posto smo prebacili taj kod u ExpensesList.js, obrisali smo to odavde
          onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>                                          
      </Card>
    </div>
  );
};

export default Expenses;