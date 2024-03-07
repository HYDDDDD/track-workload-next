"use client";

import React from "react";

import clsx from "clsx";

import IntroSection from "@/components/Section/Officer/IntroSection";

const OfficerIndexPage = () => {
  return (
    <div
      className={clsx([`container`, `space-y-16`, `sm:space-y-6`, `relative`])}
    >
      <IntroSection />
    </div>
  );
};

export default OfficerIndexPage;
