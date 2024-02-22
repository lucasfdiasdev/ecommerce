"use client";

import { CiBellOn } from "react-icons/ci";
import AvatarButton from "./avatar-button";
import MobileSidebar from "./mobile-sidebar";

const Header = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full items-center justify-end gap-8">
        <button className="relative">
          <CiBellOn size={24} />
          <div className="flex items-center justify-center absolute h-5 w-5 -top-2.5 -right-2.5 bg-black rounded-full">
            <span className="text-xs font-bold text-white">11</span>
          </div>
        </button>
        <AvatarButton />
      </div>
    </div>
  );
};

export default Header;
