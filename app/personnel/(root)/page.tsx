"use client";

import React from "react";

import clsx from "clsx";

import ActivitySection from "@/components/Section/Personnel/ActivitySection";
import SearchDataSection from "@/components/Section/Personnel/SearchDataSection";
import { useAuth } from "@/context/AuthProvider";

const PersonnelIndexPage = () => {
  // _Context
  const { userInfo } = useAuth();

  console.log(userInfo);

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
      <ActivitySection />
      <SearchDataSection />
    </div>
  );
};

export default PersonnelIndexPage;
