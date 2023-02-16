import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import { NextButton, SkipButton } from "./ControlBtn";
import { useEffect, useState } from "react";

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
  const [swipperInstance, setswipperInstance] = useState("")
  useEffect(() => {
    console.log("swipper instance->",swipperInstance);
  }, [swipperInstance])
  function next() {
    console.log(swipperInstance);
    swipperInstance.slideNext()   
  }
  
  return (
    <>
      <LayoutWithHeader>
        <Swiper
          slidesPerView={1}
          className="lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[480px] mt-4 h-auto"
          spaceBetween={0}
          modules={[Pagination]}
          pagination={true}
          onSwiper={(e)=>{console.log(e);setswipperInstance(e)}}
        >
          {sliderData.map((slide,i) => {
            return (
              <SwiperSlide key={i} className="w-full">
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
          <NextButton label="Next" onClickHandler={next} condition={true}/>
        </div>
      </LayoutWithHeader>
    </>
  );
}

export default Slider;
