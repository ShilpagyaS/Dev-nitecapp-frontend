import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import useMediaQuery from "@/Hooks/useMediaQuery";
import useFilteredData from "@/Hooks/useFilteredData";
import { useEffect } from "react";
import { emptyProductList } from "@/store/slices/product";
import { useDispatch } from "react-redux";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import useNavDetails from "@/Hooks/useNavDetails";

function Wine({productList}) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const coctailData = coctailMock.coctailData;
  const {category,subcategory,productId}=useNavDetails()
  const filtereddataList=useFilteredData(productList,false,"Wine")
  const dispatch=useDispatch()
  useEffect(()=>{
    return ()=>{
         dispatch(emptyProductList())
       }
 },[])
  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
        <Breadcrumb/>
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
          <h2 className="text-white text-[24px] leading-9 font-bold ">Wine</h2>
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
        {filtereddataList.map((d,inx)=>
        <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] " key={inx}>
          {d.data.map((card, i) => {
            return (
              <div className=" col-span-1 ">
                <Link href={`${category}/${subcategory}/${card.wine_id}`}>
                <RectangularCard
                  title={card.wine_name}
                  image={"/asset/red-chillie.svg"}
                  circularImg={true}
                />
                </Link>
              </div>
            );
          })}
        </div>)
        }
      </div>
    </>
  );
}

export default Wine;
