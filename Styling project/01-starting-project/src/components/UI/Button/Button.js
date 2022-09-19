//import React from 'react';       skinuli smo React jer ga sad vise ne koristimo, vec koristimo styled-components

import styled from 'styled-components';
//import './Button.css';           to smo skinuli posto cemo raditi preko styled-components

//u nastavku cemo raditi kroz styled-components, preko ATTACKED TEMPLATE sintakse (javascript sintaksa)
//kao sto u nastavku imamo button`` metod, tako nam styled-components daje opciju za sve HTML tagove (p, input, h1, h2...) gde na svaki od tih tagova onda deluje taj metod
//unutar `` ubacimo css kod iz Button.css fajla, samo sto izbacimo button selektore, a za pseudoselektore kao sto su button:focus npr, umesto button stavimo & koji onda ima istu funkciju  
//takodje na kraju smo dodali media query @media s kojim smo stavili poseban width u slucaju da se otvori stranica na mobilnom telefonu, dok smo default za veliki ekran npr PC stavili u ostalom delu (red 11 konkretno)
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);  
  }
`;                                                      //styled je objekat iz styled-components, button`` je poseban metod koji radi na taj styled objekat, gde mi u `` unosimo kod koji ce da deluje na taj button metod

/* const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}; */

export default Button;
