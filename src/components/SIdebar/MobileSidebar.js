import Image from "next/image";
import mockData from "../mock/MenuOptions.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillAppstore } from "react-icons/ai";
import { ImGlass2 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import Accordian from "../accordian";

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
        src="/asset/calander-icon.svg"
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

function MobileSidebar({ category, subcategory }) {
  const router = useRouter();
  const menuOptions = mockData.menuOptions;

  return (
    <>
    <Accordian />
    </>
  );
}

export default MobileSidebar;
