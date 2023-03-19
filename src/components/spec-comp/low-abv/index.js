import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import { OrangeButtons } from "@/utils/Buttons";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect } from "react";
import { emptyProductList, getProduct } from "@/store/slices/product";
import Link from "next/link";
import useNavDetails from "@/Hooks/useNavDetails";
import { useDispatch, useSelector } from "react-redux";

function LowABV() {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const coctailData = coctailMock.coctailData;
  const { category, subcategory, productId } = useNavDetails()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct('low_no_abv'))
    return () => {
      dispatch(emptyProductList())
    }
  }, [])
  const { productList } = useSelector((state) => state.product)

  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
          <p className="text-white text-[14px]">
            <span className="text-[#CCCCCC]">Specs</span> / Low/No ABV
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
            Low / No ABV
          </h2>
          <OrangeButtons label="Brands" noPadding={true} />
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
        <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
          {productList.map((card, i) => {
            return (
              <div className=" col-span-1 ">
                <Link href={`/specs/low_no_abv?id=${card.low_no_abv_id}`}>
                  <RectangularCard
                    title={card.low_no_abv_name}
                    image={"/asset/redbull.svg"}
                    subtitle="Low(0%)"
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

export default LowABV;
