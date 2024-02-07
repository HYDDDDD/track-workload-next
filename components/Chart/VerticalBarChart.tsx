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
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface IUser {
  id: string;
  firstName: string;
  branch: string;
  category: string;
  hourCulture?: number;
  hourHealth?: number;
}

interface IInfo {
  activityUser?: string;
  firstName: string;
  branch: string;
  totalHour: number;
  hourCulture: number;
  hourHealth: number;
}

const VerticalBarChart = () => {
  // _Context
  const { activites } = useAuth();

  // _State
  const [summaryInfo, setSummaryInfo] = useState<IExportDataProps[]>([]);
  const [infoUsers, setInfoUsers] = useState<IUserDataProps[]>([]);
  const [culture, setCulture] = useState<IUser[]>([]);
  const [health, setHealth] = useState<IUser[]>([]);
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
        text: "Top 5 บุคลากรที่ได้ชั่วโมงมากที่สุด",
      },
    },
  };

  const data = {
    labels: reports.map((label) => label.firstName),
    datasets: [
      {
        label: "จำนวนชั่วโมงด้านทำนุบำรุงศิลปวัฒนธรรม(ชั่วโมง)",
        data: reports.map((info) => info.hourCulture),
        backgroundColor: "#BBD7E9",
      },
      {
        label: "จำนวนชั่วโมงด้านส่งเสริมสุขภาพ(ชั่วโมง)",
        data: reports.map((info) => info.hourHealth),
        backgroundColor: "#FFC5C5",
      },
      {
        label: "จำนวนชั่วโมงทั้งหมด(ชั่วโมง)",
        data: reports.map((info) => info.totalHour),
        backgroundColor: "#67b450",
      },
    ],
  };

  const handleSortArray = (arr: IUser[]) => {
    arr
      .sort((a: IUser, b: IUser) => {
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
    setCulture([]);
    setHealth([]);

    summaryInfo.forEach((activity) => {
      if (activity.totalHour) {
        const existingItemIndex = info.findIndex(
          (item) =>
            item.activityUser == activity.activityUser &&
            item.branch == activity.branch,
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

        info.sort((a, b) => {
          if (a.totalHour !== undefined && b.totalHour !== undefined) {
            return b.totalHour - a.totalHour;
          }
          return 0;
        });

        setReports(info.slice(0, 5));
      }
    });

    handleSortArray(culture);

    handleSortArray(health);
  }, [summaryInfo]);

  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
