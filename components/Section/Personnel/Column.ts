import { createColumnHelper } from "@tanstack/react-table";

import { IActivityRequestDataProps } from "@/types/activity/activity.types";

const columnHelper = createColumnHelper<IActivityRequestDataProps>();

export const UserColumns = [
  columnHelper.accessor("activityUser", {
    header: "ลำดับ",
    cell: (info) => {
      return info.row.index + 1;
    },
  }),
  columnHelper.accessor("category", {
    header: "ประเภทภาระงาน",
    cell: (info) => {
      if (info.getValue() === "C") {
        return "งานด้านทำนุบำรุงศิลปวัฒนธรรม";
      } else {
        return "งานด้านส่งเสริมสุขภาพ";
      }
    },
  }),
  columnHelper.accessor("updateDate", {
    header: "วันที่ส่ง",
    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("hour", {
    header: "จำนวนชั่วโมง",
    cell: (info) => {
      return info.getValue();
    },
  }),
];
