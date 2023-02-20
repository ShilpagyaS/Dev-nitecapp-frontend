import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { CoctailCard } from "@/utils/SpecCards";
import coctailMock from "../mock/CoctailMock.json";

function CoctailSlider() {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const isPhone = useMediaQuery("(max-width: 414px)");
  const coctailData = coctailMock.coctailData;

  return (
    <div className=" mt-5 w-full">
      <Swiper
        slidesPerView={isPhone ? 2 : isTablet ? 3 : 4}
        spaceBetween={20}
        modules={[Pagination]}
        pagination={true}
      >
        {coctailData.map((slide, i) => {
          return (
            <SwiperSlide
              key={i}
              style={{
                width: "fit-content",
                padding: "15px 0px",
                display: "flex",
              }}
              className="mb-8 w-[15px]"
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
