import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect, useState } from "react";

function BrandsSlider({ sliderData, sliderData2 }) {
  const isMobile = useMediaQuery("(max-width: 414px)");


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
                className={`bg-no-repeat bg-cover bg-center  brand-img-container rounded-[8px] w-[188px]  h-[102px]`}
              >
                <Image src={slide.img} fill className="object-cover" />
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
        {sliderData2?.map((slide, i) => {
          return (
            <SwiperSlide key={i} style={{ width: "fit-content" }}>
              <div
                className={`bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] w-[188px] h-[102px]`}
              >
                <Image src={slide.img} fill className="object-cover" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default BrandsSlider;
