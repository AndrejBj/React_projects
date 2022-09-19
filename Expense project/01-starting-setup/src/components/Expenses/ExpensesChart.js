import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ];

    for (const expense of props.expenses) {                          //pravimo for petlju s kojom prolazimo kroz sve nase expenses koje pokupimo kroz props; posto idemo kroz nizove, treba da napisemo (const expense of props.expenses), da smo isli kroz objekte pisali bi (const expense in props.expenses)
        const expenseMonth = expense.date.getMonth();                //expense.date.getMonth() znaci da pogledamo svaki expense, date je objekat za datum koji pretvorimo sa getMonth() da vidimo na koji se mesec odnosi i updateujemo vrednost konkretnog dataPoint-a za vrednost troska; pocinjemo od 0, januar je 0, februar 1 itd
        chartDataPoints[expenseMonth].value += expense.amount;       //expenseMonth ce biti indeks sa vrednostima od 0 do 11 koji ce vracati mesece od jan do dec; u prevodu odavde svaki mesec povecavamo za vrednost troska                                           
    }

    return <Chart dataPoints={chartDataPoints}/>                     //dataPoints uvezuje sa Chart.js preko props, gde saljemo chartDataPoints koji smo dobili odavde tj total troskove po mesecu
}

export default ExpensesChart;