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
import SpecBrands from "@/components/spec-comp/brands";
import BrandDetail from "@/components/spec-comp/brands/BrandDetail";
import UserDashboard from "@/components/userDashboard-comp/UserDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientSearch, getProduct, getProductById } from "@/store/slices/product";
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

import WineCategory from "@/components/spec-comp/wine/wineCategory";
import SpiritsCategory from "@/components/spec-comp/spirits/spiritscategory";

import EmptyUserLayoutBeer from "@/Admin/AdminBeer/EmptyUserLayoutBeer";
import AdminBrandsBeer from "@/Admin/AdminBeer/Brands";
import AdminLowAbv from "@/Admin/AdminLowABV";
import EditById from "@/Admin/EditById";
import AdminSpirit from "@/Admin/AdminSpirit";
import AdminWine from "@/Admin/AdminWine";
import AdminSpiritCategory from "@/Admin/AdminSpirit/AdminSpiritCategory";
import AdminWineCategory from "@/Admin/AdminWine/AdminWineCategory";
import BrandDetailPage from "@/Admin/Drink Brand Section/BrandDetailPage";
import AddLowAbv from "@/Admin/AdminLowABV/AddLowAbv";
import AddSpirit from "@/Admin/AdminSpirit/AddSpirit";
import CreateBeerAndLABV from "@/Admin/CreateBeerAndLABV";

import Brands from "@/components/brands";
import ExploreBrands from "@/components/brands/explore-brands";
import BrandsBrandDetail from "@/components/brands/explore-brands/BrandDetail";
import AdminBrandDetail from "@/Admin/AdminBrands/BrandDetail";
import AdminExploreBrands from "@/Admin/AdminBrands";
import BrandsByCategory from "@/components/spec-comp/brands/BrandByCategory";
import { getAllProduct } from "@/store/slices/allproducts";
import SelectWithDebounce from "@/utils/DebounceSelect";


