import React from "react";

import clsx from "clsx";

import Button from "@/components/UI/Button";

const SendActivitySection = () => {
  return (
    <div className={clsx([`space-y-16`])}>
      <p className={clsx([`text-center text-header-3`, `lg:text-body-24`])}>
        หลักฐานภาระงานด้านทำนุบำรุงศิลปวัฒนธรรมและอนุรักษ์สิ่งแวดล้อม
      </p>

      <div className={clsx([`list-box-search`])}>
        <div className={clsx([`list-box-search-label`])}>
          <label>ประเภท</label>
          <span>:</span>
        </div>

        <input
          type="file"
          className={clsx([`rounded-3xl bg-primary-500 px-6 py-2`])}
        />
      </div>

      <div className={clsx([`flex items-center justify-center`])}>
        <div
          className={clsx([
            `w-412 h-412 flex flex-col items-center justify-center bg-secondary-500 text-center`,
          ])}
        >
          <p>รูปภาพตัวอย่าง</p>
          <p>JPG, GIF or PNG. Max size of 20MB</p>
        </div>
      </div>

      <div className={clsx([`flex items-center justify-center`])}>
        <Button variant="milk-pink" rounder="full">
          <p className={clsx([`px-5 text-body-24`])}>ส่ง</p>
        </Button>
      </div>
    </div>
  );
};

export default SendActivitySection;
