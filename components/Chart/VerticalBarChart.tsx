"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { OFFICERTABLE } from "@/constant/constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const VerticalBarChart = () => {
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
        text: "Top 5 บุคลากรที่ได้ชั่วโมงมากที่สุด",
      },
    },
  };

  const data = {
    labels: labelChart.map((label) => label),
    datasets: [
      {
        label: "จำนวนชั่วโมงด้านทำนุบำรุงศิลปวัฒนธรรม(ชั่วโมง)",
        data: datas.map((data) => data),
        backgroundColor: "#BBD7E9",
      },
      {
        label: "จำนวนชั่วโมงด้านส่งเสริมสุขภาพ(ชั่วโมง)",
        data: datas.map((data) => data),
        backgroundColor: "#FFC5C5",
      },
    ],
  };

  // _Effect
  useEffect(() => {
    if (OFFICERTABLE) {
      const filteredFirstName = OFFICERTABLE.map((info) => info.firstName);
      const filteredTotalHour = OFFICERTABLE.map((info) => info.totalHours);

      if (filteredFirstName) {
        setLabelChart(filteredFirstName);
      }

      if (filteredTotalHour) {
        setDatas(filteredTotalHour);
      }
    }
  }, [OFFICERTABLE]);

  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
