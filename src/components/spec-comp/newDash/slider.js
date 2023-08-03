import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { CircularTrendingCardDash, TrendingCard, TrendingCardDash } from "@/utils/SpecCards";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import { useRouter } from "next/router";



function TrendingDash({ data, title, isBig, isSeeAllUrl }) {
    const isTablet = useMediaQuery("(max-width: 786px)");
    const isPhone = useMediaQuery("(max-width: 414px)");
    const router = useRouter()

    return (
        <div className=" mt-5 w-full">
            <div className="w-full flex items-center justify-between">
                <h3 className="text-white text-[20px] leading-8 mb-4">{title}</h3>
                {
                    isSeeAllUrl &&
                    <h3 className="text-primary-base text-[16px] leading-8 mb-4 font-semibold cursor-pointer" onClick={() => { router.push(isSeeAllUrl) }}>See All</h3>
                }
            </div>
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
export function CircularTrendingDash({ data, title, isBig, isSeeAllUrl }) {
    const isTablet = useMediaQuery("(max-width: 786px)");
    const isPhone = useMediaQuery("(max-width: 414px)");
    const router = useRouter()

    return (
        <div className=" mt-5 w-full">
            <div className="w-full flex items-center justify-between">
                <h3 className="text-white text-[20px] leading-8 mb-4">{title}</h3>
                {
                    isSeeAllUrl &&
                    <h3 className="text-primary-base text-[16px] leading-8 mb-4 font-semibold cursor-pointer" onClick={() => { router.push(isSeeAllUrl) }}>See All</h3>
                }
            </div>
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
                                <CircularTrendingCardDash
                                    title={slide.title}
                                    image={slide.image}
                                    isNew={false}
                                />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

