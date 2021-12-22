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
      text: "Top 10 best selling products ",
    },
  },
};

const defaultData = (content, labels) => {
  return {
    labels,
    datasets: [
      {
        label: "Quantity (product)",
        data: labels.map((label) => content[label]),
        backgroundColor: "#3FA5EF",
      },
    ],
  };
};

const StatisticalProduct = () => {
  const top10BestSeller = useSelector((state) => state.order.top10BestSeller);
  const [labels, setLabels] = useState([]);
  const [content, setContent] = useState({});
  const [data, setData] = useState(defaultData({}, []));

  useEffect(() => {
    if (top10BestSeller.length === 0) {
      setContent({});
      setLabels([]);
      return;
    }
    const newContent = {};
    top10BestSeller.forEach((item) => {
      newContent[item._id.name] = item.total;
    });
    setContent(newContent);
  }, [top10BestSeller]);

  useEffect(() => {
    if (content) {
      setLabels(Object.keys(content));
    }
  }, [content]);

  useEffect(() => {
    setData(defaultData(content, labels));
  }, [labels]);

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatisticalProduct;
