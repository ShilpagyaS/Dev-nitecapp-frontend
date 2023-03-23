import { RxCross1 } from "react-icons/rx";
import { AiFillSetting } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { CustomButton } from "@/utils/Buttons";
import Image from "next/image";
import MobileSidebar from "../SIdebar/MobileSidebar";

const MobileDrawer = ({ category, subcategory, handleDrawer, isSidebarVisible }) => {

  return (
    <div className={`absolute overflow-hidden w-[80%] h-screen bg:red-500 z-10 top-0 

    left-0 text-white px-6 py-4 pb-[18px] flex flex-col justify-between transition duration-500 ${isSidebarVisible ? 'translate-x-0' : `-translate-x-[5000px]`}`}>

      <div>
        <div className="button-container flex justify-between w-full">
          <div className="p-[10px] h-fit">
            <CustomButton
              label={<IoNotificationsSharp color="#fff" size="20px" />}
            />
          </div>
          <div className="p-[10px] h-fit">
            <CustomButton
              label={<RxCross1 color="#fff" size="20px" fontWeight="bold" />}
              onClickHandler={handleDrawer}
            />
          </div>
        </div>
        <div className="profile-container w-fit block m-auto mb-8">
          <div className="profile-photo relative w-[64px] h-[64px] mb-[8px]">
            <Image
              fill
              src="/asset/how-to-drain.svg"
              className="rounded-[50%]"
            />
          </div>
          <h4 className="username ">Hi User!</h4>
        </div>
        <MobileSidebar category={category} subcategory={subcategory} handleClose={handleDrawer}  />
      </div>
      <div className="button-container flex justify-between w-full">
        <CustomButton label="Sign out" color="#fff" />
        <CustomButton label={<AiFillSetting color="#fff" size="20px" />} />
      </div>
    </div>
  );
};

export default MobileDrawer;
