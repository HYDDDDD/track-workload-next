import React, { Fragment } from "react";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import Image from "next/image";

import SlideDownPng from "@/public/slide-down-icon.png";
import SlideUpPng from "@/public/slide-up-icon.png";

import PaginationTable from "../../PaginationTable";
import { ITableProps } from "./types";

const Table = ({ info, columns }: ITableProps) => {
  const table = useReactTable({
    data: info,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // _MOCK
  const userContext = "1";

  return (
    <Fragment>
      <div className={clsx([`tanstackTable`])}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Fragment key={header.id}>
                    {header.column.getCanSort() && (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div
                          className={clsx([
                            `flex items-center justify-center space-x-1`,
                            `sm:flex-col sm:space-x-0`,
                          ])}
                        >
                          <span>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                          </span>

                          {{
                            asc: (
                              <Image
                                src={SlideUpPng}
                                alt="slide up icon png"
                                width={25}
                                height={25}
                                className={clsx([`sm:h-5 sm:w-5`])}
                                priority
                              />
                            ),
                            desc: (
                              <Image
                                src={SlideDownPng}
                                alt="slide down icon png"
                                width={25}
                                height={25}
                                className={clsx([`sm:h-5 sm:w-5`])}
                                priority
                              />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </th>
                    )}
                  </Fragment>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getPageCount() > 0 &&
              table
                .getRowModel()
                .rows.filter((row) => row.original.userID === userContext)
                .map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
          </tbody>
        </table>
        {table.getPageCount() === 0 && (
          <div className={clsx([`notHaveData`])}>
            <p>ไม่มีข้อมูล</p>
          </div>
        )}
        <PaginationTable table={table} />
      </div>
    </Fragment>
  );
};

export default Table;
