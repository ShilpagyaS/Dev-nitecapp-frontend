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
import Breadcrumb from "@/components/Breadcrumb";
import ProfileFileUpdate from "@/components/Userprofile/profileupload";
import CocktailFileUpdate from "./CocktailFileUpdate";
import { successtoast } from "@/components/tostify";
import { uploadimage } from "@/store/slices/ui";
import Link from "next/link";
import PriceGFVeganCAlContainer from "@/utils/PriceGFVeganCAlContainer";
import { CustomSelectForBrandsFullGray } from "@/utils/CustomSelect";

const CocktailAdminDetailPage = ({ productId, subcategory }) => {
  const isMobile = useMediaQuery("(max-width: 414px)");
  const isTablet = useMediaQuery("(max-width: 786px)");
  const ingridients = DetailsMock.ingridients;
  const presentation = DetailsMock.presentation;
  const method = DetailsMock.method;
  const lesson = DetailsMock.lesson;
  const notes = DetailsMock.notes;
  const [outletArray, setOutletArray] = useState([])
  const [outletSelected, setOutletSelected] = useState({})
  const [currentHotelMappingId, setCurrentHotelMappingId] = useState(null)
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
  const [gf, setgf] = useState(null)
  const [vegan, setVegan] = useState(null)
  const [calories, setCal] = useState(null)
  const [price, setPrice] = useState(null)
  const [newMockData, setNewMockData] = useState({
    ingredients: {
      values: [],
    },
    presentations: {
      values: [],

    },
    methods: {
      values: [],

    },
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
      presentations: (productDetails?.presentations?.values.length && productDetails?.presentations) || {
        values: [],
      },
      methods: (productDetails?.methods?.values.length && productDetails?.methods) || {
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
    if (productDetails?.outlet) {
      let dummyData
      console.log('dd');
      let dummy = productDetails?.outlet.map(element => {
        if (productDetails[`${subcategory}_id`] == element[`${subcategory}_id`]) {
          dummyData = {
            value: element.outlet_id,
            label: element.outlet_name,
            body: element
          }
          console.log('dd', dummyData);
        }
        return { value: element.outlet_id, label: element.outlet_name, body: element }
      })
      setOutletSelected({ ...dummyData })
      setOutletArray([...dummy])
    }
    setCurrentHotelMappingId(productDetails?.[`${subcategory}_id`])


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
  const handleChange = (event, setval) => {
    const newValue = event.target.value;
    if (/^\d*\.?\d*$/.test(newValue)) {
      setval(newValue);
    }
  };
  function onSave() {
    console.log(isEdit);
    if (isEdit == true) {
      if (upimage) {
        dispatch(uploadimage(upimage)).then((imageurl) => {
          if (imageurl && !imageurl?.error)
            dispatch(putProductById(subcategory, currentHotelMappingId,
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
                calories: calories,
                isActive: true

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
        dispatch(putProductById(subcategory, currentHotelMappingId,
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
            calories: calories,
            isActive: true

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
            <Link href={`specs/cocktail`}>
              <div className=' ml-[10px] '>

                <ConditionalButton label={'Cancel'} condition={true} onClickHandler={() => { }} />
              </div>
            </Link>
          </div>
        </div>
        <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
          <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">

            {/* <Image src={productDetails?.image} className="w-full" fill /> */}
            {/* <Image src="/asset/coctail1.png" className="w-full" fill /> */}

            {productDetails?.image ?

              <CocktailFileUpdate defaultImage={productDetails?.image}
                setimage={setimage}
                isEdit={isEdit} id="cocktaildetailpage" />
              :
              isEdit ?
                <CocktailFileUpdate defaultImage={productDetails?.image}
                  setimage={setimage}
                  isEdit={isEdit} id="cocktaildetailpage" />
                :
                <div className="relative w-[150px]  h-[186px] mr-[31px]">
                  <Image src={'/asset/nodrinkinverted.webp'}
                    alt="image"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-[10px]"
                    priority

                  />
                </div>
            }


            {/* <div className="editbutton flex text-[#929292] ">
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
            </div> */}
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
                {isEdit &&
                  <div className='input-desc flex flex-col ml-[25px]'>
                    <CustomSelectForBrandsFullGray items={[...outletArray]} defaultSelect={outletSelected ? { ...outletSelected } : null}
                      optionalFunction={(e) => {
                        console.log(e);
                        // setDrinkBrand({ brand_id: e.value, brand_name: e.label })
                        setCurrentHotelMappingId(e?.body[`${subcategory}_id`])
                        dispatch(getProductById(subcategory, e?.body[`${subcategory}_id`]))
                      }} />
                  </div>
                }
              </div>
            </div>
            {!isEdit &&

              // <ul className="sm:divide-x sm:divide-[#959595] sm:flex sm:flex-row flex-col mb-5">
              //   {productDetails?.price &&
              //     <li className="min-w-[100px]">
              //       <div className="text-white w-full text-center pr-[10px]">
              //         {`Price: $ ${productDetails.price}`}
              //       </div>
              //     </li>
              //   }
              //   {productDetails?.gluten_free &&

              //     <li className="min-w-[100px]">
              //       <div className="text-white w-full text-center flex items-center justify-center">
              //         GF
              //         <div className='relative w-[20px] h-[20px] ml-[5px]'>
              //           <Image src={'/asset/gluten-free.png'} fill className="object-contain" />
              //         </div>
              //       </div>
              //     </li>
              //   }
              //   {productDetails?.vegan &&

              //     <li className="min-w-[100px]">
              //       <div className="text-white w-full text-center flex items-center justify-center">
              //         V
              //         <div className='relative w-[20px] h-[20px] ml-[5px]'>
              //           <Image src={'/asset/vegan.png'} fill className="object-contain" />
              //         </div>
              //       </div>
              //     </li>
              //   }
              //   {productDetails?.calories &&

              //     <li className="min-w-[100px]">
              //       <div className="text-white w-full text-center ">
              //         {`${productDetails?.calories} cal`}
              //       </div>
              //     </li>
              //   }
              // </ul>
              <PriceGFVeganCAlContainer productDetails={productDetails} />
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
                  <div className='flex items-center'>

                    <input type="checkbox" class="accent-primary-base" checked={gf} onChange={(e) => { console.log(e); setgf(prev => !prev) }} /> GF
                    <div className='relative w-[20px] h-[20px] ml-[5px]'>
                      <Image src={'/asset/gluten-free.png'} fill className="object-contain" />
                    </div>
                  </div>
                </label>
                <label className='text-[#959595] cursor-pointer'>
                  <div className='flex items-center'>
                    <input type="checkbox" class="accent-primary-base" checked={vegan} onChange={(e) => { console.log(e); setVegan(prev => !prev) }} /> V
                    <div className='relative w-[20px] h-[20px] ml-[5px]'>
                      <Image src={'/asset/vegan.png'} fill className="object-contain" />
                    </div>
                  </div>
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
            <GenericCard title={e} ingredientType={'cocktail'} type={'notype'} arr={newMockData[e].values} isEdit={isEdit} setTypeFunction={(title, type, input1, input2) => { setType(title, type, input1, input2) }}
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
