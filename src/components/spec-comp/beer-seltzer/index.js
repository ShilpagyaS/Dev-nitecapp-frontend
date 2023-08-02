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
import { whatsthestrength } from "@/utils/abvfinder";
import Search from "@/utils/Search";
import Breadcrumb from "@/components/Breadcrumb";
import { enUrl } from "@/utils/encoderfunc";

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
  const [finaldata, setfinaldata] = useState([])
  const [searchTerm, setSearch] = useState("")
  useEffect(() => {
    let temp = []
    if (searchTerm == "") {
      temp = [...productList]
    } else {
      const info = productList.filter((i) => i.beer_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      temp = [...info]
    }
    setfinaldata([...temp])
  }, [productList, searchTerm]);


  const filteredData = useFilteredData(finaldata, true, "beer", "packaging_type")

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
            Beer / Seltzer
          </h2>
          <Link href={`/specs/beer/brands`} >
            <OrangeButtons label="Brands" noPadding={true} />
          </Link>
        </div>
        {isTablet && <Search search={searchTerm} setSearch={(e) => {
          setSearch(e);
          //  filterData(e) 
        }} />}
        {filteredData.map((i) => {
          return <div className="bottle-cards-container mb-8" >
            <p className="text-white text-[20px] font-semibold mb-5 capitalize">{i.type}</p>
            <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
              {i.data?.map((card, i) => {
                return (
                  <div className=" col-span-1 ">
                    <Link href={`specs/beer/${enUrl(card?.beer_name)}?id=${card.beer_id}`}>
                      <RectangularCard
                        title={card?.beer_name}
                        image={card.image}
                        subtitle={`${whatsthestrength(card.abv)} (${card.abv}%)`}
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
