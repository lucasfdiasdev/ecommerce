"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./sidebar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 overflow-y-auto">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
