import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";

//u nastavku stilizujemo div iz CourseInput css fajla i da bi ga koristili, menjamo <div> dole u kodu sa FormControl  
//kad koristimo invalid props u css kodu, u input delu border: 1px solid #ccc; smo izmenili tako da koristimo props tj border: 1px solid ${props => props.invalid ? "red" : "#ccc"}; tako smo i za ostale
//na taj nacin mozemo da sklonimo poslednja dva dela koda za invalid deo (pogledaj CourseInput fajl) jer smo ih vec dinamicki postavili 
const FormControl = styled.div`
   margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? "red" : "black"}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? "red" : "#ccc"};
    background: ${props => props.invalid ? "#ffd7d7" : "transparent"}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);                              //krecemo od toga da smo uneli nesto validno i da je onda true, ako nije validno onda je false

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {                               //ovde smo uneli ovaj deo koji u slucaju da je bilo obojeno tekstualno polje zbog prethodnog nevalidnog unosa, i sad kad nesto ponovo upisemo, automatski se obrise boja koja je ranije bila tu zbog prethodnog nevalidnog unosa 
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {                                  //ako je veci length od 0, znaci da ima nesto ukucano i validno je; ovim i sledecim redom onemogucavamo izbacivanje ljubicastog div tj pravouganika koji se ispise prazan kad ne ukucamo nista; trim() izbacuje blenkove                                                      
      setIsValid(false);                                                     //ovde imamo false jer ne bi inace usli u taj if deo koji se pokrece samo ako je nevalidno
      return;
    }
    props.onAddGoal(enteredValue);
  };

/*   return (                                                                //{color: !isValid ? "red" : "black"} daje crvenu boju slova ako smo ukucali nesto nevalidno, u suprotnom ide crna boja; isValid je u redu 8 namesten kao true, pa ako nije true, onda je false tj nevalidan
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style=
          {{ borderColor: !isValid ? "red" : "#ccc",                         //borderColor daje boje za tekstualno polje gde pisemo 
          background: !isValid ? "salmon" : "transparent"
        }}                  
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput; */


//u nastavku cemo JSX deo da izmenimo tako da dodamo dinamicki CSS klase
//{`form-control ${!isValid ? "invalid" : ""}`} ce izbaciti ili form-control ili form-control invalid, gde $ u okviru `` pravi konkatenaciju i spaja to sto je unutar {} u slucaju da je nevalidan upis  

/* return (                                                                    
<form onSubmit={formSubmitHandler}>
  <div className={`form-control ${!isValid ? "invalid" : ""}`}>
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

export default CourseInput; */


//sad gornji deo koda menjamo tako sto preko styled-components ubacujemo FromControl umesto <div> koji stilizuje taj <div>, pa ne koristimo vise prethodni -> div className={`form-control ${!isValid ? "invalid" : ""}`}
//s obzirom da styled-components metodi (u ovom slucaju div``) prosledjuju props koji su bili na njima, da bi radio kod kao i pre, moramo samo da dodamo className={!isValid && "invalid"} koji drugacije stilizuje validan/nevalidan tekst kao sto smo pre imali 
/* return (                                                                    
  <form onSubmit={formSubmitHandler}>    
    <FormControl className={!isValid && "invalid"}>    
      <label>Course Goal</label>  
      <input             
        type="text"
        onChange={goalInputChangeHandler}
      />
    </FormControl>
    <Button type="submit">Add Goal</Button>
  </form>
  );
  };
  
  export default CourseInput; */


//mozemo da radimo i preko props za pojedinacne delove css koda, tako sto stavimo invalid={!isValid} tj kad je isValid=true, invalid=false i nece se desiti, a kad je isValid=false, invalid=true, pa ce se desiti taj deo invalid koda 
return (                                                                    
  <form onSubmit={formSubmitHandler}>    
    <FormControl invalid={!isValid}>    
      <label>Course Goal</label>  
      <input             
        type="text"
        onChange={goalInputChangeHandler}
      />
    </FormControl>
    <Button type="submit">Add Goal</Button>
  </form>
  );
  };
  
  export default CourseInput;