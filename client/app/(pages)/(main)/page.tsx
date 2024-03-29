"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { GiPresent } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { FaCreditCard, FaHeadset, FaTruckFast } from "react-icons/fa6";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import MainLayout from "@/components/layout/main-layout";
import SectionOffers from "@/components/section/section-offers";
import SectionCategories from "@/components/section/section-categories";
import SectionCollectionFeatured from "@/components/section/section-collection-featured";
import SectionCollectionBestSellers from "@/components/section/section-collection-best-sellers";
import SectionCollectionPopularProducts from "@/components/section/section-collection-popular-products";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent className="row">
              <CarouselItem>
                <div className="aspect-video overflow-hidden cursor-pointer ">
                  <Image
                    width={780}
                    height={780}
                    src={"/banner1.jpg"}
                    alt="banner 1"
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="aspect-video overflow-hidden rounded-lg relative">
                  <Image
                    width={780}
                    height={780}
                    src={"/banner1.jpg"}
                    alt="banner 1"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="aspect-video overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    width={780}
                    height={780}
                    src={"/banner1.jpg"}
                    alt="banner 1"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              width={480}
              height={480}
              src={"/banner3.jpg"}
              alt={"banner 1"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </MainLayout>

      <section className="bg-zinc-100">
        <MainLayout>
          {/* cards */}
          <div className="flex items-center justify-center sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-5">
              <div className="row gap-4">
                <FaTruckFast size={36} />
                <div className="flex flex-col">
                  <h6 className="font-bold text-xl md:text-base">
                    Free Shipping
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    From ali orders over $100
                  </p>
                </div>
              </div>
              <div className="row gap-4">
                <GiPresent size={36} />
                <div className="flex flex-col">
                  <h6 className="font-bold text-xl md:text-base">
                    Daily Surprise Offers
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    Save up to 25% off
                  </p>
                </div>
              </div>
              <div className="row gap-4">
                <CiDiscount1 size={36} />
                <div className="flex flex-col">
                  <h6 className="font-bold text-xl md:text-base">
                    Affordable Prices
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    Get Factory direct price
                  </p>
                </div>
              </div>
              <div className="row gap-4">
                <FaHeadset size={36} />
                <div className="flex flex-col">
                  <h6 className="font-bold text-xl md:text-base">
                    Support 24/7
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    Shop with an expert
                  </p>
                </div>
              </div>
              <div className="row gap-4">
                <FaCreditCard size={36} />
                <div className="flex flex-col">
                  <h6 className="font-bold text-xl md:text-base">
                    Secure Payments
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    100% Protected Payments
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* categories */}
          <SectionCategories />

          {/* best sellers collections */}
          <SectionCollectionBestSellers />

          {/* featured collections */}
          <SectionCollectionFeatured />

          {/* our popular products */}
          <SectionCollectionPopularProducts />
        </MainLayout>
      </section>

      <section>
        <MainLayout>
          <SectionOffers />
        </MainLayout>
      </section>
    </>
  );
};

export default HomePage;
