import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { ImGlass2 } from "react-icons/im";
import { HiOutlineBars3 } from "react-icons/hi2";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Link from "next/link";
import ProfileDropdown, { NotificationDropdown } from "./ProfileDropdown";
import { logout } from "@/store/slices/Auth";
import { useRouter } from "next/router";
import { MenuIcon } from "../SIdebar/MenuIcons";

function Header(props) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const isMobile = useMediaQuery("(max-width: 414px)");
  const dispatch = useDispatch();
  const { logo } = useSelector((state) => state.auth)
  useEffect(() => {
    //for logo url
  }, []);
  const { asPath } = useRouter()
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
      <Link href={"/dashboard"} legacyBehavior>

        <div className="w-[60px] h-[40px] lg:w-[70px] lg:h-[50px] object-cover relative cursor-pointer">
          <Image
            className=""
            src={logo || '/asset/nitecapp_logo.png'}
            fill
            loading="lazy"
            alt="logo"
          />
        </div>
      </Link>

      {props.user &&
        <>
          <div className="avtar-container justify-between items-center w-[145px] hidden lg:flex">
            {/* <IoNotifications
              color="#fff"
              className="lg:text-[25px] text-[29px] cursor-pointer"
            /> */}
            <NotificationDropdown />
            <div className="avtar-container flex justify-end items-center ">
              <Link className="cursor-pointer" href={"/user_profile"}>
                <Image
                  src={props?.user?.image || "/asset/avatar2.png"}
                  alt="profile-avatar"
                  width={50}
                  height={50}
                  className="rounded-[50%] mr-2 border border-gray-600 w-[50px] h-[50px]"
                />
              </Link>
              <ProfileDropdown onClickHandler={handleLogout} />
            </div>
          </div>

          <div className="avtar-container flex justify-around items-center lg:hidden">
            {!isMobile &&

              <div className="p-[15px] md:p-[20px]  ">
                <Link href={"/dashboard"} legacyBehavior>
                  <a>
                    {MenuIcon("Dashboard", asPath.includes('/dashboard'))}
                  </a>
                </Link>
              </div>
            }
            {!isMobile &&
              <div className="p-[15px]  md:p-[20px]">
                <Link href={"/specs"} legacyBehavior>
                  <a>
                    {MenuIcon("Specs", asPath.includes('/specs'))}
                  </a>
                </Link>
              </div>
            }
            {!isMobile &&
              <div className="p-[15px]  md:p-[20px]">
                <Link href={"/food"} legacyBehavior>
                  <a>
                    {MenuIcon("Food", asPath.includes('/food'))}
                  </a>
                </Link>
              </div>
            }
            {!isMobile &&
              <div className="p-[15px]  md:p-[20px]">
                <Link href={"/learn"} legacyBehavior>
                  <a>
                    {MenuIcon("Learn", asPath.includes('/learn'))}
                  </a>
                </Link>
              </div>
            }
            {!isMobile &&
              <div className="p-[15px]  md:p-[20px]">
                <Link href={"/brands"} legacyBehavior>
                  <a>
                    {MenuIcon("Brands", asPath.includes('/brands'))}
                  </a>
                </Link>
              </div>
            }
            {!isMobile &&
              <div className="p-[15px]  md:p-[20px]">
                <Link href={"/guests"} legacyBehavior>
                  <a>
                    {MenuIcon("Guests", asPath.includes('/guests'))}
                  </a>
                </Link>
              </div>
            }
            {!isMobile && <>

              {process.env.NEXT_PUBLIC_APP_TYPE === "admin" &&
                <div className="p-[15px]  md:p-[20px]">
                  <Link href={"/manageusers"} legacyBehavior>
                    <a>
                      <div className="relative w-[20px] h-[20px]">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20" viewBox="0 0 96.000000 96.000000"
                          preserveAspectRatio="xMidYMid meet"
                          className={`mr-2 fill-white`}

                        >

                          <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M412 824 c-18 -10 -45 -33 -60 -52 -22 -29 -27 -46 -27 -92 0 -47 5
-63 29 -94 87 -115 267 -67 283 76 7 57 -15 108 -61 143 -46 35 -116 43 -164
19z m123 -89 c50 -49 15 -135 -55 -135 -19 0 -40 9 -55 25 -50 49 -15 135 55
135 19 0 40 -9 55 -25z"/>
                            <path d="M353 384 c-93 -20 -159 -52 -198 -95 -32 -36 -35 -44 -35 -104 l0
-65 186 0 186 0 -6 23 c-3 12 -6 30 -6 40 0 15 -13 17 -140 17 -111 0 -140 3
-140 13 0 39 126 93 240 103 66 6 71 9 90 41 11 19 20 36 20 39 0 9 -138 1
-197 -12z"/>
                            <path d="M717 394 c-4 -4 -7 -15 -7 -25 0 -25 -49 -49 -77 -38 -18 7 -25 2
-43 -27 -21 -34 -21 -64 0 -64 5 0 10 -18 10 -40 0 -22 -5 -40 -10 -40 -21 0
-21 -30 0 -64 18 -30 24 -34 43 -27 30 12 70 -10 77 -41 5 -20 12 -23 50 -23
38 0 45 3 48 21 4 28 51 54 79 43 18 -7 25 -2 43 27 21 34 21 64 0 64 -17 0
-12 77 5 84 20 7 19 22 -6 62 -17 28 -24 32 -42 25 -30 -12 -70 10 -77 41 -5
19 -13 24 -46 26 -22 2 -43 0 -47 -4z m90 -146 c29 -27 29 -65 1 -95 -27 -29
-65 -29 -95 -1 -29 27 -29 65 -1 95 27 29 65 29 95 1z"/>
                          </g>
                        </svg>
                      </div>
                    </a>
                  </Link>
                </div>
              }
            </>
            }
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
