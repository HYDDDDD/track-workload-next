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

interface IInfo {
  activityUser?: string;
  firstName: string;
  branch: string;
  totalHour: number;
}

const GradientChart = () => {
  // _Context
  const { activites } = useAuth();

  // _State
  const [summaryInfo, setSummaryInfo] = useState<IExportDataProps[]>([]);
  const [infoUsers, setInfoUsers] = useState<IUserDataProps[]>([]);
  const [reports, setReports] = useState<IInfo[]>([]);
  let info: IInfo[] = [];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "จำนวนชั่วโมงทั้งหมดแต่ละสาขา",
      },
    },
  };

  const data = {
    labels: reports.map((label) => label.branch),
    datasets: [
      {
        label: "จำนวนชั่วโมงแต่ละสาขา(ชั่วโมง)",
        data: reports.map((data) => data.totalHour),
        borderColor: "#FFC5C5",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    handleAddInfo({ activites, infoUsers, setSummaryInfo });
  }, [infoUsers]);

  useEffect(() => {
    handleGetUsers(setInfoUsers);
  }, []);

  useEffect(() => {
    summaryInfo.forEach((activity) => {
      if (activity.totalHour) {
        const existingItemIndex = info.findIndex(
          (item) => item.branch == activity.branch,
        );

        if (existingItemIndex !== -1) {
          info[existingItemIndex].totalHour += activity.totalHour;
        } else {
          info.push({
            activityUser: activity.activityUser,
            firstName: activity.firstName,
            branch: activity.branch,
            totalHour: activity.totalHour,
          });
        }

        info.sort((a, b) => {
          if (a.totalHour !== undefined && b.totalHour !== undefined) {
            return b.totalHour - a.totalHour;
          }
          return 0;
        });

        setReports(info.slice(0, 5));
      }
    });
  }, [summaryInfo]);

  return <Line options={options} data={data} />;
};

export default GradientChart;
