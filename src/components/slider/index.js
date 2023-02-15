import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import { NextButton, SkipButton } from "./ControlBtn";

function Slider() {
  const sliderData = [
    {
      title: "Get Certified for Training",
      img: "/asset/sliderImg-1.png",
    },
    {
      title: "Work From Beautiful Concepts",
      img: "/asset/sliderImg-2.png",
    },
    {
      title: "Claim Rewards for Your Progress",
      img: "/asset/sliderImg-3.png",
    },
  ];

  return (
    <>
      <LayoutWithHeader>
        <Swiper
          slidesPerView={1}
          className="lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[480px] mt-4 h-auto"
          spaceBetween={0}
          modules={[Pagination]}
          pagination={true}
        >
          {sliderData.map((slide) => {
            return (
              <SwiperSlide className="w-full">
                <h1 className=" not-italic font-normal text-white text-[32px] text-center font-Prata leading-[48px] ">
                  {slide.title}
                </h1>
                <Image
                  className="mx-auto mt-8 mb-10 lg:h-[351px] lg:w-[464px]"
                  src={slide.img}
                  alt="slider-image"
                  width={464}
                  height={351}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="btn-container flex items-center justify-around max-w-[464px] mx-auto">
          <SkipButton label="Skip" />
          <NextButton label="Next" />
        </div>
      </LayoutWithHeader>
    </>
  );
}

export default Slider;
