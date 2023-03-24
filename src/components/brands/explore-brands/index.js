import Breadcrumb from "@/components/Breadcrumb";
import BannerSlider from "./BannerSlider";
import Image from "next/image";
import BrandsMock from "../../mock/BrandsMock.json";
import Link from "next/link";
import { CustomButton } from "@/utils/Buttons";

const ExploreBrands = ({ admin }) => {
  const brandsData = BrandsMock.Brandsdata;

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
    <div className="explore-brands-container text-white">
      <Breadcrumb />
      <div className="explore-brands-banner-contaiiner mb-8">
        <BannerSlider pagination={false} height="187px" />
      </div>
      <div className="brands-container">
        <h1 className="mb-[48px] text-[24px] font-bold">All Brands</h1>
      </div>
      {brandsData.map((brand, i) => {
        return (
          <>
            <div key={i} className="category-container">
              <div className="category-heading-container lg:flex lg:items-start lg:mb-8 mb-3">
                <h5 className="category-heading text-[20px] font-semibold leading-8 w-[138px] mr-6 ">
                  {brand.categoryName}
                </h5>
                <div className={`${admin && "bg-[#2C2C2C]"} p-4 rounded-[5px]`}>
                  <p className="category-description bg-transparent text-[16px] text-[#A8A8A8] leading-6">
                    {brand.categoryDesc}
                  </p>
                </div>
              </div>
              {brand.categoryCards.map((subcategory, i) => {
                return (
                  <div className="brand-cards-container">
                    <div className="flex justify-between mb-6">
                      <h4 className="category-heading  text-[20px] font-semibold leading-8">
                        {subcategory.subcategory}
                      </h4>
                      {admin && (
                        <div className="btns-container">
                          <CustomButton
                            background="#F19B6C"
                            icon={addIcon}
                            label="Add New"
                          />
                        </div>
                      )}
                    </div>
                    <div className="cards-container mb-6 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-x-[39px] gap-y-[33px]">
                      {subcategory.subcategoryCards.map((card, i) => {
                        return (
                          <Link href={`/brand/explore-brands?id=${i}`}>
                            <div className="col-span-1 relative w-[237px] h-[127px] ronded-[6px]">
                              <Image src="/asset/brand-con-1.svg" fill />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ExploreBrands;
