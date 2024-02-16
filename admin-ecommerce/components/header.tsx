"use client";

import MobileSidebar from "./mobile-sidebar";

const Header = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">Avatar button</div>
    </div>
  );
};

export default Header;
