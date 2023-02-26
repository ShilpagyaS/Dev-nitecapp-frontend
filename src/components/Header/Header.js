import Image from "next/image";
import React, { useEffect } from "react";
import { IoNotifications } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { AiFillAppstore } from "react-icons/ai";
import { ImGlass2 } from "react-icons/im";
import { HiOutlineBars3 } from "react-icons/hi2";
import useMediaQuery from "@/Hooks/useMediaQuery";

function Header(props) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  useEffect(() => {
    //for logo url
  }, []);

  return (
    <div
      className={`${
        props.user
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
        (!isTablet ? (
          <div className="avtar-container flex justify-between items-center w-[145px]">
            <IoNotifications
              color="#fff"
              className="lg:text-[25px] text-[29px]"
            />
            <div className="avtar-container flex items-center justify-center">
              <Image
                src="/asset/avatar.png"
                alt="profile-avatar"
                width={50}
                height={50}
                className="rounded-[50%] mr-2"
              />
              <SlArrowDown color="#fff" size="15px" />
            </div>
          </div>
        ) : (
          <div className="avtar-container flex justify-around items-center">
            <div className="p-[20px]">
              <AiFillAppstore color="#fff" size="20px" />
            </div>
            <div className="p-[20px]">
              <ImGlass2 color="#fff" size="20px" />
            </div>
            <div className="p-[20px]">
              <HiOutlineBars3 color="#fff" size="20px" />
            </div>
            <div className="p-[20px]">
              <HiOutlineBars3 color="#fff" size="20px" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Header;
