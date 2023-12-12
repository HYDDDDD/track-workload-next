import React, { Fragment } from "react";

import AuthenticationCard from "@/components/Cards/AuthenticationCard";
import RegisterForm from "@/components/Forms/Register";

const RegisterPage = () => {
  return (
    <Fragment>
      <section>
        <AuthenticationCard header="ลงทะเบียน">
          <RegisterForm />
        </AuthenticationCard>
      </section>
    </Fragment>
  );
};

export default RegisterPage;
