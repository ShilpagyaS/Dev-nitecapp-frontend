import useMediaQuery from '@/Hooks/useMediaQuery';
import LeaderShipTableCards from '@/utils/Cards/Text card/LeaderShipTableCards'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import coctailMock from "../mock/CoctailMock.json";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


function LeaderShipSlider() {


  const isTablet = useMediaQuery("(max-width: 786px)");
  const isPhone = useMediaQuery("(max-width: 414px)");
  const coctailData = coctailMock.coctailData;

  return (
    <div className=" mt-5 w-full">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[Navigation, Pagination, A11y]}
        
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
              <div className=' border border-[#3C3C3C] justify-end items-center px-[16px] pt-[4px] pb-[16px] flex flex-col w-[380px] h-[279px] rounded-[12px]'>
                <h3 className='not-italic font-semibold text-base leading-9 text-white font-Inter mb-[4px] w-full'>Title</h3>
                <LeaderShipTableCards />
                <LeaderShipTableCards />
                <LeaderShipTableCards />

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );

  // <div className=' border border-[#3C3C3C] justify-end items-center px-[16px] pt-[4px] pb-[16px] flex flex-col w-[380px] h-[279px] rounded-[12px]'>
  //     <h3 className='not-italic font-semibold text-base leading-9 text-white font-Inter mb-[4px] w-full'>Title</h3>
  //     <LeaderShipTableCards/>
  //     <LeaderShipTableCards/>
  //     <LeaderShipTableCards/>

  // </div>

}

export default LeaderShipSlider