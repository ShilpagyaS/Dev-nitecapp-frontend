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
import { emptyIngredientsList, getAllIngredientCategoryForSelect, getIngredientsDetails, getMasterIngredientsDetails, putIngredientById } from "@/store/slices/ingredients";
import { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import EditCard from "@/utils/Cards/Text card/EditCard";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import { CustomSelectForBrands } from "@/utils/CustomSelect";

const AdminIngridientDetail = ({ productType, productId }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const { ingredientDetails } = useSelector((state) => state.ingredients);
  const nameref = useRef(null)
  const strengthref = useRef(null)
  const taglineref = useRef(null)
  const textAreaRef = useRef(null)
  const [isEdit, setEdit] = useState(false)
  const [abv, setabv] = useState(false)
  const [ingredient_Type, setIngredientType] = useState({ ingredient_id: '', ingredient_name: '' })
  const [ingredient_TypeArray, setIngredientTypeArray] = useState([])


  console.log(ingredientDetails)
  const toggleEdit = () => {
    setEdit(prev => !prev)
  }
  const dispatch = useDispatch();
  function onSave() {
    console.log(isEdit);
    if (isEdit == true) {
      let body
      body = {
        ...ingredientDetails,
        abv: abv,
        master_ingredient_name: nameref.current.innerText,
        short_description: taglineref.current.value,
        description: textAreaRef.current.value,
        ingredient_type_id: ingredient_Type.ingredient_id
      }
      console.log(body);
      dispatch(putIngredientById(productId, body))
      toggleEdit()
      // console.log(superData);
    }
  }


  useEffect(() => {
    dispatch(getMasterIngredientsDetails(productId));
    return () => dispatch(emptyIngredientsList())
  }, []);
  useEffect(() => {



    setabv(ingredientDetails.abv)

    if (ingredient_TypeArray.length > 0) {
      let body = ingredient_TypeArray.filter((e) => {
        console.log(e); console.log(ingredientDetails.ingredient_type_id);
        if (e.value == ingredientDetails.ingredient_type_id) {
          console.log(e.value == ingredientDetails.ingredient_type_id);
          return {
            ingredient_id: e.value,
            ingredient_name: e.label,
          }
        }
      })
      console.log(body);
      if (body.length > 0) {
        console.log(body[0]);
        let d = body[0]
        setIngredientType({ ingredient_id: d.value, ingredient_name: d.label })
      }
    }
  }, [ingredientDetails])
  useEffect(() => {
    dispatch(getAllIngredientCategoryForSelect()).then((res) => { console.log(res); setIngredientTypeArray(res) })
  }, [])
  const handleChange = event => {
    const newValue = event.target.value;
    if (/^\d*\.?\d*$/.test(newValue)) {
      setabv(newValue);
    }
  };
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
          <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={onSave} />
          <div className="ml-[15px]">
            <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
          </div>
        </div>
      </div>
      {!isEdit ? <>
        <div className="img-title-container md:flex md:items-center lg:flex lg:items-center mb-8">
          <div className="title-container text-white w-[294px] mr-8">
            <h3 className="title text-[24px] font-bold mb-6">{ingredientDetails.master_ingredient_name}</h3>
            <p
              className={`sub-title text-[16px] leading-6 ${isMobile && "text-center"
                }`}
            >
              {ingredientDetails.short_description}
            </p>
          </div>
          <div className="img-container relative w-[136px] h-[154px]">
            <Image src={ingredientDetails?.image} fill className="rounded-lg" />
            {/* <Image src="/asset/london-dry-green.svg" fill /> */}
          </div>
        </div>
        <div className="description-container text-white mb-8">
          {ingredientDetails?.abv == 0 || ingredientDetails?.abv == null
            &&
            <div className="strength-container flex items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
              <p className="mr-6">Strength</p>
              <p className="font-medium">{ingredientDetails.abv}</p>
            </div>
          }
          <div className="desc-container text-[16px]">
            {ingredientDetails.description}
          </div>
        </div>
        {/* <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
        <h2 className="text-white text-[24px] leading-9 font-bold capitalize">
          {productType}
        </h2>

      </div> */}
      </>
        :
        <>
          <div className="img-title-container md:flex md:items-center lg:flex lg:items-center mb-8">

            <div className="w-full md:w-1/4">
              <div className="img-container relative w-[136px] h-[154px]">
                <Image src={ingredientDetails?.image} fill className="rounded-lg" />

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


            <div className="title-container text-white w-full mr-8">
              <h6 className="text-sm text-[#929292] mb-2">Enter Item Name </h6>
              <h3 className="title text-[20px] font-bold mb-6">
                <EditCard editContent={ingredientDetails?.master_ingredient_name} isEdit={isEdit} divref={nameref} />
              </h3>
              <h6 className="text-sm text-[#929292] mt-4 mb-2">Detail</h6>
              {/* <p
                className={`sub-title text-[16px] leading-6 ${isMobile && "text-center"
                  }`}
              >
                <EditCard editContent={ingredientDetails.short_description || ''} isEdit={isEdit} divref={taglineref} />

              </p> */}
              <DescriptionTextArea textAreaRef={taglineref} isEdit={isEdit} content={ingredientDetails.short_description || ''} />
              <div className="flex items-center">
                <div>

                  <h6 className="text-sm text-[#929292] mt-4 mb-2">Enter Strength</h6>
                  <div className="strength-container flex items-center text-[16px] mb-4 pb-4 ">
                    <div className='input-val flex flex-col'>
                      <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[40px] rounded outline-none focus:outline-none pr-[5px]'
                        value={abv || ''} onChange={(e) => { handleChange(e) }} />

                    </div>
                  </div>

                </div>
                {isEdit &&
                  <div className='ml-[75px]'>
                    <h6 className="text-sm text-[#929292] mt-4 mb-2">Enter Ingredient Type</h6>
                    <div className="strength-container flex items-center text-[16px] mb-4 pb-4 ">
                      <CustomSelectForBrands items={ingredient_TypeArray}
                        defaultSelect={ingredient_Type.ingredient_id != "" ? { label: ingredient_Type.ingredient_name, value: ingredient_Type.ingredient_id } : null}
                        optionalFunction={(e) => {
                          console.log(e);
                          setIngredientType({
                            ingredient_id: e.value, ingredient_name: e.label
                          })
                        }} />
                    </div>
                  </div>
                }
              </div>
            </div>



          </div>
          <div className="description-container text-white mb-8  border-t border-[#222222]">



            <div className="desc-container text-[16px]">
              <h6 className="text-sm text-[#929292] mt-4 mb-2">Add Description</h6>
              <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={ingredientDetails.description || ''} />

            </div>
          </div>
        </>
      }
    </div>
  );
};

export default AdminIngridientDetail;
