"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Form } from "react-final-form";

import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

import Spinner from "@/components/Progress/Spinner";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import {
  DEFAULT_BRANCH_DATA_AUTH,
  DEFAULT_USER_ROLE_DATA,
} from "@/constant/constant";
import { useRegister } from "@/hooks";
import SortLeftPng from "@/public/sort-left-icon.png";
import { IBranchDataProps } from "@/types/branch/branch.types";
import { IRoleDataProps } from "@/types/role/role.types";
import { IUserDataProps } from "@/types/user/user.types";

import { handleValidate } from "./_actions/validate";

interface IResponseRegisterForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  branch?: string;
  password?: string;
  re_password?: string;
  role?: string;
}

const RegisterForm = () => {
  // _State
  const [selectedRole, setSelectedRole] = useState<IRoleDataProps>(
    DEFAULT_USER_ROLE_DATA[0],
  );
  const [selectedBranch, setSelectedBranch] = useState<IBranchDataProps>(
    DEFAULT_BRANCH_DATA_AUTH[0],
  );
  const [newUser, setNewUser] = useState<IUserDataProps>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    branch: "",
    password: "",
    re_password: "",
  });
  const [errorResponse, setErrorResponse] = useState<IResponseRegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    branch: "",
    role: "",
    password: "",
    re_password: "",
  });

  // _Hook
  const { isLoading, error, onSubmit } = useRegister(newUser);

  // _Effect
  useEffect(() => {
    if (selectedRole) {
      setNewUser({ ...newUser, role: selectedRole.value });
    }
  }, [selectedRole]);

  useEffect(() => {
    if (newUser.role === "Personnel" && selectedBranch) {
      setNewUser({ ...newUser, branch: selectedBranch.value });
    } else {
      setSelectedBranch(DEFAULT_BRANCH_DATA_AUTH[0]);
      setNewUser({ ...newUser, branch: "-" });
    }
  }, [selectedBranch, newUser.role]);

  useEffect(() => {
    if (error && "data" in error && error.data) {
      const errorRegister: IResponseRegisterForm = error.data;

      setErrorResponse({
        firstName: errorRegister.firstName,
        lastName: errorRegister.lastName,
        email: errorRegister.email,
        branch: errorRegister.branch,
        role: errorRegister.role,
        password: errorRegister.password,
        re_password: errorRegister.re_password,
      });
    } else {
      console.log("No data property in error object");
    }
  }, [error]);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={clsx([`space-y-6 px-24`, `sm:px-5`])}
        >
          <Input
            name="firstName"
            component="input"
            value={newUser.firstName}
            onChange={(e) => {
              setNewUser({ ...newUser, firstName: e.target.value });
            }}
            type="text"
            placeholder="First name"
          >
            ชื่อ
          </Input>
          {errorResponse.firstName && (
            <p className={clsx(`text-red-500`)}>
              {handleValidate(errorResponse.firstName)}
            </p>
          )}
          <Input
            name="lastName"
            component="input"
            value={newUser.lastName}
            onChange={(e) => {
              setNewUser({ ...newUser, lastName: e.target.value });
            }}
            type="text"
            placeholder="Last name"
          >
            นามสกุล
          </Input>
          {errorResponse.lastName && (
            <p className={clsx(`text-red-500`)}>
              {handleValidate(errorResponse.lastName)}
            </p>
          )}
          <Input
            name="phoneNumber"
            component="input"
            value={newUser.phone}
            onChange={(e) => {
              // if (newUser.phone.length < 10 ) {
              setNewUser({ ...newUser, phone: e.target.value });
              // }
            }}
            type="tel"
            pattern="0-9"
            placeholder="08XXXXXXXX"
          >
            หมายเลขโทรศัพท์
          </Input>

          <Input
            name="email"
            component="input"
            value={newUser.email}
            onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value });
            }}
            type="email"
            placeholder="Example@gmail.com"
          >
            อีเมล
          </Input>
          {errorResponse.email && (
            <p className={clsx(`text-red-500`)}>
              {handleValidate(errorResponse.email)}
            </p>
          )}

          <Input
            name="password"
            component="input"
            value={newUser.password}
            onChange={(e) => {
              setNewUser({ ...newUser, password: e.target.value });
            }}
            type="password"
            placeholder="********"
          >
            รหัสผ่าน
          </Input>
          {errorResponse.password && (
            <p className={clsx(`text-red-500`)}>
              {handleValidate(errorResponse.password)}
            </p>
          )}

          <Input
            name="password"
            component="input"
            value={newUser.re_password}
            onChange={(e) => {
              setNewUser({ ...newUser, re_password: e.target.value });
            }}
            type="password"
            placeholder="********"
          >
            ยืนยันรหัสผ่าน
          </Input>
          {errorResponse.re_password && (
            <p className={clsx(`text-red-500`)}>
              {handleValidate(errorResponse.re_password)}
            </p>
          )}

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

          {selectedRole.value === "Personnel" && (
            <div className={clsx([`field-box`])}>
              <label>สาขา</label>
              <Listbox value={selectedBranch} onChange={setSelectedBranch}>
                <div className={clsx(`relative`)}>
                  <Listbox.Button
                    className={clsx([`list-box`, `list-box-text-white`])}
                  >
                    <span>{selectedBranch.branchName}</span>

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
                      {DEFAULT_BRANCH_DATA_AUTH.map((branch) => (
                        <Listbox.Option
                          key={branch.id}
                          className={({ active }) =>
                            `${
                              branch.id !== "1" &&
                              `relative cursor-default select-none py-2 pl-10 pr-4`
                            } ${
                              branch.id !== "1" && active
                                ? `bg-amber-100 text-primary-900`
                                : `text-gray-900`
                            }`
                          }
                          value={branch}
                        >
                          {branch.id !== "1" && branch.branchName}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          )}

          {errorResponse.branch && (
            <p className={clsx(`text-red-500`)}>
              {handleValidate(errorResponse.branch)}
            </p>
          )}

          <div className={clsx([`flex justify-center`])}>
            <Button
              variant="milk-pink"
              rounder="full"
              loading={isLoading}
              type="submit"
            >
              {isLoading ? <Spinner /> : <p>ลงทะเบียน</p>}
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default RegisterForm;
