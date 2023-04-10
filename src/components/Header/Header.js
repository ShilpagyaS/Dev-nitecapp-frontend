import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { ImGlass2 } from "react-icons/im";
import { HiOutlineBars3 } from "react-icons/hi2";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { logout } from "@/store/slices/Auth";

function Header(props) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const dispatch = useDispatch();

  useEffect(() => {
    //for logo url
  }, []);

  const handleLogout = () => {

    dispatch(logout());
  };

  return (
    <div
      className={`${props.user
        ? "flex-row justify-between items-center"
        : "flex-col justify-center items-start"
        } flex left-0 h-20 w-full sm:py-[12px]  py-[10px]  bg-black `}
    >
      <Image
        className="sm:w-[115px] sm:h-[60px] lg:w-[120px] lg:h-[57px] object-cover"
        src="/asset/nitecapp_logo.png"
        width="100"
        height="51"
        alt="logo"
      />
      {props.user &&
        <>
          <div className="avtar-container justify-between items-center w-[145px] hidden lg:flex">
            <IoNotifications
              color="#fff"
              className="lg:text-[25px] text-[29px]"
            />
            <div className="avtar-container flex justify-end items-center ">
              <Link className="cursor-pointer" href={"/user_profile"}>
                <Image
                  src={props?.user?.image || "/asset/avatar2.png"}
                  alt="profile-avatar"
                  width={50}
                  height={50}
                  className="rounded-[50%] mr-2"
                />
              </Link>
              <ProfileDropdown onClickHandler={handleLogout} />
            </div>
          </div>

          <div className="avtar-container flex justify-around items-center lg:hidden">
            <div className="p-[15px] md:p-[20px]  ">
              <Link href={"/specs"} legacyBehavior>
                <a>
                  <AiFillAppstore
                    color="#fff"
                    size="20px"
                    className="cursor-pointer"
                  />
                </a>
              </Link>
            </div>
            <div className="p-[15px]  md:p-[20px]">
              <Link href={"/specs"} legacyBehavior>
                <a>
                  <ImGlass2
                    color="#fff"
                    size="20px"
                    className="cursor-pointer"
                  />
                </a>
              </Link>
            </div>
            <div className="p-[15px]  md:p-[20px]">
              <Link href={"/specs"} legacyBehavior>
                <a>
                  <div className="relative w-[20px] h-[20px]">
                    <Image src="/asset/learn-icon.svg" fill />
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-[15px]  md:p-[20px] cursor-pointer">
              <HiOutlineBars3
                onClick={props.handleDrawer}
                color="#fff"
                size="20px"
              />
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default Header;
