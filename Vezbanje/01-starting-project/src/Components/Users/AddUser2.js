import React, { useState, useRef } from 'react';                                             //ubacujemo useRef hook, zbog cega nam dosta koda vezano za state nije potrebno

/* import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css'; */

const AddUser2 = (props) => {
  const nameInputRef = useRef();                                                             //pravimo ref za name; u input na koji je vezan dodajemo ugradjeni ref prop, koji sad uvezuje HTML kod sa ovim ref hook
  const ageInputRef = useRef();                                                              //pravimo ref za age; takodje u input na koji je vezan dodajemo ref prop

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';                                                         //kao sa state, kad se klikne dugme i posalju vrednosti, ta polja se ponovo resetuju
    ageInputRef.current.value = '';                                                          //ali nema potrebe za funkcijom koja ih postavlja na "" kao u redu 34,35 u AddUser.js, vec se samo postavi iznos 
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />                                                                                   //da bi se gornji useRef() uvezao sa HTML kodom, treba za taj HTML element postaviti ref={}, u ovom slucaju smo ih stavili u input za ime i godine
      )};                                    
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />  
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

//export default AddUser2;
//kad se radi preko Ref hooka kao ovde, gledajuci elemente u JSX delu npr input, gledamo ih kao nekontrolisane komponente, s obzirom da ne kontrolisemo state input elemenata sa React-om
// s druge strane kad smo radili preko useState() hooks, mi se preko state-ova kontrolisali te komponente tj njihov state je kontrolisan od strane React-a