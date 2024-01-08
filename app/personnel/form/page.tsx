import React, { Fragment } from "react";

import clsx from "clsx";

import SendActivitySection from "@/components/Section/Personnel/SendActivitySection";

const PersonnelFormPage = () => {
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
        <SendActivitySection />
      </div>
    </Fragment>
  );
};

export default PersonnelFormPage;
