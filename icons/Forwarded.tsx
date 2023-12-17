import React from "react";

import clsx from "clsx";
import Image from "next/image";

import ForwardedIconPng from "@/public/forward-icon.png";
import LineIconPng from "@/public/line-icon.png";

const ForwardedIcon = () => {
  return (
    <div className={clsx([`flex items-center`])}>
      <Image src={LineIconPng} alt="line icon png" />
      <Image src={ForwardedIconPng} alt="forwarded icon png" />
    </div>
  );
};

export default ForwardedIcon;
