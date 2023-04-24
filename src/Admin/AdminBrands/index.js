import Breadcrumb from "@/components/Breadcrumb";
import AdminBannerSlider from "./BannerSlider";
import Image from "next/image";
import BrandsMock from "../../components/mock/BrandsMock.json";
import Link from "next/link";
import { CustomButton, GrayButton, TextButton } from "@/utils/Buttons";
import SwitchComp from "@/utils/SwitchComp";
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyAllOutlet, getOutlets } from "@/store/slices/outlet";
import BannerSlider from "@/components/brands/explore-brands/BannerSlider";
import { enUrl } from "@/utils/encoderfunc";

const AdminExploreBrands = ({ admin }) => {
  const brandsData = BrandsMock.Brandsdata;
  const { outlets } = useSelector((state) => state.outlets)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOutlets())
    return () => dispatch(emptyAllOutlet())
  }, [])


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

  const editIcon = (color) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-transparent"
      >
        <path
          d="M4.162 10.6628H12V11.9962H0V9.16748L6.6 2.56748L9.428 5.39682L4.16133 10.6628H4.162ZM7.542 1.62548L8.95667 0.210816C9.08169 0.0858354 9.25122 0.015625 9.428 0.015625C9.60478 0.015625 9.77432 0.0858354 9.89933 0.210816L11.7853 2.09682C11.9103 2.22183 11.9805 2.39137 11.9805 2.56815C11.9805 2.74493 11.9103 2.91446 11.7853 3.03948L10.3707 4.45348L7.54267 1.62548H7.542Z"
          fill={color}
        />
      </svg>
    );
  };

  const deleteIcon = () => {
    return (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22" r="22" fill="#171717" />
        <g clip-path="url(#clip0_3206_41414)">
          <path
            d="M18 15V12C18 11.7348 18.1054 11.4804 18.2929 11.2929C18.4804 11.1054 18.7348 11 19 11H27C27.2652 11 27.5196 11.1054 27.7071 11.2929C27.8946 11.4804 28 11.7348 28 12V15H33V17H31V30C31 30.2652 30.8946 30.5196 30.7071 30.7071C30.5196 30.8946 30.2652 31 30 31H16C15.7348 31 15.4804 30.8946 15.2929 30.7071C15.1054 30.5196 15 30.2652 15 30V17H13V15H18ZM20 13V15H26V13H20Z"
            fill="#FF6058"
          />
        </g>
        <defs>
          <clipPath id="clip0_3206_41414">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(11 9)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };

  return (
    <div className="explore-brands-container text-white w-full flex justify-center flex-col">
      <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
        Brands
      </h1>
      <div className="explore-brands-banner-contaiiner mb-8">
        <BannerSlider pagination={false} height="250px" />

      </div>
      <div className="brands-container">
        <h1 className="mb-[20px] text-[24px] font-bold">All Outlets</h1>
      </div>
      {/* {brandsData?.map((brand, i) => {
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
              {brand?.categoryCards?.map((subcategory, i) => {
                return (
                  <div className="brand-cards-container">
                    <div className="flex justify-between mb-6">
                      <h4 className="category-heading  text-[20px] font-semibold leading-8">
                        {subcategory.subcategory}
                      </h4>
                      {admin && (
                        <div className="btns-container flex items-center">
                          <div className="mr-4">
                            <TextButton icon={deleteIcon()} />
                          </div>
                          <div className="mr-4">
                            <SwitchComp
                              showHideStatus={true}
                              onChangeHandler={() => {}}
                            />
                          </div>
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
      })} */}


      <div className="cards-container mb-6 grid  md:grid-cols-3 grid-cols-2 gap-4 ">
        {outlets.map((card, i) => {
          return (
            <Link href={`/brands/${enUrl(card.outlet_name)}?id=${card.outlet_id}`}>
              <div className="flex flex-col items-center justify-center mb-[30px]">
                <div className=" relative w-full rounded-[10px] min-h-[250px] ">
                  <Image src={card.image} fill className="rounded-md object-cover" priority />
                </div>
                <h3 className="not-italic font-semibold  text-md lg:text-xl font-Inter mt-[10px]">{card.outlet_name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div >
  );
};


export default AdminExploreBrands;
