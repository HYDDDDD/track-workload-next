import { Fragment } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import MapPinPng from "@/icons/map-pin-icon.png";

const Header = () => {
  return (
    <Fragment>
      <header className={clsx(`fixed top-0 z-50 w-full`)}>
        <div
          className={clsx([
            `main-space-x flex items-center justify-between bg-primary-500 py-2`,
          ])}
        >
          <div className={clsx([`flex items-center space-x-2`])}>
            <Image src={MapPinPng} alt="map pin icon png" />
            <span className={clsx([`text-body-12 text-white`])}>
              คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา
            </span>
          </div>

          <span className={clsx([`text-body-12 text-white`, `sm:hidden`])}>
            ภาษาไทย | English
          </span>
        </div>

        <div className={clsx(`container`)}>
          <div>
            <Link href={"#"}>
              <p>Login</p>
            </Link>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
