import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import classes from "./CourseInput.module.css";                              
//import styled from "styled-components";                                    //ovde sad koristimo CSS MODULES


const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);                              

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {                                
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {                                                                           
      setIsValid(false);                                                    
      return;
    }
    props.onAddGoal(enteredValue);
  };

return (                                         //kad uvezujemo CSS MODULES kao u redu 31 gde ne mozemo da stavimo classes.form-control jer je form-control invalid sintaksa zbog razmaka, uradimo {classes["form-control"]}                                 
                                                 //za invalid deo ubacujemo kao pre ${!isValid && classes.invalid}, gde ubacujemo invalid deo klase ako je isValid=false
 <form onSubmit={formSubmitHandler}>            
    <div className={`${classes["form-control"]} ${!isValid && classes.invalid}`}>    
      <label>Course Goal</label>  
      <input             
        type="text"
        onChange={goalInputChangeHandler}
      />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
  );
  };
  
  export default CourseInput;