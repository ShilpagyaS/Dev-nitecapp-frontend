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
      <div className="grid grid-cols-1 lg:grid-cols-[175px_82%] max-w-full mt-[26px] w-full">
        <div className="lg:block hidden">
          <SideBar category={category} subcategory={subcategory} />
        </div>
        <div className=" mb-3 w-full ">
          <Layout>{children}</Layout>
        </div>
      </div>
    </div>
  );
}

export default LayoutWithSidebar;
