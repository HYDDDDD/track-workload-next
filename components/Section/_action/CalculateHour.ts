import {
  IActivityRequestDataProps,
  IExportDataProps,
  IExportUsersDataProps,
} from "@/types/activity/activity.types";
import { IUserDataProps } from "@/types/user/user.types";

interface IHandleAddCalculateProps {
  result: IExportUsersDataProps[];
  hour: number;
  branchName: string;
  category: string;
  filterInfo: IUserDataProps;
  activity: IActivityRequestDataProps;
  setSummaryInfo?: React.Dispatch<React.SetStateAction<IExportDataProps[]>>;
}

export const handleCalculateHour = ({
  result,
  branchName,
  hour,
  category,
  filterInfo,
  activity,
  setSummaryInfo,
}: IHandleAddCalculateProps) => {
  const existingItemIndex = result.findIndex(
    (item) => item.id == activity.activityUser && item.category == category,
  );

  if (existingItemIndex !== -1) {
    result[existingItemIndex].totalHours += hour;
  } else {
    result.push({
      id: activity.id,
      activityUser: filterInfo.id,
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
};
