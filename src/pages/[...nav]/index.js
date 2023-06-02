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
import BrandDetail from "@/components/spec-comp/brands/BrandDetail";
import { useState } from "react";
import useNavDetails from "@/Hooks/useNavDetails";
import AdminSpecs from "@/components/spec-comp/AdminSpecsComp/AdminSpecs";
import CocktailAdminDetailPage from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page";
import EmptyUSerLayout from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/EmptyUSerLayout";
import BestSellingAdminCoctails from "@/components/spec-comp/AdminSpecsComp/admin-best-selling-coctails";
import AdminDashboard from "@/Admin/AdminDashboard-comp/AdminDashboard";
import AdminCocktail from "@/Admin/AdminCoctail.js/Index";
import AdminBeer from "@/Admin/AdminBeer";
import SuperAdminBrand from "@/SuperAdmin/Brands";
import WineCategory from "@/components/spec-comp/wine/wineCategory";
import SpiritsCategory from "@/components/spec-comp/spirits/spiritscategory";
import EmptyUserLayoutBeer from "@/Admin/AdminBeer/EmptyUserLayoutBeer";
import AdminLowAbv from "@/Admin/AdminLowABV";
import AdminSpirit from "@/Admin/AdminSpirit";
import AdminWine from "@/Admin/AdminWine";
import AdminSpiritCategory from "@/Admin/AdminSpirit/AdminSpiritCategory";
import AdminWineCategory from "@/Admin/AdminWine/AdminWineCategory";
import BrandDetailPage from "@/Admin/Drink Brand Section/BrandDetailPage";
import AddSpirit from "@/Admin/AdminSpirit/AddSpirit";
import CreateBeerAndLABV from "@/Admin/CreateBeerAndLABV";
import { ToastContainer } from 'react-toastify';
import ExploreBrands from "@/components/brands/explore-brands";
import AdminExploreBrands from "@/Admin/AdminBrands";
import BrandsByCategory from "@/components/spec-comp/brands/BrandByCategory";
import AddBrandDetailPage from "@/Admin/Drink Brand Section/AddBrandDetailPage";

import { enUrl } from "@/utils/encoderfunc";
import ForgotPassword from "@/components/Auth/forgotpass";
import Signin from "@/components/Auth/signpage";
import { onlyUnAuthpages } from "@/components/Auth/guestRoutes";
import AdminIngredients from "@/Admin/AdminIngredients";
import AdminIngridientDetail from "@/Admin/AdminIngredients/ingredientDetail";
import AddIngredients from "@/Admin/AdminIngredients/addingredient";
import LayoutWithSidebarAdmin from "@/components/Layouts/LayoutWithSidebarAdmin";
import ManageUsers from "@/Admin/AdminManager/ManageUsers";
import Loader from "@/components/loader";
import RestrictedBeerEdit from "@/Admin/AdminBeer/RestrictedBeerEdit";
import CommonEditRestrictPage from "@/Admin/CommonEditRestrictPage";
import HotelBrandDetail from "@/components/brands/explore-brands/HotelBrandsDetailPage";
import AdminHotelBrandDetail from "@/Admin/AdminBrands/AdminHotelBrandDetail";

import BrandsList from "@/Admin/BrandsList";

