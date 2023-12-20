import { Fragment } from "react";

import clsx from "clsx";

const Footer = () => {
  return (
    <Fragment>
      <footer className={clsx(`main-space-x py-6`, `bg-dark-50`)}>
        <div className={clsx(`container`)}>
          <p>Footer</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
