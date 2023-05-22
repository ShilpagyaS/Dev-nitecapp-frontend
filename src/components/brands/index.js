import { getOutlets } from "@/store/slices/outlet";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandsSlider from "./BrandsSlider";
import BrandsSlider2 from "./BrandsSlider2";
import Paragraph from "./Paragraph";
const sliderData = [
  {
    title: "Get Certified for Training",
    img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/Screen+Shot+2023-04-05+at+6.05.27+PM.png",
  },
  {
    title: "Work From Beautiful Concepts",
    img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/Denaes+Diner.jpeg",
  },
  {
    title: "Claim Rewards for Your Progress",
    img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/rooftop-at-the-standard-downtown-night.jpeg",
  },
];
const sliderData2 = [
  {
    title: "Get Certified for Training",
    img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/rooftop-at-the-standard-downtown-night.jpeg",
  },
  {
    title: "Work From Beautiful Concepts",
    img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/barmakase.jpeg",
  },
  {
    title: "Claim Rewards for Your Progress",
    img: "https://nitecapp.s3.amazonaws.com/Hotel+Outlets/Screen+Shot+2023-04-05+at+6.05.19+PM.png",
  },
];
const sliderData3 = [
  {
    title: "Get Certified for Training",
    img: "/asset/delphi6.png",
  },
  {
    title: "Work From Beautiful Concepts",
    img: "/asset/delphi2.png",
  },
  {
    title: "Claim Rewards for Your Progress",
    img: "/asset/delphi3.png",
  },
];
const sliderData4 = [
  {
    title: "Get Certified for Training",
    img: "/asset/delphi4.png",
  },
  {
    title: "Work From Beautiful Concepts",
    img: "/asset/delphi5.png",
  },
  {
    title: "Claim Rewards for Your Progress",
    img: "/asset/delphi1.png",
  },
];
function Brands() {
  const router = useRouter();
  const { brand_display } = useSelector((state) => state.auth)

  return (
    <>
      <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px] py-6">
        <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
          Brands
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[58px] mb-[48px]">
        <div className=" col-span-1 lg:mb-0 mb-6">
          <BrandsSlider sliderData={sliderData} sliderData2={sliderData2} />
        </div>
        <div className=" col-span-1  ">
          <Paragraph
            title="Explore Our Outlets"
            desc="Discover Classic brands, time-honored hospitality for the modern traveller. We offer our family of Distinctive brands."
            btnLabel="Explore All"
            onClickHandler={() => { router.push("/brands/all_Brands") }}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 order-last space-y-reverse grid-cols-1 gap-x-[58px] mb-[48px]">
        <div className=" col-span-1 ">
          <Paragraph
            title={`Explore ${brand_display}`}
            desc="In Ancient Greece, Delphi was considered the center of the world. A few thousand years later, that essence now resides at 550 Flower Street: a staple of downtown Los Angeles’ silhouette. Once the headquarters of Superior Oil, and then, the focal point of the city’s early 2000’s revitalization, our address is once again rewriting the script for creativity, culture, and hospitality."
            btnLabel={`View ${brand_display} Website`}
            onClickHandler={() => { window.open('https://www.thedelphihotel.com/') }}
          />
        </div>
        <div className=" lg:col-span-1 col-span-1 lg:mb-0 mb-6">
          <BrandsSlider sliderData={sliderData3} sliderData2={sliderData4} />

        </div>
      </div>
    </>
  );
}

export default Brands;
