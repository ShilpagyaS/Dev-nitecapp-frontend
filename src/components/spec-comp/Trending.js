import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TrendingCard } from "@/utils/SpecCards";
import TrendingMock from "../mock/TrendingMock.json";

function Trending() {
  const TrendingData = TrendingMock.trendingCardsMock;

  return (
    <div className=" mt-5 w-full">
      <h3 className="text-white text-[20px] leading-8 mb-4">Trending</h3>
      <Swiper
        slidesPerView={3}
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
              className="mb-8 w-[15px] "
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
