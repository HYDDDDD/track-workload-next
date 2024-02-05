import { IBranchDataProps } from "../branch/branch.types";
import { IStatusDataProps } from "../status/status.types";

export interface IActivityRequestDataProps {
  id: string;
  activityUser: string;
  category: string;
  status?: string;
  updateDate: string;
  image?: File | null;
  isSelected?: boolean;
  hour: number;
}

export interface IActivityResponseDataProps {
  userID: string;
  id: string;
  category: string;
  updateDate: string;
  hours: number;
}

export interface IActivityResponseDataOfficerProps {
  userID?: string;
  id: string;
  firstName: string;
  lastName: string;
  branch: IBranchDataProps;
  category: IActivityDataProps;
  updateDate: string;
  totalHours?: number;
  status?: string;
}

export interface IExportDataProps {
  userID?: string;
  id: string;
  firstName: string;
  lastName: string;
  branch: string;
  category: string;
  updateDate?: string;
  hours?: number;
  totalHours?: number;
  status?: IStatusDataProps;
}

export interface IExportUsersDataProps {
  id: string;
  activityUser: string;
  firstName: string;
  lastName: string;
  branch: string;
  category: string;
  totalHours: number;
}

export interface IActivityDataProps {
  id: string;
  category: string;
  hour: number;
}
