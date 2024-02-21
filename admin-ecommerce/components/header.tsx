"use client";

import AvatarButton from "./avatar-button";
import MobileSidebar from "./mobile-sidebar";

const Header = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <AvatarButton />
      </div>
    </div>
  );
};

export default Header;
