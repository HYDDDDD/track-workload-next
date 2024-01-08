"use client";

import { toast } from "react-toastify";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useLogoutMutation } from "@/lib/redux/features/authApiSlice";
import { logout as setLogout } from "@/lib/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import LinePng from "@/public/line-icon.png";
import LogoICTPng from "@/public/logo-ict.png";
import MapPinPng from "@/public/map-pin-icon.png";

import AccountDropDown from "../DropDown/Account";

const Header = () => {
  // const dispatch = useAppDispatch();

  // // _Router
  // const router = useRouter();

  // // _Mutation
  // const [logout] = useLogoutMutation();

  // const { isAuthenticated } = useAppSelector((state) => state.auth);

  // _MOCK
  const userContext = {
    role: "officer",
  };

  // // _Action
  // const handleLogout = () => {
  //   logout(undefined)
  //     .unwrap()
  //     .then(() => {
  //       dispatch(setLogout());
  //     })
  //     .finally(() => {
  //       toast.success("ล็อกเอาท์สำเร็จ");
  //       router.push("/");
  //     });
  // };

  // console.log(isAuthenticated);

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
          <Link href={"#"}>
            <Image src={LogoICTPng} alt="logo ict png" width={56} height={56} />
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
          <AccountDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
