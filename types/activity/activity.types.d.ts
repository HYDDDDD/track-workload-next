import { IBranchDataProps } from "../branch/branch.types";
import { IStatusDataProps } from "../status/status.types";

export interface IActivityRequestDataProps {
  id: string;
  category: string;
  image: string;
  createDate: string;
  createBy: string;
  updateDate: string;
  hours: number;
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
  // hours: number;
  totalHours: number;
  status: IStatusDataProps;
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
