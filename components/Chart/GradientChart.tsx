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

import { useAuth } from "@/context/AuthProvider";
import { IExportDataProps } from "@/types/activity/activity.types";
import { IUserDataProps } from "@/types/user/user.types";

import {
  handleAddInfo,
  handleGetUsers,
} from "../Section/Officer/_action/AddUserDataTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const GradientChart = () => {
  // _Context
  const { activites } = useAuth();

  // _State
  const [summaryInfo, setSummaryInfo] = useState<IExportDataProps[]>([]);
  const [infoUsers, setInfoUsers] = useState<IUserDataProps[]>([]);
  const [labelChart, setLabelChart] = useState<string[]>([]);
  const [datas, setDatas] = useState<(number | undefined)[]>([]);

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

  useEffect(() => {
    handleAddInfo({ activites, infoUsers, setSummaryInfo });
  }, [infoUsers]);

  useEffect(() => {
    if (summaryInfo) {
      const filteredFirstName = summaryInfo.map((info) => info.branch);
      const filteredTotalHour = summaryInfo.map((info) => info.totalHours);

      if (filteredFirstName) {
        setLabelChart(filteredFirstName);
      }

      if (filteredTotalHour) {
        setDatas(filteredTotalHour);
      }
    }
  }, [summaryInfo]);

  useEffect(() => {
    handleGetUsers(setInfoUsers);
  }, []);

  return <Line options={options} data={data} />;
};

export default GradientChart;
