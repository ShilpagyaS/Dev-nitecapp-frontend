import Head from "next/head";
import { Inter } from "@next/font/google";
import LayoutWithHeader from "@/components/Layouts/LayoutWithHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NiteCapp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWithHeader>
        <main>
          <div className="font-bold m-auto p-7">Hello World</div>
        </main>
      </LayoutWithHeader>
    </>
  );
}