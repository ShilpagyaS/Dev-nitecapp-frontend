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

function MobileSidebar({ category, subcategory, handleClose }) {
  const router = useRouter();
  const menuOptions = mockData.menuOptions;

  return (
    <>
      <Accordian
        category={category}
        subcategory={subcategory}
        handleClose={handleClose}
      />
    </>
  );
}

export default MobileSidebar;
