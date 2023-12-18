import React, { Fragment } from "react";

import clsx from "clsx";

import SearchDataSection from "@/components/Section/Officer/SearchDataSection";

const OfficerIndexPage = () => {
  return (
    <Fragment>
      <section>
        <div className={clsx([`container main-space-x`])}>
          <SearchDataSection />
        </div>
      </section>
    </Fragment>
  );
};

export default OfficerIndexPage;
