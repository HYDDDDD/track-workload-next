"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { OFFICERTABLE } from "@/constant/constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const GradientChart = () => {
  // _State
  const [labelChart, setLabelChart] = useState<string[]>([]);
  const [datas, setDatas] = useState<number[]>([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "จำนวนชั่วโมงของแต่ละสาขา",
      },
    },
  };

  const data = {
    labels: labelChart.map((label) => label),
    datasets: [
      {
        label: "จำนวนชั่วโมง(ชั่วโมง)",
        data: datas.map((data) => data),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // _Effect
  useEffect(() => {
    if (OFFICERTABLE) {
      const filteredFirstName = OFFICERTABLE.map(
        (info) => info.branch.branchName,
      );
      const filteredTotalHour = OFFICERTABLE.map((info) => info.totalHours);

      if (filteredFirstName) {
        setLabelChart(filteredFirstName);
      }

      if (filteredTotalHour) {
        setDatas(filteredTotalHour);
      }
    }
  }, [OFFICERTABLE]);

  return <Line options={options} data={data} />;
};

export default GradientChart;
