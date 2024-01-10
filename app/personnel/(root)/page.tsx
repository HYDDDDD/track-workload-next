import React from "react";

import clsx from "clsx";

import ActivitySection from "@/components/Section/Personnel/ActivitySection";
import SearchDataSection from "@/components/Section/Personnel/SearchDataSection";

const PersonnelIndexPage = () => {
  return (
    <div
      className={clsx([
        `container`,
        `mt-10`,
        `main-space-x`,
        `space-y-16`,
        `sm:space-y-6`,
      ])}
    >
      <ActivitySection />
      <SearchDataSection />
    </div>
  );
};

export default PersonnelIndexPage;
