import Head from "next/head";

import { Inter } from "@next/font/google";

import LayoutWithSidebar from "@/components/Layouts/LayoutWithSidebar";
import SpecComp from "@/components/spec-comp";
import Coctails from "@/components/spec-comp/coctails";
import BestSellingCoctails from "@/components/spec-comp/best-selling-coctails";
import LowABV from "@/components/spec-comp/low-abv";
import AuthWrapper from "@/components/Auth/AuthWarpper";
import Spirits from "@/components/spec-comp/spirits";
import Wine from "@/components/spec-comp/wine";
import BeerSeltzer from "@/components/spec-comp/beer-seltzer";
import CocktailDetailPage from "@/components/spec-comp/cocktails-detail-page";
import Ingridients from "@/components/spec-comp/ingridients";
import IngridientDetail from "@/components/spec-comp/ingridients/IngridientDetail";
import SpecsDetailPage from "@/components/spec-comp/specs-detail-page";
import Brands from "@/components/spec-comp/brands";
import BrandDetail from "@/components/spec-comp/brands/BrandDetail";
import UserDashboard from "@/components/userDashboard-comp/UserDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct,getProductById } from "@/store/slices/product";
import useNavDetails from "@/Hooks/useNavDetails";

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const {category,subcategory,productId}=useNavDetails()
  const {productList,productDetails} =useSelector((state)=>state.product)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(subcategory && !productId ){
      dispatch(getProduct(subcategory))
    }
    if(subcategory && productId ){
      dispatch(getProductById(subcategory,productId))
    }
  },[subcategory,productId])
  return (
    <>
      <Head>
        <title>NiteCapp</title>
        <meta name="description" content="NiteCapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthWrapper>
      <LayoutWithSidebar category={category} subcategory={subcategory}>
        {category === "specs" && !subcategory && <SpecComp />}
        
        {category === "specs" && subcategory === "cocktails" && !productId && <Coctails />}
        {category === "specs" && subcategory === "spirit" && !productId && <Spirits productList={productList}/>}
        {category === "specs" && subcategory === "wine" && !productId && <Wine productList={productList} />}
        {category === "specs" && subcategory === "beer" && !productId && <BeerSeltzer  productList={productList}/>}
        {category === "specs" && subcategory === "low-noabv" && <LowABV />}
        {category === "specs" && subcategory  && productId && <SpecsDetailPage productDetails={productDetails} />}
        {subcategory === "bestselling" && <BestSellingCoctails />}
       
        
        {subcategory === "cocktail-detail-page" && <CocktailDetailPage />}
        {subcategory === "ingridients" && <Ingridients />}
        {subcategory === "ingridient-detail" && <IngridientDetail />}
        
        {subcategory === "brands" && <Brands />}
        {subcategory === "brand-detail" && <BrandDetail />}
        {category === "dashboard" && <UserDashboard />}
      </LayoutWithSidebar>
      </AuthWrapper>
    </>
  );
}
