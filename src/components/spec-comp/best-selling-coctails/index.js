import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { CoctailCard2 } from "@/utils/SpecCards";

function BestSellingCoctails() {
  const coctailData = coctailMock.coctailData;
  return (
    <>
      <div className="best-selling-coctail-container">
        <div className="coctail-banner w-full h-[240px] mb-[32px]"></div>
        <div className="coctails-container">
          <div className="heading-container mb-[32px]">
            <h2 className="text-white text-[24px] font-bold ">
              Best Selling Cocktails
            </h2>
            <p className="text-[#A8A8A8] text-[16px]">
              The best selling cocktail products at W South Beach this week(17th
              - 24th)
            </p>
          </div>
          <div className="coctail-cards grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4  lg:gap-7 md:gap-4 gap-2">
            {coctailData.map((slide, i) => {
              return (
                <CoctailCard2
                  title={slide.title}
                  image={"/asset/coctail1.png"}
                  isNew={slide.isNew}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellingCoctails;
