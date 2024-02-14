"use client";

import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { categoriesCardRouter } from "@/lib/data";

const SectionCategories = () => {
  return (
    <div className="row p-5 border shadow-md rounded-md bg-white">
      <Marquee pauseOnHover>
        {categoriesCardRouter.map((item, index) => (
          <Link key={index} href={item.href} className="row gap-2">
            <div className="flex flex-col ml-8">
              <h6 className="font-bold hover:underline flex-nowrap">
                {item.label}
              </h6>
              <p className="text-sm text-muted-foreground">
                {item.itemsQuantity} Items
              </p>
            </div>
            <Image
              src={item.src}
              width={80}
              height={80}
              alt="categories"
              className="object-contain"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default SectionCategories;
