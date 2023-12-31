import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useMediaQuery from "@/Hooks/useMediaQuery";
import CourseCardwithIndicators from "@/utils/Cards/cruosalcards/CourseCardwithIndicators";
import Image from "next/image";
function IndicatorSlider({ data, name, onCardClick }) {
    {
        const isTablet = useMediaQuery("(max-width: 786px)");
        const isPhone = useMediaQuery("(max-width: 414px)");
        // const data = [
        //     { name: "Bar 101", image: "/asset/Bar 101.png", completionPercentage: 5, type: 'video' },
        //     { name: "Raise the Bar", image: "/asset/Raise the Bar.png", completionPercentage: 20, type: 'video' },
        //     { name: "Psychology of Hospitality", image: "/asset/Psychology of Hospitality.png", completionPercentage: 15, type: 'flashcard' },

        //     { name: "Bar 101", image: "/asset/Bar 101.png", completionPercentage: 5, type: 'video' },
        //     { name: "Raise the Bar", image: "/asset/Raise the Bar.png", completionPercentage: 20, type: 'video' },
        //     { name: "Psychology of Hospitality", image: "/asset/Psychology of Hospitality.png", completionPercentage: 15, type: 'flashcard' },

        //     { name: "Bar 101", image: "/asset/Bar 101.png", completionPercentage: 5, type: 'video' },
        //     { name: "Raise the Bar", image: "/asset/Raise the Bar.png", completionPercentage: 20, type: 'video' },
        //     { name: "Psychology of Hospitality", image: "/asset/Psychology of Hospitality.png", completionPercentage: 15, type: 'flashcard' },

        //     { name: "Bar 101", image: "/asset/Bar 101.png", completionPercentage: 5, type: 'video' },
        //     { name: "Raise the Bar", image: "/asset/Raise the Bar.png", completionPercentage: 20, type: 'video' },
        //     { name: "Psychology of Hospitality", image: "/asset/Psychology of Hospitality.png", completionPercentage: 15, type: 'flashcard' },

        // ]
        return (
            <div className='mt-[20px]'>
                <div className="flex items-center mb-[10px]">

                    <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                        {name}
                    </h5>
                    <Image src={'/asset/Vector 5.svg'} height={15} width={8} className={'ml-[20px]'} />
                </div>
                <div className=" mt-[10px] w-full">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        modules={[Pagination]}

                    >
                        {data?.map((slide, i) => {
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
                                    <CourseCardwithIndicators data={slide} onCardClick={onCardClick} />
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
