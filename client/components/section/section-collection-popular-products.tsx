import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselNext,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import CollectionItem from "./_components/collection-item";

const SectionCollectionPopularProducts = () => {
  const featuredRoutes = [
    {
      label:
        "Notebook Acer (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Prateado",
      href: "/",
      price: 899,
      badgeDiscount: "-33%",
      priceOffset: 799,
      category: "Notebook",
      hrefCategory: "/category",
      src: "/category1.png",
    },
    {
      label:
        "Smart Watch AMOLED Display com 2 bandas(Metal+Gomma) 60 Days Ultra-Long Battery Life (Call Receive/Dial) 70 Modes Sports 5ATM/IP69K Waterproof Smartwatches for Android iPhone",
      price: 899,
      href: "/",
      category: "Smartwatches",
      hrefCategory: "/category",
      src: "/category3.png",
    },
    {
      label: "TCL QLED TV 55” C645 4K UHD GOOGLE TV DOLBY VISION GAMING",
      price: 899,
      href: "/",
      category: "Smarts",
      badgeDiscount: "-33%",
      priceOffset: 799,
      hrefCategory: "/category",
      src: "/category2.png",
    },
    {
      label: "Apple iPhone 13 Pro Max (128 GB) - Azul Sierra",
      price: 899,
      href: "/",
      category: "Mobiles",
      hrefCategory: "/category",
      src: "/category4.png",
    },
    {
      label: "JBL, Caixa de Som, Boombox 3, Bluetooth - Preta",
      price: 899,
      href: "/",
      category: "Boomboxes",
      hrefCategory: "/category",
      src: "/category6.png",
    },
  ];

  return (
    <div className="row gap-4 py-5">
      <div className="flex flex-col">
        <div className="flex-between">
          <h6 className="font-bold">Our Popular Products Collection</h6>
          <Link href={"#"}>Ver mais</Link>
        </div>
        <div className="p-5 row">
          <Card className="max-w-[320px] md:max-w-[260px] h-[420px] py-2">
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  width={42}
                  height={42}
                  src={"/category1.png"}
                  alt={"category1"}
                />
                <h6 className="font-bold">Notebook</h6>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  width={42}
                  height={42}
                  src={"/category1.png"}
                  alt={"category1"}
                />
                <h6 className="font-bold">Notebook</h6>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  width={42}
                  height={42}
                  src={"/category1.png"}
                  alt={"category1"}
                />
                <h6 className="font-bold">Notebook</h6>
              </div>
            </CardContent>
          </Card>

          <Carousel>
            <CarouselContent>
              {featuredRoutes.map((route) => (
                <CarouselItem
                  key={route.label}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
                  <CollectionItem
                    key={route.label}
                    src={route.src}
                    href={route.href}
                    alt={route.label}
                    label={route.label}
                    price={route.price}
                    priceOffset={route.priceOffset}
                    badgeDiscount={route.badgeDiscount}
                    category={route.category}
                    hrefCategory={route.hrefCategory}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SectionCollectionPopularProducts;
