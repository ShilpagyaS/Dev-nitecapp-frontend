import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { TrendingCard, TrendingCardDash } from "@/utils/SpecCards";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";



function TrendingDash({ data, title, isBig }) {
    const isTablet = useMediaQuery("(max-width: 786px)");
    const isPhone = useMediaQuery("(max-width: 414px)");


    return (
        <div className=" mt-5 w-full">
            <h3 className="text-white text-[20px] leading-8 mb-4">{title}</h3>
            <Swiper slidesPerView={"auto"} spaceBetween={20} pagination={true} modules={[Pagination, Navigation]}>
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
                            <Link href={slide.link}>
                                {!isBig ?
                                    <TrendingCard
                                        title={slide.title}
                                        image={slide.image}
                                        isNew={false}
                                    /> : <TrendingCardDash
                                        title={slide.title}
                                        image={slide.image}
                                        isNew={false}
                                    />}
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default TrendingDash;
