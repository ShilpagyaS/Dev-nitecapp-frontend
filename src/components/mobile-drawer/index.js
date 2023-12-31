import { RxCross1 } from "react-icons/rx";
import { AiFillSetting } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { CustomButton } from "@/utils/Buttons";
import Image from "next/image";
import MobileSidebar from "../SIdebar/MobileSidebar";
import { logout } from "@/store/slices/Auth";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const MobileDrawer = ({ category, subcategory, handleDrawer, isSidebarVisible, setFeedback, isFeedbackShow, }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  return (
    <div className={`absolute overflow-hidden w-[80%] sm:w-[70%] md:w-[40%] h-screen bg:red-500 z-10 top-0 shadow-lg shadow-slate-500  hidescrollbar max-h-[100vh] overflow-y-auto 

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
        <Link href="/user_profile">
          <div className="profile-container w-fit m-auto mb-8 flex flex-col items-center justify-center" onClick={handleDrawer}>
            <div className="profile-photo relative w-[64px] h-[64px] mb-[8px]" >

              <Image
                fill
                src={user?.image || "/asset/avatar2.png"}
                className="rounded-[50%]"
              />
            </div>
            <h4 className="username ">Hi {user?.display_name}!</h4>
          </div>
        </Link>
        <MobileSidebar category={category} setFeedback={setFeedback} isFeedbackShow={isFeedbackShow} subcategory={subcategory} handleClose={handleDrawer} />
      </div>
      <div className="button-container flex justify-between w-full">
        <CustomButton label="Sign out" color="#fff" onClickHandler={() => dispatch(logout())} />
        <CustomButton label={<AiFillSetting color="#fff" size="20px" />} />
      </div>
    </div>
  );
};

export default MobileDrawer;
