import React from "react";
import Logo from "../logo";
import Link from "next/link";

const HeaderBlog = () => {
  return (
    <header className="border-b-[2px] py-3">
      <nav className="header-container flex-between">
        <Logo />
        <ul className="row gap-8">
          <li>
            <Link href="#" className="btn-dark">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="#" className="text-nowrap hidden md:block">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBlog;
