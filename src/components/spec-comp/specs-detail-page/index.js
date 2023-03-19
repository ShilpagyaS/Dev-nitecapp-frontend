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

const SpecsDetailPage = ({ id, subcategory }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const isTablet = useMediaQuery("(max-width: 786px)");
  const ingridients = DetailsMock.ingridients;
  const presentation = DetailsMock.presentation;
  const method = DetailsMock.method;
  const lesson = DetailsMock.lesson;
  const notes = DetailsMock.notes;


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductById(subcategory, id))
    return () => {
      dispatch(emptyProductList())
    }
  }, [])
  const { productDetails } = useSelector((state) => state.product)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  const handleEditModalOpen = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(true);
  };

  const handleAddModalOpen = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

  return (
    <div className="detail-page-container">
      <NotesModal
        title="New Notes"
        desc="This is my Note: |"
        isModalOpen={isAddModalOpen}
        onClickCancel={handleCloseModal}
      />
      <NotesModal
        title="Edit Notes"
        desc="This is my Note: I like this pre-Prohibition classic cocktail made popular at the “21 Club” in New York. A refreshing combination of Tanqueray gin, citrus + a kiss of mint."
        deleteBtn={true}
        isModalOpen={isEditModalOpen}
        onClickCancel={handleCloseModal}
      />
      <Breadcrumb last={productDetails?.[`${subcategory}_name`]} />
      <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
        <div
          className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${isMobile ? "block m-auto" : "mr-[31px]"
            }`}
        >
          <Image src="/asset/london-dry-green.svg" fill alt={productDetails?.[`${subcategory}_name`]} />
        </div>
        <div className="desc-container inline-block w-full  text-white">
          <div
            className={`heading-container mb-8 flex justify-between items-center ${isMobile && "text-center"
              }`}
          >
            <div
              className={`w-full flex items-center ${isMobile && "justify-around"
                }`}
            >
              <h3 className="title text-[24px] font-bold mr-[16px]">
                {productDetails?.[`${subcategory}_name`]}
              </h3>
              <p className="status-text text-[18px]">Medium(12%)</p>
            </div>
            {!isMobile && <AiOutlineHeart size="25px" color="#fff" />}
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
      <div className="notes-container ">
        <div className="sub-heading-container flex justify-between items-center mb-[21px]">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold">
            Notes
          </h4>
          <OrangeButtons
            onClickHandler={handleAddModalOpen}
            label="Add Notes"
            noPadding={true}
          />
        </div>
        <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
          {notes.map((note, i) => {
            return <p className=" bg-transparent mr-24px">{note.note}</p>;
          })}
          <CustomButton
            onClickHandler={handleEditModalOpen}
            label="Edit"
            color="#F19B6C"
            noPadding={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecsDetailPage;
