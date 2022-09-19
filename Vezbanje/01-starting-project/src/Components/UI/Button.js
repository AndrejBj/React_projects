import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}         //type={props.type || "button" znaci da cemo kao type dugmeta uzeti props.type, ali u slucaju da props.type ne bude definisano, type ce biti obican "button"
      onClick={props.onClick} 
    >
      {props.children}                      
    </button>                               //{props.children} iz reda iznad daje mogucnost da se salje content izmedju tagova (button tagova u ovom slucaju) naseg <Button>, pored defualt <button> koji smo zamenili nasim
  ); 
};

export default Button;