import UserProfile from "@/components/Userprofile";
import NewUserDashboard from "@/components/spec-comp/newDash";
import AllGuests from "@/Admin/AdminGuests/AllGuests";
import GuestDetailsPage from "@/Admin/AdminGuests/GuestDetailsPage";
import GuestsList from "@/components/guests/GuestsList";
import GuestInfo from "@/components/guests/GuestInfo";
import AdminCoffee from "@/Admin/AdminCoffee";
import AddCoffee from "@/Admin/AdminCoffee/AddCoffee";
import EditCoffee from "@/Admin/AdminCoffee/EditCoffee";
import Coffees from "@/components/spec-comp/Coffee";
import CoffeeDetailPage from "@/components/spec-comp/Coffee/CoffeeDetailPage";
import FoodDetail from "@/components/Foods/FoodDetail";
import AdminFood from "@/Admin/AdminFoods";
import AddFood from "@/Admin/AdminFoods/newFood";
import FoodEdits from "@/Admin/AdminFoods/FoodEdits";
import FoodListTry from "@/components/Foods/FoodListTry";
import Learn from "@/components/Learn";
import LiberaryAll from "@/components/Learn/LiberaryAll";
import FlashcardAllSection from "@/components/Learn/FlashcardAllSection";
import FlashcardDetailPage from "@/components/Learn/FlashcardDetailPage";
import LibraryDetailPage from "@/components/Learn/LibraryDetailPage";
import LearnModuleContentCard from "@/utils/Cards/Learnsection/LearnModuleContentCard";
import LearnPage from "@/Admin/AdminLearn/LearnPage";
import LiberaryPage from "@/Admin/AdminLearn/LiberaryPage";
import LiberaryDetailPageAdmin from "@/Admin/AdminLearn/LiberaryDetailPageAdmin";
import LiberaryModulContentList from "@/Admin/AdminLearn/LiberaryModulContentList";
import FLashCards from "@/Admin/AdminLearn/FLashCards";
import AdminFlashCardDetailPage from "@/Admin/AdminLearn/FlashCardDetailPage";



