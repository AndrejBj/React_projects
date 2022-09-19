import React, {useState} from "react";

import "./expenseForm.css";

const ExpenseForm = (props) => {                                   //ovaj props uzima podatke od newExpense.js
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {                        //ovaj event u zagradi je default objekat koji ce React uvek izbaciti i koji mozemo videti kao ispis kad udjemo u konzolu na browseru
        setEnteredTitle(event.target.value);                       //kad napisemo bilo sta u title delu i pogledamo sta nam ispise u konzoli browsera, mozemo da vidimo kad kliknemo na target:input da tu ima brda opcija, odakle smo mi uzeli value; kad onda stavimo events.target.value, u konzoli ce nam ispisati tacno sto napisemo i u nasoj aplikaciji (nece vise ispisivati kao do sada 1x clicked!, 2x clicked! itd), a to je zbog toga sto nam sacuva value kad se desi svaki event (u ovom slucaju klik) 
    }                                                              //(event.target.value) nam 
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);                      //takodje (event.target.value) ce uvek dati string, nevezano da li je neki karakter ili broj, uvek je string (zbog toga smo stavili setState("") ovako, da prihvati string)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {                             //funkcija koja pokrece osluskivac prilikom pokretanja nekog eventa, u ovom slucaju kad se pritisne dugme; moramo da je stavimo na pocetak <form> da se odnosi na ceo <form> 
        event.preventDefault();                                    //po defaultu kad kliknemo dugme stranica ce da se reload-uje, posto browser salje serveru request cim se submituje <form>; nama to ne odgovara jer mi taj submit hocemo da handleujemo preko javascript, da skupimo i koristimo podatke i nesto uradimo s njima (tj podatke koje smo uneli u tekstualna polja); zbog toga da bismo izbegli taj reload, koristimo preventDefault();

        const expenseData = {                                      //posto ovde radimo preko 3 state-a, pravimo objekat koji ce da sva 3 state-a spoji; kad radimo preko spojenog state, onda je to vec uradjeno kao od reda 72 do 75
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)                            //Date() je ugradjena funkcija koja pretvara string u objekat za datum 
        }
        //console.log(expenseData);                                //da mozemo da vidimo rezultat
        props.onSaveExpenseData(expenseData);                      //prosledjeno iz reda 15 iz fajla newExpense.js (prethodni red nam sad vise ne treba)
        setEnteredTitle("");                                       //na kraju funkcije stavljamo ovo da nam obrise unete vrednosti iz prozorcica, posto bez toga ostaju tamo; kao novu vrednost stavljamo prazan string tj pocetno stanje, odnosno na taj nacin brisemo podatke
        setEnteredAmount("");                                      //takodje moramo to da uvezemo dole sa <form> sto radimo tako da dodamo u sva 3 inputa value={}
        setEnteredDate("");
    };                          
              
    
    return (                                                       //donji deo se odnosi na osluskivac za submit koji se pokrece cim nesto kliknemo
    <form onSubmit={submitHandler}>                                 
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm; 
//input tagove u React pisemo kao samozatvarajuce, posto medju otvarajucim i zatvarajucim tagom nema content-a; kod input broja, min="0.01" step="0.01" -> default html atributi za input elemente koji kontrolisu kako se ti elementi mogu koristiti
//isto vazi i kod input datuma, gde smo stavili da mogu da se koriste samo godine 2019, 2020, 2021 i 2022
//ZNACI MI SMO KROZ INPUT POSLALI NPR onChange-u FUNKCIJU, A REACT CE INTERNO DA STAVI OSLUSKIVAC I POZVACE TU FUNKCIJU KOJU SMO POSLALI U SLUCAJU DA SE DESI NEKI EVENT ZA PROMENU  


//u nastavku su 2 nacina kako mozemo preko jednog setState() da uredimo vise state-ova:

//1. da ne pisemo 3 odvojena state-a, mozemo da uradimo i ovako u jednom state-u:
/* const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDatee, setEnteredDate] = useState(""); 
    const [userInput, setUserInput] = useState({                         //napravimo jedan state u koji umesto stringa ubacimo objekat u kom se nalaze sva 3 state-a koja hocemo da menjamo
        setEnteredTitle: "",
        setEnteredAmount: "",
        setEnteredDate: "",
    })

    const titleChangeHandler = (event) => {                        
        //setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,                                                //ovo moramo da navedemo jer React sa ovom funkcijom zameni sva 3 stara state-a sa novim, pa kad dodamo druge state-ove ovako dodamo, on ne zaboravi da doda i te stare state-ove (inace bi ih preskocio i nestali bi)
            enteredTitle: event.target.value,                            //ovde je novi title state, van prethodna dva u redu iznad koja smo povukli kao stare vrednosti da ne bi nestali
        })                      
    }                                                              
    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value, 
        })           
    }
    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value, 
        })      
    }

    return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm; */



//2. ovo takodje mozemo zapisati ovako
/* const ExpenseForm = () => {
        const [userInput, setUserInput] = useState({                         
            setEnteredTitle: "",
            setEnteredAmount: "",
            setEnteredDate: "",
        })
    
        const titleChangeHandler = (event) => {   
             //setUserInput({
                //...userInput,
               // enteredAmount: event.target.value, 
            //});                      
            setUserInput((prevState) => {
                return { ...prevState, enteredTitle: event.target.value };                        //prethodni deo funkcije je bolje napisati ovako, zbog toga sto React prvo uradi schedule za neki update, pa onda uradi update, a nakon toga uradi update sledeceg dela po osnovu tog prvog update-a; prethodni kod zbog toga moze dovesti do toga da neki deo koda bude update-ovan po osnovu starog schedule koji nije bio prvo update-ovan, pa se onda radi novi update po osnovu prvog update koji nije zavrsen, pa bude pogresan rezultat    
            });                      
        }                                                              
        const amountChangeHandler = (event) => {
            //setUserInput({
                //...userInput,
                //enteredAmount: event.target.value, 
            //});       
            setUserInput((prevState) => {
                return { ...prevState, enteredAmount: event.target.value };        
            })
        }
        const dateChangeHandler = (event) => {
            //setUserInput({
                //...userInput,
                //enteredDate: event.target.value,
            //});  
            setUserInput((prevState) => {
                    return { ...prevState, enteredDate: event.target.value };        
            })      
        };
    
        return (
        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      );
    };
    
    export default ExpenseForm; */