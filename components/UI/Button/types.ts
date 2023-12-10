import type { ButtonHTMLAttributes, MouseEvent } from "react";

export type ButtonVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";
export type ButtonSize = "default" | "medium" | "small";
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
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: ButtonSize;
  rounder?: ButtonRounder;
};
