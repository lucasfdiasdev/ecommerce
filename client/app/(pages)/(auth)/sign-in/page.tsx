"use client";

import Link from "next/link";

import { MdLockOutline, MdOutlineEmail, MdLockOpen } from "react-icons/md";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/forms/input-form";

const SignInPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {/* left */}
      <div className="hidden md:block flex-1 bg-black h-full">
        <div className="flex flex-col justify-between h-full p-5">
          <div className="text-white">
            <Logo />
          </div>
          <div className="text-white">
            <p className="text-sm">
              By clicking continue, you agree to our{" "}
              <Link
                href={"#"}
                target="_blank"
                className="underline hover:text-white/90"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href={"#"}
                target="_blank"
                className="underline hover:text-white/90"
              >
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex-1 h-full">
        <div className="flex items-center flex-col justify-center min-h-screen">
          <form className="w-[50%] max-w-[400px] space-y-4">
            <h1 className="text-4xl font-bold text-center mb-12">Sign In</h1>
            <InputForm
              id="email"
              name="email"
              label="Email"
              type="text"
              placeholder="email@exemplo.com"
              icon={MdOutlineEmail}
            />
            <InputForm
              id="password"
              label="Senha"
              type="password"
              name="password"
              placeholder="Senha"
              icon={MdLockOutline}
            />
            <Button variant={"black"} className="w-full" type="submit">
              Sign In
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link href={"/sign-up"} className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div
                className="
                  absolute 
                  inset-0 
                  flex 
                  items-center
                "
              >
                <div className="w-full border-t border-black"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-black">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
