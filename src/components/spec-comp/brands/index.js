import useMediaQuery from "@/Hooks/useMediaQuery";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import useNavDetails from "@/Hooks/useNavDetails";
import Link from "next/link";

const Brands = () => {
  const isTablet = useMediaQuery("(max-width: 786px)");
  const {category,subcategory,productId}=useNavDetails()
  return (
    <div className="brands-container">
      <div className="search-container lg:flex lg:justify-between lg:items-center mb-8">
       <Breadcrumb/>
        <div className="search-container flex items-center bg-[#1D1D1D] w-full lg:w-[358px] h-[40px] rounded-[10.9744px] px-[26px]">
          <CiSearch
            color="#929292"
            size="15px"
            className="bg-[#1D1D1D] mr-[26px]"
          />
          <input
            className="text-[#767676] bg-[#1D1D1D] text-[16px] leading-6 h-full"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="cards-container flex lg:justify-start justify-center items-center flex-wrap gap-x-[81px] gap-y-[50px]">
      <Link href={`${category}/${subcategory}/1`}>
        <div className="bg-[url('/asset/brand1.svg')] bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max-w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
          {/* <Image src="/asset/brand1.svg" fill /> */}
        </div>{" "}
        </Link>
        <Link href={`${category}/${subcategory}/2`}>
        <div className="bg-[url('/asset/brand2.svg')] bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max:w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
          {/* <Image src="/asset/brand2.svg" fill /> */}
        </div>{" "}
        </Link>
        <Link href={`${category}/${subcategory}/3`}>
        <div className="bg-[url('/asset/brand3.svg')] bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max-w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
          {/* <Image src="/asset/brand3.svg" fill /> */}
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Brands;
