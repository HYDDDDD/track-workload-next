"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { DEFAULT_USER_ROLE_DATA } from "@/constant/constant";
import { useAuth } from "@/context/AuthProvider";
import LinePng from "@/public/line-icon.png";
import LogoICTPng from "@/public/logo-ict.png";
import MapPinPng from "@/public/map-pin-icon.png";

import AccountDropDown from "../DropDown/Account";

const Header = () => {
  // _Context
  const { userInfo, isActivated, setIsActivated } = useAuth();

  return (
    <header className={clsx(`fixed top-0 z-50 w-full bg-white`)}>
      <div
        className={clsx([
          `main-space-x flex items-center justify-between bg-primary-500 py-2`,
        ])}
      >
        <div className={clsx([`flex items-center space-x-2`])}>
          <Image src={MapPinPng} alt="map pin icon png" />
          <span className={clsx([`text-body-12 text-white`])}>
            คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา
          </span>
        </div>

        <span className={clsx([`text-body-12 text-white`, `sm:hidden`])}>
          ภาษาไทย | English
        </span>
      </div>

      <div
        className={clsx(`main-space-x flex items-center justify-between py-3`)}
      >
        <div className={clsx([`flex items-center space-x-2`])}>
          <Link
            href={
              userInfo?.role === "Admin"
                ? `/${userInfo?.role.toLowerCase()}/index`
                : `/${userInfo?.role.toLowerCase()}`
            }
          >
            <Image
              src={LogoICTPng}
              alt="logo ict png"
              width={56}
              height={56}
              priority
            />
          </Link>

          <div className={clsx([`flex flex-col`])}>
            <span className={clsx([`text-body-20`, `sm:text-body-16`])}>
              ระบบติดตามภาระงาน
            </span>
            <span className={clsx([`text-body-12`, `sm:text-body-10`])}>
              มหาวิทยาลัยพะเยา
            </span>
          </div>
        </div>

        <div className={clsx([`flex items-center space-x-4`])}>
          <Link
            href={
              userInfo?.role === "Admin"
                ? `/${userInfo?.role.toLowerCase()}/index`
                : `/${userInfo?.role.toLowerCase()}`
            }
          >
            <span
              className={clsx([
                `text-body-20`,
                `lg:text-body-16`,
                `sm:hidden`,
                `hover:text-gray-500`,
              ])}
            >
              หน้าหลัก
            </span>
          </Link>
          {userInfo?.role === "Admin" && (
            <Link href="/admin/summary-information">
              <span
                className={clsx([
                  `text-body-20`,
                  `lg:text-body-16`,
                  `sm:text-body-12`,
                  `hover:text-gray-500`,
                ])}
              >
                ข้อมูลสรุปผล
              </span>
            </Link>
          )}
          <Image
            src={LinePng}
            alt="line icon png"
            className={clsx(`sm:hidden`)}
          />
          <AccountDropDown />
          <p
            className={clsx([`text-body-16 text-blue-second-500`, `sm:hidden`])}
          >
            {DEFAULT_USER_ROLE_DATA.filter(
              (role) => userInfo?.role === role.value,
            ).map((role) => {
              return role.role;
            })}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
