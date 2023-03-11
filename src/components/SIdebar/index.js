import Image from "next/image";
import mockData from "../mock/MenuOptions.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillAppstore } from "react-icons/ai";
import { ImGlass2 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCalendarRangeFill } from "react-icons/bs";

function menuIcon(menuOption) {
  const menuObj = {
    Dashboard: (
      <Image
        src="/asset/dashboard-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Learn: (
      <Image
        src="/asset/learn-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Specs: (
      <Image
        src="/asset/specs-icon.svg"
        width={15}
        height={15}
        className="mr-3"
        priority
      />
    ),
    Brand: (
      <Image
        src="/asset/brand-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Sales: (
      <Image
        src="/asset/sales-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Schedule: (
      <Image
        src="/asset/schedule-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
    Saved: (
      <Image
        src="/asset/heart-icon.svg"
        width={15}
        height={15}
        className="mr-3"
      />
    ),
  };

  return <>{menuObj[menuOption]}</>;
}

function SideBar({ category, subcategory }) {
  const router = useRouter();
  const menuOptions = mockData.menuOptions;

  return (
    <>
      <div className="sidebar-container w-auto h-full">
        {menuOptions.map((option, ik) => {
          return (
            <>
              <div className="flex items-center py-[12px]" key={ik}>
                {menuIcon(option.name)}
                <Link
                  href={`/${option.name.toLowerCase()}/`}
                  className={`${
                    option.name.toLowerCase() == category?.toLowerCase()
                      ? "text-[#F19B6C]"
                      : "text-[#959595]"
                  } text-[18px] leading-6 font-semibold `}
                >
                  {option.name}
                </Link>
              </div>
              <div className="ml-[6px]">
                {option.subOptions.map((subOption, i) => {
                  return (
                    <div
                      className="w-[139px] mt- flex items-baseline py-[6px]"
                      key={i}
                    >
                      <svg
                        width="18"
                        height="33"
                        className="-mt-[14px]"
                        viewBox="0 0 18 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 0.999996L1 26.3529C1 29.4717 3.52827 32 6.64706 32V32L17 32"
                          stroke="#3C3C3C"
                          stroke-linecap="round"
                        />
                      </svg>

                      <Link
                        href={`/${option.name.toLowerCase()}/${subOption
                          .toLowerCase()
                          .replace("/", "-")
                          .replace(" ", "-")}`}
                        className={`${
                          subOption.toLowerCase().replace("/", "-") ==
                          subcategory?.toLowerCase().replace("/", "-")
                            ? "text-[#F19B6C]"
                            : "text-[#959595]"
                        } text-[16px] leading-none ml-2`}
                      >
                        {subOption}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default SideBar;
