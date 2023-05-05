import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import IngridientsMock from "../../mock/ingridientsMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import { OrangeButtons } from "@/utils/Buttons";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "@/store/slices/product";
import Link from "next/link";
import { emptyIngredientsList, getIngredientsList, getIngredientsListBytype } from "@/store/slices/ingredients";
import Breadcrumb from "@/components/Breadcrumb";
import useFilteredData from "@/Hooks/useFilteredData";
import Search from "@/utils/Search";
import { enUrl } from "@/utils/encoderfunc";

function Ingridients({ productType, routeto }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const IngridientsData = IngridientsMock.ingridientsMock;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsListBytype(productType));
    return () => {
      dispatch(emptyIngredientsList())
    }
  }, []);

  const { ingredients } = useSelector((state) => state.ingredients);
  const [finaldata, setfinaldata] = useState([])
  const [searchTerm, setSearch] = useState("")
  useEffect(() => {
    let temp = []
    if (searchTerm == "") {
      temp = [...ingredients]
    } else {
      const info = ingredients.filter((i) => i.master_ingredient_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      temp = [...info]
    }
    setfinaldata([...temp])
  }, [ingredients, searchTerm]);

  const filteredData = useFilteredData(finaldata, true, "cocktails", "ingredient_type_name")
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
        <div className="heading-container lg:mb-8 mb-3">
          <h2 className="text-white text-[24px] leading-9 font-bold capitalize ">
            {`${productType} Ingredients`}
          </h2>
        </div>
        {isTablet && (
          <Search search={searchTerm} setSearch={(e) => {
            setSearch(e);
            //  filterData(e) 
          }} />
        )}
        <div className="bottle-cards-container mb-8">
          {filteredData.map((section, i) => {

            return (
              <div className="mb-8">
                <p className="text-white text-[20px] font-semibold mb-5">
                  {section.type}
                </p>
                <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
                  {section.data.map((card, i) => {
                    return (
                      <div className=" col-span-1 ">
                        <Link
                          href={`${routeto}/ingredients/${enUrl(card.master_ingredient_name)}?id=${card.master_ingredient_id}`}
                        >
                          <RectangularCard
                            title={card.master_ingredient_name}
                            // image={'/asset/london-dry.svg'}
                            image={card.image}
                            subtitle={""}
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Ingridients;
