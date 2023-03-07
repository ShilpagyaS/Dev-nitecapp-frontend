import { CiSearch } from "react-icons/ci";
import coctailMock from "../../mock/CoctailMock.json";
import { CoctailCard2 } from "@/utils/SpecCards";
import Image from "next/image";

function BestSellingCoctails() {
  const coctailData = coctailMock.coctailData;

  return (
    <>
      <div className="best-selling-coctail-container">
        <div className="coctail-banner bg-[url('/asset/banner.png')] w-full md:h-[240px] lg:h-[300px] mb-[32px] bg-no-repeat bg-cover"></div>
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
          <div className="coctail-cards grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   lg:gap-7 md:gap-4 gap-2">
            {coctailData.map((card, i) => {
              return (
                <CoctailCard2
                  sequence={i + 1}
                  title={card.title}
                  image={"/asset/coctail1.png"}
                  isNew={card.isNew}
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
