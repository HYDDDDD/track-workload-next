"use client";

import React, { Fragment, useEffect, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

import StartDateEndDatePicker from "@/components/DatePicker/StartDateEndDate";
import { DEFAULT_ACTIVITY, DEFAULT_STATUS } from "@/constant/constant";
import { useAuth } from "@/context/AuthProvider";
import SortLeftPng from "@/public/sort-left-icon.png";
import {
  IActivityDataProps,
  IActivityResponseDataOfficerProps,
  IExportDataProps,
} from "@/types/activity/activity.types";
import { IStatusDataProps } from "@/types/status/status.types";
import { IUserDataProps } from "@/types/user/user.types";

import TableOfficer from "../Table/TableOfficer";
import { UsersColumns } from "./Column";
import { handleAddInfo, handleGetUsers } from "./_action/AddUserDataTable";

const SearchDataSection = () => {
  // _Context
  const { activites, reload, setReload } = useAuth();

  // _State
  const [activityUsers, setActivityUsers] = useState<
    IActivityResponseDataOfficerProps[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<IActivityDataProps>(
    DEFAULT_ACTIVITY[0],
  );
  const [infoUsers, setInfoUsers] = useState<IUserDataProps[]>([]);
  const [status, setStatus] = useState<IStatusDataProps>(DEFAULT_STATUS[0]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [exportData, setExportData] = useState<IExportDataProps[]>([]);

  // _Effect
  useEffect(() => {
    handleAddInfo({ activites, infoUsers, setActivityUsers });
  }, [infoUsers]);

  useEffect(() => {
    handleGetUsers(setInfoUsers);
  }, []);

  useEffect(() => {
    if (reload) {
      window.location.reload();
      setReload(false);
    }
  }, [reload]);

  return (
    <section className={clsx([`space-y-8`])}>
      <div
        className={clsx([`grid grid-cols-2 gap-16`, `lg:grid-cols-1 lg:gap-8`])}
      >
        <div className={clsx([`list-box-search`])}>
          <div className={clsx([`list-box-search-label`])}>
            <label>ประเภท</label>
            <span>:</span>
          </div>

          <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            <div className={clsx(`container-box-search`)}>
              <Listbox.Button className={clsx(`list-box`)}>
                <span>{selectedCategory.category}</span>

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
                  {DEFAULT_ACTIVITY.map((activity) => (
                    <Listbox.Option
                      key={activity.id}
                      className={({ active }) =>
                        `${
                          activity.id !== "1" &&
                          `relative cursor-default select-none py-2 pl-10 pr-4`
                        } ${
                          activity.id !== "1" && active
                            ? `bg-amber-100 text-primary-900`
                            : `text-gray-900`
                        }`
                      }
                      value={activity}
                    >
                      {activity.id !== "1" && activity.category}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className={clsx([`list-box-search`])}>
          <div className={clsx([`list-box-search-label`])}>
            <label>สถานะ</label>
            <span>:</span>
          </div>

          <Listbox value={status} onChange={setStatus}>
            <div className={clsx(`container-box-search`)}>
              <Listbox.Button className={clsx(`list-box`)}>
                {status.status === "" ? (
                  <span>เลือกสถานะ</span>
                ) : (
                  <span>{status.status}</span>
                )}

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
                  {DEFAULT_STATUS.map((activity) => (
                    <Listbox.Option
                      key={activity.id}
                      className={({ active }) =>
                        `${
                          activity.id !== "1" &&
                          `relative cursor-default select-none py-2 pl-10 pr-4`
                        } ${
                          activity.id !== "1" && active
                            ? `bg-amber-100 text-primary-900`
                            : `text-gray-900`
                        }`
                      }
                      value={activity}
                    >
                      {activity.id !== "1" && activity.status}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>

      <StartDateEndDatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <TableOfficer info={activityUsers} columns={UsersColumns} />
    </section>
  );
};

export default SearchDataSection;
