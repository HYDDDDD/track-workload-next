import React from "react";

import clsx from "clsx";
import Link from "next/link";

import Button from "@/components/UI/Button";

export default function HomePage() {
  return (
    <div>
      <section>
        <div className={clsx(`container`)}>
          <h1>content</h1>

          <Link href="/register">
            <Button className={clsx(`bg-orange-300`)}>Click it!!</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
