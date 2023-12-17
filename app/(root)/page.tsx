import React, { Fragment } from "react";

import AuthenticationCard from "@/components/Cards/AuthenticationCard";
import LoginForm from "@/components/Forms/Login";

export default function LoginPage() {
  return (
    <Fragment>
      <section>
        <AuthenticationCard header="เข้าสู่ระบบ">
          <LoginForm />
        </AuthenticationCard>
      </section>
    </Fragment>
  );
}
