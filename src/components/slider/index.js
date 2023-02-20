import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import { NextButton, SkipButton } from "./ControlBtn";
import { useEffect, useState } from "react";

function Slider({ skipTo }) {
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
  const [swipperInstance, setswipperInstance] = useState("");
  useEffect(() => {
    console.log("swipper instance->", swipperInstance);
  }, [swipperInstance]);

  function next() {
    if (swipperInstance.activeIndex === sliderData.length - 1) {
      return skipTo();
    }
    return swipperInstance.slideNext();
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        className=" md:max-w-lg max-w-sm mt-4 w-full max-h-[450px]"
        spaceBetween={0}
        modules={[Pagination]}
        pagination={true}
        onSwiper={(e) => {
          console.log(e);
          setswipperInstance(e);
        }}
      >
        {sliderData.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="p-4">
                <h1 className="not-italic font-normal text-white text-[34px] text-center font-Prata leading-[48px] ">
                  {slide.title}
                </h1>
                <Image
                  className="mt-8 mb-10 mx-auto"
                  src={slide.img}
                  alt="slider-image"
                  width={isMobile ? 350 : 397}
                  height={isMobile ? 351 : 221}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="btn-container flex items-center justify-around max-w-[464px] mx-auto">
        <SkipButton
          label="Skip"
          onClickHandler={() => {
            skipTo();
          }}
        />
        <NextButton label="Next" onClickHandler={next} condition={true} />
      </div>
    </>
  );
}

export default Slider;
