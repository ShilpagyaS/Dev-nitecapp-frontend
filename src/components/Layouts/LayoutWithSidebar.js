import React from "react";
import Header from "../Header/Header";
import SideBar from "../SIdebar";
import Layout from "./Layout";

function LayoutWithSidebar({ children }) {
  return (
    <div className="lg:max-w-[1024px]  flex flex-col items-center mx-auto">
      <Header />
      <div className="grid grid-cols-4 gap-4 lg:max-w-[1024px] mt-[26px] ">
        <div className="col-span-[139px]">
          <SideBar />
        </div>
        <div className="col-span-3">
          <Layout>{children}</Layout>
        </div>
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
