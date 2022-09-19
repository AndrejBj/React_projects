import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {                
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;      //className={classes.card} pristupamo preko css modules klase u Card.module.css, u ovom slucaju imamo tamo samo .card pa uzimamo nju
};                                                                                            //{props.children} je poseban ugradjeni props koji se odnosi na ceo custom made wrapper koji smo napravili tj na sve unutar <Card ... /> tako da taj Card nasledi sve sto se nalazi unutar njega i to prikaze na stranici (s obzirom da je on roditelj sad)
                                                                                              //{props.className} daje do znanja React-u da koristi AddUser.module.css koji smo uvezali u AddUser.js, tako sto prepozna sta je ustvari className (mozemo staviti bilo sta npr props.nesto, ako smo i u AddUser.js stavili <Card nesto={classes.input})

export default Card;