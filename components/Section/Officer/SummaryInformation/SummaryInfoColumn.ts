import { createColumnHelper } from "@tanstack/react-table";

import { IActivityResponseDataOfficerProps } from "@/types/activity/activity.types";

const columnHelper = createColumnHelper<IActivityResponseDataOfficerProps>();

// _MOCK
const userContext = "1";

export const SummaryInfoColumn = [
  columnHelper.accessor("id", {
    header: "ลำดับ",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.row.index + 1;
      }
    },
  }),
  columnHelper.accessor("firstName", {
    header: "ชื่อ",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor("lastName", {
    header: "นามสกุล",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor("branch.branchName", {
    header: "สาขา",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor("category.category", {
    header: "ประเภทภาระงาน",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor("totalHours", {
    header: "จำนวนชั่วโมง",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor("userID", {
    header: "ติดต่อ",
    cell: (info) => {
      if (userContext === info.row.original.userID) {
        return info.getValue();
      }
    },
  }),
];
