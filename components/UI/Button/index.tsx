import React from "react";

import clsx from "clsx";

import { ButtonProps } from "./types";

const Button = ({
  variant,
  size,
  rounder = "default",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `button`,
        [`button-rounder-${rounder}`],
        variant,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
