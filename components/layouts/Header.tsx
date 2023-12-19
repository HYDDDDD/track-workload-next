import { Fragment } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import AvatarPng from "@/public/avatar-icon.png";
import LinePng from "@/public/line-icon.png";
import LogoICTPng from "@/public/logo-ict.png";
import MapPinPng from "@/public/map-pin-icon.png";

const Header = () => {
  // _MOCK
  const userContext = {
    role: "officer",
  };

  return (
    <Fragment>
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
          className={clsx(
            `main-space-x flex items-center justify-between py-3`,
          )}
        >
          <div className={clsx([`flex items-center space-x-2`])}>
            <Link href={"#"}>
              <Image
                src={LogoICTPng}
                alt="logo ict png"
                width={56}
                height={56}
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
            <span
              className={clsx([`text-body-20`, `lg:text-body-16`, `sm:hidden`])}
            >
              หน้าหลัก
            </span>

            {userContext.role === "officer" ? (
              <Link href="/officer/summary-information">
                <span
                  className={clsx([
                    `text-body-20`,
                    `lg:text-body-16`,
                    `sm:hidden`,
                  ])}
                >
                  ข้อมูลสรุปผล
                </span>
              </Link>
            ) : (
              <></>
            )}
            <Image
              src={LinePng}
              alt="line icon png"
              className={clsx(`sm:hidden`)}
            />
            <Image src={AvatarPng} alt="avatar icon png" />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
