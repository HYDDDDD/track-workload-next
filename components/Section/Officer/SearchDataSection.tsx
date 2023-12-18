"use client";

import React, { Fragment, useEffect, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

import DownloadButton from "@/components/Button/Download";
import StartDateEndDatePicker from "@/components/DatePicker/StartDateEndDate";
import {
  DEFAULT_ACTIVITY,
  DEFAULT_STATUS,
  OFFICERTABLE,
} from "@/constant/constant";
import SortLeftPng from "@/public/sort-left-icon.png";
import {
  IActivityDataProps,
  IExportDataProps,
} from "@/types/activity/activity.types";
import { IStatusDataProps } from "@/types/status/status.types";

import Table from "../Personnel/Table/Table";
import { UsersColumns } from "./Column";

const SearchDataSection = () => {
  // _State
  const [selectedCategory, setSelectedCategory] = useState<IActivityDataProps>(
    DEFAULT_ACTIVITY[0],
  );
  const [status, setStatus] = useState<IStatusDataProps>(DEFAULT_STATUS[0]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [exportData, setExportData] = useState<IExportDataProps[]>([]);

  useEffect(() => {
    if (OFFICERTABLE) {
      const filteredData = OFFICERTABLE.map((officer) => ({
        id: officer.id,
        firstName: officer.firstName,
        lastName: officer.lastName,
        branch: officer.branch.branchName,
        category: officer.category.category,
        updateDate: officer.updateDate,
        totalHours: officer.totalHours,
      }));

      // Remove duplicates based on 'id'
      const uniqueData = filteredData.filter(
        (value, index, self) =>
          self.findIndex((item) => item.id === value.id) === index,
      );

      if (uniqueData) {
        setExportData(uniqueData);
      }
    }
  }, [OFFICERTABLE]);

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
      <Table info={OFFICERTABLE} columns={UsersColumns} />

      <div className={clsx([`mb-2 flex justify-between`])}>
        <DownloadButton data={exportData} fileName="Export file data" />
      </div>
    </section>
  );
};

export default SearchDataSection;
