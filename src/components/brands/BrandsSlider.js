import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect, useState } from "react";

function BrandsSlider() {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const sliderData = [
    {
      title: "Get Certified for Training",
      img: "/asset/sliderImg-1.svg",
    },
    {
      title: "Work From Beautiful Concepts",
      img: "/asset/sliderImg-2.svg",
    },
    {
      title: "Claim Rewards for Your Progress",
      img: "/asset/sliderImg-3.png",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={12}
        pagination={true}
        className="mb-4"
      >
        {sliderData?.map((slide, i) => {
          return (
            <SwiperSlide
              key={i}
              className="m-0"
              style={{ width: "fit-content" }}
            >
              <div
                className={`bg-[url(/asset/brand1.svg)] bg-no-repeat bg-cover bg-center  brand-img-container rounded-[8px] w-[188px]  h-[102px]`}
              >
                {/* <Image src="/asset/brand1.svg" fill /> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        slidesPerView={"auto"}
        style={{ marginLeft: "24px" }}
        spaceBetween={12}
        pagination={true}
      >
        {sliderData?.map((slide, i) => {
          return (
            <SwiperSlide key={i} style={{ width: "fit-content" }}>
              <div
                className={`bg-[url(/asset/brand1.svg)] bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] w-[188px] h-[102px]`}
              >
                {/* <Image src="/asset/brand1.svg" fill /> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default BrandsSlider;
