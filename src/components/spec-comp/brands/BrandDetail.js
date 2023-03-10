import useMediaQuery from "@/Hooks/useMediaQuery";
import { CustomButton } from "@/utils/Buttons";
import { CiSearch } from "react-icons/ci";

const BrandDetail = () => {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div className="brand-detail-container">
      <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
        <p className="text-white text-[14px]">
          <span className="text-[#CCCCCC]">Specs / Brands /</span> BrandName
        </p>
      </div>
      <div className="banner-container w-full h-[269px] bg-[url('/asset/brand1.svg')] bg-no-repeat bg-cover bg-center mb-8">
        <p>Brand Name</p>
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
