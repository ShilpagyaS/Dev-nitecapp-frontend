import Breadcrumb from "@/components/Breadcrumb";
import BannerSlider from "./BannerSlider";
import Image from "next/image";
import BrandsMock from "../../mock/BrandsMock.json";
import { LongButton } from "@/utils/Buttons";

const BrandsBrandDetail = () => {
  const brandsData = BrandsMock.Brandsdata;

  return (
    <div className="explore-brands-container text-white">
      <Breadcrumb />
      <div className="explore-brands-banner-contaiiner mb-8">
        <BannerSlider pagination={true} />
      </div>
      <div className="culture-container mb-[48px]">
        <h4 className="heading mb-6 text-[20px] leading-8">Culture</h4>
        <div className="img-description-container grid grid-cols-1 lg:grid-cols-2 gap-x-[42px] mb-8">
          <div className="img-container col-span-1 relative w-full h-[286px]">
            <Image src="/asset/hotel.svg" fill priority/>
          </div>
          <div className="description-container col-span-1">
            <div className="flex flex-col justify-between h-full py-2 lg:text-left text-center">
              <p className="text-[20px] font-semibold leading-9 italic">
                We strive to create a memorable stay for our guests through
                personalized touches. Through the team’s collaboration and
                positive energy, we are able to make that happen.
              </p>
              <span className="text-[16px] font-normal  leading-6">
                ANDREA N.
              </span>
            </div>
          </div>
        </div>
        <div className="button-container flex justify-center">
          <LongButton background="#F19B6C" color="#111" label="Explore More" />
        </div>
      </div>
      <div className="culture-containermb-[48px]">
        <h4 className="heading mb-6 text-[20px] leading-8">
          Careers at ST.REGIS
        </h4>
        <div className="img-description-container grid grid-cols-1 lg:grid-cols-2 gap-x-[42px] mb-8">
          <div className="img-container col-span-1 relative w-full h-[286px]">
            <Image src="/asset/hotel2.svg" fill priority />
          </div>
          <div className="description-container col-span-1 lg:text-left text-center">
            <div className="">
              <h4 className="text-[20px] font-semibold title mb-[30px]">
                We know the classics, because we invented them.
              </h4>
              <p className="text-[16px] font-normal m-0  leading-6">
                The St. Regis established luxury hospitality more than 110 years
                ago, with the opening of the St. Regis New York. At St. Regis
                you will work at the best addresses around the world; where
                trends are born, boundaries are broken and guests can live
                exquisite. We are looking for people who are innovative, team
                oriented and passionate about luxury. We invite you to explore
                careers at St. Regis.
              </p>
            </div>
          </div>
        </div>
        <div className="button-container flex justify-center">
          <LongButton
            background="#F19B6C"
            color="#111"
            label="Find Jobs at ST.REGIS"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandsBrandDetail;
