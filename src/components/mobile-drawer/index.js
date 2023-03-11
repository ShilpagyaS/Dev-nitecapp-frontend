import { RxCross1 } from "react-icons/rx";
import { AiFillSetting } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { CustomButton } from "@/utils/Buttons";
import Image from "next/image";
import MobileSidebar from "../SIdebar/MobileSidebar";

const MobileDrawer = ({ category, subcategory, handleDrawer }) => {
  return (
    <div className="absolute w-full h-screen bg:black z-10 top-0 left-0 text-white px-4 pb-[18px] flex flex-col justify-between">
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
        <MobileSidebar category={category} subcategory={subcategory} />
      </div>
      <div className="button-container flex justify-between w-full">
        <CustomButton label="Sign out" color="#fff" />
        <CustomButton label={<AiFillSetting color="#fff" size="20px" />} />
      </div>
    </div>
  );
};

export default MobileDrawer;
