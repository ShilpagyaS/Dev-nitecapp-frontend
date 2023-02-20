import React from "react";
import Header from "../Header/Header";
import SideBar from "../SIdebar";
import Layout from "./Layout";

function LayoutWithSidebar({ children }) {
  return (
    <div className="lg:max-w-[1400px]  flex flex-col items-center mx-auto">
      <Header />
      <div className="grid grid-cols-5 lg:gap-4 lg:max-w-[1024px] mt-[26px] ">
        <div className="lg:col-span-1 lg:block hidden">
          <SideBar />
        </div>
        <div className="lg:col-span-4 col-span-5 md:px-8 px-4">
          <Layout>{children}</Layout>
        </div>
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
