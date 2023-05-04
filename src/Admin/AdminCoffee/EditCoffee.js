import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import EditCard from "@/utils/Cards/Text card/EditCard";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import ChipWithLeftButton, { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import { AddGeneric, AddNewTitle, AddTitle, DeleteSection, EditKeyValue } from "@/components/modal/adminmodal";
import GenericCard from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/GenericCard";
import SplitCard from "@/utils/Cards/Text card/SplitCard";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getProductById, putProductById } from "@/store/slices/product";
import Breadcrumb from "@/components/Breadcrumb";
import CocktailFileUpdate from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/CocktailFileUpdate";
import { successtoast } from "@/components/tostify";
import { uploadimage } from "@/store/slices/ui";
import Link from "next/link";

const EditCoffee = ({ productId, subcategory }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductById(subcategory, productId))
    return () => {
      dispatch(emptyProductList())
    }
  }, [])
  const { productDetails } = useSelector((state) => state.product)
  const [gf, setgf] = useState(null)
  const [vegan, setVegan] = useState(null)
  const [calories, setCal] = useState(null)
  const [price, setPrice] = useState(null)
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
  const [upimage, setimage] = useState()



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
    setPrice(productDetails?.price)
    setgf(productDetails?.gluten_free)
    setCal(productDetails?.calories)
    setVegan(productDetails?.vegan)

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
  const handleChange = (event, setval) => {
    const newValue = event.target.value;
    if (/^\d*\.?\d*$/.test(newValue)) {
      setval(newValue);
    }
  };
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
      if (upimage) {
        dispatch(uploadimage(upimage)).then((imageurl) => {
          if (imageurl && !imageurl?.error)
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
                image: imageurl,
                price: price,
                gluten_free: gf,
                vegan: vegan,
                calories: calories

              }
            )).then((res) => {
              console.log(res);
              res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: `${nameref.current.innerText} is updated successfully` });
            })
          else console.log("cannot upload")
        })
      }
      else
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
            price: price,
            gluten_free: gf,
            vegan: vegan,
            calories: calories

          }
        )).then((res) => {
          console.log(res);
          res?.error ?
            // errortoast({ message: res.message }) 
            ''
            : successtoast({ message: `${nameref.current.innerText} is updated successfully` });
        })
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

          <Breadcrumb />
          <div className="flex items-center justify-center">

            <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={() => { onSave() }} />
            <div className="ml-[15px]">
              <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
            </div>
            <Link href={`specs/coffee`}>
              <div className=' ml-[10px] '>

                <ConditionalButton label={'Cancel'} condition={true} onClickHandler={() => { }} />
              </div>
            </Link>
          </div>
        </div>
        <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
          <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">

            <CocktailFileUpdate defaultImage={productDetails?.image}
              setimage={setimage}
              isEdit={isEdit} id="editcoffe" />

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
                {/* <div className="status-text text-[18px]">
                  <EditCard editContent={`${whatsthestrength(abv)} (${abv})%`} isEdit={false} />
                </div> */}
              </div>
            </div>
            {!isEdit &&

              <ul className="sm:divide-x sm:divide-[#959595] sm:flex sm:flex-row flex-col mb-5">
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
              </ul>
            }
            {isEdit &&

              <div className='flex items-center justify-between my-[7px]'>
                <div className='flex items-center'>

                  <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mr-[7px]'>$</h3>
                  <div className='input-desc flex flex-col max-w-[150px]'>
                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none placeholder:text-[#959595] placeholder:italic'
                      value={price || ''} onChange={(e) => { handleChange(e, setPrice) }}
                      placeholder={'Enter Price'} />
                  </div>
                </div>
                <label className='text-[#959595] cursor-pointer'>
                  <input type="checkbox" class="accent-primary-base" checked={gf} onChange={(e) => { console.log(e); setgf(prev => !prev) }} /> GF
                </label>
                <label className='text-[#959595] cursor-pointer'>
                  <input type="checkbox" class="accent-primary-base" checked={vegan} onChange={(e) => { console.log(e); setVegan(prev => !prev) }} /> V
                </label>
                <div className='flex items-center'>

                  <div className='input-desc flex flex-col max-w-[150px]'>
                    {/* <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Calories</h3> */}
                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none placeholder:text-[#959595] placeholder:italic'
                      value={calories || ''} onChange={(e) => { handleChange(e, setCal) }}
                      placeholder={'Enter Calories'} />

                  </div>
                  <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter ml-[7px]'>cal</h3>

                </div>
              </div>
            }
            <p
              className={`description text-[16px] leading-6 ${isMobile && "text-center"
                }`}
            >
              <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={productDetails.description || ''} />
            </p>
          </div>
        </div>
        <div className="titleContainer">

          {/* {isEdit &&
            <div onDoubleClick={() => { setEditItem({ index: 0, desc: 'strength', quantity: abv }); if (foucsed == 0) setAsfocus(null); if (isEdit) setEditmodal(true) }}
              onClick={() => { setAsfocus(0); if (foucsed == 0) setAsfocus(null) }} className={`${foucsed == 0 ? 'outline-none ring ring-violet-300' : ''} m-[8px]`}>

              <SplitCard desc={"Strength"} quantity={`${abv}%`} />

            </div>
          } */}

          {Object.keys(newMockData).map((e) =>
            <GenericCard title={e} type={'notype'} ingredientType={'coffee'} arr={newMockData[e].values} isEdit={isEdit} setTypeFunction={(title, type, input1, input2) => { setType(title, type, input1, input2) }}
              addValuesOnData={addValues} editValuesat={editValues} deleteItem={deleteItems} deleteSection={deleteSection}
              isActive={e == 'ingredients' ? showIngredients : e == 'methods' ? showMethods : showPresentations}
              setActive={setActive} fromeditnigscreen={true} />
          )}

        </div>

      </div>
    </>
  );
};

export default EditCoffee;
