import React from "react";
import Header from "../Header/Header";
import SideBar from "../SIdebar";
import Layout from "./Layout";

function LayoutWithSidebar({ children, category, subcategory }) {
  return (
    <div className="w-full  flex flex-col items-center mx-auto xl:px-9 lg:px-5 px-4 ">
      <Header />
      <div className="grid grid-cols-5 xl:grid-cols-6 lg:gap-4 lg:max-w-full mt-[26px] ">
        <div className=" xl:col-span-2 lg:col-span-1 lg:block hidden">
          <SideBar category={category} subcategory={subcategory} />
        </div>
        <div className="xl:col-span-4 lg:col-span-4 col-span-5 md:px-8 mb-3 ">
          <Layout>{children}</Layout>
        </div>
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
