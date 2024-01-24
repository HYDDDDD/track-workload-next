import { IBranchDataProps } from "../branch/branch.types";
import { IStatusDataProps } from "../status/status.types";

export interface IActivityRequestDataProps {
  activityUser: string;
  category: string;
  status?: string;
  updateDate: string;
  image: File | null;
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
  firstName: string;
  lastName: string;
  branch: string;
  category: string;
  totalHours: number | undefined;
}

export interface IActivityDataProps {
  id: string;
  category: string;
  hours: number;
}
