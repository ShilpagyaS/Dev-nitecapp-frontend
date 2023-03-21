import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import { OrangeButtons } from "@/utils/Buttons";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect, useState } from "react";
import useFilteredData from "@/Hooks/useFilteredData";
import { emptyProductList, getProduct } from "@/store/slices/product";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import useNavDetails from "@/Hooks/useNavDetails";

function BeerSeltzer() {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProduct('beer'))
    return () => {
      dispatch(emptyProductList())
    }
  }, [])
  const { productList } = useSelector((state) => state.product)
  const filtereddataList = useFilteredData(productList, true, "beer", "category")
  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
          <p className="text-white text-[14px]">
            <span className="text-[#CCCCCC]">Specs</span> / Beer-Seltzer
          </p>
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
        <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
          <h2 className="text-white text-[24px] leading-9 font-bold ">
            Beer / Seltzer
          </h2>
          <Link href={`specs/brands/beer`} >
            <OrangeButtons label="Brands" noPadding={true} />
          </Link>
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
        {filtereddataList.map((d, inx) => {
          return <div className="bottle-cards-container mb-8" key={inx}>
            <p className="text-white text-[20px] font-semibold mb-5">{d.type}</p>
            <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
              {d.data.map((card, i) => {
                return (
                  <div className=" col-span-1 ">
                    <Link href={`specs/beer?id=${card.beer_id}`}>
                      <RectangularCard
                        title={card?.beer_name}
                        image={"/asset/blue-moon.svg"}
                        subtitle="Medium(12%)"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        })

        }


        {/* <div className="can-cards-container">
          <p className="text-white text-[20px] font-semibold mb-5">Can</p>
          <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
            {coctailData.map((card, i) => {
              return (
                <div className=" col-span-1 ">
                  <RectangularCard
                    title={card.title}
                    image={"/asset/coors-light.svg"}
                    subtitle="Medium(12%)"
                  />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default BeerSeltzer;
