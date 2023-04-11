import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/Hooks/useMediaQuery";
import Image from "next/image";
import DetailsMock from "@/components/mock/DetailsMock.json";
import EditCard from "@/utils/Cards/Text card/EditCard";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
// import ConditionalButton from "./ConditionalButton";
import ChipWithLeftButton, { CustomChipWithLeftButton } from "@/utils/ChipWithLeftButton";
import { AddGeneric, AddNewTitle, AddTitle, DeleteSection, EditDualValue, EditKeyValue } from "@/components/modal/adminmodal";
// import GenericCard from "./GenericCard";
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import GenericCard from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/GenericCard";
import Breadcrumb from "@/components/Breadcrumb";
import ButtonCombo from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ButtonCombo";
import SplitCard from "@/utils/Cards/Text card/SplitCard";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductList, getAllDrinkBrands, getProductById, putProductById } from "@/store/slices/product";
import { CustomSelectForBrands } from "@/utils/CustomSelect";
import CocktailFileUpdate from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/CocktailFileUpdate";
import { errortoast, successtoast } from "@/components/tostify";
import { uploadimage } from "@/store/slices/ui";

const RestrictedBeerEdit = ({ productId, subcategory }) => {
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");


    const [isEdit, setEdit] = useState(false)
    const textAreaRef = useRef(null);
    const nameref = useRef(null);
    const percentageref = useRef(null);
    const [editItem, setEditItem] = useState({})
    const [foucsed, setAsfocus] = useState(null)
    const [EditModal, setEditmodal] = useState(false)
    const [drinkBrand, setDrinkBrand] = useState({ brand_id: "", brand_name: "" })
    const [drinkBrandArray, setDrinkBrandArray] = useState([])
    const [upimage, setimage] = useState()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductById(subcategory, productId))
        return () => {
            dispatch(emptyProductList())
        }
    }, [])
    const { productDetails } = useSelector((state) => state.product)
    console.log(productDetails);
    const [selectedOption, setSelection] = useState('bottle')

    const toggleEdit = () => {
        setEdit(prev => !prev)
        console.log(textAreaRef.current.innerText);
    }
    const [newMockData, setNewMockData] = useState({

        abv: productDetails.abv || '',
        tastes: productDetails.tastes || '',
        origin: productDetails.origin || '',
    });

    // new generic approach
    useEffect(() => {
        console.log(newMockData);

    }, [newMockData])
    useEffect(() => {
        setNewMockData({

            abv: productDetails.abv || '',
            tastes: productDetails.tastes || '',
            origin: productDetails.origin || '',
        })
        let body = { brand_id: productDetails.brand_id || '', brand_name: productDetails.brand_name || '' }
        setDrinkBrand(body)
        setSelection(productDetails.packaging_type)
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
        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: {
                    ...prev[title],
                    isActive: data,
                }
            }
        }))
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
    function editValues(title, data) {

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: data
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
    function onSave() {
        console.log(isEdit);
        if (isEdit == true) {
            if (upimage) {
                dispatch(uploadimage(upimage)).then((imageurl) => {
                    if (imageurl && !imageurl?.error)
                        dispatch(putProductById(subcategory, productId,
                            {
                                ...productDetails,
                                description: textAreaRef.current.value,
                                image: imageurl
                            }
                        )).then((res) => {
                            console.log(res);
                            res.error ? errortoast({ message: res.message }) :
                                successtoast({ message: `${nameref.current.innerText} is updated successfully` });
                        })
                    else console.log("cannot upload")
                })
            }
            else
                dispatch(putProductById(subcategory, productId,
                    {
                        ...productDetails,
                        description: textAreaRef.current.value,
                    }
                )).then((res) => {
                    console.log(res);
                    res.error ? errortoast({ message: res.message }) :
                        successtoast({ message: `${nameref.current.innerText} is updated successfully` });

                })
            console.log(nameref.current.innerText);
            setimage()
            toggleEdit()
        }
        console.log(textAreaRef);
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
    useEffect(() => {
        dispatch(getAllDrinkBrands()).then((res) => { setDrinkBrandArray(res) })
    }, [])
    const handleOptionChange = (event) => {
        setSelection(event.target.value);
    };
    return (
        <>

            {EditModal &&
                <EditKeyValue
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={editItem.desc}
                    inputtwo={editItem.quantity}
                    onSave={editValues}
                />
            }

            <div className="detail-page-container">
                <div className="flex flex-row items-center justify-between">

                    <div className="text-container ">
                        <p className="text-white text-[14px]">
                            <Breadcrumb />
                        </p>
                    </div>
                    <div className="flex items-center justify-center">

                        <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={onSave} />
                        <div className="ml-[15px]">
                            <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
                        </div>
                    </div>
                </div>
                <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
                    <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">
                        <CocktailFileUpdate defaultImage={productDetails?.image}
                            setimage={setimage}
                            isEdit={isEdit} />
                        {/* {isEdit &&
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
                        } */}
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

                                    <EditCard editContent={productDetails?.[`${subcategory}_name`]} isEdit={false} divref={nameref} />
                                </h3>
                                <div className="status-text text-[18px]">
                                    <EditCard editContent={`${whatsthestrength(newMockData.abv)} (${newMockData.abv})%`} isEdit={false} />
                                </div>
                                <div className="status-text text-[18px]">
                                    <EditCard editContent={``} isEdit={false} />
                                </div>
                                {/* {isEdit &&
                                    <div className='input-desc flex flex-col ml-[25px]'>
                                        <CustomSelectForBrands items={drinkBrandArray} defaultSelect={drinkBrand.brand_id ? { label: drinkBrand.brand_name, value: drinkBrand.brand_id } : null} optionalFunction={(e) => { console.log(e); setDrinkBrand({ brand_id: e.value, brand_name: e.label }) }} />
                                    </div>
                                } */}
                            </div>
                        </div>

                        <p
                            className={`description text-[16px] leading-6 ${isMobile && "text-center"
                                }`}
                        >
                            <DescriptionTextArea textAreaRef={textAreaRef} isEdit={isEdit} content={productDetails.description || ''} />
                        </p>
                        {/*   Bottle / Can /Draft
                        <div className='w-full flex items-center justify-start p-[10px] mr-[10px]' >
                            {isEdit &&


                                <div className='flex items-center justify-evenly'>

                                    <div className='flex justify-center items-center'>

                                        <input
                                            id='bottle'
                                            type="radio"
                                            value="bottle"
                                            checked={selectedOption === 'bottle'}
                                            onChange={handleOptionChange}
                                            className='appearance-none'
                                        />
                                        <label htmlFor='bottle' className={`ml-[10px] ${selectedOption === 'bottle' ? 'text-primary-hoverbase' : 'text-gray-600'}`}>Bottle</label>
                                    </div>
                                    <div className='flex justify-center items-center ml-[10px]'>

                                        <input
                                            id='can'
                                            type="radio"
                                            value="can"
                                            checked={selectedOption === 'can'}
                                            onChange={handleOptionChange}
                                            className='appearance-none'

                                        />
                                        <label htmlFor='can' className={`ml-[10px] ${selectedOption === 'can' ? 'text-primary-hoverbase' : 'text-gray-600'}`}>Can</label>
                                    </div>
                                    <div className='flex justify-center items-center ml-[10px]'>

                                        <input
                                            id='draft'
                                            type="radio"
                                            value="draft"
                                            checked={selectedOption === 'draft'}
                                            onChange={handleOptionChange}
                                            className='appearance-none'

                                        />
                                        <label htmlFor='draft' className={`ml-[10px] ${selectedOption === 'draft' ? 'text-primary-hoverbase' : 'text-gray-600'}`}>Draft</label>
                                    </div>
                                </div>
                            }
                            {!isEdit &&
                                <div className='flex items-center justify-evenly'>

                                    <div className='flex justify-center items-center'>
                                        <p className=" capitalize text-primary-hoverbase"> {selectedOption}</p>
                                    </div>
                                </div>
                            }
                        </div> */}
                        <div className='w-full flex items-center justify-start p-[10px] mr-[10px]' >
                            <div className='flex items-center justify-evenly'>

                                <div className='flex justify-center items-center'>
                                    <p className=" capitalize text-primary-hoverbase"> {selectedOption}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="titleContainer">

                    {/* <div className="border border-[#3C3C3C] p-[15px] m-[8px]">
                        <div className="method-container mb-[32px]">
                            <div className="sub-heading-container flex justify-between items-center mb-[21px]">
                                <h4 className="text-white text-[20px] leading-[32px] font-semibold capitalize">

                                </h4>
                                {isEdit && <ButtonCombo onAddClick={() => {


                                }}
                                    // onDeleteClick={() => { setIsDeleteModalOpen(true) }}
                                    customize={{ add: false, switch: false }}
                                    // isActive={localIsActive}
                                    setActive={() => { }}


                                />}

                            </div>
                            <div className="method-details-container">

                                <div onDoubleClick={() => {
                                    setEditItem({ index: 0, desc: 'abv', quantity: newMockData.abv }); if (foucsed == 0) setAsfocus(null);
                                    // if (isEdit) setEditmodal(true)
                                }}
                                    onClick={() => { setAsfocus(0); if (foucsed == 0) setAsfocus(null) }} className={`${foucsed == 0 ? 'outline-none ring ring-violet-300' : ''}`}>

                                    <SplitCard desc={"Strength"} quantity={`${newMockData.abv}%`} />

                                </div>
                                <div onDoubleClick={() => {
                                    setEditItem({ index: 1, desc: 'origin', quantity: newMockData.origin }); if (foucsed == 1) setAsfocus(null);
                                    // if (isEdit) setEditmodal(true)
                                }}
                                    onClick={() => { setAsfocus(1); if (foucsed == 1) setAsfocus(null) }} className={`${foucsed == 1 ? 'outline-none ring ring-violet-300' : ''}`}>

                                    <SplitCard desc={"Origin"} quantity={newMockData.origin} />
                                </div>
                                <div onDoubleClick={() => {
                                    setEditItem({ index: 2, desc: 'tastes', quantity: newMockData.tastes }); if (foucsed == 2) setAsfocus(null);
                                    // if (isEdit) setEditmodal(true)
                                }}
                                    onClick={() => { setAsfocus(2); if (foucsed == 2) setAsfocus(null) }} className={`${foucsed == 2 ? 'outline-none ring ring-violet-300' : ''}`}>

                                    <SplitCard desc={"Taste"} quantity={newMockData.tastes} />
                                </div>

                            </div>
                            
                        </div>
                    </div> */}
                    <div className="properties-container text-white m-8">
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
                </div>
            </div>
        </>
    );
};

export default RestrictedBeerEdit;
