import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import SideBar from "../SIdebar";
import Layout from "./Layout";
import mockData from "../mock/AdminSidebarData.json";
import MobileDrawer from "../mobile-drawer";
import { AddFeedbackModal } from "../modal/NewDminFlowModals";
function LayoutWithSidebarAdmin({ children, category, subcategory }) {
    const { user } = useSelector((state) => state.auth);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const menuOptions = mockData.menuOptions;
    const handleDrawer = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    const [Collapse, setCollapse] = useState(false);
    const [feedback, setFeedback] = useState(false);
    return (
        <>
            {feedback &&
                <AddFeedbackModal
                    isModalOpen={feedback}
                    onClickCancel={() => { setFeedback(false) }}
                    onSave={() => { }}
                />
            }
            <div className="relative lg:max-w-[1440px] px-4 w-full h-screen overflow-hidden mx-auto">
                <Header handleDrawer={handleDrawer} user={user} />
                <MobileDrawer
                    category={category}
                    subcategory={subcategory}
                    handleDrawer={handleDrawer}
                    isSidebarVisible={isSidebarVisible}
                />

                <div className={`grid grid-cols-1  transition-all ${Collapse ? 'lg:grid-cols-[34px_auto]' : 'lg:grid-cols-[175px_auto]'} w-full mt-[26px] `}>
                    <div className={`lg:flex hidden h-[80vh]`}>

                        <SideBar category={category} subcategory={subcategory}
                            menuOptions={menuOptions} setCollapse={setCollapse} Collapse={Collapse}
                            setFeedback={(() => { setFeedback(true) })}
                        />
                    </div>
                    <div className=" mb-3 overflow-y-auto h-[80vh] pb-10 hidescrollbar ">
                        <Layout>{children}</Layout>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutWithSidebarAdmin;
