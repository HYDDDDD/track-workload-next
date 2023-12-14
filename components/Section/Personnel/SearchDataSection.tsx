"use client";

import React, { Fragment, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

import StartDateEndDatePicker from "@/components/DatePicker/StartDateEndDate";
import { DEFAULT_ACTIVITY } from "@/constant/constant";
import SortLeftPng from "@/icons/sort-left-icon.png";
import { IActivityDataProps } from "@/types/activity/activity.types";

const SearchDataSection = () => {
  // _State
  const [selectedCategory, setSelectedCategory] = useState<IActivityDataProps>(
    DEFAULT_ACTIVITY[0],
  );
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <section className={clsx([`space-y-8`])}>
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
      <StartDateEndDatePicker
        startDate={startDate}
        setStartDate={setStartDate}
      />
    </section>
  );
};

export default SearchDataSection;
