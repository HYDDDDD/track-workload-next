import {
  IActivityDataProps,
  IActivityResponseDataOfficerProps,
  IActivityResponseDataProps,
} from "@/types/activity/activity.types";
import { IBranchDataProps } from "@/types/branch/branch.types";
import { IRoleDataProps } from "@/types/role/role.types";
import { IStatusDataProps } from "@/types/status/status.types";
import { IUserDataProps } from "@/types/user/user.types";

// User
export const USERS: IUserDataProps[] = [
  {
    userID: "1",
    firstName: "เขียว",
    lastName: "ใจดี",
    email: "green@gmail.com",
    phone: "0999999999",
    role: {
      id: "2",
      role: "Personnel",
    },
    branch: {
      id: "1",
      branchName: "Digital Business",
    },
  },
  {
    userID: "2",
    firstName: "แดง",
    lastName: "สะอาดใจ",
    email: "red@gmail.com",
    phone: "0888888888",
    role: {
      id: "3",
      role: "Officer",
    },
  },
  {
    userID: "3",
    firstName: "น้ำใส",
    lastName: "ไหลเย็น",
    email: "water@gmail.com",
    phone: "0777777777",
    role: {
      id: "2",
      role: "Personnel",
    },
    branch: {
      id: "9",
      branchName: "Software Engineering",
    },
  },
  {
    userID: "4",
    firstName: "คอม",
    lastName: "พิวเตอร์ล่าสุด",
    email: "computer@gmail.com",
    phone: "0777777777",
    role: {
      id: "2",
      role: "Personnel",
    },
    branch: {
      id: "9",
      branchName: "Software Engineering",
    },
  },
  {
    userID: "5",
    firstName: "ส้มเปรี้ยวมาก",
    lastName: "จากสวน",
    email: "orange@gmail.com",
    phone: "0777777777",
    role: {
      id: "3",
      role: "Officer",
    },
  },
  {
    userID: "6",
    firstName: "เสือ",
    lastName: "ใจดี",
    email: "tiger@gmail.com",
    phone: "0777777777",
    role: {
      id: "2",
      role: "Personnel",
    },
    branch: {
      id: "10",
      branchName: "Computer Graphics and Multimedia",
    },
  },
];

// User role
export const DEFAULT_USER_ROLE_DATA: IRoleDataProps[] = [
  { id: "1", role: "" },
  { id: "2", role: "Personnel" },
  { id: "3", role: "Officer" },
];

// Branch
export const DEFAULT_BRANCH_DATA_AUTH: IBranchDataProps[] = [
  { id: "1", branchName: "" },
  { id: "2", branchName: "Digital Business" },
  { id: "3", branchName: "Information Technology" },
  { id: "4", branchName: "Geographic Information Science" },
  { id: "5", branchName: "Computer Science" },
  { id: "6", branchName: "Data Science and Application" },
  { id: "7", branchName: "Computer Engineering" },
  { id: "8", branchName: "Software Engineering" },
  { id: "9", branchName: "Computer Graphics and Multimedia" },
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

// Status
export const DEFAULT_STATUS: IStatusDataProps[] = [
  {
    id: "1",
    status: "",
  },
  {
    id: "2",
    status: "ผ่าน",
  },
  {
    id: "3",
    status: "ไม่ผ่าน",
  },
  {
    id: "4",
    status: "กำลังดำเนินการ",
  },
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

// Officer table in indexpage
export const OFFICERTABLE: IActivityResponseDataOfficerProps[] = [
  {
    id: "1",
    userID: "1",
    firstName: "เขียว",
    lastName: "ใจดี",
    branch: {
      id: "1",
      branchName: "Digital Business",
    },
    category: {
      id: "2",
      category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
      hours: 6,
    },
    totalHours: 0,
    updateDate: "11/11/2023",
    status: {
      id: "2",
      status: "ผ่าน",
    },
  },
  {
    id: "2",
    userID: "1",
    firstName: "เขียว",
    lastName: "ใจดี",
    branch: {
      id: "1",
      branchName: "Digital Business",
    },
    category: {
      id: "2",
      category: "งานด้านส่งเสริมสุขภาพ",
      hours: 4,
    },
    totalHours: 0,
    updateDate: "11/11/2023",
    status: {
      id: "2",
      status: "ผ่าน",
    },
  },
];

// export const PERSONNELTABLE: IActivityResponseDataProps[] = [
//   {
//     userID: "1",
//     id: "3",
//     category: "งานด้านส่งเสริมสุขภาพ",
//     updateDate: "3/12/2023",
//     hours: 4,
//   },
// ];

export const PERSONNELTABLE: IActivityResponseDataProps[] = [
  {
    userID: "1",
    id: "1",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "1/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "2",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "2/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "3",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "3/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "4",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "4/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "5",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "5/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "6",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "6/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "7",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "7/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "8",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "8/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "9",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "9/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "10",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "10/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "11",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "11/12/2023",
    hours: 6,
  },
  {
    userID: "4",
    id: "12",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "2/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "13",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "6/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "14",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "7/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "15",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "6/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "16",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "7/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "17",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "6/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "18",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "7/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "19",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "6/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "20",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "7/12/2023",
    hours: 6,
  },
  {
    userID: "1",
    id: "21",
    category: "งานด้านส่งเสริมสุขภาพ",
    updateDate: "6/12/2023",
    hours: 4,
  },
  {
    userID: "1",
    id: "22",
    category: "งานด้านทำนุบำรุงศิลปวัฒนธรรม",
    updateDate: "7/12/2023",
    hours: 6,
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
