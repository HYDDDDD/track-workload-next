import React, { Fragment, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/UI/Button";
import BackIcon from "@/icons/Back";
import BackedIcon from "@/icons/Backed";
import ForwardIcon from "@/icons/Forward";
import ForwardedIcon from "@/icons/Forwarded";
import SortLeftPng from "@/public/sort-left-icon.png";

import { ITableProps } from "./types";
import { IRoleDataProps } from "@/types/role/role.types";
import { DEFAULT_USER_ROLE_DATA } from "@/constant/constant";

const Table = ({ info, columns }: ITableProps) => {
  const table = useReactTable({
    data: info,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // _State
  const [selectedRole, setSelectedRole] = useState<IRoleDataProps>(
    DEFAULT_USER_ROLE_DATA[0],
  );

  // _MOCK
  const userContext = "1";

  return (
    <div className={clsx([`tanstackTable`])}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
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
        <tfoot>
          <tr>
            <td>
              <span>หน้า 1 ถึง 2 ของ 8 รายการ</span>
            </td>
            <td className={clsx([`flex items-center justify-between`])}>
              <div className={clsx([`flex items-center space-x-8`])}>
                <Button
                  variant="none"
                  size="none"
                  disabled={!table.getCanPreviousPage()}
                >
                  <BackedIcon />
                </Button>
                <Button
                  variant="none"
                  size="none"
                  onClick={() => {
                    table.previousPage();
                  }}
                  disabled={!table.getCanPreviousPage()}
                >
                  <BackIcon />
                </Button>
              </div>
              <div className={clsx([`space-x-1.5`])}>
                <Button variant="none">
                  <span>1</span>
                </Button>
                <Button variant="none">
                  <span>2</span>
                </Button>
              </div>
              <div className={clsx([`flex items-center space-x-8`])}>
                <Button
                  variant="none"
                  size="none"
                  onClick={() => {
                    table.nextPage();
                  }}
                  disabled={!table.getCanNextPage()}
                >
                  <ForwardIcon />
                </Button>
                <Button
                  variant="none"
                  size="none"
                  disabled={!table.getCanNextPage()}
                >
                  <ForwardedIcon />
                </Button>
              </div>
            </td>
            <td className={clsx([`space-x-2`])}>
              <select
              // value={pageSize}
              // onChange={(e) => {
              //   setPageSize(Number(e.target.value));
              // }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
              {/* <Listbox value={selectedRole} onChange={setSelectedRole}>
                <div className={clsx(`relative`)}>
                  <Listbox.Button
                    className={clsx([`list-box`, `list-box-text-white`])}
                  >
                    <span>{selectedRole.role}</span>

                    <Image
                      src={SortLeftPng}
                      alt="sort left icon png"
                      className="pointer-events-none"
                      priority
                    />
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className={clsx(`list-box-option`)}>
                      {DEFAULT_USER_ROLE_DATA.map((user) => (
                        <Listbox.Option
                          key={user.id}
                          className={({ active }) =>
                            `${
                              user.id !== "1" &&
                              `relative cursor-default select-none py-2 pl-10 pr-4`
                            } ${
                              user.id !== "1" && active
                                ? `bg-amber-100 text-primary-900`
                                : `text-gray-900`
                            }`
                          }
                          value={user}
                        >
                          {user.id !== "1" && user.role}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox> */}
              <span>รายการต่อหน้า</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
