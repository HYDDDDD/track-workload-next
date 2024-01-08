import React, { Fragment } from "react";

import clsx from "clsx";

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
        Personnel form
      </div>
    </Fragment>
  );
};

export default PersonnelFormPage;
