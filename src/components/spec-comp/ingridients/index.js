import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import IngridientsMock from "../../mock/ingridientsMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import { OrangeButtons } from "@/utils/Buttons";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "@/store/slices/product";
import Link from "next/link";

function Ingridients() {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const IngridientsData = IngridientsMock.ingridientsMock;

  const { productList } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct("cocktail_ingredients"));
  }, []);

  console.log("productList==================================", productList);

  return (
    <>
      <div className="coctail-container">
        <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
          <p className="text-white text-[14px]">
            <span className="text-[#CCCCCC]">Specs / Cocktail / </span>{" "}
            Ingredients
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
        <div className="heading-container lg:mb-8 mb-3">
          <h2 className="text-white text-[24px] leading-9 font-bold ">
            Ingridients
          </h2>
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
        <div className="bottle-cards-container mb-8">
          {IngridientsData.map((section, i) => {
            return (
              <div className="mb-8">
                <p className="text-white text-[20px] font-semibold mb-5">
                  {section.category}
                </p>
                <div className="cards-container grid lg:grid-cols-2 grid-cols-1 gap-x-[73px] gap-y-[12px] ">
                  {section.cards.map((card, i) => {
                    return (
                      <div className=" col-span-1 ">
                        <Link
                          href={`/specs/cocktail/cocktail_ingredients?id=${card.title}`}
                        >
                          <RectangularCard
                            title={card.title}
                            image={card.img}
                            subtitle={card.subtitle}
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
