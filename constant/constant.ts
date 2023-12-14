import { IActivityDataProps } from "@/types/activity/activity.types";
import { IRoleDataProps } from "@/types/role/role.types";

// User role
export const DEFAULT_USER_ROLE_DATA: IRoleDataProps[] = [
  { id: "1", role: "" },
  { id: "2", role: "Personnel" },
  { id: "3", role: "Officer" },
];

// Branch
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

// Activity
export const DEFAULT_ACTIVITY: IActivityDataProps[] = [
  {
    id: "1",
    category: "ประเภท",
    hours: 0,
  },
  {
    id: "2",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    hours: 6,
  },
  {
    id: "3",
    category: "งานด้านส่งเสริมสุขภาพ",
    hours: 4,
  },
];

export const DEFAULT_TOTAL_HOURS = 0;

// Days
export const DEFAULT_DAYS_TH = [
  "วันอาทิตย์",
  "วันจันทร์",
  "วันอังคาร",
  "วันพุธ",
  "วันพฤหัสบดี",
  "วันศุกร์",
  "วันเสาร์",
];
