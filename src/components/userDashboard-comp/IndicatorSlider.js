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

        const data=[{name:"Bar 101",image:"/asset/Bar 101.png",completionPercentage:5},
        {name:"Raise the Bar",image:"/asset/Raise the Bar.png",completionPercentage:20},
        {name:"Psychology of Hospitality",image:"/asset/Psychology of Hospitality.png",completionPercentage:15}]
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
                        {data.map((slide, i) => {
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
                                    <CourseCardwithIndicators data={slide} />
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
