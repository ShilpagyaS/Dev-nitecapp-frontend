import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import coctailMock from "../mock/CoctailMock.json";
import ResumeCourseCard from "@/utils/Cards/cruosalcards/ResumeCourseCard";
function CourceSlider() {
    {
        const isTablet = useMediaQuery("(max-width: 786px)");
        const isPhone = useMediaQuery("(max-width: 414px)");
        const coctailData = coctailMock.coctailData;
        const data=[{name:"Bar 101",image:"/Bar 101.png"},
        {name:"Raise the Bar",image:"/Raise the Bar.png"},
        {name:"Psychology of Hospitality",image:"/Psychology of Hospitality.png"}
    ]
        return (
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
                                <ResumeCourseCard completionPercentage={i*10} data={slide}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
              
            </div>
        );
    }
}

export default CourceSlider
