import React, { HTMLAttributes, ReactNode } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";
import LogoICTPng from "@/icons/logo-ict.png";

interface IAuthenticationCardProps extends HTMLAttributes<HTMLDivElement> {
  titleClassName?: string;
  headerClassName?: string;
  header?: ReactNode;
}

const AuthenticationCard = ({
  header,
  children,
  titleClassName,
}: IAuthenticationCardProps) => {
  return (
    <div className={clsx(`container h-page`)}>
      <Card className={clsx(`grid w-full grid-cols-2`, `lg:grid-cols-1`)}>
        <div
          className={clsx([
            `flex flex-col items-center justify-center rounded-l-2xl bg-primary-500`,
            `lg:rounded-none`,
          ])}
        >
          <Image src={LogoICTPng} alt="logo ict png" />
          <p className={clsx([`text-header-3`, `sm:text-header-4`])}>
            ระบบติดตามภาระงาน
          </p>
        </div>
        <div className={clsx([`p-7`, `space-y-8`])}>
          <div className={clsx([`flex justify-end space-x-6`])}>
            <Link href="#">
              <p>เข้าสู่ระบบ</p>
            </Link>
            <Link href="#">
              <p className={clsx(`text-primary-500`)}>ลงทะเบียน</p>
            </Link>
          </div>
          {header && (
            <div className={clsx(`card-header`)}>
              {typeof header === "string" ? (
                <div className={clsx(`title`, titleClassName)}>{header}</div>
              ) : (
                header
              )}
            </div>
          )}
          {children}

          <div className={clsx([`flex justify-center space-x-6`])}>
            <Link href="#">
              <Button variant="milk-pink" rounder="full">
                <p>เข้าสู่ระบบ</p>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AuthenticationCard;
