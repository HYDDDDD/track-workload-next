import { IActivityDataProps } from "@/types/activity/activity.types";
import { IRoleDataProps } from "@/types/role/role.types";

export const DEFAULT_USER_ROLE_DATA: IRoleDataProps[] = [
  { id: "1", role: "" },
  { id: "2", role: "Personnel" },
  { id: "3", role: "Officer" },
];

export const DEFAULT_BRANCH_DATA_AUTH = [
  "",
  "Digital Business",
  "Information Technology",
  "Geographic Information Science",
  "Computer Science",
  "Data Science and Application",
  "Computer Engineering",
  "Software Engineering",
  "Computer Graphics and Multimedia",
];

export const DEFAULT_BRANCH_DATA_SUMMARY_OFFICER = [
  "",
  "Digital Business",
  "Information Technology",
  "Geographic Information Science",
  "Computer Science",
  "Data Science and Application",
  "Computer Engineering",
  "Software Engineering",
  "Computer Graphics and Multimedia",
  "Officer",
  "All",
];

export const DEFAULT_ACTIVITY: IActivityDataProps[] = [
  {
    id: "1",
    category: "culture",
    hours: 6,
  },
  {
    id: "2",
    category: "health",
    hours: 4,
  },
];

export const DEFAULT_TOTAL_HOURS = 0;

export const DEFAULT_DAYS_TH = [
  "วันอาทิตย์",
  "วันจันทร์",
  "วันอังคาร",
  "วันพุธ",
  "วันพฤหัสบดี",
  "วันศุกร์",
  "วันเสาร์",
];
