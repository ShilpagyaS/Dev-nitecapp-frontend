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

const SpecsDetailPage = ({ id, subcategory }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductById(subcategory, id))
    dispatch(getNoteDetails(subcategory, id))
    return () => {
      dispatch(emptyProductList())
      dispatch(emptyNotesList())
    }
  }, [])
  const { productDetails } = useSelector((state) => state.product)
  const { noteDetails } = useSelector((state) => state.notes)
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
        desc="Enter Note here: |"
        isModalOpen={isAddModalOpen}
        onSave={(note) => {
          dispatch(addNoteDetails(subcategory, id, note))
          handleCloseModal()
        }}
        onClickCancel={handleCloseModal}
      />
      <NotesModal
        title="Edit Notes"
        defaultvalue={noteDetails?.user_notes || ""}
        //desc={productDetails.user_notes}
        onSave={(note) => {
          dispatch(updateNoteDetails(subcategory, id, note, noteDetails?.[`${subcategory}_notes_id`]))
          handleCloseModal()
        }}
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
              <p className="status-text text-[18px]">{`${whatsthestrength(productDetails.abv)}(${productDetails.abv || ""}%)`}</p>
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
          <p className="font-medium">{productDetails.abv}%</p>
        </div>
        <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Origin</p>
          <p className="font-medium">{productDetails.origin}</p>
        </div>
        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Tastes</p>
          <p className="font-medium">
            {productDetails.tastes}
          </p>
        </div>
      </div>
      <div className="notes-container ">
        <div className="sub-heading-container flex justify-between items-center mb-[21px]">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold">
            Notes
          </h4>
          {(!noteDetails?.user_notes || noteDetails?.user_notes === "") && <OrangeButtons
            onClickHandler={handleAddModalOpen}
            label="Add Notes"
            noPadding={true}
          />}
        </div>
        {(noteDetails?.user_notes && noteDetails?.user_notes !== "") &&
          <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
            <p className=" bg-transparent mr-24px">{noteDetails?.user_notes || ""}</p>

            <button
              onClick={handleEditModalOpen}
              className="hover:text-[#F19B6C] font-bold"
            >Edit</button>
          </div>
        }
      </div>
    </div>
  );
};

export default SpecsDetailPage;
