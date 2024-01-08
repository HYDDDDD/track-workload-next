"use client";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useLogoutMutation } from "@/lib/redux/features/authApiSlice";
import { logout as setLogout } from "@/lib/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import AvatarPng from "@/public/avatar-icon.png";

import Button from "../UI/Button";

const AccountDropDown = () => {
  const dispatch = useAppDispatch();

  // _Router
  const router = useRouter();

  // _Mutation
  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // _State
  const [accountMenu, setAccountMenu] = useState<boolean>(true);

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

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      })
      .finally(() => {
        toast.success("ล็อกเอาท์สำเร็จ");
        router.push("/");
      });
  };

  console.log(isAuthenticated);

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
            `absolute right-1 top-14 w-80 space-y-4 rounded-2xl bg-white p-8 shadow-03`,
          ])}
        >
          <div className={clsx([`flex items-center justify-between `])}>
            <div
              className={clsx([`h-20 w-20  rounded-full bg-primary-500`])}
            ></div>
            <div>
              <p className={clsx([`text-body-20 text-blue-second-500`])}>
                นายเขียวใจดี
              </p>
              <p className={clsx([`text-bodyNormal-14 text-muted-500`])}>
                วิศวกรรมซอฟต์แวร์
              </p>
              <p className={clsx(`text-body-16 text-blue-second-500`)}>
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

          {isAuthenticated && (
            <Button
              variant="danger"
              rounder="xl"
              isOutline={true}
              className={clsx(`w-full border-danger-500`)}
            >
              ออกจากระบบ
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDropDown;
