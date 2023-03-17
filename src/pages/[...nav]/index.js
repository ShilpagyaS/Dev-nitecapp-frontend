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
import { getProduct, getProductById } from "@/store/slices/product";
import useNavDetails from "@/Hooks/useNavDetails";
import AdminSpecs from "@/components/spec-comp/AdminSpecsComp/AdminSpecs";
import CocktailAdminDetailPage from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page";
import EmptyUSerLayout from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/EmptyUSerLayout";
import BestSellingAdminCoctails from "@/components/spec-comp/AdminSpecsComp/admin-best-selling-coctails";
import AdminDashboard from "@/Admin/AdminDashboard-comp/AdminDashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const { category, subcategory, subcategory2, productId, path } =
    useNavDetails();

  console.log("===========================path========================", path);

  // const { productList, productDetails } = useSelector((state) => state.product);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (subcategory && !subcategory2 && !productId) {
  //     dispatch(getProduct(subcategory));
  //   }
  //   if (subcategory2 && !productId) {
  //     dispatch(getProduct(subcategory2));
  //   }
  //   if (subcategory2 && productId) {
  //     dispatch(getProductById(subcategory2, productId));
  //   }
  //   if (subcategory && productId && !subcategory2) {
  //     dispatch(getProductById(subcategory, productId));
  //   }
  // }, [subcategory, productId, subcategory2]);

  return (
    <>
      <Head>
        <title>NiteCapp</title>
        <meta name="description" content="NiteCapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthWrapper>
        {process.env.NEXT_PUBLIC_APP_TYPE === "user" && (
          <LayoutWithSidebar category={category} subcategory={subcategory}>
            {path === "/specs" && <SpecComp />}
            {path === "/specs/cocktail" && <Coctails />}
            {path === "/specs/spirits" && <Spirits />}
            {path === "/specs/wine" && <Wine />}
            {path === "/specs/beer" && <BeerSeltzer />}
            {path === "/specs/low_no_abv" && <LowABV />}
            {path === `/specs/${subcategory}?id=${productId}` &&
              subcategory !== "cocktail" && <SpecsDetailPage />}
            {path === "/specs/bestselling" && <BestSellingCoctails />}

            {path === `/specs/cocktail?id=${productId}` && (
              <CocktailDetailPage />
            )}
            {path === "/specs/cocktail/cocktail_ingredients" && <Ingridients />}
            {path ===
              `/specs/cocktail/cocktail_ingredients?id=${productId}` && (
              <IngridientDetail />
            )}

            {path === "/brands/beer" && <Brands />}
            {path === `/brands/beer?id=${productId}` && <BrandDetail />}
            {path === "/dashboard" && <UserDashboard />}
          </LayoutWithSidebar>
        )}

        {process.env.NEXT_PUBLIC_APP_TYPE === "admin" && (
          <LayoutWithSidebar category={category} subcategory={subcategory}>
            {category === "specs" && !subcategory && <AdminSpecs />}
            {subcategory === "cocktails-details" && <CocktailAdminDetailPage />}
            {subcategory === "new-cocktail" && <EmptyUSerLayout />}
            {subcategory === "bestselling" && <BestSellingAdminCoctails />}
            {category === "dashboard" && <AdminDashboard />}
          </LayoutWithSidebar>
        )}
      </AuthWrapper>
    </>
  );
}
