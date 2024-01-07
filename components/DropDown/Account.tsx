"use client";

import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import Image from "next/image";

import AvatarPng from "@/public/avatar-icon.png";

import Button from "../UI/Button";

const AccountDropDown = () => {
  // _State
  const [accountMenu, setAccountMenu] = useState<boolean>(false);

  // _Ref สำหรับเก็บอ้างอิงของ dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // _Action handler สำหรับปิด dropdown เมื่อคลิกนอก dropdown
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setAccountMenu(false);
    }
  };

  // _Effect สำหรับเพิ่มและถอด event listener เมื่อ component ถูก mount และ unmount
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={clsx([`relative`])} ref={dropdownRef}>
      <Image
        src={AvatarPng}
        alt="avatar icon png"
        onClick={() => setAccountMenu((val) => !val)}
      />
      {accountMenu && (
        <div
          className={clsx([
            `shadow-03 absolute right-1 top-14 w-80 space-y-4 rounded-2xl bg-white p-8`,
          ])}
        >
          <div className={clsx([`flex items-center justify-between `])}>
            <div
              className={clsx([`h-20 w-20  rounded-full bg-primary-500`])}
            ></div>
            <div>
              <p className={clsx([`text-blue-second-500 text-body-20`])}>
                นายเขียวใจดี
              </p>
              <p className={clsx([`text-bodyNormal-14 text-muted-500`])}>
                วิศวกรรมซอฟต์แวร์
              </p>
              <p className={clsx(`text-blue-second-500 text-body-16`)}>
                บุคลากร
              </p>
            </div>
          </div>

          <div className={clsx([`space-y-4 border-b border-stroke-500 pb-4`])}>
            <p className={clsx([`text-body-20`])}>ช่องทางการติดต่อ</p>
            <p>
              <span className={clsx([`text-body-16`])}>เบอร์โทรศัพท์ :</span>{" "}
              099-999-9999
            </p>
            <p>
              {" "}
              <span className={clsx([`text-body-16`])}>Email :</span>{" "}
              Example@gmail.com
            </p>
          </div>

          <Button
            variant="danger"
            rounder="xl"
            isOutline={true}
            className={clsx(`w-full border-danger-500`)}
          >
            ออกจากระบบ
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountDropDown;
