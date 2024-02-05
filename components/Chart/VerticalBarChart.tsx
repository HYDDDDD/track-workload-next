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
  const [datas, setDatas] = useState<(number | undefined)[]>([]);
  const [user, setUser] = useState<IUser>({
    firstName: "",
    branch: "",
    category: "",
  });

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
  // useEffect(() => {
  //   if (OFFICERTABLE && (labelChart.length && datas.length) < 5) {
  //     const filteredFirstName = OFFICERTABLE.map((info) => info.firstName);
  //     const filteredTotalHour = OFFICERTABLE.map((info) => info.totalHours);
  //     // 10 20 30 40 50
  //     // 50 40 30 20 10
  //     const newTotalHour = new Array<number>();

  //     for (let index = 0; index < OFFICERTABLE.length; index++) {
  //       if (OFFICERTABLE[index] > OFFICERTABLE[index + 1]) {
  //         OFFICERTABLE.map((info) => newTotalHour.push(info.totalHours));
  //       } else {
  //         OFFICERTABLE[OFFICERTABLE.length];
  //       }
  //     }

  //     console.log("NEW : ", newTotalHour);

  //     // if (filteredFirstName) {
  //     //   setLabelChart(filteredFirstName);
  //     // }

  //     if (filteredTotalHour) {
  //       console.log(filteredTotalHour);

  //       // setDatas(filteredTotalHour);
  //     }
  //   }
  // }, [OFFICERTABLE]);

  useEffect(() => {
    handleAddInfo({ activites, infoUsers, setSummaryInfo });
  }, [infoUsers]);

  useEffect(() => {
    if (summaryInfo && (labelChart.length && datas.length) < 5) {
      // console.log("Sum : ", summaryInfo);

      summaryInfo.map((info) => {
        // const user = {
        //   firstName: info.firstName,
        //   branch: info.branch,
        //   category: info.category,
        //   hour: info.totalHours,
        // };
        // setUser({
        //   ...user,
        //   firstName: info.firstName,
        //   category: info.category,
        // });

        if (
          info.category === "งานด้านทำนุบำรุงศิลปวัฒนธรรม" &&
          info.totalHours
        ) {
          console.log("this :", info);

          setUser({
            ...user,
            hourCulture: info.totalHours,
          });
        } else {
          setUser({
            ...user,
            hourHealth: info.totalHours,
          });
        }

        return user;
      });
      const filteredTotalHour = summaryInfo.map((info) => info.totalHours);

      // const newTotalHour = new Array<number | undefined>();

      // for (let index = 0; index < summaryInfo.length; index++) {
      //   if (summaryInfo[index] > summaryInfo[index + 1]) {
      //     summaryInfo.map((info) => newTotalHour.push(info.totalHours));
      //   } else {
      //     summaryInfo[summaryInfo.length];
      //   }
      // }

      // console.log("NEW : ", newTotalHour);

      // if (filteredFirstName) {
      //   setLabelChart(filteredFirstName);
      // }

      // console.log(filteredTotalHour);

      // if (filteredTotalHour) {
      //   setDatas(filteredTotalHour);
      // }
    }
  }, [summaryInfo]);

  useEffect(() => {
    handleGetUsers(setInfoUsers);
  }, []);
  console.log(user);

  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
