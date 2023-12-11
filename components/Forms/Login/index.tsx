"use client";

import React, { useState } from "react";
import { Field, Form } from "react-final-form";

import clsx from "clsx";

import { onSubmit } from "./_actions/create-user-form";

const LoginForm = () => {
  // _State
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={clsx([`space-y-6 px-24` ,`sm:px-5`])}>
          <div className={clsx([`field-box`])}>
            <label>อีเมล</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Example@gmail.com"
              className={clsx(`field`)}
            />
          </div>
          <div className={clsx([`field-box`])}>
            <label>รหัสผ่าน</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="********"
              className={clsx(`field`)}
            />
          </div>
        </form>
      )}
    />
  );
};

export default LoginForm;
