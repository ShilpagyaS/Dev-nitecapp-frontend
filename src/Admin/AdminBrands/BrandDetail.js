import Breadcrumb from "@/components/Breadcrumb";
import AdminBannerSlider from "./BannerSlider";
import Image from "next/image";
import BrandsMock from "../../components/mock/BrandsMock.json";
import {
  LongButton,
  GrayButton,
  CustomButton,
  TextButton,
} from "@/utils/Buttons";

const AdminBrandDetail = () => {
  const brandsData = BrandsMock.Brandsdata;

  const editIcon = (color) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-transparent"
      >
        <path
          d="M4.162 10.6628H12V11.9962H0V9.16748L6.6 2.56748L9.428 5.39682L4.16133 10.6628H4.162ZM7.542 1.62548L8.95667 0.210816C9.08169 0.0858354 9.25122 0.015625 9.428 0.015625C9.60478 0.015625 9.77432 0.0858354 9.89933 0.210816L11.7853 2.09682C11.9103 2.22183 11.9805 2.39137 11.9805 2.56815C11.9805 2.74493 11.9103 2.91446 11.7853 3.03948L10.3707 4.45348L7.54267 1.62548H7.542Z"
          fill={color}
        />
      </svg>
    );
  };

  return (
    <div className="explore-brands-container text-white">
      <div className="breadcrumb-container flex justify-between items-center">
        <Breadcrumb />

        <div className="btns-container flex ">
          <div className="mr-4">
            <GrayButton icon={editIcon("black")} label="Edit" />
          </div>
          <CustomButton background="#F19B6C" label="Save" />
        </div>
      </div>
      <div className="explore-brands-banner-contaiiner mb-8">
        <AdminBannerSlider pagination={true} />
        <div className="edit-image-container flex justify-end ">
          <TextButton
            color="#929292"
            icon={editIcon("#929292")}
            label="Edit Image"
          />
        </div>
      </div>
      <div className="culture-container mb-[48px]">
        <h4 className="heading mb-6 text-[20px] leading-8">Culture</h4>
        <div className="img-description-container grid grid-cols-1 lg:grid-cols-2 gap-x-[42px] mb-8">
          <div>
            <div className="img-container col-span-1 relative w-full h-[286px]">
              <Image src="/asset/hotel.svg" fill priority/>
            </div>
            <div className="edit-image-container flex justify-end ">
              <TextButton
                color="#929292"
                icon={editIcon("#929292")}
                label="Edit Image"
              />
            </div>
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
          <div>
            <div className="img-container col-span-1 relative w-full h-[286px]">
              <Image src="/asset/hotel2.svg" fill priority/>
            </div>
            <div className="edit-image-container flex justify-end ">
              <TextButton
                color="#929292"
                icon={editIcon("#929292")}
                label="Edit Image"
              />
            </div>
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

export default AdminBrandDetail;
