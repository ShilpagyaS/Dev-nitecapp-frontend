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
        <div className="relative lg:max-w-[1440px] px-4 w-full h-screen overflow-hidden">
            <Header handleDrawer={handleDrawer} user={user} />
            <MobileDrawer
                category={category}
                subcategory={subcategory}
                handleDrawer={handleDrawer}
                isSidebarVisible={isSidebarVisible}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[175px_auto] w-full mt-[26px] ">
                <div className="lg:block hidden ">
                    <SideBar category={category} subcategory={subcategory} menuOptions={menuOptions} />
                </div>
                <div className=" mb-3 overflow-y-auto h-[80vh] pb-10 hidescrollbar">
                    <Layout>{children}</Layout>
                </div>
            </div>
        </div>
    );
}

export default LayoutWithSidebarAdmin;
