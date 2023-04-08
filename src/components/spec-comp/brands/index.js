import useMediaQuery from "@/Hooks/useMediaQuery";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import useNavDetails from "@/Hooks/useNavDetails";
import Link from "next/link";
import { useEffect } from "react";
import { emptyBrandsList, getBrandsList } from "@/store/slices/brands";
import { useDispatch, useSelector } from "react-redux";

const SpecBrands = ({ productType, productId }) => {

  const { brandsList } = useSelector((state) => state.brands)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBrandsList(productType))
    return () => dispatch(emptyBrandsList())
  }, [])

  return (
    <div className="brands-container">
      <div className="search-container lg:flex lg:justify-between lg:items-center mb-8">
        <Breadcrumb />
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

        {brandsList?.map((i) => {
          return <Link href={`/specs/${productType}/brands?id=${i?.drink_brand_id}`}>
            <div className=" bg-no-repeat bg-cover bg-center  brand-img-container relative rounded-[8px] max-w-[397px] lg:min-w[325px] md:min-w-[397px] sm:min-w-[289px]  h-[137.44px]">
              <Image src={i.image} fill className="rounded-md"
                style={{ objectFit: "cover" }}
              />
            </div>{" "}
          </Link>
        })}



      </div>
    </div>
  );
};

export default SpecBrands;
