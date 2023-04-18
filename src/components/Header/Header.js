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

function Header(props) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const dispatch = useDispatch();
  const { logo } = useSelector((state) => state.auth)
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
      <div className="w-[60px] h-[40px] lg:w-[70px] lg:h-[50px] object-cover relative">
        <Image
          className=""
          src={logo || "/dash/didlogo.svg" || '/asset/nitecapp_logo.png'}
          fill
          alt="logo"
        />
      </div>

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
                  className="rounded-[50%] mr-2"
                />
              </Link>
              <ProfileDropdown onClickHandler={handleLogout} />
            </div>
          </div>

          <div className="avtar-container flex justify-around items-center lg:hidden">
            <div className="p-[15px] md:p-[20px]  ">
              <Link href={"/dashboard"} legacyBehavior>
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
              <Link href={"/brands"} legacyBehavior>
                <a>
                  <div className="relative w-[20px] h-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 10 10"
                      // fill={active ? "#F19B6C" : "#959595"}
                      className={`mr-2 fill-white`}
                    >
                      <path
                        d="M6.76758 10.3301H9.75714C9.87076 10.3301 9.96371 10.2372 9.96371 10.1236V3.70414C9.96371 3.58844 9.87076 3.49756 9.75714 3.49756H6.76758V10.3301ZM7.43489 4.80349H9.29645C9.41007 4.80349 9.50303 4.89645 9.50303 5.01007C9.50303 5.12369 9.41007 5.21665 9.29645 5.21665H7.43489C7.32126 5.21665 7.22831 5.12369 7.22831 5.01007C7.22831 4.89645 7.32126 4.80349 7.43489 4.80349ZM7.43489 6.07203H9.29645C9.41007 6.07203 9.50303 6.16499 9.50303 6.27861C9.50303 6.39223 9.41007 6.48519 9.29645 6.48519H7.43489C7.32126 6.48519 7.22831 6.39223 7.22831 6.27861C7.22831 6.16499 7.32126 6.07203 7.43489 6.07203ZM7.43489 7.34066H9.29645C9.41007 7.34066 9.50303 7.43362 9.50303 7.54724C9.50303 7.66086 9.41007 7.75382 9.29645 7.75382H7.43489C7.32126 7.75382 7.22831 7.66086 7.22831 7.54724C7.22831 7.43362 7.32126 7.34066 7.43489 7.34066ZM7.43489 8.6092H9.29645C9.41007 8.6092 9.50303 8.70216 9.50303 8.81578C9.50303 8.92941 9.41007 9.02236 9.29645 9.02236H7.43489C7.32126 9.02236 7.22831 8.92941 7.22831 8.81578C7.22831 8.70216 7.32126 8.6092 7.43489 8.6092Z"

                      />
                      <path
                        d="M1.91119 7.79724C1.91119 7.68362 2.00415 7.59066 2.11777 7.59066H4.23754C4.35116 7.59066 4.44412 7.68362 4.44412 7.79724L4.4442 10.3303H6.35531V0.206579C6.35531 0.0908798 6.26235 0 6.14873 0H0.206579C0.0929563 0 0 0.0929562 0 0.206579V10.3303H1.9111L1.91119 7.79724ZM1.31195 1.477H5.0411C5.15472 1.477 5.24768 1.56996 5.24768 1.68358C5.24768 1.79928 5.15472 1.89016 5.0411 1.89016L1.31195 1.89025C1.19625 1.89025 1.10537 1.79937 1.10537 1.68367C1.10537 1.57005 1.19626 1.477 1.31195 1.477ZM1.31195 3.0225H5.0411C5.15472 3.0225 5.24768 3.11545 5.24768 3.22908C5.24768 3.3427 5.15472 3.43566 5.0411 3.43566H1.31195C1.19625 3.43566 1.10537 3.3427 1.10537 3.22908C1.10537 3.11545 1.19626 3.0225 1.31195 3.0225ZM1.31195 4.56584H5.0411C5.15472 4.56584 5.24768 4.6588 5.24768 4.77242C5.24768 4.88812 5.15472 4.979 5.0411 4.979L1.31195 4.97909C1.19625 4.97909 1.10537 4.88821 1.10537 4.77251C1.10537 4.6588 1.19626 4.56584 1.31195 4.56584ZM1.10537 6.31785C1.10537 6.20423 1.19626 6.11127 1.31195 6.11127H5.0411C5.15472 6.11127 5.24768 6.20423 5.24768 6.31785C5.24768 6.43147 5.15472 6.52443 5.0411 6.52443L1.31195 6.52452C1.19625 6.52452 1.10537 6.43156 1.10537 6.31785Z"

                      />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
            <div className="p-[15px]  md:p-[20px]">
              <Link href={"/guests"} legacyBehavior>
                <a>
                  <div className="relative w-[20px] h-[20px]">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 500.000000 500.000000"
                      preserveAspectRatio="xMidYMid meet"
                      className={`mr-2 fill-white`}

                    >

                      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M2443 4985 c-236 -66 -363 -291 -293 -518 72 -232 337 -350 555 -248
