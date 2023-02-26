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
    Dashboard: <AiFillAppstore color="#959595" size="15px" className="mr-1" />,
    Learn: (
      <Image
        src="/asset/learn-icon.png"
        width={15}
        height={15}
        className="mr-1"
      />
    ),
    Specs: <ImGlass2 color="#959595" size="15px" className="mr-1" />,
    Brand: (
      <Image src="/asset/mlogo.png" width={15} height={15} className="mr-1" />
    ),
    Sales: <AiFillDollarCircle color="#959595" size="15px" className="mr-1" />,
    Schedule: (
      <BsFillCalendarRangeFill color="#959595" size="15px" className="mr-1" />
    ),
    Saved: <AiFillHeart color="#959595" size="15px" className="mr-1" />,
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
          // ;
          return (
            <>
              <div className=" py-[8px]" key={ik}>
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
