import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { getBudgetChart } from "../../api/budget";

const BudgetBarChart = () => {
  const [chartBudget, setChartBudget] = useState({
    budget: [],
    capacity: [],
    title: [],
  });
  const month = new Date().getMonth();
  const getChartBudget = (month) => {
    getBudgetChart(month)
      .then((res) => {
        setChartBudget({
          ...chartBudget,
          budget: res.map((data) => {
            return data.budget;
          }),
          capacity: res.map((data) => {
            return data.capacity;
          }),
          title: res.map((data) => {
            return data.name;
          }),
        });
      })
      .catch((err) => console.log(err));
  };

  const { budget, capacity, title } = chartBudget;
  var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};
  const data = {
    labels: title,
    datasets: [
      {
        label: "Budget",
        data: budget,
        backgroundColor: randomColorGenerator(),
        hoverBackgroundColor: randomColorGenerator(),
        hoverBorderWidth: 2,
        hoverBorderColor: "lightgrey",
      },
      {
        label: "Expense",
        data: capacity,
        backgroundColor: randomColorGenerator(),
        hoverBackgroundColor: randomColorGenerator(),
        hoverBorderWidth: 2,
        hoverBorderColor: "lightgrey",
      },
    ],
  };

  let options = {
    maintainAspectRatio: false,
    animation: {
      duration: 10,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: { display: false },
        },
      ],
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    }, // scales
    legend: { display: true },
  }; // options

  useEffect(() => {
    getChartBudget(month);
  }, []);

  return <Bar data={data} width={400} height={400} options={options} />;
};

export default BudgetBarChart;
