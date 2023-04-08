import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import useMediaQuery from "@/Hooks/useMediaQuery";

import { useEffect, useState } from "react";
import { emptyProductList, getProduct, getProductByCategoryId } from "@/store/slices/product";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import useNavDetails from "@/Hooks/useNavDetails";
import { OrangeButtons } from "@/utils/Buttons";
import { enUrl } from "@/utils/encoderfunc";
import Search from "@/utils/Search";

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

  const [finaldata,setfinaldata]=useState([])
    const [searchTerm,setSearch]=useState("")
    useEffect(() => {
      let temp=[]
      
      if(searchTerm==""){
        temp=[...productsByCategory]
      } else {
        const info=productsByCategory.filter((i)=>i.wine_name?.toLowerCase()?.includes(searchTerm.toLowerCase())) 
        temp=[...info]
      }
      setfinaldata([...temp])
    }, [productsByCategory,searchTerm]);

  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
          <Breadcrumb last={categoryName} />
          {!isTablet && (<Search search={searchTerm} setSearch={(e) => {
                setSearch(e);
                //  filterData(e) 
              }} />)}
        </div>
        <div className="heading-container lg:mb-8 mb-3 flex w-full justify-between">
          <h2 className="text-white text-[24px] leading-9 font-bold capitalize ">
            {categoryName}
          </h2>
          <Link href={`/specs/wine/${enUrl(categoryName)}/brands/list?id=${id}&typeid=${id}`} >
            <OrangeButtons label="Brands" noPadding={true} />
          </Link>
        </div>
        {isTablet && (
                     <Search search={searchTerm} setSearch={(e) => {
                        setSearch(e);
                        //  filterData(e) 
                    }} />
                )}
        <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] mt-4 ">
          {finaldata?.map((card, inx) => {
            return (
              <div className=" col-span-1 " key={inx}>
                <Link href={`specs/wine/${enUrl(categoryName)}/${enUrl(card.wine_name)}/?id=${card.wine_id}&typeid=${id}`}>
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
