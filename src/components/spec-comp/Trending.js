import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { TrendingCard } from "@/utils/SpecCards";

import TrendingMock from "../mock/TrendingMock.json";

function Trending({ data }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const isPhone = useMediaQuery("(max-width: 414px)");


  return (
    <div className=" mt-5 w-full">
      <h3 className="text-white text-[20px] leading-8 mb-4">Trending</h3>
      <Swiper slidesPerView={"auto"} spaceBetween={20} pagination={true}>
        {data?.map((slide, i) => {
          return (
            <SwiperSlide
              style={{
                width: "fit-content",
                padding: "15px 0px",
                display: "flex",
              }}
              key={i}
              className="mb-8 "
            >
              <TrendingCard
                title={slide.title}
                image={slide.image}
                isNew={false}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Trending;
