import { createColumnHelper } from "@tanstack/react-table";

import { IActivityResponseDataProps } from "@/types/activity/activity.types";

const columnHelper = createColumnHelper<IActivityResponseDataProps>();

// _MOCK
const userContext = "1";

export const UserColumns = [
  columnHelper.accessor("id", {
    header: "ลำดับ",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.row.index + 1;
      }
    },
  }),
  columnHelper.accessor("category", {
    header: "ประเภทภาระงาน",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor("updateDate", {
    header: "วันที่ส่ง",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor("hours", {
    header: "จำนวนชั่วโมง",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
];
