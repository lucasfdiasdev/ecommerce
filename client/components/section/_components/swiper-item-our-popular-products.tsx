"use client";

// Import Swiper React components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { featuredRoutes } from "@/lib/data";
import CollectionItem from "./collection-item";

const SwiperItemOurPopularProducts = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {featuredRoutes.map((route) => (
        <SwiperSlide key={route.label}>
          <CollectionItem
            src={route.src}
            href={route.href}
            alt={route.label}
            label={route.label}
            price={route.price}
            category={route.category}
            priceOffset={route.priceOffset}
            hrefCategory={route.hrefCategory}
            badgeDiscount={route.badgeDiscount}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperItemOurPopularProducts;
