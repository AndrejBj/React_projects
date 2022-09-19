import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {           //sa map() pretvaramo niz users (povucenih iz App.js) u niz JSX elemenata koji su nakon toga renderovani na DOM; stavili smo da nam izbacuje podatke tako da izbaci niz user objekata gde svaki objekat ima atribut za ime i atribut za godine
    return (                             //<Card className={classes.users}> pored Card stilizacije unosimo i classes.users stilizaciju iz UsersList.module.css
    <Card className={classes.users}>
        <ul>         
            {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old)
            </li>
            ))}             
        </ul>
    </Card>
    );
}; 

export default UsersList