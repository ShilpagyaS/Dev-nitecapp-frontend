import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import { OrangeButtons } from "@/utils/Buttons";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { emptyProductList, getProduct } from "@/store/slices/product";
import Link from "next/link";
import useNavDetails from "@/Hooks/useNavDetails";
import { useDispatch, useSelector } from "react-redux";
import { whatsthestrength } from "@/utils/abvfinder";
import Search from "@/utils/Search";
import Breadcrumb from "@/components/Breadcrumb";
import { enUrl } from "@/utils/encoderfunc";

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
  const [finaldata, setfinaldata] = useState([])
  const [searchTerm, setSearch] = useState("")
  useEffect(() => {
    let temp = []
    if (searchTerm == "") {
      temp = [...productList]
    } else {
      const info = productList.filter((i) => i.cocktail_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      temp = [...info]
    }
    setfinaldata([...temp])
  }, [productList, searchTerm]);



  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
          <Breadcrumb />
          {!isTablet && <Search search={searchTerm} setSearch={(e) => {
            setSearch(e);
            //  filterData(e) 
          }} />}
        </div>
        <div className="heading-container flex items-center justify-between lg:mb-4  mb-3 py-4">
          <h2 className="text-white text-[1.5rem] leading-9 font-semibold ">
            Low / No ABV
          </h2>
          <Link href={`/specs/low_no_abv/brands`}>
            <OrangeButtons label="Brands" noPadding={true} />
          </Link>
        </div>
        {isTablet && <Search search={searchTerm} setSearch={(e) => {
          setSearch(e);
          //  filterData(e) 
        }} />}
        <div className="cards-container mt-4 grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
          {finaldata.map((card, i) => {
            return (
              <div className=" col-span-1 ">
                <Link href={`/specs/low_no_abv/${enUrl(card.low_no_abv_name)}?id=${card.low_no_abv_id}`}>
                  <RectangularCard
                    title={card.low_no_abv_name}
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

export default LowABV;
