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
      img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/Screen+Shot+2023-04-05+at+6.05.27+PM.png",
    },
    {
      title: "Work From Beautiful Concepts",
      img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/Denaes+Diner.jpeg",
    },
    {
      title: "Claim Rewards for Your Progress",
      img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/rooftop-at-the-standard-downtown-night.jpeg",
    },
  ];
  const sliderData2 = [
    {
      title: "Get Certified for Training",
      img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/rooftop-at-the-standard-downtown-night.jpeg",
    },
    {
      title: "Work From Beautiful Concepts",
      img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/barmakase.jpeg",
    },
    {
      title: "Claim Rewards for Your Progress",
      img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/Screen+Shot+2023-04-05+at+6.05.19+PM.png",
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
                className={`bg-no-repeat bg-cover bg-center  brand-img-container rounded-[8px] w-[188px]  h-[102px]`}
              >
                <Image src={slide.img} fill />
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
                <Image src={slide.img} fill />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default BrandsSlider;
