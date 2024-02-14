"use client";

import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import SwiperItemOurPopularProducts from "./_components/swiper-item-our-popular-products";

const SectionCollectionPopularProducts = () => {
  return (
    <div className="gap-4">
      <div className="flex flex-col">
        <div className="flex-between">
          <h6 className="font-bold">Our Popular Products Collection</h6>
          <Link href={"#"}>Ver mais</Link>
        </div>
        <div className="row py-5 gap-2">
          <Card className="hidden lg:block h-[400px] w-[380px]">
            <CardContent className="py-5 space-y-4">
              <Link href={"#"} className="flex items-center gap-2">
                <Image
                  src={"/category1.png"}
                  alt="category1"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <h4 className="font-semibold">Notebook</h4>
              </Link>
              <Link href={"#"} className="flex items-center gap-2">
                <Image
                  src={"/category4.png"}
                  alt="category1"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <h4 className="font-semibold">Smartphones</h4>
              </Link>
              <Link href={"#"} className="flex items-center gap-2">
                <Image
                  src={"/category5.png"}
                  alt="category1"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <h4 className="font-semibold">Headphones</h4>
              </Link>
              <Link href={"#"} className="flex items-center gap-2">
                <Image
                  src={"/category6.png"}
                  alt="category1"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <h4 className="font-semibold">Boombox</h4>
              </Link>
            </CardContent>
          </Card>
          <SwiperItemOurPopularProducts />
        </div>
      </div>
    </div>
  );
};

export default SectionCollectionPopularProducts;
