import React, { MouseEvent } from "react";

import clsx from "clsx";

import { ButtonProps } from "./types";

const Button = ({
  variant,
  size = "default",
  rounder = "default",
  className,
  children,
  disabled,
  active,
  loading,
  isOutline,
  isInvert,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `button`,
        [`button-rounder-${rounder}`],
        [`button-type-${size}`],
        {
          "button-loading": loading,
          active: active,
          "button-outline": isOutline,
          "button-invert": isInvert,
        },
        variant,
        `focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
        className,
        {
          onClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (!disabled && onClick) onClick(e);
          },
        },
        { disabled: loading || disabled },
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
