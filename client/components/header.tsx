import Link from "next/link";

import { FaRegBell, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Logo from "@/components/logo";
import InputSearch from "@/components/input-search";
import HeaderNavigation from "@/components/header-navigation";
import HeaderButtonMobile from "@/components/header-button-mobile";
import { Badge } from "./ui/badge";

const Header = () => {
  return (
    <>
      <header className="border-b-[2px] py-3">
        <div className="header-container">
          <nav className="flex-between">
            {/* logo and search */}
            <div className="row gap-8">
              <Logo />
              <InputSearch />
            </div>
            <div className="row gap-4">
              {/* icons */}
              <div className="row sm:gap-6 gap-8 mr-4 md:mr-6">
                <Link href="#" className="relative">
                  <AiOutlineShoppingCart size={20} />
                  <div className="flex items-center justify-center absolute h-5 w-5 -top-3 -right-3 bg-black rounded-full">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                </Link>
                <Link href="#" className="relative">
                  <FaRegHeart size={20} />
                  <div className="flex items-center justify-center absolute h-5 w-5 -top-3 -right-3 bg-black rounded-full">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                </Link>
                <Link href="#" className="relative">
                  <FaRegBell size={20} />
                  <div className="flex items-center justify-center absolute h-5 w-5 -top-2.5 -right-2.5 bg-black rounded-full">
                    <span className="text-xs font-bold text-white">11</span>
                  </div>
                </Link>
              </div>
              {/* auth login */}
              <div className="row gap-4 hidden sm:flex -mr-4">
                <Link href="/sign-in" className="btn-dark">
                  Sign In
                </Link>
                <Link href="/sign-up" className="text-nowrap hidden md:block">
                  Sign Up
                </Link>
              </div>
              {/* button mobile */}
              <HeaderButtonMobile />
            </div>
          </nav>
        </div>
      </header>
      <nav className="header-container">
        <ul className="row gap-4 hidden md:block">
          <HeaderNavigation />
        </ul>
      </nav>
    </>
  );
};

export default Header;
