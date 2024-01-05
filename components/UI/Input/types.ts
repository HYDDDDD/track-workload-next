import { InputHTMLAttributes } from "react";

import { Table } from "@tanstack/react-table";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  component: "input" | "select" | "textarea";
}
export interface IInputTableProps {
  table: Table<any>;
}
