import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { RectangularCard } from "@/utils/SpecCards";
import { OrangeButtons } from "@/utils/Buttons";
import useMediaQuery from "@/Hooks/useMediaQuery";

function Coctails(props) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const coctailData = coctailMock.coctailData;

  return (
    <>
      <div className="coctail-container">
        {!props?.headerHidden && (
          <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
            <p className="text-white text-[14px]">
              <span className="text-[#CCCCCC]">Specs</span> / Cocktail
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
        )}

        <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
          <h2 className="text-white text-[24px] leading-9 font-bold ">
            Cocktail
          </h2>
          {!props.headerHidden && (
            <OrangeButtons label="Ingridients" noPadding={true} />
          )}
        </div>
        {isTablet && !props?.headerHidden && (
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
          {coctailData.map((card, i) => {
            return (
              <div className=" col-span-1 ">
                <RectangularCard
                  title={card.title}
                  image={"/asset/coctail1.png"}
                  subtitle="Medium(12%)"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Coctails;
