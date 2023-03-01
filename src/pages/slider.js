import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";
import SelectWithSearch from "@/utils/SelectwithFilter";
import { useState } from "react";
import Slider from "@/components/slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [slide, setSliderActive] = useState(false);
  return (
    <>
      <Head>
        <title>NiteCapp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWithHeader>
        <Slider
          skipTo={() => {
            setSliderActive(false);
          }}
        />
      </LayoutWithHeader>
    </>
  );
}