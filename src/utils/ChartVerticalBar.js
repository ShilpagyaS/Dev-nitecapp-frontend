import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import coctailMock from ".././components/mock/CoctailMock";
import { BarChart } from "./barChart"
export function ChartVerticalBar() {
    {
        const coctailData = coctailMock.coctailData;

        return (
            <div style={{ backgroundColor: '#2C2C2C' }} className=" mt-5 w-full">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}

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
                                <div className="pt-[11px] bg-[#2C2C2C] rounded-[12px]"> 
                                <p className="not-italic font-semibold text-base font-Inter text-white bg-[#2C2C2C] rounded-[12px] pl-[11px]"> Total Sales  |  This Week</p>

                                    <BarChart />
                                </div>
                             
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </div>
        );
    }
}
