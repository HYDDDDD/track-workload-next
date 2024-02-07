import React from "react";

import clsx from "clsx";
import { useRouter } from "next/navigation";

import IntroGradientChart from "@/components/Chart/IntroGradientChart";
import Button from "@/components/UI/Button";

const IntroSection = () => {
  const router = useRouter();
  return (
    <section>
      <div className={clsx(`my-10 space-y-10 text-white`)}>
        <p className={clsx(`text-center text-header-2`, `sm:text-header-3`)}>
          ระบบติดตามภาระงาน
        </p>
        <IntroGradientChart />

        <div className={clsx(`flex items-center justify-center`)}>
          <Button
            variant="success"
            onClick={() => {
              router.push("/admin/index");
            }}
          >
            เข้าสู่ระบบ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
