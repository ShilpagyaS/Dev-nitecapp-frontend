import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import SelectWithSearch from "@/utils/SelectwithFilter";
import { useRouter } from "next/router";
import LayoutWithSidebar from "@/components/Layouts/LayoutWithSidebar";
import SpecComp from "@/components/spec-comp";
import Coctails from "@/components/spec-comp/coctails";
import BestSellingCoctails from "@/components/spec-comp/best-selling-coctails";
import LowABV from "@/components/spec-comp/low-abv";
import AuthWrapper from "@/components/Auth/AuthWarpper";
import Spirits from "@/components/spec-comp/spirits";
import Wine from "@/components/spec-comp/wine";
import BeerSeltzer from "@/components/spec-comp/beer-seltzer";

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const router = useRouter();
  const { nav } = router.query;
  const category = nav ? nav?.[0] : "";
  const subcategory = nav ? nav?.[1] : "";
  console.log(category, subcategory);
  return (
    <>
      <Head>
        <title>NiteCapp</title>
        <meta name="description" content="NiteCapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWithSidebar category={category} subcategory={subcategory}>
        {category === "specs" && !subcategory && <SpecComp />}
        {subcategory === "cocktails" && <BestSellingCoctails />}
        {subcategory === "coctails" && <Coctails />}
        {subcategory === "non-low-abv" && <LowABV />}
        {subcategory === "spirits" && <Spirits />}
        {subcategory === "wine" && <Wine />}
        {subcategory === "beer-seltzer" && <BeerSeltzer />}
      </LayoutWithSidebar>
    </>
  );
}
