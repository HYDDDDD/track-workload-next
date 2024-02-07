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
  firstName: string;
  branch: string;
  category: string;
  hourCulture?: number;
  hourHealth?: number;
}

const VerticalBarChart = () => {
  // _Context
  const { activites } = useAuth();

  // _State
  const [summaryInfo, setSummaryInfo] = useState<IExportDataProps[]>([]);
  const [infoUsers, setInfoUsers] = useState<IUserDataProps[]>([]);
  const [labelChart, setLabelChart] = useState<string[]>([]);
  const [culture, setCulture] = useState<IUser[]>([]);
  const [health, setHealth] = useState<IUser[]>([]);

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
        data: culture.map((info) => info.hourCulture),
        backgroundColor: "#BBD7E9",
      },
      {
        label: "จำนวนชั่วโมงด้านส่งเสริมสุขภาพ(ชั่วโมง)",
        data: health.map((info) => info.hourHealth),
        backgroundColor: "#FFC5C5",
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
    setCulture([]);
    setHealth([]);
    summaryInfo.forEach((activity) => {
      if (labelChart.length < 5) {
        const existingItemIndex = labelChart.findIndex(
          (item) => item == activity.firstName,
        );

        if (existingItemIndex !== -1) {
          labelChart[existingItemIndex] = activity.firstName;
        } else {
          labelChart.push(activity.firstName);
        }
      }

      if (activity.category === "งานด้านทำนุบำรุงศิลปวัฒนธรรม") {
        setCulture((prevInfo) => [
          ...prevInfo,
          {
            firstName: activity.firstName,
            branch: activity.branch,
            category: activity.category,
            hourCulture: activity.totalHours,
          },
        ]);
      } else if (activity.category === "งานด้านส่งเสริมสุขภาพ") {
        setHealth((prevInfo) => [
          ...prevInfo,
          {
            firstName: activity.firstName,
            branch: activity.branch,
            category: activity.category,
            hourHealth: activity.totalHours,
          },
        ]);
      }
    });

    culture
      .sort((a: IUser, b: IUser) => {
        if (a.hourCulture !== undefined && b.hourCulture !== undefined) {
          return b.hourCulture - a.hourCulture;
        }
        return 0;
      })
      .slice(0, 5);
    health
      .sort((a: IUser, b: IUser) => {
        if (a.hourHealth !== undefined && b.hourHealth !== undefined) {
          return b.hourHealth - a.hourHealth;
        }
        return 0;
      })
      .slice(0, 5);
  }, [summaryInfo]);

  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
