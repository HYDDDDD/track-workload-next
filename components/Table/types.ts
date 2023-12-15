import { ColumnDef } from "@tanstack/react-table";

import { IUserDataProps } from "@/types/user/user.types";

export interface ITableProps {
  info: IUserDataProps[];
  columns: ColumnDef<IUserDataProps, string>[];
}
