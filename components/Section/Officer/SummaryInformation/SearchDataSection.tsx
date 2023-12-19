"use client";

import React, { Fragment, useEffect, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

import {
  DEFAULT_ACTIVITY,
  DEFAULT_BRANCH_DATA_SUMMARY_OFFICER,
} from "@/constant/constant";
import SortLeftPng from "@/public/sort-left-icon.png";
import {
  IActivityDataProps,
  IExportUsersDataProps,
} from "@/types/activity/activity.types";
import { IBranchDataProps } from "@/types/branch/branch.types";

const SearchSummaryInfoSection = () => {
  // _State
  const [selectedCategory, setSelectedCategory] = useState<IActivityDataProps>(
    DEFAULT_ACTIVITY[0],
  );
  // const [status, setStatus] = useState<IStatusDataProps>(DEFAULT_STATUS[0]);
  const [branch, setBranch] = useState<IBranchDataProps>(
    DEFAULT_BRANCH_DATA_SUMMARY_OFFICER[0],
  );

  const [exportData, setExportData] = useState<IExportUsersDataProps[]>([]);

  // _Effect
  // useEffect(() => {
  //   if (OFFICERTABLE) {
  //     const filteredData = OFFICERTABLE.map((officer) => ({
  //       id: officer.id,
  //       firstName: officer.firstName,
  //       lastName: officer.lastName,
  //       branch: officer.branch.branchName,
  //       category: officer.category.category,
  //       updateDate: officer.updateDate,
  //       totalHours: officer.totalHours,
  //     }));

  //     // Remove duplicates based on 'id'
  //     const uniqueData = filteredData.filter(
  //       (value, index, self) =>
  //         self.findIndex((item) => item.id === value.id) === index,
  //     );

  //     if (uniqueData) {
  //       setExportData(uniqueData);
  //     }
  //   }
  // }, [OFFICERTABLE]);

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
            <label>สาขา</label>
            <span>:</span>
          </div>

          <Listbox value={branch} onChange={setBranch}>
            <div className={clsx(`container-box-search`)}>
              <Listbox.Button className={clsx(`list-box`)}>
                {branch.branchName === "" ? (
                  <span>เลือกสาขา</span>
                ) : (
                  <span>{branch.branchName}</span>
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
                  {DEFAULT_BRANCH_DATA_SUMMARY_OFFICER.map((branch) => (
                    <Listbox.Option
                      key={branch.id}
                      className={({ active }) =>
                        `${
                          branch.id !== "1" &&
                          `relative cursor-default select-none py-2 pl-10 pr-4`
                        } ${
                          branch.id !== "1" && active
                            ? `bg-amber-100 text-primary-900`
                            : `text-gray-900`
                        }`
                      }
                      value={branch}
                    >
                      {branch.id !== "1" && branch.branchName}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>

      {/* <Table info={OFFICERTABLE} columns={UsersColumns} /> */}
    </section>
  );
};

export default SearchSummaryInfoSection;
