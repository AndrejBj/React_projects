import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {                 //koristimo Card wrapper i nas Button (ne default html button) koji smo napravili za ovaj fajl; takodje u JSX elemente ubacujemo stilizaciju iz ErrorModal.module.css
    return (                                    //takodje izvan Card ubacujemo  <div className={classes.backdrop} /> koji zatamni zadnji deo stranice kad iskoci alert sa error-om
    <div>
        <div className={classes.backdrop} onClick={props.onConfirm}/>
        <Card className={classes.modal}>                          
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>      
            </footer>
        </Card>
    </div>
    )
}

export default ErrorModal;