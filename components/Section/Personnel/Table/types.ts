import { ColumnDef } from "@tanstack/react-table";

import { IActivityResponseDataProps } from "@/types/activity/activity.types";

export interface ITableProps {
  info: IActivityResponseDataProps[];
  columns: any[];
}
