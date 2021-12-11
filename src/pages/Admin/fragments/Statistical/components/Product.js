import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

const StatisticalProduct = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Top 10 best selling products ",
      },
    },
  };

  const labels = [
    "iPhoneX",
    "Oppo A31",
    "Xiaomi A50",
    "iPhoneXS",
    "VivoY2",
    "Galaxy A52",
    "SamSung A31",
    "Oppo Reno 2",
    "SamSung A6",
    "Master",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Quantity (product)",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#3FA5EF",
      },
    ],
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatisticalProduct;
