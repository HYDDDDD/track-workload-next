import { Fragment } from "react";

import { Metadata } from "next";

import Header from "@/components/layouts/Header";

export const metadata: Metadata = {
  description: "Generated by Next.js",
};

export default function PersonnelIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}
