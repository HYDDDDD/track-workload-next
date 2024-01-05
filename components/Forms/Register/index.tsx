"use client";

import React, { Fragment, useState } from "react";
import { Field, Form } from "react-final-form";

import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Spinner from "@/components/Progress/Spinner";
import Button from "@/components/UI/Button";
import { DEFAULT_USER_ROLE_DATA } from "@/constant/constant";
import { useRegisterMutation } from "@/lib/redux/features/authApiSlice";
import SortLeftPng from "@/public/sort-left-icon.png";
import { IRoleDataProps } from "@/types/role/role.types";
import { IUserDataProps } from "@/types/user/user.types";

const RegisterForm = () => {
  // Redux
  const [register, { isLoading }] = useRegisterMutation();

  // _State
  const [selectedRole, setSelectedRole] = useState<IRoleDataProps>(
    DEFAULT_USER_ROLE_DATA[0],
  );
  const [newUser, setNewUser] = useState<IUserDataProps>({
    userID: "",
    firstName: "test",
    lastName: "test lasdt",
    email: "emailtest@gmail.com",
    phone: "09876543211",
    role: "USER",
    branch: "SE",
    totalHours: 0,
    password: "test123456789",
    confiremPassword: "test123456789",
  });
  const [infoUser, setInfoUser] = useState(false);

  // _Actions
  const onSubmit = (newUser: IUserDataProps) => {
    register({ newUser });
  };

  return (
    <Form
      onSubmit={() => onSubmit(newUser)}
      render={({ handleSubmit }) => (
        <Fragment>
          <form
            onSubmit={handleSubmit}
            className={clsx([`space-y-6 px-24`, `sm:px-5`])}
          >
            <div className={clsx([`field-box`])}>
              <label>ชื่อ</label>
              <Field name="firstName" component="input">
                {({ input }) => (
                  <input
                    {...input}
                    value={newUser.firstName}
                    onChange={(e) => {
                      setNewUser({ ...newUser, firstName: e.target.value });
                      input.onChange(e);
                    }}
                    type="text"
                    placeholder="First name"
                    className={clsx([`field`, `field-text-white`])}
                  />
                )}
              </Field>
            </div>
            <div className={clsx([`field-box`])}>
              <label>นามสกุล</label>
              <Field name="lastName" component="input">
                {({ input }) => (
                  <input
                    {...input}
                    value={newUser.lastName}
                    onChange={(e) => {
                      setNewUser({ ...newUser, lastName: e.target.value });
                      input.onChange(e);
                    }}
                    type="text"
                    placeholder="Last name"
                    className={clsx([`field`, `field-text-white`])}
                  />
                )}
              </Field>
            </div>
            <div className={clsx([`field-box`])}>
              <label>หมายเลขโทรศัพท์</label>
              <Field name="phoneNumber" component="input">
                {({ input }) => (
                  <input
                    {...input}
                    value={newUser.phone}
                    onChange={(e) => {
                      setNewUser({ ...newUser, phone: e.target.value });
                      input.onChange(e);
                    }}
                    type="number"
                    pattern="0-9"
                    placeholder="08XXXXXXXX"
                    className={clsx([`field`, `field-text-white`])}
                  />
                )}
              </Field>
            </div>
            <div className={clsx([`field-box`])}>
              <label>อีเมล</label>
              <Field name="email" component="input">
                {({ input }) => (
                  <input
                    {...input}
                    value={newUser.phone}
                    onChange={(e) => {
                      setNewUser({ ...newUser, email: e.target.value });
                      input.onChange(e);
                    }}
                    type="email"
                    placeholder="Example@gmail.com"
                    className={clsx([`field`, `field-text-white`])}
                  />
                )}
              </Field>
            </div>
            <div className={clsx([`field-box`])}>
              <label>รหัสผ่าน</label>
              <Field name="password" component="input">
                {({ input }) => (
                  <input
                    {...input}
                    value={newUser.password}
                    onChange={(e) => {
                      setNewUser({ ...newUser, password: e.target.value });
                      input.onChange(e);
                    }}
                    type="password"
                    placeholder="********"
                    className={clsx([`field`, `field-text-white`])}
                  />
                )}
              </Field>
            </div>
            <div className={clsx([`field-box`])}>
              <label>ยืนยันรหัสผ่าน</label>
              <Field name="confirmPassword" component="input">
                {({ input }) => (
                  <input
                    {...input}
                    value={newUser.confiremPassword}
                    onChange={(e) => {
                      setNewUser({
                        ...newUser,
                        confiremPassword: e.target.value,
                      });
                      input.onChange(e);
                    }}
                    type="confirmPassword"
                    placeholder="********"
                    className={clsx([`field`, `field-text-white`])}
                  />
                )}
              </Field>
            </div>
            <div className={clsx([`field-box`])}>
              <label>สถานะ</label>
              <Listbox value={selectedRole} onChange={setSelectedRole}>
                <div className={clsx(`relative`)}>
                  <Listbox.Button
                    className={clsx([`list-box`, `list-box-text-white`])}
                  >
                    <span>{selectedRole.role}</span>

                    <Image
                      src={SortLeftPng}
                      alt="sort left icon png"
                      className="pointer-events-none"
                      priority
                    />
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className={clsx(`list-box-option`)}>
                      {DEFAULT_USER_ROLE_DATA.map((user) => (
                        <Listbox.Option
                          key={user.id}
                          className={({ active }) =>
                            `${
                              user.id !== "1" &&
                              `relative cursor-default select-none py-2 pl-10 pr-4`
                            } ${
                              user.id !== "1" && active
                                ? `bg-amber-100 text-primary-900`
                                : `text-gray-900`
                            }`
                          }
                          value={user}
                        >
                          {user.id !== "1" && user.role}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </form>
          <div className={clsx([`flex justify-center`])}>
            <Link href="#">
              <Button variant="milk-pink" rounder="full" loading={isLoading}>
                {isLoading ? <Spinner /> : <p>ลงทะเบียน</p>}
              </Button>
            </Link>
          </div>
        </Fragment>
      )}
    />
  );
};

export default RegisterForm;
