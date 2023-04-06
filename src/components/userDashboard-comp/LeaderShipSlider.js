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
  const ar = [
    [{ img: '/asset/Byron.jpeg', name: 'John ', star: '50', number: '33', thunder: '9' },
    { img: '/asset/Emily.jpeg', name: 'James ', star: '5', number: '83', thunder: '1' },
    { img: '/asset/Jonathon.jpeg', name: 'Naveen ', star: '2', number: '14', thunder: '0' }],
    [{ img: '/asset/Kulbir.jpeg', name: 'Aaron ', star: '7', number: '2', thunder: '4' },
    { img: '/asset/Monique.jpeg', name: 'Drew', star: '14', number: '99', thunder: '0' },
    { img: '/asset/Vanessa.jpeg', name: ' Sheldon', star: '27', number: '66', thunder: '91' }],
    // [{ name: 'Jack ', star: '64', number: '65', thunder: '54' }, { name: 'Harry', star: '99', number: '78', thunder: '17' }, { name: 'Joey', star: '52', number: '77', thunder: '3' }  ],
    // [{ name: 'Max ', star: '23', number: '29', thunder: '45' }, { name: 'Albert', star: '85', number: '87', thunder: '69' }, { name: 'Monica', star: '23', number: '24', thunder: '7' }  ],
  ]
  const titlear = ['Best Bartender', 'Best Server']
  return (
    <div className=" mt-5 w-full">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[Navigation, Pagination, A11y]}

        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}


      >
        {ar.map((slide, i) => {
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
                <h3 className='not-italic font-semibold text-base leading-9 text-white font-Inter mb-[4px] w-full'>{titlear[i]}</h3>
                <LeaderShipTableCards img={slide[0].img} name={slide[0].name} number={slide[0].number} star={slide[0].star} thunder={slide[0].thunder} />
                <LeaderShipTableCards img={slide[1].img} name={slide[1].name} number={slide[1].number} star={slide[1].star} thunder={slide[1].thunder} />
                <LeaderShipTableCards img={slide[2].img} name={slide[2].name} number={slide[2].number} star={slide[2].star} thunder={slide[2].thunder} />


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