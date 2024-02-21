"use client";

import Link from "next/link";

import { MdLockOutline, MdOutlineEmail } from "react-icons/md";

import { Button } from "@/components/ui/button";
import InputForm from "@/components/forms/input-form";

const ResetPassword = () => {
  return (
    <div className="flex-1 h-full">
      <div className="flex items-center flex-col justify-center min-h-screen">
        <form className="w-[50%] max-w-[400px]">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Reset Password</h1>
            <p className="text-sm text-muted-foreground">
              Plase enter yor new password
            </p>
          </div>
          <InputForm
            id="password"
            label="Senha"
            type="password"
            name="password"
            placeholder="Senha"
            icon={MdLockOutline}
            className="mb-4"
          />
          <InputForm
            id="confirmPassword"
            label="Confirmar Senha"
            type="password"
            name="Confirm Password"
            placeholder="Confirmar Senha"
            icon={MdLockOutline}
            className="mb-4"
          />
          <Button variant={"black"} className="w-full" type="submit">
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
