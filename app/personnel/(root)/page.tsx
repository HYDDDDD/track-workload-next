import React, { Fragment } from "react";

import clsx from "clsx";

import ActivitySection from "@/components/Section/Personnel/ActivitySection";
import SearchDataSection from "@/components/Section/Personnel/SearchDataSection";

const PersonnelIndexPage = () => {
  return (
    <Fragment>
      <div
        className={clsx([
          `container`,
          `mt-10`,
          `lg:main-space-x`,
          `space-y-16`,
          `sm:space-y-6`,
        ])}
      >
        <ActivitySection />
        <SearchDataSection />
      </div>
    </Fragment>
  );
};

export default PersonnelIndexPage;