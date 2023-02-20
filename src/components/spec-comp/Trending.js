import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { TrendingCard } from "@/utils/SpecCards";

import TrendingMock from "../mock/TrendingMock.json";

function Trending() {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const isPhone = useMediaQuery("(max-width: 414px)");
  const TrendingData = TrendingMock.trendingCardsMock;

  return (
    <div className=" mt-5 w-full">
      <h3 className="text-white text-[20px] leading-8 mb-4">Trending</h3>
      <Swiper
        slidesPerView={isPhone ? 2 : isTablet ? 3 : 4}
        spaceBetween={20}
        modules={[Pagination]}
        pagination={true}
      >
        {TrendingData.map((slide, i) => {
          return (
            <SwiperSlide
              style={{
                width: "fit-content",
                padding: "15px 0px",
                display: "flex",
              }}
              key={i}
              className="mb-8 w-[15px]"
            >
              <TrendingCard
                title={slide.title}
                image={"/asset/trendingImg1.png"}
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
