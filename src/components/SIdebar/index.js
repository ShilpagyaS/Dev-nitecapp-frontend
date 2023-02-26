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
        className="mr-1"
      />
    ),
    Learn: (
      <Image
        src="/asset/learn-icon.svg"
        width={15}
        height={15}
        className="mr-1"
      />
    ),
    Specs: (
      <Image
        src="/asset/specs-icon.svg"
        width={15}
        height={15}
        className="mr-1"
      />
    ),
    Brand: (
      <Image
        src="/asset/brand-icon.svg"
        width={15}
        height={15}
        className="mr-1"
      />
    ),
    Sales: (
      <Image
        src="/asset/sales-icon.svg"
        width={15}
        height={15}
        className="mr-1"
      />
    ),
    Schedule: (
      <Image
        src="/asset/calander-icon.svg"
        width={15}
        height={15}
        className="mr-1"
      />
    ),
    Saved: (
      <Image
        src="/asset/heart-icon.svg"
        width={15}
        height={15}
        className="mr-1"
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
              <div className="flex items-center py-[8px]" key={ik}>
                {menuIcon(option.name)}
                <Link
                  href={`/${option.name.toLowerCase()}/`}
                  className={`${
                    option.name.toLowerCase() == category?.toLowerCase()
                      ? "text-[#F19B6C]"
                      : "text-[#959595]"
                  } text-[16px] leading-6 font-semibold `}
                >
                  {option.name}
                </Link>
              </div>
              <div className="ml-1">
                {option.subOptions.map((subOption, i) => {
                  return (
                    <div className="w-[139px] flex items-baseline" key={i}>
                      <Image
                        src="/asset/sub-option-icon.png"
                        width={16}
                        height={31}
                        className="mr-1"
                      />
                      <Link
                        href={`/${option.name.toLowerCase()}/${subOption
                          .toLowerCase()
                          .replace("/", "-")}`}
                        className={`${
                          subOption.toLowerCase().replace("/", "-") ==
                          subcategory?.toLowerCase().replace("/", "-")
                            ? "text-[#F19B6C]"
                            : "text-[#959595]"
                        } text-[16px] font-semibold leading-none `}
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
