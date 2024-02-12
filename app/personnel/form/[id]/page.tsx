"use client";

import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import SendActivitySection from "@/components/Section/SendActivitySection";
import { useAuth } from "@/context/AuthProvider";
import { IActivityRequestDataProps } from "@/types/activity/activity.types";

const FormPage = () => {
  const pathName = usePathname();

  const { activites } = useAuth();

  // _State
  const [activity, setActivity] = useState<IActivityRequestDataProps>();
  const [label, setLabel] = useState<string>("");
  const [imageActivity, setImageActivity] = useState<File | null>();
  const activityID = pathName.replace("/personnel/form/", "");

  useEffect(() => {
    activites.forEach((activity) => {
      if (activity.id == activityID) {
        setImageActivity(activity.image);
        if (activity.category === "C") {
          setLabel("งานด้านทำนุบำรุงศิลปวัฒนธรรม");
          setActivity({
            id: activity.id,
            category: activity.category,
            activityUser: activity.activityUser,
            hour: activity.hour,
            updateDate: activity.updateDate,
            status: activity.status,
          });
        } else if (activity.category === "H") {
          setLabel("งานด้านส่งเสริมสุขภาพ");
          setActivity({
            id: activity.id,
            category: activity.category,
            activityUser: activity.activityUser,
            hour: activity.hour,
            updateDate: activity.updateDate,
            status: activity.status,
          });
        }
      }
    });
  }, []);

  return (
    <SendActivitySection
      label={label}
      imageActivity={imageActivity}
      activity={activity}
    />
  );
};

export default FormPage;