239 111 315 400 161 610 -96 131 -277 197 -423 156z"/>
                        <path d="M1881 4024 c-132 -35 -239 -125 -298 -251 l-37 -78 -7 -180 c-4 -99
-8 -463 -8 -810 -1 -595 0 -632 18 -671 23 -51 71 -89 132 -104 82 -21 172 19
211 92 l23 43 5 761 c4 625 7 764 19 777 17 21 35 21 55 1 14 -14 16 -184 16
-1717 0 -1928 -8 -1743 84 -1824 91 -81 210 -81 301 -1 87 77 79 -21 85 1093
l5 990 50 0 50 0 5 -990 c6 -1114 -2 -1016 85 -1093 100 -88 234 -77 328 27
19 22 40 57 46 78 8 26 11 569 11 1734 0 1305 3 1698 12 1707 19 19 45 14 62
-10 14 -19 16 -71 16 -363 0 -308 2 -344 19 -380 10 -22 28 -49 41 -60 12 -11
124 -86 248 -166 l227 -145 5 -65 5 -64 50 -5 50 -5 3 -267 2 -268 -61 0 c-65
0 -105 -17 -130 -54 -21 -32 -26 -1419 -5 -1470 20 -48 55 -67 131 -74 l65 -5
0 -73 c0 -62 3 -77 23 -100 30 -35 79 -37 110 -5 18 18 23 35 25 101 l4 80
173 0 172 0 5 -79 c5 -84 15 -107 57 -122 33 -13 75 5 90 37 6 14 11 56 11 93
l0 68 66 6 c71 5 109 25 131 68 10 18 13 190 13 732 0 777 2 750 -60 782 -16
8 -55 15 -90 15 l-60 0 2 268 3 267 50 5 50 5 3 89 c2 65 -1 92 -10 98 -7 4
-132 8 -276 8 l-264 0 7 40 c8 46 -7 102 -41 146 -13 17 -117 91 -237 168
l-214 137 -5 307 c-5 287 -7 312 -29 377 -46 137 -164 251 -306 295 -62 19
-90 20 -667 19 -492 0 -611 -3 -655 -15z m2427 -1947 l2 -267 -175 0 -175 0 0
263 c0 145 2 266 5 268 2 3 80 5 172 4 l168 -1 3 -267z"/>
                        <path d="M745 1316 c-37 -17 -70 -52 -84 -89 -6 -16 -11 -78 -11 -138 l0 -109
-120 0 c-135 0 -169 -10 -195 -60 -23 -44 -22 -817 1 -861 30 -59 29 -59 644
-59 626 0 618 -1 645 64 22 53 22 813 0 856 -26 50 -60 60 -195 60 l-120 0 0
119 c0 106 -2 121 -22 151 -50 73 -55 75 -296 77 -166 2 -224 0 -247 -11z
m395 -246 l0 -90 -160 0 -160 0 0 90 0 90 160 0 160 0 0 -90z"/>
                      </g>
                    </svg>                  </div>
                </a>
              </Link>
            </div>
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
