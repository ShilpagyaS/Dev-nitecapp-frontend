import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import { OrangeButtons } from "@/utils/Buttons";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import useNavDetails from "@/Hooks/useNavDetails";
import { getProduct, emptyProductList } from "@/store/slices/product";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { whatsthestrength } from "@/utils/abvfinder";
import Search from "@/utils/Search";
import { enUrl } from "@/utils/encoderfunc";

function Coffees({ headerHidden }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const coctailData = coctailMock.coctailData;
  const dispatch = useDispatch();
  const [searchTerm, setSearch] = useState("")
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct("coffee"));
    return () => {
      dispatch(emptyProductList());
    };
  }, []);
  const [finaldata, setfinaldata] = useState([])
  useEffect(() => {
    let temp = []
    if (searchTerm == "") {
      temp = [...productList]
    } else {
      const info = productList.filter((i) => i.cocktail_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      temp = [...info]
    }
    filterbydate
    setfinaldata([...(filterbydate(temp) || [])])
  }, [productList, searchTerm]);

  const filterbydate = (list) => {
    const sortedItems = [...list].sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt)
    })
    return sortedItems
  }
  return (
    <>
      <div className="coctail-container">

        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 flex-wrap">
          <Breadcrumb />
          {!isTablet && <Search search={searchTerm} setSearch={(e) => {
            setSearch(e);
            //  filterData(e) 
          }} />}

        </div>


        <div className="heading-container flex items-center justify-between lg:mb-4 mb-3">
          <h2 className="text-white text-[24px] leading-9 font-bold ">
            Coffee
          </h2>
          <Link href={`/specs/coffee/ingredients`}>
            <OrangeButtons label="Ingredients" noPadding={true} />
          </Link>
        </div>
        {isTablet && <Search search={searchTerm} setSearch={(e) => {
          setSearch(e);
          //  filterData(e) 
        }} />}
        <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] mt-[10px] ">
          {finaldata?.map((card, i) => {
            return (
              <div className=" col-span-1 ">
                <Link href={`/specs/coffee/${enUrl(card.coffee_name)}?id=${card.coffee_id}`}>
                  <RectangularCard
                    title={card.coffee_name}
                    image={card.image}
                    subtitle={`${whatsthestrength(card.abv)} (${card.abv}%)`}
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

export default Coffees;
