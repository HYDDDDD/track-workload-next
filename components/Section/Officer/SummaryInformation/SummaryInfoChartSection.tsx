import React from "react";

import clsx from "clsx";

import VerticalBarChart from "@/components/Chart/VerticalBarChart";

const SummaryInfoChartSection = () => {
  return (
    <section>
      <div className={clsx([`flex w-full items-center justify-center`])}>
        <VerticalBarChart />
      </div>
    </section>
  );
};

export default SummaryInfoChartSection;
