import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { getBudgetChart } from "../../api/budget";

const BudgetPieChart = () => {
  const [chartBudget, setChartBudget] = useState({
    title: [],
    budget: [],
  });

  const month = new Date().getMonth();
  const getChartBudget = (month) => {
    getBudgetChart(month)
      .then((res) => {
        setChartBudget({
          ...chartBudget,
          title: res.map((data) => {
            return data.name;
          }),
          budget: res.map((data) => {
            return data.budget;
          }),
        });
      })
      .catch((err) => console.log(err));
  };

  const { title, budget } = chartBudget;
 
  const data = {
    labels: title,
    datasets: [
      {
        data: budget,
        backgroundColor: [
          "#03256C",
          "#2541B2",
          "#1768AC",
          "#06BEE1",
          "#DB3A34",
        ],
      },
    ],
  };

  useEffect(() => {
    getChartBudget(month);
  }, []);

  return (
    <Pie
      data={data}
      width={400}
      height={400}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};

export default BudgetPieChart;
