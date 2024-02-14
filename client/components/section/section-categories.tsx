"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SectionCategories = () => {
  return (
    <div className="row gap-4 p-5 border shadow-md rounded-md bg-white">
      <Carousel>
        <CarouselContent className="row">
          <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Notebooks
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category1.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Smart {"Tv's"}
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category2.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Smartwatches
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category3.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Smartphones
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category4.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Headphones
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category5.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Speakers
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category6.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Music & Gaming
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category7.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Link href={"#"} className="row gap-2">
              <div className="flex flex-col">
                <h6 className="font-bold hover:underline flex-nowrap">
                  Books & films
                </h6>
                <p className="text-sm text-muted-foreground">16 Items</p>
              </div>
              <Image
                src={"/category8.png"}
                width={80}
                height={80}
                alt="categories"
                className="object-contain"
              />
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default SectionCategories;
