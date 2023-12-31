import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { CoctailCard } from "@/utils/SpecCards";
import coctailMock from "../mock/CoctailMock.json";
import { whatsthestrength } from "@/utils/abvfinder";
import { shortString } from "@/utils/stringShortner";
import { useRouter } from "next/router";
import { enUrl } from '@/utils/encoderfunc'


function CoctailSlider({ data }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const isPhone = useMediaQuery("(max-width: 414px)");
  const coctailData = coctailMock.coctailData;
  const router = useRouter()

  return (
    <div className=" mt-[0px] w-full">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[Pagination]}
        pagination={true}
      >
        {data.map((slide, i) => {
          console.log(slide);
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
                title={shortString(slide.cocktail_name)}
                //  image={"/asset/coctail1.png"}
                onclickHandler={() => { router.push(`/specs/cocktail/${enUrl(slide.cocktail_name)}?id=${slide.cocktail_id}`) }}
                image={slide.image}
                subtitle={`${whatsthestrength(slide.abv)}(${slide.abv}%)`}
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
