import React from "react";
import Header from "../Header/Header";
import Layout from "./Layout";

function LayoutWithHeader({ children }) {
  return (
    <div className="lg:max-w-[1024px]  flex flex-col items-center mx-auto xl:px-9 lg:px-5 px-4">
      <Header />
      <Layout>{children}</Layout>
    </div>
  );
}

export default LayoutWithHeader;
