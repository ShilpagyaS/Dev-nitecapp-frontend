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
import AdminCocktail from "@/Admin/AdminCoctail.js/Index";
import AdminBeer from "@/Admin/AdminBeer";
import BeerDisplayById from "@/Admin/AdminBeer/BeerDisplayById";
import SuperAdminBrand from "@/SuperAdmin/Brands";

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const { category, subcategory, productId } = useNavDetails()

  const { productList, productDetails } = useSelector((state) => state.product)


  const dispatch = useDispatch()


  useEffect(() => {
    if (subcategory && !productId) {
      dispatch(getProduct(subcategory))
    }
    if (subcategory && productId) {
      dispatch(getProductById(subcategory, productId))
    }

  }, [subcategory, productId])

  // console.log("aadasd",process.env.NEXT_PUBLIC_APP_TYPE)
  return (
    <>
      <Head>
        <title>NiteCapp</title>
        <meta name="description" content="NiteCapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AuthWrapper> */}
      {false &&
        <LayoutWithSidebar category={category} subcategory={subcategory}>
          {category === "specs" && !subcategory && <SpecComp />}
          {category === "specs" && subcategory === "cocktail" && !productId && <Coctails productList={productList} />}
          {category === "specs" && subcategory === "spirit" && !productId && <Spirits productList={productList} />}
          {category === "specs" && subcategory === "wine" && !productId && <Wine productList={productList} />}
          {category === "specs" && subcategory === "beer" && !productId && <BeerSeltzer productList={productList} />}
          {category === "specs" && subcategory === "low_no_abv" && !productId && <LowABV productList={productList} />}
          {category === "specs" && subcategory !== "cocktail" && productId && <SpecsDetailPage productDetails={productDetails} />}
          {subcategory === "bestselling" && <BestSellingCoctails />}


          {category === "specs" && subcategory === "cocktail" && productId && <CocktailDetailPage productDetails={productDetails} />}
          {subcategory === "ingridients" && <Ingridients />}
          {subcategory === "ingridient-detail" && <IngridientDetail />}

          {category === "brands" && subcategory === "beer" && !productId && <Brands />}
          {category === "brands" && subcategory === "beer" && productId && <BrandDetail />}
          {category === "dashboard" && <UserDashboard />}
        </LayoutWithSidebar>
      }
      {/* admin  */}
      {false &&
        <LayoutWithSidebar category={category} subcategory={subcategory}>
          {category === "specs" && !subcategory && <AdminSpecs />}
          {category === "specs" && subcategory === "cocktail" && !productId && <AdminCocktail productList={productList} />}
          {category === "specs" && subcategory === "beer" && !productId && <AdminBeer productDetails={productDetails} />}
          {category === "specs" && subcategory === "beerDis" && <BeerDisplayById productDetails={productDetails} />}

          {subcategory === "cocktails-details" && <CocktailAdminDetailPage />}
          {subcategory === "new-cocktail" && <EmptyUSerLayout />}
          {subcategory === "bestselling" && <BestSellingAdminCoctails />}
          {category === "dashboard" && <AdminDashboard />}

        </LayoutWithSidebar>
      }
      {/* superAdmin */}
      {true &&
        <LayoutWithSidebar category={category} subcategory={subcategory}>
       
          {category === "dashboard" && <AdminDashboard />}
          {category === "brand" && <SuperAdminBrand />}

        </LayoutWithSidebar>
      }
      {/* </AuthWrapper> */}
    </>
  );
}
