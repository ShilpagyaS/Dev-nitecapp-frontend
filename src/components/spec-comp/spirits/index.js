import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect, useState } from "react";
import useFilteredData from "@/Hooks/useFilteredData";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getProduct } from "@/store/slices/Spirit";
import Breadcrumb from "@/components/Breadcrumb";
import useNavDetails from "@/Hooks/useNavDetails";
import Link from "next/link";

function Spirits() {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.spirit);

  useEffect(() => {
    dispatch(getProduct("spirit"));
    return()=>{
      dispatch(emptyProductList())
    }
  }, []);

  useEffect(() => {
    console.log("spirit=============================Product", productList);
  }, [productList]);
  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
          <Breadcrumb />
          {!isTablet && (
            <div className="search-container flex items-center bg-[#1D1D1D] md:w-[358px] h-[40px] rounded-[10.9744px] px-[26px]">
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
          )}
        </div>
        <div className="heading-container lg:mb-8 mb-3">
          <h2 className="text-white text-[24px] leading-9 font-bold ">
            Spirits
          </h2>
        </div>
        {isTablet && (
          <div className="search-container flex items-center bg-[#1D1D1D] w-full h-[40px] rounded-[10.9744px] px-[26px] mb-7">
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
        )}
        <div className="cards-container grid lg:grid-cols-2 grid-cols-1  gap-x-[73px] gap-y-[12px] ">
          {productList?.map((card, inx) => {
            return (
              <div className=" col-span-1 ">
                <Link href={`specs/spirit?id=${card.wine_id}`}>
                  <RectangularCard
                    title={card.drink_category_name}
                    image={`/asset/london-dry.svg`}
                    circularImg={true}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Spirits;
