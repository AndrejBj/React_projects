import ReactDOM from 'react-dom/client';                               //importujemo objekat ReactDOM iz package.json; odande ne importujemo React, vec samo ReactDOM, dok je ranije trebalo kroz svaki fajl da se importuje React da komp razume da koristimo JSX  

import './index.css';                                                  
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));     //document.getElementById('root') povlaci <div> root iz dokumenta index.html (public deo, red 31) u koji cemo da ubacujemo react; ReactDOM.createRoot() jer metoda iz ReactDOM biblioteke koja kaze React-u da to treba da bude root tj osnova aplikacije gde ce se react aplikacija renderovati
root.render(<App />);                                                  //kreirani objekat root iz reda iznad pokrece App u tom root <div> 