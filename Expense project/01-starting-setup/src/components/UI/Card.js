import React from "react";

//card.js komponente uglavnom se odnose na neke elemente kontejner elemente sa oblim uglovima, malo senke itd
import './Card.css';    //odavde vucemo podatke samo za odredjenu stilizaciju koja bi se inace ponavljala, u ovom primeru za wrapper tj ceo tamno sivi deo iza komponenti sa svetlo sivim delom

//STAVI RAZMAK POSLE "card " JER INACE NECE RADITI, ONDA SPOJI KAO STRING I NE VIDI DA SU TO DVA KODA 
function Card(props) {
    const classes = "card " + props.className;                    //bez ovog dela koga imacemo zbrku na proizvodu jer ce raditi samo glavni wrapper, a css delovi unutar tog wrappera ne; da bismo ovo izbegli ubacujemo ovo u kod gde se "card" odnosi na nas custom wrapper iz Card.css fajla i dodaje mu se props.className, da on koristi i className delove unutar njega, kao npr className="expense-item__description" i className="expense-item__price" u ExpenseItem.js, pa ce sad spoljini glavni wrapper i unutrasnji wrapperi za komponente biti stilizovani 
    //return <div className="card">{props.children}</div>;
    return <div className={classes}>{props.children}</div>;      //izmenimo kod samo da dinamicki vuce konstantu iz reda 6
}

export default Card;