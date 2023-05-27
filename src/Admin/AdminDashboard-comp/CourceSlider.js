import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import ResumeCourseCard from "@/utils/Cards/cruosalcards/ResumeCourseCard";
function CourceSlider() {
    {
        const isTablet = useMediaQuery("(max-width: 786px)");
        const isPhone = useMediaQuery("(max-width: 414px)");
        const coctailData = [1,2,34,4,5,6,,8,9,0,1,2,3,4,5]

        return (
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
                                <ResumeCourseCard completionPercentageOuter={i*10}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
              
            </div>
        );
    }
}

export default CourceSlider
