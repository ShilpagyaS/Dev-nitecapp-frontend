import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import SideBar from "../SIdebar";
import Layout from "./Layout";

function LayoutWithSidebar({ children, category, subcategory }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="lg:max-w-[1440px] xl:px-9 lg:px-5 px-4 mx-auto ">
      <Header user={true} />
      <div className="grid grid-cols-5 xl:grid-cols-6  lg:max-w-full mt-[26px] w-full">
        <div className=" xl:col-span-2 lg:col-span-1 lg:block hidden">
          <SideBar category={category} subcategory={subcategory} />
        </div>
        <div className="xl:col-span-4 lg:col-span-4 col-span-5  mb-3 w-full ">
          <Layout>{children}</Layout>
        </div>
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
