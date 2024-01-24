import { createColumnHelper } from "@tanstack/react-table";

import { IActivityResponseDataOfficerProps } from "@/types/activity/activity.types";

const columnHelper = createColumnHelper<IActivityResponseDataOfficerProps>();

export const SummaryInfoColumn = [
  columnHelper.accessor("id", {
    header: "ลำดับ",
    cell: (info) => {
      return info.row.index + 1;
    },
  }),
  columnHelper.accessor("firstName", {
    header: "ชื่อ",
    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("lastName", {
    header: "นามสกุล",
    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("branch.branchName", {
    header: "สาขา",
    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("category.category", {
    header: "ประเภทภาระงาน",
    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("totalHours", {
    header: "จำนวนชั่วโมง",
    cell: (info) => {
      return info.getValue();
    },
  }),
];
