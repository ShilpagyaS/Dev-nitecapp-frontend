import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import coctailMock from "../mock/CoctailMock.json";
import CourseCardwithIndicators from "@/utils/Cards/cruosalcards/CourseCardwithIndicators";
function IndicatorSlider() {
    {
        const isTablet = useMediaQuery("(max-width: 786px)");
        const isPhone = useMediaQuery("(max-width: 414px)");
        const coctailData = coctailMock.coctailData;

        return (
            <div className='mt-[35px]'>
                <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[33px]'>
                    Boost Sales & Tip 
                </h5>
                <div className=" mt-5 w-full">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        modules={[Pagination]}

                    >
                        {coctailData?.map((slide, i) => {
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
                                    <CourseCardwithIndicators />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                </div>
            </div>
        );
    }
}

export default IndicatorSlider
