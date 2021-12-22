/* eslint-disable react-hooks/exhaustive-deps */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

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
      text: "Profit Of HQD Mobile Store 2021",
    },
  },
};

const labels = [
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
];

const defaultContent = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};

const defaultData = (content = defaultContent) => {
  return {
    labels,
    datasets: [
      {
        label: "Profit (million)",
        data: labels.map((label, index) => content[index + 1]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
};

const Profit = () => {
  const profit = useSelector((state) => state.order.profit);
  const [content, setContent] = useState(defaultContent);
  const [data, setData] = useState(defaultData());

  useEffect(() => {
    if (profit.length === 0) {
      setContent(defaultContent);
      return;
    }
    profit.forEach((item) => {
      setContent(Object.assign({}, content, { [item._id.month]: item.total }));
    });
  }, [profit]);

  useEffect(() => {
    setData(defaultData(content));
  }, [content]);

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Profit;
