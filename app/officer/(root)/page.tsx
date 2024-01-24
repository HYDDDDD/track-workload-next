"use client";

import React from "react";

import clsx from "clsx";

import SearchDataSection from "@/components/Section/Officer/SearchDataSection";

const OfficerIndexPage = () => {
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
      <SearchDataSection />
    </div>
  );
};

export default OfficerIndexPage;
