import LayoutWithSidebar from "../Layouts/LayoutWithSidebar";
import { CiSearch } from "react-icons/ci";
import CoctailSlider from "./CoctailSlider";
import CoreBeverage from "./CoreBeverage";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getProduct } from "@/store/slices/product";
import { useEffect } from "react";
import Link from "next/link";
import { OrangeButtons } from "@/utils/Buttons";

function SpecComp() {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct("cocktail"));
    return () => {
      dispatch(emptyProductList());
    };
  }, []);

  const filterbydate = (list) => {
    const sortedItems = [...list].sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt)
    })
    return sortedItems
  }

  return (
    <>
      <div className="Header-container md:flex-row lg:flex-row flex-col flex justify-between lg:items-center md:items-center mb-6  ">
        <div className="heading-text lg:mb-0 md:mb-0 mb-[20px]">
          <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
            Specs
          </h1>
        </div>
        {/* <Link href={`/specs/cocktail/ingredients`}>
          <OrangeButtons label="Drink Brands" noPadding={true} width={'200'}/>
        </Link> */}
      </div>
      <div className="sub-heading-container flex lg:justify-start md:justify-start justify-between items-center">
        <h3 className="text-white text-[20px] leading-8 font-semibold mr-[48px]">
          Cocktails
        </h3>
        <Link href="/specs/cocktail">
          <p className="text-primary-base cursor-pointer">See All</p>
        </Link>

      </div>
      <CoctailSlider data={productList?.length <= 10 ? filterbydate(productList) : filterbydate(productList)?.slice(0, 10)} />
      <CoreBeverage />
      {/* <Trending /> */}
    </>
  );
}

export default SpecComp;
