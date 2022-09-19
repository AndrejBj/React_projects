import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value/props.maxValue)*100) + "%";            //daje procenat izmedju 0 i 100 o popunjenosti grafikona (round zaokruzuje)
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

//u redu 14 dodajemo DINAMICKO STILIZOVANJE, tako sto dodajemo style=... to je html kod za stilizaciju, ali u React
//funkcionise tako da stavimo duple viticaste zagrade, gde se spoljne odnose na dinamicki kod, a unutrasnje na javascript objekat 
//mozemo da uradimo hardkodovano, npr style={"background-color": "red"} ili dinamicki style={{height: barFillHeight}} kao u nasem primeru