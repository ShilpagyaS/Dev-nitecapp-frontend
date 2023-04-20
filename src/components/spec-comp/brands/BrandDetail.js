import Breadcrumb from "@/components/Breadcrumb";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { emptyBrandsList, getBrandsDetails } from "@/store/slices/brands";
import { CustomButton } from "@/utils/Buttons";
import Image from "next/image";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const BrandDetail = ({ productType, productId }) => {
 
  const { brandsDetails } = useSelector((state) => state.brands)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBrandsDetails(productType, productId))
    return () => dispatch(emptyBrandsList())
  }, [])
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div className="brand-detail-container">
      <Breadcrumb />
      <div className=" w-full relative mb-8 h-[298px]" >

        <Image
          className=" w-full "
          src={brandsDetails.image}
          fill
          style={{ objectFit: 'cover' }}
          priority

        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]  bg-[transparent]">
          <p className="text-black text-center text-[16px] font-[400] bg-[transparent]">
            HENDRICK’S GIN OFFERS ALTERNATIVE PRIVATE DIRIGIBLE AIRLINE TRANSPORT
            TO THE BIG GAME.
          </p>
        </div>
      </div>

      <div className="properties-container text-white mb-8">
        <div className="strength-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Strength</p>
          <p className="font-medium">45%</p>
        </div>
        <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Origin</p>
          <p className="font-medium">Italy</p>
        </div>
        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Tastes</p>
          <p className="font-medium">
            Balanced, Bright, Citrus,Floral, Mint, Smooth,fresh
          </p>
        </div>
      </div>
      <div className="description-container text-white">
        <p className="mb-8">
          Hendrik's Gin launched in 1999. It likely needs no Introduction.
        </p>
        <p className="mb-8">
          Hendrick’s Gin launched in 1999. It likely needs no introduction.
          Hendrick’s Gin was launched by William Grant & Sons at a time when gin
          wasn’t the diverse, thriving category it is today. A clear callback to
          gin’s forbears, the apothecary style bottle suggests comparison to
          Genevers and a time when gin was a medicine. The Edwardian era
          advertising campaign has helped make the brand a stalwart both in bars
          and in homes.
        </p>
        <CustomButton label="Website" background="#F19B6C" />
      </div>
    </div>
  );
};

export default BrandDetail;
