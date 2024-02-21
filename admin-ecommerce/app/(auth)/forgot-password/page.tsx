"use client";

import Link from "next/link";

import { MdOutlineEmail } from "react-icons/md";

import { Button } from "@/components/ui/button";
import InputForm from "@/components/forms/input-form";

const ForgotPassword = () => {
  return (
    <div className="flex-1 h-full">
      <div className="flex items-center flex-col justify-center min-h-screen">
        <form className="w-[50%] max-w-[400px]">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Forgot Password</h1>
            <p className="text-sm text-muted-foreground">
              Please enter your register email to get reset password email
            </p>
          </div>
          <InputForm
            id="email"
            name="email"
            label="Email"
            type="text"
            placeholder="email@exemplo.com"
            icon={MdOutlineEmail}
            className="mb-4"
          />
          <Button variant={"black"} className="w-full" type="submit">
            Enviar Link
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
