import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { RectangularCard } from "@/utils/SpecCards";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "@/store/slices/product";
import Link from "next/link";
import { emptyIngredientsList, getIngredientsList } from "@/store/slices/ingredients";
import Breadcrumb from "@/components/Breadcrumb";
import useFilteredData from "@/Hooks/useFilteredData";
import { Buttons, CustomButton, OrangeButtons } from "@/utils/Buttons";
import ChipWithLeftButton from "@/utils/ChipWithLeftButton";
import { useRouter } from "next/router";
import Search from "@/utils/Search";
import { enUrl } from "@/utils/encoderfunc";

function AdminIngredients({ productType }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const [finaldata, setfinalDate] = useState([])
  const [searchTerm, setSearch] = useState("")
  const { ingredients } = useSelector((state) => state.ingredients);
  const filteredData = useFilteredData(finaldata, true, "cocktails", "ingredient_type_name")
  const router = useRouter();
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getIngredientsList(productType));
    return () => {
      dispatch(emptyIngredientsList())
    }
  }, []);

  useEffect(() => {
    if (searchTerm !== "" && searchTerm) {

      let filterDummy = []
      filterDummy = ingredients.filter((item) =>

        item.master_ingredient_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filterDummy);
      setfinalDate(filterDummy)

    }
    else
      setfinalDate(ingredients)

  }
    , [searchTerm, ingredients])


  const addIcon = (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-transparent"
    >
      <path
        d="M10.0938 20.5469C4.57075 20.5469 0.09375 16.0699 0.09375 10.5469C0.09375 5.02388 4.57075 0.546875 10.0938 0.546875C15.6167 0.546875 20.0938 5.02388 20.0938 10.5469C20.0938 16.0699 15.6167 20.5469 10.0938 20.5469ZM9.09375 9.54688H5.09375V11.5469H9.09375V15.5469H11.0938V11.5469H15.0938V9.54688H11.0938V5.54688H9.09375V9.54688Z"
        fill="black"
      />
    </svg>
  );
  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-2 ">
          <Breadcrumb  />
          {!isTablet && (
            <div className="search-container flex items-center bg-[#1D1D1D] md:w-[358px] h-[40px] rounded-[10.9744px] px-[26px]">

              <Search search={searchTerm} setSearch={(e) => {
                setSearch(e);
                //  filterData(e) 
              }} />
            </div>
          )}
        </div>
        <div className="heading-container lg:mb-8 mb-3 flex justify-between items-center">
          <h2 className="text-white text-[24px] leading-9 font-bold capitalize ">
            {`${productType} Ingredients`}
          </h2>
          <ChipWithLeftButton condition={true} label={'Add Ingredients'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { router.push("/specs/cocktail/cocktail_ingredients/new") }} />
        </div>
        {isTablet && (
          <div className="search-container flex items-center bg-[#1D1D1D] w-full h-[40px] rounded-[10.9744px] px-[26px] mb-7">

            <Search search={searchTerm} setSearch={(e) => {
              setSearch(e);
              //  filterData(e) 
            }} />

          </div>
        )}
        <div className="bottle-cards-container mb-8">
          {filteredData.map((section, i) => {

            return (
              <div className="mb-8">
                <p className="text-white text-[20px] font-semibold mb-5">
                  {section.type}
                </p>
                <div className="cards-container grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
                  {section.data.map((card, i) => {
                    return (
                      <div className=" col-span-1 ">
                        <Link
                          href={`/specs/cocktail/cocktail_ingredients/${enUrl(card.master_ingredient_name)}?id=${card.master_ingredient_id}`}
                        >
                          <RectangularCard
                            title={card.master_ingredient_name}
                            image={card.image}
                            // image={'/asset/london-dry.svg'}
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

export default AdminIngredients;
