import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Image from "next/image";
import DetailsMock from "../../../mock/DetailsMock.json";
import EditCard from "@/utils/Cards/Text card/EditCard";
import IngredientContainer from "./IngredientContainer";
import MethodContainer from "./MethodContainer";
import Presentations from "./Presentations";
import LessonsSection from "./LessonsSection";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import ConditionalButton from "./ConditionalButton";
import ChipWithLeftButton, { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import Simplecard from "@/utils/Cards/Text card/Simplecard";
import { AddGeneric, AddNewTitle, AddTitle, DeleteSection, EditKeyValue } from "@/components/modal/adminmodal";
import GenericCard from "./GenericCard";
import SplitCard from "@/utils/Cards/Text card/SplitCard";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getProductById, putProductById } from "@/store/slices/product";

const CocktailAdminDetailPage = ({ productId, subcategory }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const isTablet = useMediaQuery("(max-width: 786px)");
  const ingridients = DetailsMock.ingridients;
  const presentation = DetailsMock.presentation;
  const method = DetailsMock.method;
  const lesson = DetailsMock.lesson;
  const notes = DetailsMock.notes;
  // let superData = {
  //   cocktail_name: 'SouthSide',
  //   description: " A pre-Prohibition classic cocktail made popular at the “21 Club” in New York. A refreshing combination of Tanqueray gin, citrus + a kiss of mint.",
  //   ingredients: {},
  //   methods: {},
  //   presentation: {},
  //   image: {},

  // }

  // console.log(superData);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductById(subcategory, productId))
    return () => {
      dispatch(emptyProductList())
    }
  }, [])
  const { productDetails } = useSelector((state) => state.product)
  const [newMockData, setNewMockData] = useState({
    ingredients: {
      values: [],
    },
    methods: {
      values: [],

    },
    presentations: {
      values: [],

    }
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [EditModal, setEditmodal] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [abv, setabv] = useState(0)
  const [foucsed, setAsfocus] = useState(null)
  const [editItem, setEditItem] = useState({})
  const [showIngredients, setShowIngredient] = useState(false)
  const [showMethods, setShowMethod] = useState(false)
  const [showPresentations, setShowPresentation] = useState(false)


  const textAreaRef = useRef(null);
  const nameref = useRef(null);



  const toggleEdit = () => {
    setEdit(prev => !prev)
    console.log(textAreaRef.current.innerText);
  }

  // new generic approach
  useEffect(() => {
    console.log(newMockData);

  }, [newMockData])

  useEffect(() => {
    console.log(productDetails);
    setabv(productDetails?.abv)
    setNewMockData({
      // ingredients: (productDetails.ingredients?.length && productDetails.ingredients) || {
      //   values: [],
      // },
      ingredients: (productDetails?.ingredients?.values.length && productDetails?.ingredients) || {
        values: [],
      },
      methods: (productDetails?.methods?.values.length && productDetails?.methods) || {
        values: [],
      },
      presentations: (productDetails?.presentations?.values.length && productDetails?.presentations) || {
        values: [],
      },
    })
    setShowIngredient(productDetails?.showIngredients)
    setShowMethod(productDetails?.showMethods)
    setShowPresentation(productDetails?.showPresentations)

  }, [productDetails])

  function addNewTitle(name) {
    setNewMockData(((prev) => {
      return {
        ...prev,
        [name]: {
          type: null,
          values: [],
        }
      }
    }))

  }
  function setType(title, type, desc, quantity) {
    let firstval = {}
    if (type == 0)
      firstval = {
        desc: desc
      }
    if (type == 1)
      firstval = {
        desc: desc,
        quantity: quantity
      }

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          type: type,
          values: [{ ...firstval }],
        }
      }
    }))

  }
  function setActive(title, data) {
    console.log(title, data);
    if (title == 'ingredients') setShowIngredient(data)
    if (title == 'methods') setShowMethod(data)
    if (title == 'presentations') setShowPresentation(data)
    // superData = { ...superData, ...newMockData }
    // console.log('superData', superData);

  }
  function addValues(title, data) {

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          values: [...prev[title].values, { ...data }],
        }
      }
    }))

  }
  function editValues(title, data, index) {

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          values: prev[title].values.map((e, i) => {
            if (i == index)
              return { ...data }
            return { ...e }

          }
          ),
        }
      }
    }))

  }
  function deleteItems(title, data) {

    setNewMockData(((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          values: [...data]
        }
      }
    }))

  }
  function deleteSection(title) {
    setNewMockData(((prev) => {
      const copy = { ...prev }
      delete copy[title]
      console.log(copy);
      return copy

    }))

  }
  function whatsthestrength(Nabv) {
    let abv = parseFloat(Nabv)
    console.log(abv);
    if (abv >= 15) return 'High'
    if (abv >= 8 && abv < 15) return 'Medium'
    if (abv > 0 && abv < 8) return 'Low'
    if (abv == 0) return 'No alcohol'
    return '  '
  }
  function editKeyValues(name, value) {
    console.log(name);
    setabv(value)
  }
  function onSave() {
    console.log(isEdit);
    if (isEdit == true) {

      dispatch(putProductById(subcategory, productId,
        {
          ...productDetails,
          [`${subcategory}_name`]: nameref.current.innerText,
          description: textAreaRef.current.value,
          abv: abv,
          ingredients: newMockData.ingredients,
          presentations: newMockData.presentations,
          methods: newMockData.methods,
          showIngredients: showIngredients,
          showMethods: showMethods,
          showPresentations: showPresentations,

        }
      ))
      console.log(nameref.current.innerText);
      toggleEdit()
    }
    console.log(textAreaRef);
  }
  return (
    <>
      {isAddModalOpen && <AddNewTitle
        isModalOpen={isAddModalOpen}
        onClickCancel={() => { setIsAddModalOpen(false) }}
        onSave={addNewTitle}
        title={'Title'}

      />
      }
      {isEditModalOpen && <AddGeneric
        isModalOpen={isEditModalOpen}
        onClickCancel={() => { setIsEditModalOpen(false) }}
        onSave={addDesc}
        title={'Title'}

      />
      }
      {EditModal &&
        <EditKeyValue
          isModalOpen={EditModal}
          onClickCancel={() => { setEditmodal(false) }}
          inputone={editItem.desc}
          inputtwo={editItem.quantity}
          onSave={editKeyValues}
        />
      }

      <div className="detail-page-container">
        <div className="flex flex-row items-center justify-between">

          <div className="text-container ">
            <p className="text-white text-[14px]">
              <span className="text-[#CCCCCC]">Specs / Coctail /</span> Southside
            </p>
          </div>
          <div className="flex items-center justify-center">

            <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={() => { onSave() }} />
            <div className="ml-[15px]">
              <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
            </div>
          </div>
        </div>
        <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
          <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">
            <div className={`img-container relative max-w-[186px] min-w-[186px] h-[186px] ${isMobile ? "block m-auto" : "mr-[31px] "
              }`}>
              <Image src={productDetails?.image} className="w-full" fill />
              {/* <Image src="/asset/coctail1.png" className="w-full" fill /> */}

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

          <div className="desc-container inline-block w-full  text-white">
            <div
              className={`heading-container mb-8 flex justify-between items-center ${isMobile && "text-center"}`}
            >
              <div
                className={`w-full flex items-center ${isMobile && "justify-around"
                  }`}
              >
                <h3 className="title text-[24px] font-bold mr-[16px]" >

                  <EditCard editContent={productDetails?.[`${subcategory}_name`]} isEdit={isEdit} divref={nameref} />
                </h3>
                <div className="status-text text-[18px]">
                  <EditCard editContent={`${whatsthestrength(abv)} (${abv})%`} isEdit={false} />
                </div>
              </div>
            </div>

            <p
              className={`description text-[16px] leading-6 ${isMobile && "text-center"
                }`}
            >
              <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={productDetails.description || ''} />
            </p>
          </div>
        </div>
        <div className="titleContainer">
          {/* <div className="flex items-center justify-between p-[10px]">
            <ChipWithLeftButton label={'ADD ITEM'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setIsAddModalOpen(true) }} />
          </div> */}
          {isEdit &&
            <div onDoubleClick={() => { setEditItem({ index: 0, desc: 'strength', quantity: abv }); if (foucsed == 0) setAsfocus(null); if (isEdit) setEditmodal(true) }}
              onClick={() => { setAsfocus(0); if (foucsed == 0) setAsfocus(null) }} className={`${foucsed == 0 ? 'outline-none ring ring-violet-300' : ''} m-[8px]`}>

              <SplitCard desc={"Strength"} quantity={`${abv}%`} />

            </div>
          }

          {Object.keys(newMockData).map((e) =>
            <GenericCard title={e} type={'notype'} arr={newMockData[e].values} isEdit={isEdit} setTypeFunction={(title, type, input1, input2) => { setType(title, type, input1, input2) }}
              addValuesOnData={addValues} editValuesat={editValues} deleteItem={deleteItems} deleteSection={deleteSection}
              isActive={e == 'ingredients' ? showIngredients : e == 'methods' ? showMethods : showPresentations}
              setActive={setActive} fromeditnigscreen={true} />
          )}

        </div>
        {/* <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <IngredientContainer ingridients={ingridients} isEdit={isEdit} />
        </div>
        <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <Presentations presentation={presentation} isEdit={isEdit} />
        </div>
        <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <MethodContainer methods={method} isEdit={isEdit} />
        </div>
        <div className="border border-[#3C3C3C] p-[15px] m-[8px]">

          <LessonsSection lesson={lesson} isEdit={isEdit} />
        </div> */}
      </div>
    </>
  );
};

export default CocktailAdminDetailPage;
