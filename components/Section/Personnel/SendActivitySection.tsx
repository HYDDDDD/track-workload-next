"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import clsx from "clsx";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

import Button from "@/components/UI/Button";
import { BASEURL } from "@/constant/constant";
import { useAuth } from "@/context/AuthProvider";
import { IActivityRequestDataProps } from "@/types/activity/activity.types";

interface ISendActivitySectionProps {
  lable: string;
}

const SendActivitySection = ({ lable }: ISendActivitySectionProps) => {
  // _Context
  const { userInfo, getActivites } = useAuth();

  // _Router
  const router = useRouter();

  // _State
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [newActivity, setNewActivity] = useState<IActivityRequestDataProps>({
    activityUser: "",
    category: "",
    hour: 0,
    image: selectedImage,
    updateDate: "",
  });

  // _Action
  const handleSelectActivity = (event: ChangeEvent<HTMLInputElement>) => {
    const fileImage = event.target.files?.[0] || null;

    setSelectedImage(fileImage);
  };

  console.log(userInfo);

  // _Effect
  useEffect(() => {
    if (userInfo) {
      if (
        lable ===
        "หลักฐานภาระงานด้านทำนุบำรุงศิลปวัฒนธรรมและอนุรักษ์สิ่งแวดล้อม"
      ) {
        setNewActivity({
          ...newActivity,
          activityUser: userInfo.id,
          category: "C",
          hour: 6,
          updateDate: format(Date.now(), "yyyy-MM-dd"),
        });
      } else {
        setNewActivity({
          ...newActivity,
          activityUser: userInfo.id,
          category: "H",
          hour: 4,
          updateDate: format(Date.now(), "yyyy-MM-dd"),
        });
      }
    } else {
      console.error("ไม่ได้ล็อคอิน");
    }
  }, [userInfo]);

  useEffect(() => {
    if (selectedImage) {
      setNewActivity({ ...newActivity, image: selectedImage });
    }
  }, [selectedImage]);

  const handleAddActivity = async () => {
    if (selectedImage !== null) {
      try {
        await axios
          .post(
            `${BASEURL}/api/activity/`,
            {
              activityUser: newActivity.activityUser,
              category: newActivity.category,
              hour: newActivity.hour,
              updateDate: newActivity.updateDate,
              image: newActivity.image,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            },
          )
          .then(() => {
            toast.success("ส่งหลักฐานสำเร็จ");
            getActivites();
            router.push("/personnel");
          });
      } catch (error) {
        console.error("Error post api activity : ", error);
        toast.error("กรุณาส่งหลักฐานอีกครั้ง");
      }

      setSelectedImage(null);
    } else {
      toast.error("กรุณาเลือกไฟล์");
    }
  };

  return (
    <section>
      <div
        className={clsx([
          `container`,
          `mt-10`,
          `main-space-x`,
          `space-y-16`,
          `sm:space-y-6`,
        ])}
      >
        <p className={clsx([`text-center text-header-3`, `lg:text-body-24`])}>
          {lable}
        </p>

        <div className={clsx([`list-box-search`])}>
          <div className={clsx([`list-box-search-label`])}>
            <label>ประเภท</label>
            <span>:</span>
          </div>

          <input
            type="file"
            accept="image/*"
            className={clsx([`rounded-3xl bg-primary-500 px-6 py-2`])}
            onChange={handleSelectActivity}
          />
        </div>

        <div className={clsx([`flex items-center justify-center`])}>
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="image"
              className={clsx(`h-412 w-412 object-cover`)}
            />
          ) : (
            <div
              className={clsx([
                `flex h-412 w-412 flex-col items-center justify-center bg-secondary-500 text-center`,
              ])}
            >
              <p>รูปภาพตัวอย่าง</p>
              <p>JPG, GIF or PNG. Max size of 20MB</p>
            </div>
          )}
        </div>

        <div className={clsx([`flex items-center justify-center`])}>
          <Button
            variant="milk-pink"
            rounder="full"
            onClick={handleAddActivity}
          >
            <p className={clsx([`px-5 text-body-24`])}>ส่ง</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SendActivitySection;
