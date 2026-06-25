"use client";
import Product from "../common/Product";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const TopSellingCard = ({ products }) => {
  return (
    <section id="topselling">
      <Swiper
        slidesPerView={5}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id}>
            <Product item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopSellingCard;
