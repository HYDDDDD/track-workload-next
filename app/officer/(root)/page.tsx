import React, { Fragment } from "react";

import clsx from "clsx";

import SearchDataSection from "@/components/Section/Officer/SearchDataSection";

const OfficerIndexPage = () => {
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
        <SearchDataSection />
      </div>
    </Fragment>
  );
};

export default OfficerIndexPage;
