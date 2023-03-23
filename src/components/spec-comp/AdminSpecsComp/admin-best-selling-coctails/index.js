import { CiSearch } from "react-icons/ci";
import coctailMock from "../../../mock/CoctailMock.json";
import { CoctailCard2 } from "@/utils/SpecCards";
import TableContainerWithButtons from "@/utils/TableContainerWithButtons";
import Image from "next/image";

function BestSellingAdminCoctails() {
  const coctailData = coctailMock.coctailData;

  return (
    <>
      <div className="best-selling-coctail-container">
        <div className="not-italic font-normal text-sm text-gray-400 font-Inter mb-[16px]">
          Specs / <span className="text-white">Best selling cocktails</span>
        </div>
        <div className="coctail-banner bg-[url('/asset/banner.png')] w-full md:h-[240px] lg:h-[300px] mb-[32px] bg-no-repeat bg-cover"></div>
        <div className="flex w-full items-center justify-end pr-[12px] text-[#929292]">
          <div className="flex">
            <Image
              src={'/asset/EditVector.svg'}
              // src={'/asset/DeleteVector.svg'}
              width={20}
              height={20}
              className=""
            />
            <div className="ml-[12px]">
              Edit Image
            </div>
          </div>
        </div>
        <div className="coctails-container">
          <div className="heading-container mb-[32px] flex items-center justify-between">
            <div>

              <h2 className="text-white text-[24px] font-bold ">
                Best Selling Cocktails
              </h2>
              <p className="text-[#A8A8A8] text-[16px]">
                The best selling cocktail products at W South Beach this week(17th
                - 24th)
              </p>
            </div>
            <Image
              src={'/asset/EditVector.svg'}
              // src={'/asset/DeleteVector.svg'}
              width={20}
              height={20}
              className=""
            />
          </div>
          <TableContainerWithButtons />

        </div>
      </div>
    </>
  );
}

export default BestSellingAdminCoctails;
