import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import useMediaQuery from "@/Hooks/useMediaQuery";

import { useEffect } from "react";
import { emptyProductList, getProduct, getProductByCategoryId } from "@/store/slices/product";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import useNavDetails from "@/Hooks/useNavDetails";
import { OrangeButtons } from "@/utils/Buttons";

function Wine({ id, categoryName }) {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery("(max-width: 786px)");
  const { productsByCategory } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductByCategoryId("wine", id));
    return () => {
      dispatch(emptyProductList());
    };
  }, []);

  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
          <Breadcrumb last={categoryName} />
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
        <div className="heading-container lg:mb-8 mb-3 flex w-full justify-between">
          <h2 className="text-white text-[24px] leading-9 font-bold capitalize ">
            {categoryName}
          </h2>
          <Link href={`/specs/wine/${categoryName}/brands/list?id=${id}`} >
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
        <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
          {productsByCategory?.map((card, inx) => {
            return (
              <div className=" col-span-1 " key={inx}>
                <Link href={`specs/wine/${categoryName.replace('/', ' ')}/${card.wine_name.replace('/', " ")}/?id=${card.wine_id}`}>
                  <RectangularCard
                    title={card.wine_name}
                    image={card.image}
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

export default Wine;
