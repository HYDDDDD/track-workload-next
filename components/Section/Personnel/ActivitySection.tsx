import React from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Progress from "@/components/Progress";
import Button from "@/components/UI/Button";
import CulturePng from "@/public/culture-icon.png";
import HealthPng from "@/public/health-icon.png";

const ActivitySection = () => {
  return (
    <section>
      <div
        className={clsx([
          `grid grid-cols-2 gap-16`,
          `lg:gap-10`,
          `sm:grid-cols-1`,
        ])}
      >
        <div className={clsx([`space-y-16`, `sm:space-y-6`])}>
          <Progress maxHour={102} hour={70} type="warn" />
          <Button variant="secondary">
            <Link
              href="/personnel/form/culture"
              className={clsx([
                `flex w-full items-center justify-start space-x-4 p-4 `,
                `lg:space-x-0`,
              ])}
            >
              <Image
                src={CulturePng}
                width={90}
                height={90}
                alt="culture icon png"
                className={clsx(`h-90 w-90`)}
              />
              <span
                className={clsx([
                  `break-words text-body-24`,
                  `sm:text-body-20`,
                ])}
              >
                การส่งภาระงานด้านทำนุบำรุงศิลปวัฒนธรรม
              </span>
            </Link>
          </Button>
        </div>
        <div className={clsx([`space-y-16`, `sm:space-y-6`])}>
          <Progress maxHour={102} hour={25} type="danger" />
          <Button variant="secondary">
            <Link
              href="/personnel/form/health"
              className={clsx([
                `flex w-full items-center justify-start space-x-4 p-4 `,
                `lg:space-x-0`,
              ])}
            >
              <Image
                src={HealthPng}
                width={90}
                height={90}
                alt="health icon png"
                className={clsx(`h-90 w-90`)}
              />
              <span
                className={clsx([
                  `break-words text-body-24`,
                  `sm:text-body-20`,
                ])}
              >
                การส่งภาระงานด้านส่งเสริมสุขภาพ
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
