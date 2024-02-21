"use client";

import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { sidebarRoutes } from "@/lib/data";
import { HiChevronDown } from "react-icons/hi";
import { MdChevronLeft } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();
  const [openRouteIndex, setOpenRouteIndex] = useState(null);

  const handleToggleRoute = (index: any) => {
    setOpenRouteIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4 py-4 flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Logo />
        <div className="space-y-1">
          {sidebarRoutes.map((route, index) => (
            <div key={index} className="">
              <button
                onClick={() => handleToggleRoute(index)}
                className={cn(
                  "text-sm group flex justify-between p-3 w-full font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <Link href={route.href} className="flex items-center">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </Link>
                {route.chevronIconLeft && (
                  <span className="ml-2">
                    {openRouteIndex === index ? (
                      <HiChevronDown className="h-5 w-5" />
                    ) : (
                      <MdChevronLeft className="h-5 w-5" />
                    )}
                  </span>
                )}
              </button>
              {openRouteIndex === index && (
                <div className="space-y-1">
                  {route.list?.map((subRoute) => (
                    <Link
                      key={subRoute.label}
                      href={subRoute.href}
                      className={cn(
                        "text-sm group flex justify-between p-3 pl-12 w-full font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                        pathname === subRoute.href
                          ? "text-white bg-white/10"
                          : "text-zinc-400"
                      )}
                    >
                      {subRoute.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
