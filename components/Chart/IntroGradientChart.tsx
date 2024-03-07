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
import clsx from "clsx";

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
  hourCulture: number;
  hourHealth: number;
}

const IntroGradientChart = () => {
  // _Context
  const { activites } = useAuth();

  // _State
  const [summaryInfo, setSummaryInfo] = useState<IExportDataProps[]>([]);
  const [infoUsers, setInfoUsers] = useState<IUserDataProps[]>([]);
  const [reports, setReports] = useState<IInfo[]>([]);
  let info: IInfo[] = [];

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 16,
          },
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "จำนวนชั่วโมงทั้งหมดแต่ละสาขา",
        font: {
          size: 18,
        },
        color: "#fff",
      },
    },
    scales: {
      x: {
        grid: {
          color: "#575757",
        },
        ticks: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "#575757",
        },
        ticks: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const data = {
    labels: reports.map((label) => label.branch),
    datasets: [
      {
        label: "จำนวนชั่วโมงด้านทำนุบำรุงศิลปวัฒนธรรม(ชั่วโมง)",
        data: reports.map((info) => info.hourCulture),
        borderColor: "#BBD7E9",
        backgroundColor: "#3c9dda",
        borderWidth: 5,
      },
      {
        label: "จำนวนชั่วโมงด้านส่งเสริมสุขภาพ(ชั่วโมง)",
        data: reports.map((info) => info.hourHealth),
        borderColor: "#FFC5C5",
        backgroundColor: "#f74545",
        borderWidth: 5,
      },
      // {
      //   label: "จำนวนชั่วโมงทั้งหมด(ชั่วโมง)",
      //   data: reports.map((info) => info.totalHour),
      //   borderColor: "#67b450",
      //   backgroundColor: "#2c6b19",
      // },
    ],
  };

  const handleSortArray = (arr: IInfo[]) => {
    arr
      .sort((a, b) => {
        if (a.hourCulture !== undefined && b.hourCulture !== undefined) {
          return b.hourCulture - a.hourCulture;
        }
        return 0;
      })
      .slice(0, 5);
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

          if (activity.category === "งานด้านทำนุบำรุงศิลปวัฒนธรรม") {
            info[existingItemIndex].hourCulture += activity.totalHour;
          } else if (activity.category === "งานด้านส่งเสริมสุขภาพ") {
            info[existingItemIndex].hourHealth += activity.totalHour;
          }
        } else {
          if (activity.category === "งานด้านทำนุบำรุงศิลปวัฒนธรรม") {
            info.push({
              activityUser: activity.activityUser,
              firstName: activity.firstName,
              branch: activity.branch,
              totalHour: activity.totalHour,
              hourCulture: activity.totalHour,
              hourHealth: 0,
            });
          } else if (activity.category === "งานด้านส่งเสริมสุขภาพ") {
            info.push({
              activityUser: activity.activityUser,
              firstName: activity.firstName,
              branch: activity.branch,
              totalHour: activity.totalHour,
              hourCulture: 0,
              hourHealth: activity.totalHour,
            });
          }
        }

        handleSortArray(info);

        setReports(info.slice(0, 5));
      }
    });
  }, [summaryInfo]);

  return (
    <div
      className={clsx(`h-full w-full`, `sm:overflow-hidden sm:overflow-x-auto`)}
    >
      <div className={clsx([`relative`, `sm:h-40-vh sm:w-80-vh`])}>
        <Line options={options} data={data} className="canvas" />
      </div>
    </div>
  );
};

export default IntroGradientChart;
