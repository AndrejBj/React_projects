import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);         //dataPoint => dataPoint.value znaci da dataPoint objekte pretvaramo u broj, pa cemo sad dobiti novi niz sastavljen od brojeva a ne od objekata kao sto je bilo do sada
  const totalMaximum = Math.max(...dataPointValues);                                  //max() metod ocekuje kao argumente cele brojeve npr max(1, 2, 3), ali mi imamo niz, zbog cega mu saljemo ceo niz ovako max(...dataPointValues), samim tim taj max ce dobiti 12 argumenata i pokazace maximum od njih

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}  
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

//map((dataPoint) => (<ChartBar... znaci da ce ubacivati sve dataPoint-ove u ChartBar, sto znaci da cemo imati ChartBar-ova koliko budemo imali dataPoint-ova
//key smo uvezali sa label tako da ce React razlikovati svaki dataPoint prema label u ovom slucaju (prosli put smo radili preko id)
//value={dataPoint.value} ovaj deo kaze da ce svaki dataPoint dobiti neku svoju vrednost iz ChartBar koju mu zadamo