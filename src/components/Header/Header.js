import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { ImGlass2 } from "react-icons/im";
import { HiOutlineBars3 } from "react-icons/hi2";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

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
               <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <MdOutlineKeyboardArrowDown color="#fff" size="25px" />
              </Menu.Button>
              <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
{({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   
                    Logout
                  </button>
                )}
             
</Menu.Items>

        </Transition>
        </Menu>
            </div>
          </div>
        ) : (
          <div className="avtar-container flex justify-around items-center">
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
            <div className="p-[15px]  md:p-[20px]">
              <HiOutlineBars3
                onClick={props.handleDrawer}
                color="#fff"
                size="20px"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Header;
