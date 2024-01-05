import "react-datepicker/dist/react-datepicker.css";

import clsx from "clsx";
import { Metadata } from "next";

import Providers from "@/lib/Providers";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "ระบบติดตามภาระงาน ICT",
  description: "ติดตามภาระงาน คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={clsx(`font-sans`)}>{children}</body>
      </Providers>
    </html>
  );
}
