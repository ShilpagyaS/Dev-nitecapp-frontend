import Breadcrumb from "@/components/Breadcrumb";
import BannerSlider from "./BannerSlider";
import Image from "next/image";
import BrandsMock from "../../mock/BrandsMock.json";
import Link from "next/link";

const ExploreBrands = () => {
  const brandsData = BrandsMock.Brandsdata;

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
              <div className="category-heading-container flex items-start mb-8">
                <h5 className="category-heading text-[20px] font-semibold leading-8 w-[138px] mr-6 ">
                  {brand.categoryName}
                </h5>
                <p className="category-description text-[16px] text-[#A8A8A8] leading-6">
                  {brand.categoryDesc}
                </p>
              </div>
              {brand.categoryCards.map((subcategory, i) => {
                return (
                  <div className="brand-cards-container">
                    <h4 className="category-heading mb-6  text-[20px] font-semibold leading-8">
                      {subcategory.subcategory}
                    </h4>
                    <div className="cards-container mb-6 grid grid-cols-3 gap-x-[39px] gap-y-[33px]">
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
