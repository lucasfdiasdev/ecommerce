"use client";

import Link from "next/link";

import { MdLockOutline, MdOutlineEmail } from "react-icons/md";

import { Button } from "@/components/ui/button";
import InputForm from "@/components/forms/input-form";

const SignInPage = () => {
  return (
    <div className="flex-1 h-full">
      <div className="flex items-center flex-col justify-center min-h-screen">
        <form className="w-[50%] max-w-[400px]">
          <h1 className="text-4xl font-bold text-center mb-12">Login</h1>
          <InputForm
            id="email"
            name="email"
            label="Email"
            type="text"
            placeholder="email@exemplo.com"
            icon={MdOutlineEmail}
            className="mb-4"
          />
          <InputForm
            id="password"
            label="Senha"
            type="password"
            name="password"
            placeholder="Senha"
            icon={MdLockOutline}
            className="mb-1"
          />
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-sm">Remember me</label>
            </div>
            <Link
              href={"/forgot-password"}
              className="flex justify-end text-sm text-blue-500 hover:text-blue-600 hover:underline"
            >
              forgot password?
            </Link>
          </div>
          <Button variant={"black"} className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
