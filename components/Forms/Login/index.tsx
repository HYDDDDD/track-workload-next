"use client";

import React, { Fragment, useState } from "react";
import { Field, Form } from "react-final-form";

import clsx from "clsx";
import Link from "next/link";

import Button from "@/components/UI/Button";

import { onSubmit } from "./_actions/user-form";

const LoginForm = () => {
  // _State
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Fragment>
          <form
            onSubmit={handleSubmit}
            className={clsx([`space-y-6 px-24`, `sm:px-5`])}
          >
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
          <div className={clsx([`flex justify-center space-x-6`])}>
            <Link href="#">
              <Button variant="milk-pink" rounder="full">
                <p>เข้าสู่ระบบ</p>
              </Button>
            </Link>
          </div>
        </Fragment>
      )}
    />
  );
};

export default LoginForm;
