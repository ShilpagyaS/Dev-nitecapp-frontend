import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@/Hooks/useMediaQuery";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import { NextButton, SkipButton } from "./ControlBtn";

function Slider() {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const sliderData = [
    {
      title: "Get Certified for Training",
      img: `${
        !isMobile ? "/asset/sliderImg-1.png" : "/asset/slider-mobile1.png"
      }`,
    },
    {
      title: "Work From Beautiful Concepts",
      img: `${
        !isMobile ? "/asset/sliderImg-2.png" : "/asset/slider-mobile2.png"
      }`,
    },
    {
      title: "Claim Rewards for Your Progress",
      img: `${
        !isMobile ? "/asset/sliderImg-3.png" : "/asset/slider-mobile3.png"
      }`,
    },
  ];

  return (
    <>
      <LayoutWithHeader>
        <Swiper
          slidesPerView={1}
          className="lg:max-w-[1024px] md:max-w-[768px] max-w-[414px] mt-4 h-auto"
          spaceBetween={0}
          modules={[Pagination]}
          pagination={true}
        >
          {sliderData.map((slide, i) => {
            return (
              <SwiperSlide key={i} className="w-full px-4">
                <h1 className=" not-italic font-normal text-white text-[32px] text-center font-Prata leading-[48px] ">
                  {slide.title}
                </h1>
                <Image
                  className="mx-auto mt-8 mb-10 lg:w-[464px] md:w-[397px] w-full"
                  src={slide.img}
                  alt="slider-image"
                  width={397}
                  height={isMobile ? 351 : 221}
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
