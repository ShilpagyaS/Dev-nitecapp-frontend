import { getOutlets } from "@/store/slices/outlet";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandsSlider from "./BrandsSlider";
import BrandsSlider2 from "./BrandsSlider2";
import Paragraph from "./Paragraph";

function Brands() {
  const router = useRouter();
  return (
    <>
      <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px] py-6">
        <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
          Brands
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[58px] mb-[48px]">
        <div className=" col-span-1 lg:mb-0 mb-6">
          <BrandsSlider />
        </div>
        <div className=" col-span-1  ">
          <Paragraph
            title="Explore Our Outlets"
            desc="Discover Classic brands, time-honored hospitality for the modern traveller. We offer our family of Distinctive brands."
            btnLabel="Explore All"
            onClickHandler={() => { router.push("/brand/explore-brands") }}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 order-last space-y-reverse grid-cols-1 gap-x-[58px] mb-[48px]">
        <div className=" col-span-1 ">
          <Paragraph
            title="Discover Jobs"
            desc="s the #1 leader in hospitality worldwide, Marriott International has 7,500+ hotel properties and 30 top hotel brands. Unmatched opportunities await you! The next step in your career could lead to your greatest adventure."
            btnLabel="Search Careers"
          />
        </div>
        <div className=" lg:col-span-2 col-span-1 lg:mb-0 mb-6">
          <BrandsSlider2 />
        </div>
      </div>
    </>
  );
}

export default Brands;