const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const dispatch = useDispatch();
  const { searchoptions } = useSelector((state) => state.product);
  const [testvalue, settestvalue] = useState({ label: "", value: "" })
  const { category, subcategory, subcategory2, subcategory3, productId, path } =
    useNavDetails();
  // useEffect(() => {
  //   dispatch(getAllProduct(['cocktail', 'spirit', 'beer', 'low_no_abv', 'wine']))
  // }, [])
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
            {path === `/specs/cocktail?id=${productId}` && (
              <CocktailDetailPage id={productId} />
            )}
            {path === "/specs/cocktail/cocktail_ingredients" && (
              <Ingridients productType={"cocktail"} />
            )}
            {path === `/specs/cocktail/cocktail_ingredients?id=${productId}` && (
              <IngridientDetail productId={productId} productType={"cocktail"} />
            )}

            {path === "/specs/spirit" && <SpiritsCategory />}
            {path ===
              `/specs/spirit/${encodeURIComponent(
                subcategory2
              )}?id=${productId}` && (
                <Spirits id={productId} categoryName={subcategory2} />
              )}
            {path ===
              `/specs/spirit/${encodeURIComponent(
                subcategory2
              )}/${encodeURIComponent(subcategory3)}?id=${productId}` && (
                <SpecsDetailPage id={productId} subcategory={"spirit"} />
              )}

            {path === `/specs/spirit/${encodeURIComponent(subcategory2)}/brands/list?id=${productId}` && <BrandsByCategory productType={"spirit"} productId={productId} subcategory={subcategory2} />}

            {path === "/specs/wine" && <WineCategory />}

            {path === `/specs/wine/${encodeURIComponent(subcategory2)}?id=${productId}` && <Wine id={productId} categoryName={subcategory2} />}
            {path === `/specs/wine/${encodeURIComponent(subcategory2)}/${encodeURIComponent(subcategory3)}?id=${productId}` && <SpecsDetailPage id={productId} subcategory={'wine'} />}

            {path === `/specs/wine/${encodeURIComponent(subcategory2)}/brands/list?id=${productId}` && <BrandsByCategory productType={"wine"} productId={productId} />}


            {path === "/specs/beer" && <BeerSeltzer />}
            {path === `/specs/beer?id=${productId}` && (
              <SpecsDetailPage id={productId} subcategory={"beer"} />
            )}
            {path === "/specs/beer/brands" && <SpecBrands productType={"beer"} />}
            {path === `/specs/beer/brands?id=${productId}` && (
              <BrandDetail productType={"beer"} productId={productId} />
            )}

            {path === "/specs/low_no_abv" && <LowABV />}
            {path === `/specs/low_no_abv?id=${productId}` && (
              <SpecsDetailPage id={productId} subcategory={"low_no_abv"} />
            )}
            {path === "/specs/low_no_abv/brands" && (
              <SpecBrands productType={"low_no_abv"} />
            )}
            {path === `/specs/low_no_abv/brands?id=${productId}` && (
              <BrandDetail productType={"low_no_abv"} productId={productId} />
            )}

            {path === "/specs/bestselling" && <BestSellingCoctails />}

            {path === "/dashboard" && <UserDashboard />}
            {path === "/brand" && <Brands />}
            {path === "/brand/explore-brands" && <ExploreBrands />}
            {path === `/brand/explore-brands?id=${productId}` && <BrandDetail />}
          </LayoutWithSidebar>
        )}


        {process.env.NEXT_PUBLIC_APP_TYPE === "admin" && (
          <LayoutWithSidebar category={category} subcategory={subcategory}>
            {category === "specs" && !subcategory && <AdminSpecs />}
            {path === `/specs/cocktail` && <AdminCocktail />}
            {path === `/specs/cocktail/new` && <EmptyUSerLayout />}
            {path === `/specs/cocktail?id=${productId}` && <CocktailAdminDetailPage productId={productId} subcategory={'cocktail'} />}

            {path === `/specs/beer` && <AdminBeer />}
            {path === `/specs/beer/new` && <CreateBeerAndLABV subcategory={'beer'} />}

            {path === `/specs/beer?id=${productId}` && <EditById productId={productId} subcategory={'beer'} />}
            {path === `/specs/beer/brands` && <AdminBrandsBeer />}
            {path === `/specs/beer/brands?id=${productId}` && <BrandDetailPage />}

            {subcategory === "bestselling" && <BestSellingAdminCoctails />}

            {path === `/specs/spirit` && <AdminSpirit />}
            {path === `/specs/spirit/${encodeURIComponent(subcategory2)}/new/newspirit?id=${productId}` && <AddSpirit productId={productId} subcategory={'spirit'} />}
            {path === `/specs/spirit/${encodeURIComponent(subcategory2)}?id=${productId}` && <AdminSpiritCategory productId={productId} subcategory={subcategory2} />}
            {path === `/specs/spirit/${encodeURIComponent(subcategory2)}/${encodeURIComponent(subcategory3)}?id=${productId}` && <EditById productId={productId} subcategory={'spirit'} />}

            {path === `/specs/wine` && <AdminWine />}
            {path === `/specs/wine/${encodeURIComponent(subcategory2)}/new/newwine?id=${productId}` && <AddSpirit productId={productId} subcategory={'wine'} />}
            {path === `/specs/wine/${encodeURIComponent(subcategory2)}?id=${productId}` && <AdminWineCategory productId={productId} subcategory={subcategory2} />}
            {path === `/specs/wine/${encodeURIComponent(subcategory2)}/${encodeURIComponent(subcategory3)}?id=${productId}` && <EditById productId={productId} subcategory={'wine'} />}



            {path === `/specs/low_no_abv` && <AdminLowAbv />}
            {path === `/specs/low_no_abv/new` && <CreateBeerAndLABV subcategory={'low_no_abv'} />}
            {path === `/specs/low_no_abv?id=${productId}` && <EditById productId={productId} subcategory={'low_no_abv'} />}

            {category === "dashboard" && <AdminDashboard />}


          </LayoutWithSidebar>
        )}





        {/* superAdmin */}
        {process.env.NEXT_PUBLIC_APP_TYPE === "superAdmin" && (
          <LayoutWithSidebar category={category} subcategory={subcategory}>
            {category === "dashboard" && <AdminDashboard />}
            {category === "brand" && <SuperAdminBrand />}
          </LayoutWithSidebar>


        )}


        <SelectWithDebounce
          label={"search"}
          placeholder={"search here"}
          functiondata={() => dispatch(getIngredientSearch(testvalue))}
          value={testvalue}
          searchoptions={searchoptions}
          onChangeHandler={settestvalue}
        />
      </AuthWrapper>


    </>
  );
}
