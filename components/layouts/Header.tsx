import { Fragment } from "react";

import clsx from "clsx";
import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      <header
        className={clsx(
          `main-space-x py-4`,
          `fixed top-0 z-50 w-full bg-orange-500`,
        )}
      >
        <div className={clsx(`container flex items-center justify-between`)}>
          <p>Header</p>
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
