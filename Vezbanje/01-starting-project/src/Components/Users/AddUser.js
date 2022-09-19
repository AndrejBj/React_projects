import React, {useState} from "react";                  

import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";


const AddUser = (props) => {
  const [enteredUsername,setEnteredUsername]= useState("");     //ubacujemo state za ime i stavljamo da je pocetni state prazan
  const [enteredAge,setEnteredAge]= useState("");               //ubacujemo state za godine i stavljamo da je pocetni state prazan
  const [error, setError] = useState();                         //ubacujemo state za error koji je svakako prazan pa nema potrebe ista da stavljamo u argument
 
  
  const addUserHandler = (event) => {
    event.preventDefault();                                     //po defaultu cim kliknemo dugme i na taj nacin submituje <form>, salje se request serveru da reloaduje stranicu; to nama ne odgovara jer mi zelimo da sacuvamo podatke koje smo uneli ne da ih obrisemo, zato koristimo preventDefault() da spreci reload
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {          //unosimo validaciju ako je prazno
      setError({                                                                          //u slucaju da validacija ne prodje, izbaci ovaj error koji pravi objekat sa 2 artibuda, title i message, koji se pozivaju kroz props takodje unutar ErrorModal.js
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }
    if (+enteredAge < 1) {                                                                //unosimo validaciju ako je negativan broj godina
      setError({                                                                          //isto kao i u redu 17, samo za godine
        title: "invalid age",
        message: "Please enter a valid age (> 0)."
      });
      return;
    }
    //console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredAge, enteredUsername);               //LIFTING THE STATE UP - uvezujemo sa <AddUser onAddUser={addUserHandler}/> iz App.js; ovde stavimo kao da je onAddUser funkcija tj pokrecemo se () jer to i jeste funkcija s obzirom da onAddUser pokazuje na nju u svojoj zagradi; 2 argumenta te funkcije su uneti podaci
    setEnteredUsername("");                                     //brise unete podatke za username kad kliknemo na dugme i dodamo ih 
    setEnteredAge("");                                          //brise unete podatke za age kad kliknemo na dugme i dodamo ih
  };

  const usernameChangeHandler = (event) => {                    //funkcija za ime koja fetch-uje unete podatke i prosledi ih u setState da zameni stari state u novi
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {                         //funkcija za godine koja fetch-uje unete podatke i prosledi ih u setState da zameni stari state u novi
    setEnteredAge(event.target.value);
  }

  const errorHandler = () => {                                  //funkcija koja stavlja setError(null) sto u prevodu znaci da je setError=false, sto ponistava alert prozorcic
    setError(null);                                             //pokazivac na tu funkciju ubacujemo u red 50, gde je onConfirm povezan sa ErrorModal.js gde se direktno trigeruje dugme 
  }

                                                                //Card vuce iz Card.js izgled, dok se nadogradjuje sa className={classes.input} sto vuce iz AddUser.module.css 
                                                                //s obzirom da Card nije default JSX kod kao npr form, label, input itd, React ne zna sta da radi sa className={classes.input}, pa da bi radilo, moramo u Card.js da dodamo
return (                                                        //{error && <ErrorModal title={error.title} message={error.message}/>} kaze da ako postoji error (koji se kroz gornji state za error kreira cim se poziva setError(), iz ErrorModal ce izvuci error.title i error.message
  <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}     
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>      
        <label htmlFor="username">Username</label>
        <input
          id="username" 
          type="text" 
          value={enteredUsername} 
          onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input 
          id="age" 
          type="number" 
          value={enteredAge} 
          onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  </Wrapper>
  );
};

export default AddUser;
//u <label> deo smo ubacili for, ali posto u JSX for ne moze da se unese jer znaci nesto drugo, pise se htmlFor
//kad smo napravili state, ubacili smo u <input> onChange={} koji pokrece funkciju u zagradi cim se tu desi neka promena tj unese ime ili godine 