import React from 'react';

import './ExpensesFilter.css';


const ExpensesFilter = (props) => {                     //ova funkcija tehnicki prikazuje div deo, dok je funkcija unutar funkcije deo roditeljske komponente tj expenses.js
                                                        //koja preko <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> (i koda od reda 10 do 15) kontrolise ovu komponentu
    const dropDownChangeHandler = (event) => {          //tako da roditeljska komponenta na taj nacin kontrolise dete komponentu
        props.onChangeFilter(event.target.value);
    };

  return (                                              //red 16: {props.selected} prima od roditelja, onChange={dropDownChangeHandler} salje roditelju; ovo se naziva KONTROLISANJE KOMPONENTE
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
//1. ubacujemo osluskivac. Posto ce nesto da se menja tj bice event na select delu kad se biraju godinu, stavicemo tu onChange={}
//2. napravimo funkciju u redu 8 s kojom uvezemo taj osluskivac
//3. u expenses.js dodamo ExpenseFilter (kroz novi div) i importujemo ovaj fajl
//4. u expenses.js zatim dodamo osluskivac i napravimo funkciju (u ovom slucaju filterChangeHandler) na koju nas osluskivac pokazuje
//5. dodamo props u ExpenseFilter funkciju u redu 6 i na taj nacin uvezemo. pa samim tim uvezemo fajlove expenses.js i ExpensesFilter.js
//6. dodamo props.onChangeFilter u red 7 i uvezemo na taj nacin funkcije iz expenses.js i ovog fajla
//7. u expenses.js importujemo {useState} i ubacimo use