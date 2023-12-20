import { IActivityResponseDataProps } from "../activity/activity.types";
import { IBranchDataProps } from "../branch/branch.types";
import { IRoleDataProps } from "../role/role.types";

export interface IUserDataProps {
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: IRoleDataProps;
  branch?: IBranchDataProps;
  totalHours?: number;
}
