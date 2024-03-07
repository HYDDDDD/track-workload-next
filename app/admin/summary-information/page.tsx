import React from "react";

import clsx from "clsx";

import SearchSummaryInfoSection from "@/components/Section/Officer/SummaryInformation/SearchDataSection";
import SummaryInfoChartSection from "@/components/Section/Officer/SummaryInformation/SummaryInfoChartSection";

const SummaryInformationPage = () => {
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
      <p className={clsx([`text-center text-header-3`])}>ข้อมูลสรุปผล</p>
      <SearchSummaryInfoSection />
      <SummaryInfoChartSection />
    </div>
  );
};

export default SummaryInformationPage;
