import React from "react";

import GradientChart from "@/components/Chart/GradientChart";
import VerticalBarChart from "@/components/Chart/VerticalBarChart";

const SummaryInfoChartSection = () => {
  return (
    <section>
      <VerticalBarChart />
      <GradientChart />
    </section>
  );
};

export default SummaryInfoChartSection;
