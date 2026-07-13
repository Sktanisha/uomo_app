"use client";
import Image from "next/image";
import Container from "../layout/Container";
import bgImage from "../../assets/images/bgImage.png";
import bannerItemImage from "../../assets/images/bgitemImage.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css/pagination";
const Banner = () => {
  return (
    <section
      id="banner"
      className="md:pt-31 md:pb-26.75 pt-20 relative"
      style={{ background: `url(${bgImage.src})` }}
    >
      <Container>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="flex gap-6 md:gap-y-0 flex-col sm:flex-row justify-between">
              <div>
                <h3
                  className="pl-13.25 relative text-primary text-sm font-medium leading-6
            after:content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute 
            after:top-2/4 after:translate-y-[-50%] after:left-0"
                >
                  Shop Our Cloths
                </h3>
                <h1 className="text-[36px] md:text-[50px] font-bold text-secondary leading-13 md:leading-15 mt:1 md:mt-2.75">
                  Unlimited Discount{" "}
                  <span className="text-primary">everyday</span>
                </h1>
                <Link
                  href="#"
                  className=" text-sm font-medium mt-2 sm:mt-4.75 inline-block text-black leading-6 relative
            after:content-[''] after:w-24 after:h-0.5 after:bg-black after:absolute 
            after:bottom-0.5  after:left-0"
                >
                  DISCOVER MORE
                </Link>
              </div>
              <Image
                src={bannerItemImage}
                alt="banneritem"
                width={518}
                height={329}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-6 md:gap-y-0 flex-col sm:flex-row justify-between">
              <div>
                <h3
                  className="pl-13.25 relative text-primary text-sm font-medium leading-6
            after:content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute 
            after:top-2/4 after:translate-y-[-50%] after:left-0"
                >
                  Shop Our Cloths
                </h3>
                <h1 className="text-[36px] md:text-[50px] font-bold text-secondary leading-13 md:leading-15 mt:1 md:mt-2.75">
                  Unlimited Discount{" "}
                  <span className="text-primary">everyday</span>
                </h1>
                <Link
                  href="#"
                  className=" text-sm font-medium mt-2 sm:mt-4.75 inline-block text-black leading-6 relative
            after:content-[''] after:w-24 after:h-0.5 after:bg-black after:absolute 
            after:bottom-0.5  after:left-0"
                >
                  DISCOVER MORE
                </Link>
              </div>
              <Image
                src={bannerItemImage}
                alt="banneritem"
                width={518}
                height={329}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="custom-prev hidden  rounded-full size-11.25 bg-white md:flex 
        justify-center items-center absolute  top-2/4 translate-y-[-50%] left-15.25"
        >
          <ChevronLeft />{" "}
        </button>
        <button
          className="custom-next hidden rounded-full size-11.25 bg-white md:flex 
        justify-center items-center absolute  top-2/4 translate-y-[-50%] right-15.25"
        >
          <ChevronRight />
        </button>
      </Container>
    </section>
  );
};

export default Banner;
