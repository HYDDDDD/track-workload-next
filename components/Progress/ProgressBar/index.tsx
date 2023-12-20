import React from "react";

import clsx from "clsx";

import { ProgressBarProps } from "../types";

const ProgressBar = ({ percent, color }: ProgressBarProps) => {
  return (
    // scss
    <div className="w-full rounded-full border border-black bg-white">
      <div
        className={clsx([
          `rounded-full p-0.5 text-center text-xs font-medium leading-none text-blue-100`,
          { [`bg-warn-500`]: color === "warn" },
          { [`bg-danger-500`]: color === "danger" },
          { [`bg-transparent`]: percent === 0 },
        ])}
        style={{ width: `${percent}%` }}
      >
        <span>{percent}</span>
        <span>%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
