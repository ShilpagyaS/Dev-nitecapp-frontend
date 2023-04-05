import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import SideBar from "../SIdebar";
import Layout from "./Layout";
import mockData from "../mock/AdminSidebarData.json";
import MobileDrawer from "../mobile-drawer";
function LayoutWithSidebarAdmin({ children, category, subcategory }) {
    const { user } = useSelector((state) => state.auth);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const menuOptions = mockData.menuOptions;
    const handleDrawer = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="relative lg:max-w-[1440px] xl:px-9 lg:px-5 px-4 mx-auto w-full ">
            <Header handleDrawer={handleDrawer} user={true} />
            <MobileDrawer
                category={category}
                subcategory={subcategory}
                handleDrawer={handleDrawer}
                isSidebarVisible={isSidebarVisible}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[auto_repeat(5,minmax(175px,1fr))] w-full mt-[26px] ">
                <div className="lg:block hidden col-span-1 w-[175px]">
                    <SideBar category={category} subcategory={subcategory} menuOptions={menuOptions} />
                </div>
                <div className=" mb-3 col-span-5">
                    <Layout>{children}</Layout>
                </div>
            </div>
        </div>
    );
}

export default LayoutWithSidebarAdmin;