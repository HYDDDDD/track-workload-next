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
import { IUserDataProps } from "@/types/user/user.types";

import {
  handleAddInfo,
  handleGetUsers,
} from "./Officer/_action/AddUserDataTable";

interface ISendActivitySectionProps {
  label?: string;
  imageActivity?: File | null;
  activity?: IActivityRequestDataProps | undefined;
}

const SendActivitySection = ({
  label,
  imageActivity,
  activity,
}: ISendActivitySectionProps) => {
  // _Context
  const { activites, userInfo, getActivites, setReload } = useAuth();

  // _Router
  const router = useRouter();

  // _State
  const imageURL = `${imageActivity}`;
  const [infoUsers, setInfoUsers] = useState<IUserDataProps[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [newActivity, setNewActivity] = useState<IActivityRequestDataProps>({
    id: "",
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
              status: "D",
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            },
          )
          .then(() => {
            toast.success("ส่งหลักฐานสำเร็จ");
            handleAddInfo({ activites, infoUsers });
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

  const handleChangeStatusActivity = async (pass: boolean) => {
    const storedToken = localStorage.getItem("auth_token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

    if (pass) {
      await axios
        .put(`${BASEURL}/api/activity/${activity?.id}/`, {
          ...activity,
          status: "P",
        })
        .then(() => {
          toast.success("ทำรายการเสร็จสิ้น");
          setReload(true);
          router.push("/admin");
        });
    } else {
      await axios
        .put(`${BASEURL}/api/activity/${activity?.id}/`, {
          ...activity,
          status: "N",
        })
        .then(() => {
          toast.success("ทำรายการเสร็จสิ้น");
          setReload(true);
          router.push("/admin");
        });
    }
  };

  // _Effect
  useEffect(() => {
    if (userInfo) {
      if (
        label ===
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
    }
  }, [userInfo]);

  useEffect(() => {
    if (selectedImage) {
      setNewActivity({ ...newActivity, image: selectedImage });
    }
  }, [selectedImage]);

  useEffect(() => {
    handleGetUsers(setInfoUsers);
  }, []);

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
          {label}
        </p>

        {userInfo?.role === "Personnel" && (
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
        )}

        <div className={clsx([`flex items-center justify-center`])}>
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="image activity"
              className={clsx(`h-412 w-412 object-cover`)}
            />
          ) : imageURL !== "undefined" ? (
            <img
              src={imageURL}
              alt="image activity"
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
          {/* {imageURL ? (
            <img
              src={imageURL}
              alt="image activity"
              className={clsx(`h-412 w-412 object-cover`)}
            />
          ) : selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="image activity"
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
          )} */}
        </div>

        <div className={clsx([`flex items-center justify-center pb-10`])}>
          {userInfo?.role === "Admin" ? (
            <div className={clsx([`space-x-20`, `sm:space-x-4`])}>
              <Button
                variant="success"
                rounder="full"
                onClick={() => handleChangeStatusActivity(true)}
              >
                <p className={clsx([`px-5 text-body-24 sm:text-body-18`])}>
                  ผ่าน
                </p>
              </Button>
              <Button
                variant="milk-pink"
                rounder="full"
                onClick={() => handleChangeStatusActivity(false)}
              >
                <p className={clsx([`px-5 text-body-24 sm:text-body-18`])}>
                  ไม่ผ่าน
                </p>
              </Button>
            </div>
          ) : (
            <Button
              variant="milk-pink"
              rounder="full"
              onClick={handleAddActivity}
            >
              <p className={clsx([`px-5 text-body-24`])}>ส่ง</p>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SendActivitySection;
