import type { ButtonHTMLAttributes, MouseEvent } from "react";

export type ButtonVariant =
  | "default"
  | "primary"
  | "success"
  | "warn"
  | "danger"
  | "milk-pink";
export type ButtonSize = "default";
export type ButtonRounder =
  | "default"
  | "sm"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export type Button = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Button & {
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading?: boolean;
  active?: boolean;
  size?: ButtonSize;
  rounder?: ButtonRounder;
  isOutline?: boolean;
  isInvert?: boolean;
};
