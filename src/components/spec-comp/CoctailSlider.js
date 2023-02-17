import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CoctailCard } from "@/utils/SpecCards";
import coctailMock from "../mock/CoctailMock.json";

function CoctailSlider() {
  const coctailData = coctailMock.coctailData;

  return (
    <div className=" mt-5 w-full">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Pagination]}
        pagination={true}
      >
        {coctailData.map((slide, i) => {
          return (
            <SwiperSlide
              style={{
                width: "fit-content",
                padding: "15px 0px",
                display: "flex",
              }}
              className="mb-8 w-[15px] "
            >
              <CoctailCard
                title={slide.title}
                image={"/asset/coctail1.png"}
                isNew={false}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CoctailSlider;
