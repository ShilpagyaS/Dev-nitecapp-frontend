import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
// import { NextButton, SkipButton } from "./ControlBtn";
import { useEffect, useState } from "react";
import { CustomButton } from "@/utils/Buttons";

const BannerSlider = (props) => {
  const { pagination, height } = props;
  const isMobile = useMediaQuery("(max-width: 414px)");
  const sliderData = [
    {
      title: "Get Certified for Training",
      img: "/dash/delphi1.png",
    },
    {
      title: "Work From Beautiful Concepts",
      img: "/dash/delphi2.png",
    },
    {
      title: "Claim Rewards for Your Progress",
      img: "/dash/delphi3.png",
    },
    {
      title: "Claim Rewards for Your Progress",
      img: "/dash/delphi4.png",
    },
  ];
  const [swipperInstance, setswipperInstance] = useState("");

  function next() {
    return swipperInstance.slideNext();
  }
  function prev() {
    return swipperInstance.slidePrev();
  }



  // function prev() {
  //   // if (swipperInstance.activeIndex === sliderData.length - 1) {
  //   //   return skipTo();
  //   // }
  //   return swipperInstance.;
  // }

  const rightArrowIcon = (
    <svg
      width="22"
      height="44"
      viewBox="0 0 22 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-transparent"
    // transform="rotate(180deg)"
    >
      <path
        d="M3.3776 43.9647C4.13298 43.9647 4.75277 43.6306 5.25635 43.0101L20.112 25.1354C20.7705 24.324 21.0998 23.4887 21.0998 22.4625C21.0998 21.4363 20.7899 20.5772 20.112 19.7897L5.25635 1.89111C4.7334 1.27063 4.11361 0.936523 3.3776 0.936523C1.88623 0.936523 0.666016 2.41614 0.666016 4.25372C0.666016 5.16058 0.975911 6.01971 1.51823 6.68793L14.6888 22.4625L1.51823 38.2133C0.975911 38.8815 0.666016 39.7406 0.666016 40.6475C0.666016 42.485 1.88623 43.9647 3.3776 43.9647Z"
        fill="white"
        className="bg-transparent"
      />
    </svg>
  );
  const leftArrowIcon = (
    <svg
      width="22"
      height="44"
      viewBox="0 0 22 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-transparent rotate-180"
    // transform="rotate(180deg)"
    >
      <path
        d="M3.3776 43.9647C4.13298 43.9647 4.75277 43.6306 5.25635 43.0101L20.112 25.1354C20.7705 24.324 21.0998 23.4887 21.0998 22.4625C21.0998 21.4363 20.7899 20.5772 20.112 19.7897L5.25635 1.89111C4.7334 1.27063 4.11361 0.936523 3.3776 0.936523C1.88623 0.936523 0.666016 2.41614 0.666016 4.25372C0.666016 5.16058 0.975911 6.01971 1.51823 6.68793L14.6888 22.4625L1.51823 38.2133C0.975911 38.8815 0.666016 39.7406 0.666016 40.6475C0.666016 42.485 1.88623 43.9647 3.3776 43.9647Z"
        fill="white"
        className="bg-transparent"
      />
    </svg>


  );

  return (
    <>
      <Swiper
        slidesPerView={1}
        className={` w-full ${height ? `h-[${height}]` : "h-[250px]"}  flex justify-center mt-4`}
        spaceBetween={0}
        autoplay
        modules={[Pagination, Autoplay]}
        pagination={pagination}
        loop
        onSwiper={(e) => {
          setswipperInstance(e);
        }}
      >
        {sliderData?.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="h-full w-full ">

                <div className=" h-full w-full relative ">

                  <Image
                    src={slide.img}
                    className="w-full object-cover sm:rounded-lg" fill

                  />

                  <div className="bg-transparent h-full flex items-center w-full justify-between absolute pr-5 top-0 left-0">
                    <CustomButton
                      onClickHandler={prev}
                      label={leftArrowIcon}
                      hover={false}
                    />
                    <CustomButton
                      onClickHandler={next}
                      label={rightArrowIcon}
                      hover={false}
                    />
                  </div>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BannerSlider;
