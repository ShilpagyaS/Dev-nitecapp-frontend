import LayoutWithSidebar from "../Layouts/LayoutWithSidebar";
import { CiSearch } from "react-icons/ci";
import CoctailSlider from "./CoctailSlider";
import CoreBeverage from "./CoreBeverage";
import Trending from "./Trending";

function SpecComp() {
  console.log(
    "==================specs===================================================================================="
  );
  return (
    <>
      <div className="Header-container md:flex-row lg:flex-row flex-col flex justify-between lg:items-center md:items-center mb-6  ">
        <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
          <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
            Specs
          </h1>
        </div>
        <div className="search-container flex items-center bg-[#1D1D1D] w-full md:w-[358px] h-[40px] rounded-[10.9744px] px-[26px]">
          <CiSearch
            color="#929292"
            size="15px"
            className="bg-[#1D1D1D] mr-[26px]"
          />
          <input
            className="text-[#767676] bg-[#1D1D1D] text-[16px] leading-6 h-full"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="sub-heading-container flex lg:justify-start md:justify-start justify-between items-center">
        <h3 className="text-white text-[20px] leading-8 font-semibold mr-[48px]">
          Cocktails
        </h3>
        <p className="text-[#F19B6C]">See All</p>
      </div>
      <CoctailSlider />
      <CoreBeverage />
      <Trending />
    </>
  );
}

export default SpecComp;
