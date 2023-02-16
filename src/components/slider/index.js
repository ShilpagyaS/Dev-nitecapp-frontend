import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@/Hooks/useMediaQuery";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import { NextButton, SkipButton } from "./ControlBtn";
import { useEffect, useState } from "react";

function Slider({skipTo}) {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const [sliderAtend, setSliderEnd] = useState(false)
  const sliderData = [
    {
      title: "Get Certified for Training",
      img: `${!isMobile ? "/asset/sliderImg-1.png" : "/asset/slider-mobile1.png"
        }`,
    },
    {
      title: "Work From Beautiful Concepts",
      img: `${!isMobile ? "/asset/sliderImg-2.png" : "/asset/slider-mobile2.png"
        }`,
    },
    {
      title: "Claim Rewards for Your Progress",
      img: `${!isMobile ? "/asset/sliderImg-3.png" : "/asset/slider-mobile3.png"
        }`,
    },
  ];
  const [swipperInstance, setswipperInstance] = useState("");
  useEffect(() => {
    console.log("swipper instance->", swipperInstance);
  }, [swipperInstance]);
  function next() {
    console.log(swipperInstance);
    swipperInstance.slideNext();
    swipperInstance.on('reachEnd', function () {
      console.log('antt');
      setSliderEnd(true)
    });
    if (sliderAtend == true) {
            skipTo()
    }
  }

  return (
    <>
      {/* <LayoutWithHeader> */}
      <Swiper
        slidesPerView={1}
        className=" md:max-w-md max-w-sm mt-4 "
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
              <h1 className=" not-italic font-normal text-white text-[32px] text-center font-Prata leading-[48px] ">
                {slide.title}
              </h1>
              <Image
                className="mt-8 mb-10 mx-auto"
                src={slide.img}
                alt="slider-image"
                width={isMobile ? 350 : 397}
                height={isMobile ? 351 : 221}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="btn-container flex items-center justify-around max-w-[464px] mx-auto">
        <SkipButton label="Skip" onClickHandler={()=>{skipTo()}} />
        <NextButton label="Next" onClickHandler={next} condition={true} />
      </div>
      {/* </LayoutWithHeader> */}
    </>
  );
}

export default Slider;
