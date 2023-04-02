import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@/Hooks/useMediaQuery";

function BrandsSlider2({ skipTo }) {
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
        slidesPerView={1}
        className=" md:max-w-lg max-w-sm mt-4 w-full max-h-[450px]"
        spaceBetween={0}
      >
        {sliderData?.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div>
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
    </>
  );
}

export default BrandsSlider2;
