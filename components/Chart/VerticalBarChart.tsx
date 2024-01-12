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
    if (OFFICERTABLE && (labelChart.length && datas.length) < 5) {
      const filteredFirstName = OFFICERTABLE.map((info) => info.firstName);
      const filteredTotalHour = OFFICERTABLE.map((info) => info.totalHours);
      // 10 20 30 40 50
      // 50 40 30 20 10
      const newTotalHour = new Array<number>();

      for (let index = 0; index < OFFICERTABLE.length; index++) {
        if (OFFICERTABLE[index] > OFFICERTABLE[index + 1]) {
          OFFICERTABLE.map((info) => newTotalHour.push(info.totalHours));
        } else {
          OFFICERTABLE[OFFICERTABLE.length];
        }
      }

      console.log("NEW : ", newTotalHour);

      // if (filteredFirstName) {
      //   setLabelChart(filteredFirstName);
      // }

      if (filteredTotalHour) {
        console.log(filteredTotalHour);

        // setDatas(filteredTotalHour);
      }
    }
  }, [OFFICERTABLE]);

  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
