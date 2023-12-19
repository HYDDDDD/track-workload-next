import React, { Fragment } from "react";

import clsx from "clsx";

import SearchSummaryInfoSection from "@/components/Section/Officer/SummaryInformation/SearchDataSection";

const SummaryInformationPage = () => {
  return (
    <Fragment>
      <div
        className={clsx([
          `container`,
          `mt-10`,
          `main-space-x`,
          `space-y-16`,
          `sm:space-y-6`,
        ])}
      >
        <p className={clsx([`text-center text-header-3`])}>ข้อมูลสรุปผล</p>
        <SearchSummaryInfoSection />
      </div>
    </Fragment>
  );
};

export default SummaryInformationPage;
