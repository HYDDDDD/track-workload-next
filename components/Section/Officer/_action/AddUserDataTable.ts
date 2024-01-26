import { SetStateAction } from "react";

import axios from "axios";

import {
  BASEURL,
  DEFAULT_ACTIVITY,
  DEFAULT_BRANCH_DATA_AUTH,
} from "@/constant/constant";
import {
  IActivityRequestDataProps,
  IActivityResponseDataOfficerProps,
  IExportDataProps,
  IExportUsersDataProps,
} from "@/types/activity/activity.types";
import { IUserDataProps } from "@/types/user/user.types";

interface IHandleAddInfo {
  activites: IActivityRequestDataProps[];
  setActivityUsers?: React.Dispatch<
    React.SetStateAction<IActivityResponseDataOfficerProps[]>
  >;
  setSummaryInfo?: React.Dispatch<React.SetStateAction<IExportDataProps[]>>;
  infoUsers: IUserDataProps[];
}

export const handleAddInfo = ({
  activites,
  setActivityUsers,
  setSummaryInfo,
  infoUsers,
}: IHandleAddInfo) => {
  const result: IExportUsersDataProps[] = [];

  if (setActivityUsers) {
    setActivityUsers([]);
  }
  activites.map((activity) => {
    infoUsers
      .filter((user) => activity.activityUser == user.id)
      .map((filterInfo) => {
        let idActivity = "";
        let branchName = "";
        let valueBranch = "";
        let category = "";
        let hour = 0;

        DEFAULT_BRANCH_DATA_AUTH.forEach((branch) => {
          if (branch.value == filterInfo.branch) {
            idActivity = branch.id;
            branchName = branch.branchName;
            valueBranch = branch.value;
          }
        });

        DEFAULT_ACTIVITY.forEach((data) => {
          if (
            activity.category === "C" &&
            "งานด้านทำนุบำรุงศิลปวัฒนธรรม" === data.category
          ) {
            category = data.category;
            hour += data.hours;
          } else if (
            activity.category === "H" &&
            "งานด้านส่งเสริมสุขภาพ" === data.category
          ) {
            category = data.category;
            hour += data.hours;
          }
        });

        if (activity.status === "P") {
          const existingItemIndex = result.findIndex(
            (item) =>
              item.id == activity.activityUser && item.category == category,
          );

          if (existingItemIndex !== -1) {
            result[existingItemIndex].totalHours += hour;
          } else {
            result.push({
              id: filterInfo.id,
              firstName: filterInfo.firstName,
              lastName: filterInfo.lastName,
              branch: branchName,
              category: category,
              totalHours: activity.hour,
            });
          }

          if (setSummaryInfo) {
            setSummaryInfo(result);
          }
        } else {
          const data: IActivityResponseDataOfficerProps = {
            id: filterInfo.id,
            firstName: filterInfo.firstName,
            lastName: filterInfo.lastName,
            branch: {
              id: idActivity,
              branchName: branchName,
              value: valueBranch,
            },
            category: {
              id: idActivity,
              category: category,
              hours: hour,
            },
            updateDate: activity.updateDate,
            totalHours: hour,
            status: activity.status,
          };
          if (setActivityUsers) {
            setActivityUsers((prevInfo) => [...prevInfo, data]);
          }
        }
      });
  });
};

export const handleGetUsers = async (
  setInfoUsers: (value: SetStateAction<IUserDataProps[]>) => void,
) => {
  const storedToken = localStorage.getItem("auth_token");

  if (storedToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    const response = await axios.get(`${BASEURL}/api/user/`);
    setInfoUsers(response.data);
  } else {
    console.error("No token found in Local Storage");
  }
};
