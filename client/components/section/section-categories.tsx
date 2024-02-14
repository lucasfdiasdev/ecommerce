"use client";

import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const SectionCategories = () => {
  const categoriesCardRouter = [
    {
      label: "Notebooks & Computers",
      itemsQuantity: 16,
      href: "/",
      src: "/category1.png",
    },
    {
      label: "Smart Tv's",
      itemsQuantity: 16,
      href: "/",
      src: "/category2.png",
    },
    {
      label: "Smartwatches",
      itemsQuantity: 16,
      href: "/",
      src: "/category3.png",
    },
    {
      label: "Smartphones",
      itemsQuantity: 16,
      href: "/",
      src: "/category4.png",
    },
    {
      label: "Headphones",
      itemsQuantity: 16,
      href: "/",
      src: "/category5.png",
    },
    {
      label: "Boomboxes",
      itemsQuantity: 16,
      href: "/",
      src: "/category6.png",
    },
    {
      label: "Gaming & Consoles",
      itemsQuantity: 16,
      href: "/",
      src: "/category7.png",
    },
    {
      label: "Books & Films",
      itemsQuantity: 16,
      href: "/",
      src: "/category8.png",
    },
  ];
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
