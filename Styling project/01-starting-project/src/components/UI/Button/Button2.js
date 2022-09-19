import React from 'react';      

import classes from './Button.module.css';     //ako hocemo da koristimo CSS MODULES, moramo da importujemo na ovaj nacin (ne moramo da stavimo classes, moze i nesto drugo npr styles)                                   

/* const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}; */

//da bi radilo preko CSS MODULES, gornji kod modifikujemo ovako
//media query koji smo preko styled-components u Button.css stavili u okviru css koda, za css modules u Button.module.css smo stavili van koda na dnu, pa smo morali da ubacimo i selektor .button da bi radilo
const Button = props => {
    return (
      <button type={props.type} className={classes.button} onClick={props.onClick}>
        {props.children}
      </button>
    );
  };


export default Button;