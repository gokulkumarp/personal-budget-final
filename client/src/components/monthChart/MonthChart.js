import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { monthBudget } from "../../api/budget";

const MonthChart = () => {
  const [month, setMonth] = useState([]);

  const getMonthlyBudget = () => {
    monthBudget()
      .then((res) => {
        setMonth(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMonthlyBudget();
  }, []);

  let monthlyData = Array.from(Array(12)).fill(0);
  month.map((item, i) => {
    monthlyData[parseInt(item._id) - 1] = parseInt(item.total);
  });

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Budget",
        hoverBorderColor: "#FFF",
        data: monthlyData,
      },
    ],
  };

  return (
    <Line
      data={data}
      width={400}
      height={400}
      options={{
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};

export default MonthChart;