const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const [testvalue, settestvalue] = useState({ label: "", value: "" })
  const { category, subcategory, subcategory2, subcategory3, productId, typeid, path } =
    useNavDetails();

  return (
    <>
      <Head>
        <title>NiteCapp</title>
        <meta name="description" content="NiteCapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <AuthWrapper>
        <Loader />

        {process.env.NEXT_PUBLIC_APP_TYPE === "user" && (
          <>
            {onlyUnAuthpages.includes(path) ? <>{path === "/signin" && <Signin />}
              {path === "/forgotpassword" && <ForgotPassword />}</> :

              <LayoutWithSidebar category={category} subcategory={subcategory}>
                {path === "/specs" && <SpecComp />}
                {path === "/specs/cocktail" && <Coctails />}
                {path === `/specs/cocktail/${enUrl(subcategory2)}?id=${productId}` && (
                  <CocktailDetailPage id={productId} />
                )}


                {path === "/specs/cocktail/ingredients" && (
                  <Ingridients productType={"cocktail"} routeto={'/specs/cocktail'} />
                )}

                {path === `/specs/cocktail/ingredients/${enUrl(subcategory3)}?id=${productId}` && (
                  <IngridientDetail productType={"cocktail"} productId={productId} />
                )}

                {path === "/specs/coffee" && <Coffees />}
                {path === `/specs/coffee/${enUrl(subcategory2)}?id=${productId}` && (
                  <CoffeeDetailPage id={productId} />
                )}


                {path === "/specs/coffee/ingredients" && (
                  <Ingridients productType={"coffee"} routeto={'/specs/coffee'} />
                )}

                {path === `/specs/coffee/ingredients/${enUrl(subcategory3)}?id=${productId}` && (
                  <IngridientDetail productType={"cocktail"} productId={productId} />
                )}

                {path === `/specs/spirit` && <SpiritsCategory />}
                {path === `/specs/spirit/${enUrl(subcategory2)}?id=${productId}` && <Spirits id={productId} categoryName={subcategory2} />}
                {path ===
                  `/specs/spirit/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}&typeid=${typeid}` && (
                    <SpecsDetailPage id={productId} subcategory={"spirit"} />
                  )}

                {path === `/specs/spirit/brands` && <BrandsByCategory productType={"spirit"} productId={productId} subcategory={subcategory2} />}
                {path === `/specs/spirit/brands/${enUrl(subcategory3)}?id=${productId}` && <BrandDetail productType={"spirit"} productId={productId} />}
                {path === "/specs/wine" && <WineCategory />}
                {path === `/specs/wine/${enUrl(subcategory2)}?id=${productId}` && <Wine id={productId} categoryName={subcategory2} />}
                {path === `/specs/wine/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}&typeid=${typeid}` && <SpecsDetailPage id={productId} subcategory={'wine'} />}
                {path === `/specs/wine/brands` && <BrandsByCategory productType={"wine"} productId={productId} subcategory={subcategory2} />}
                {path === `/specs/wine/brands/${enUrl(subcategory3)}?id=${productId}` && <BrandDetail productType={"wine"} productId={productId} />}


                {path === "/specs/beer" && <BeerSeltzer />}
                {path === `/specs/beer/${enUrl(subcategory2)}?id=${productId}` && (
                  <SpecsDetailPage id={productId} subcategory={"beer"} />
                )}
                {path === "/specs/beer/brands" && <BrandsByCategory productType={"beer"} productId={productId} subcategory={subcategory2} />}
                {path === `/specs/beer/brands/${enUrl(subcategory3)}?id=${productId}` && <BrandDetail productType={"beer"} productId={productId} />}


                {path === "/specs/low_no_abv" && <LowABV />}
                {path === `/specs/low_no_abv/${enUrl(subcategory2)}?id=${productId}` && (
                  <SpecsDetailPage id={productId} subcategory={"low_no_abv"} />
                )}
                {path === "/specs/low_no_abv/brands" && (<BrandsByCategory productType={"low_no_abv"} productId={productId} subcategory={subcategory2} />
                )}
                {path === `/specs/low_no_abv/brands/${enUrl(subcategory3)}?id=${productId}` && <BrandDetail productType={"low_no_abv"} productId={productId} />}


                {path === "/specs/bestselling" && <BestSellingCoctails />}

                {path === "/dashboard" && <NewUserDashboard />}
                {/* {path === "/brands" && <Brands />} */}
                {path === "/all_Brands" && <ExploreBrands />}
                {path === "/brands/all_Brands" && <ExploreBrands />}
                {path === `/brands/all_Brands/${enUrl(subcategory2)}?id=${productId}` && <HotelBrandDetail productId={productId} />}
                {path === `/specs/brand?id=${productId}` && (
                  <BrandDetail productType={"beer"} productId={productId} />
                )}

                {path === `/food` && <FoodListTry />}
                {/* {path === `/food/food` && <FoodList />} */}
                {path === "/food/ingredients" && (
                  <Ingridients productType={"food"} routeto={'/food'} />
                )}
                {path === `/food/ingredients/${enUrl(subcategory2)}?id=${productId}` && (
                  <IngridientDetail productType={"food"} productId={productId} />
                )}

                {path === `/food/${enUrl(subcategory)}?id=${productId}` && (
                  <FoodDetail id={productId} />
                )}
                {path === "/user_profile" && <UserProfile />}
                {path === `/guests` && <GuestsList />}
                {path === `/guests/${enUrl(subcategory)}?id=${productId}` && <GuestInfo guestID={productId} />}

                {path === `/learn` && <Learn />}
                {path === `/learn/library` && <LiberaryAll />}
                {path === `/learn/library/${enUrl(subcategory2)}?id=${productId}` && <LibraryDetailPage />}
                {path === `/learn/library/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}` && <LearnModuleContentCard />}
                {path === `/learn/flashcards` && <FlashcardAllSection />}
                {path === `/learn/flashcards/${enUrl(subcategory2)}?id=${productId}` && <FlashcardDetailPage />}

              </LayoutWithSidebar>
            }
          </>
        )}



        {process.env.NEXT_PUBLIC_APP_TYPE === "admin" && (
          <>

            {onlyUnAuthpages.includes(path) ? <>{path === "/signin" && <Signin />}
              {path === "/forgotpassword" && <ForgotPassword />}</> :
              <LayoutWithSidebarAdmin category={category} subcategory={subcategory}>
                {category === "specs" && !subcategory && <AdminSpecs />}
                {path === `/specs/cocktail` && <AdminCocktail />}
                {path === `/specs/cocktail/new` && <EmptyUSerLayout />}
                {path === `/specs/cocktail?id=${productId}` && <CocktailAdminDetailPage productId={productId} subcategory={'cocktail'} />}
                {path === `/specs/cocktail/${enUrl(subcategory2)}?id=${productId}` && <CocktailAdminDetailPage productId={productId} subcategory={'cocktail'} />}
                {path === "/specs/cocktail/ingredients" && (
                  <AdminIngredients productType={"cocktail"} routeto={'/specs/cocktail'} />
                )}
                {path === `/specs/cocktail/ingredients/new` && <AddIngredients subcategory={'cocktail'} routeto={'/specs/cocktail'} />}
                {path === `/specs/cocktail/ingredients/${enUrl(subcategory3)}?id=${productId}` && (
                  <AdminIngridientDetail productType={"cocktail"} productId={productId} />
                )}
                {path === `/specs/coffee` && <AdminCoffee />}
                {path === `/specs/coffee/new` && <AddCoffee subcategory={'coffee'} />}
                {path === `/specs/coffee/${enUrl(subcategory2)}?id=${productId}` && <EditCoffee productId={productId} subcategory={'coffee'} />}
                {path === "/specs/coffee/ingredients" && (
                  <AdminIngredients productType={"coffee"} routeto={'/specs/coffee'} />
                )}
                {path === `/specs/coffee/ingredients/new` && <AddIngredients subcategory={'coffee'} routeto={'/specs/coffee'} />}
                {path === `/specs/coffee/ingredients/${enUrl(subcategory3)}?id=${productId}` && (
                  <AdminIngridientDetail productType={"coffee"} productId={productId} />
                )}

                {path === `/specs/beer` && <AdminBeer />}
                {path === `/specs/beer/new` && <EmptyUserLayoutBeer subcategory={'beer'} />}
                {/* {path === `/specs/beer?id=${productId}` && <BeerDisplayById productId={productId} subcategory={'beer'} />}  */}

                {path === `/specs/beer?id=${productId}` && <RestrictedBeerEdit productId={productId} subcategory={'beer'} />}
                {/* {path === `/specs/beer/brands` && <AdminBrandsBeer productType={'beer'}/>} */}
                {path === `/specs/beer/brands` && <BrandsList productType={'beer'} />}
                {path === `/specs/beer/brands/${enUrl(subcategory3)}?id=${productId}` && <BrandDetailPage productType={'beer'} productId={productId} />}
                {path === `/specs/beer/${enUrl(subcategory2)}?id=${productId}` && <RestrictedBeerEdit productId={productId} subcategory={'beer'} />}

                {path === `/specs/beer/brands/newbrand` && <AddBrandDetailPage categorytype={'beer'} />}
                {subcategory === "bestselling" && <BestSellingAdminCoctails />}

                {path === `/specs/spirit` && <AdminSpirit />}
                {path === `/specs/spirit/brands` && <BrandsList productType={'spirit'} />}
                {path === `/specs/spirit/brands/${enUrl(subcategory3)}?id=${productId}` && <BrandDetailPage productType={'spirit'} productId={productId} />}
                {path === `/specs/spirit/${enUrl(subcategory2)}?id=${productId}` && <AdminSpiritCategory productId={productId} subcategory={subcategory2} />}
                {path === `/specs/spirit/${enUrl(subcategory2)}/new/newspirit?id=${productId}` && <AddSpirit productId={productId} subcategory={'spirit'} />}
                {/* {path === `/specs/spirit/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}` && <EditById productId={productId} subcategory={'spirit'} />} */}
                {path === `/specs/spirit/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}&typeid=${typeid}` && <CommonEditRestrictPage productId={productId} subcategory={'spirit'} />}
                {path === `/specs/spirit?id=${productId}` && <CommonEditRestrictPage productId={productId} subcategory={'spirit'} />}

                {path === `/specs/wine` && <AdminWine />}
                {path === `/specs/wine/brands` && <BrandsList productType={'wine'} />}
                {path === `/specs/wine/brands/${enUrl(subcategory3)}?id=${productId}` && <BrandDetailPage productType={'wine'} productId={productId} />}
                {path === `/specs/wine/${enUrl(subcategory2)}/new/newwine?id=${productId}` && <AddSpirit productId={productId} subcategory={'wine'} />}
                {path === `/specs/wine/${enUrl(subcategory2)}?id=${productId}` && <AdminWineCategory productId={productId} subcategory={subcategory2} />}
                {/* {path === `/specs/wine/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}` && <EditById productId={productId} subcategory={'wine'} />} */}
                {path === `/specs/wine/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}&typeid=${typeid}` && <CommonEditRestrictPage productId={productId} subcategory={'wine'} />}
                {path === `/specs/wine?id=${productId}` && <CommonEditRestrictPage productId={productId} subcategory={'wine'} />}


                {path === `/specs/low_no_abv` && <AdminLowAbv />}
                {path === `/specs/low_no_abv/new` && <CreateBeerAndLABV subcategory={'low_no_abv'} />}
                {path === `/specs/low_no_abv/brands` && <BrandsList productType={'low_no_abv'} />}
                {path === `/specs/low_no_abv/brands/${subcategory3}?id=${productId}` && <BrandDetailPage productType={'low_no_abv'} productId={productId} />}
                {/* {path === `/specs/low_no_abv/brands/${subcategory3}?id=${productId}` && <BrandDetailPage productType={'low_no_abv'} productId={productId}/>} */}
                {path === `/specs/low_no_abv/${enUrl(subcategory2)}?id=${productId}` && <CommonEditRestrictPage productId={productId} subcategory={'low_no_abv'} />}
                {path === `/specs/low_no_abv?id=${productId}` && <CommonEditRestrictPage productId={productId} subcategory={'low_no_abv'} />}

                {/* {path === `/specs/low_no_abv?id=${productId}` && <EditById productId={productId} subcategory={'low_no_abv'} />} */}
                {path === `/brands` && <AdminExploreBrands />}
                {path === `/brands/${enUrl(subcategory)}?id=${productId}` && <AdminHotelBrandDetail productId={productId} />}
                {path === `/brands/all_Brands/${enUrl(subcategory2)}?id=${productId}` && <AdminHotelBrandDetail productId={productId} />}

                {path === `/food` && <AdminFood />}
                {path === `/food/new` && <AddFood subcategory={'food'} />}
                {path === `/food/${enUrl(subcategory)}?id=${productId}` && <FoodEdits productId={productId} subcategory={'food'} />}
                {path === "/food/ingredients" && (
                  <AdminIngredients productType={"food"} routeto={'/food'} />
                )}
                {path === `/food/ingredients/new` && <AddIngredients subcategory={'food'} routeto={'/food'} />}
                {path === `/food/ingredients/${enUrl(subcategory2)}?id=${productId}` && (
                  <AdminIngridientDetail productType={"food"} productId={productId} />
                )}
                {category === "dashboard" && <AdminDashboard />}
                {path === "/user_profile" && <UserProfile />}
                {path === `/manageusers` && <ManageUsers />}
                {path === `/guests` && <AllGuests />}
                {path === `/guests/${enUrl(subcategory)}?id=${productId}` && <GuestDetailsPage guestID={productId} />}

                {path === `/learn` && <LearnPage />}
                {path === `/learn/library` && <LiberaryPage />}
                {path === `/learn/library/${enUrl(subcategory2)}?id=${productId}` && <LiberaryDetailPageAdmin />}
                {/* {path === `/learn/library/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}` && <LearnModuleContentAdmin />} */}
                {path === `/learn/library/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}` && <LiberaryModulContentList />}
                {path === `/learn/flashcards` && <FLashCards />}
                {path === `/learn/flashcards/${enUrl(subcategory2)}?id=${productId}` && <AdminFlashCardDetailPage />}




              </LayoutWithSidebarAdmin>
            }
          </>
        )}





        {/* superAdmin */}
        {process.env.NEXT_PUBLIC_APP_TYPE === "superAdmin" && (
          <>
            {onlyUnAuthpages.includes(path) ? <>{path === "/signin" && <Signin />}
              {path === "/forgotpassword" && <ForgotPassword />}</> :
              <LayoutWithSidebar category={category} subcategory={subcategory}>
                {category === "dashboard" && <AdminDashboard />}
                {category === "brands" && <SuperAdminBrand />}

              </LayoutWithSidebar>

            }
          </>
        )}



      </AuthWrapper>
      <ToastContainer />
    </>
  );
}
