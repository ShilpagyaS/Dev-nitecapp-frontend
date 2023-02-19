import React from "react";
import Header from "../Header/Header";
import SideBar from "../SIdebar";
import Layout from "./Layout";

function LayoutWithSidebar({ children, category, subcategory }) {
  return (
    <div className="lg:max-w-[1024px]  flex flex-col items-center mx-auto px-2 w-full ">
      <Header />
      <div className="grid grid-cols-5 gap-4 lg:max-w-[1024px] mt-[26px] w-full ">
        <div className="col-span-1">
          <SideBar category={category} subcategory={subcategory} />
        </div>
        <div className="col-span-4">
          <Layout>{children}</Layout>
        </div>
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
