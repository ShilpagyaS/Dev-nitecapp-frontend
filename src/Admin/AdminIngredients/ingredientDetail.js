import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/store/slices/product";
import useNavDetails from "@/Hooks/useNavDetails";
import Link from "next/link";
import { RectangularCard } from "@/utils/SpecCards";
import Breadcrumb from "@/components/Breadcrumb";
import { emptyIngredientsList, getIngredientsDetails } from "@/store/slices/ingredients";
import { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import EditCard from "@/utils/Cards/Text card/EditCard";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";

const AdminIngridientDetail = ({ productType, productId }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const { ingredientDetails } = useSelector((state) => state.ingredients);
const nameref=useRef(null)
const strengthref=useRef(null)
const taglineref=useRef(null)
const textAreaRef=useRef(null)
  const [isEdit, setEdit] = useState(false)
  console.log(ingredientDetails)
  const toggleEdit = () => {
    setEdit(prev => !prev)
}
  const dispatch = useDispatch();
  function onSave() {
    console.log(isEdit);
    if (isEdit == true) {

        setTagline(textAreaRef.current.value)
        toggleEdit()
    }
    // console.log(superData);
}

  useEffect(() => {
    dispatch(getIngredientsDetails(productType, productId));
    return () => dispatch(emptyIngredientsList())
  }, []);

  return (
    <div className="ingridient-detail-container">
      <div className="flex flex-row items-center justify-between mb-[40px]">

<div className="text-container ">
    <p className="text-white text-[14px]">
        <Breadcrumb />
    </p>
</div>
<div className="flex items-center justify-center">
{/* onClickHandler={onSave}  */}
    <ConditionalButton label={'Save'} condition={isEdit ? true : false}   onClickHandler={onSave}/>
    <div className="ml-[15px]">
        <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
    </div>
</div>
</div>
 {!isEdit ? <>
      <div className="img-title-container md:flex md:items-center lg:flex lg:items-center mb-8">
        <div className="title-container text-white w-[294px] mr-8">
          <h3 className="title text-[24px] font-bold mb-6">{ingredientDetails.ingredient_type_name}</h3>
          <p
            className={`sub-title text-[16px] leading-6 ${isMobile && "text-center"
              }`}
          >
            Spirit made through the distillation mainly of granis or potatos
          </p>
        </div>
        <div className="img-container relative w-[136px] h-[154px]">
          <Image src="/asset/london-dry-green.svg" fill />
        </div>
      </div>
      <div className="description-container text-white mb-8">
        <div className="strength-container flex items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Strength</p>
          <p className="font-medium">45%</p>
        </div>
        <div className="desc-container text-[16px]">
          Usually high-proof(45% ABV), crisp style of gin with prominent flavors
          of juniper and citrus. The London dry style is considered the
          benchmark for all other gin. While it is associated with London, it
          does not need to be made there - only a couple of London dry gins are
          made in the city.
        </div>
      </div>
      <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
        <h2 className="text-white text-[24px] leading-9 font-bold capitalize">
          {productType}
        </h2>

      </div>
      </>
    :
    <>
       <div className="img-title-container md:flex md:items-center lg:flex lg:items-center mb-8">

       <div className="w-full md:w-1/4">
        <div className="img-container relative w-[136px] h-[154px]">
          <Image src="/asset/london-dry-green.svg" fill />
        </div>
        
                            <div className="editbutton flex text-[#929292] ">
                                <Image
                                    src={'/asset/EditVector.svg'}
                                    // src={'/asset/DeleteVector.svg'}
                                    width={20}
                                    height={20}
                                    className=""
                                />
                                <div className="ml-[12px]">
                                    Edit Image
                                </div>
                            </div>
                        
        </div>


        <div className="title-container text-white w-[294px] mr-8">
            <h6 className="text-sm text-[#929292] mb-2">Enter Item Name </h6>
          <h3 className="title text-[24px] font-bold mb-6">
          <EditCard editContent={ingredientDetails?.ingredient_type_name} isEdit={isEdit} divref={nameref} />
           </h3>
           <h6  className="text-sm text-[#929292] mt-4 mb-2">Detail</h6>
          <p
            className={`sub-title text-[16px] leading-6 ${isMobile && "text-center"
              }`}
          >
            <EditCard editContent={ "Spirit made through the distillation mainly of granis or potatos"} isEdit={isEdit} divref={taglineref} />
           
          </p>
          <h6 className="text-sm text-[#929292] mt-4 mb-2">Enter Strength</h6>
          <div className="strength-container flex items-center text-[16px] mb-4 pb-4 ">
        <p><EditCard editContent={45} isEdit={isEdit} divref={strengthref} />
            </p>  
        
        </div>
        </div>

      
       
      </div>
      <div className="description-container text-white mb-8  border-t border-[#222222]">
      
        
      
        <div className="desc-container text-[16px]">
        <h6 className="text-sm text-[#929292] mt-4 mb-2">Add Description</h6>
        <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={"Usually high-proof(45% ABV), crisp style of gin with prominent flavor of juniper and citrus. The London dry style is considered the benchmark for all other gin. While it is associated with London, itn does not need to be made there - only a couple of London dry gins are made in the city."|| ''} />
          
        </div>
      </div>
    </>  
    }
    </div>
  );
};

export default AdminIngridientDetail;
