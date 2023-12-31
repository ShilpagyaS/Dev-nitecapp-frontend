import { useEffect, useRef, useState } from "react";
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
import PriceGFVeganCAlContainer from "@/utils/PriceGFVeganCAlContainer";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";

const SpecsDetailPage = ({ id, subcategory }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");


  const dispatch = useDispatch()
  const textAreaRef = useRef()
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
          <Image src={productDetails?.image || '/asset/nodrinkinverted.webp'} className="object-cover rounded-lg"
            fill alt={productDetails?.[`${subcategory}_name`]} priority />
        </div>
        <div className="desc-container inline-block w-full  text-white mt-4 ">
          <div
            className={`heading-container mb-2 flex justify-between font-[600] text-[24px] leading-[36px] ${isMobile && "text-center"
              }`}
          >
            <div
              className={`w-full flex ${isMobile && "justify-around"
                }`}
            >
              <h3 className="title text-[24px] font-bold mr-[16px]">
                {productDetails?.[`${subcategory}_name`]}
              </h3>
              <div className="flex items-end h-full">

                <p className="status-text text-[16px] opacity-75 font-normal text-base">{`${whatsthestrength(productDetails?.abv)} (${productDetails?.abv}%)`}</p>
              </div>
            </div>
            {/* {!isMobile && <AiOutlineHeart size="25px" color="#fff" />} */}
          </div>
          {/* <ul className="sm:divide-x sm:divide-[#959595] sm:flex sm:flex-row flex-col mb-5">
            {productDetails?.price &&
              <li className="min-w-[100px]">
                <div className="text-white w-full text-center pr-[10px]">
                  {`Price: $ ${productDetails.price}`}
                </div>
              </li>
            }
            {productDetails?.gluten_free &&

              <li className="min-w-[100px]">
                <div className="text-white w-full text-center">
                  GF
                </div>
              </li>
            }
            {productDetails?.vegan &&

              <li className="min-w-[100px]">
                <div className="text-white w-full text-center">
                  V
                </div>
              </li>
            }
            {productDetails?.calories &&

              <li className="min-w-[100px]">
                <div className="text-white w-full text-center ">
                  {`${productDetails?.calories} cal`}
                </div>
              </li>
            }
          </ul> */}
          <PriceGFVeganCAlContainer productDetails={productDetails} />

          <p
              className={`description text-[16px] leading-6 ${isMobile && "text-center"
                }`}
            >
              <DescriptionTextArea textAreaRef={textAreaRef} isEdit={false} content={productDetails.description || ''} />
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
