import { useEffect, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { CustomButton, OrangeButtons } from "@/utils/Buttons";
import { RectangularCard } from "@/utils/SpecCards";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import DetailsMock from "../../mock/DetailsMock.json";
import NotesModal from "../../modal/Modal";
import Breadcrumb from "@/components/Breadcrumb";
import useNavDetails from "@/Hooks/useNavDetails";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getProductById } from "@/store/slices/product";
import { whatsthestrength } from "@/utils/abvfinder";
import { addNoteDetails, emptyNotesList, getNoteDetails, updateNoteDetails } from "@/store/slices/notes";
import Notes from "../notesComp/notes";

const SpecsDetailPage = ({ id, subcategory }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductById(subcategory, id))
    return () => {
      dispatch(emptyProductList())
    }
  }, [])
  const { productDetails } = useSelector((state) => state.product)






  return (
    <div className="detail-page-container">

      <Breadcrumb />
      <div className="img-description-container mt-8 md:flex md:items-center lg:flex lg:items-center mb-8">
        <div
          className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${isMobile ? "block m-auto" : "mr-[31px]"
            }`}
        >
          {/* src="/asset/london-dry-green.svg" */}
          <Image src={productDetails?.image} className="object-cover rounded-lg"
            fill alt={productDetails?.[`${subcategory}_name`]} />
        </div>
        <div className="desc-container inline-block w-full  text-white mt-4 ">
          <div
            className={`heading-container mb-8 flex justify-between font-[600] text-[24px] leading-[36px] items-center ${isMobile && "text-center"
              }`}
          >
            <div
              className={`w-full flex items-center  ${isMobile && "justify-around"
                }`}
            >
              <h3 className="title text-[24px] font-bold mr-[16px]">
                {productDetails?.[`${subcategory}_name`]}
              </h3>
              <p className="status-text text-[18px] font-[400] leading-[27px]">{`${whatsthestrength(productDetails?.abv)}(${productDetails?.abv || ""}%)`}</p>
            </div>
            {/* {!isMobile && <AiOutlineHeart size="25px" color="#fff" />} */}
          </div>
          <p
            className={`description text-[16px] leading-6 ${isMobile && "text-center"
              }`}
          >
            {productDetails?.description}
          </p>
        </div>
      </div>
      <div className="properties-container text-white mb-8">
        <div className="strength-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Strength</p>
          <p className="font-medium">{productDetails?.abv}%</p>
        </div>
        <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Origin</p>
          <p className="font-medium">{productDetails?.origin}</p>
        </div>
        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Tastes</p>
          <p className="font-medium">
            {productDetails?.tastes}
          </p>
        </div>
      </div>
      <Notes id={id} subcategory={subcategory} />
    </div>
  );
};

export default SpecsDetailPage;
