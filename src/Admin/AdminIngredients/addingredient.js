import { AddKeyValue, EditDualValue } from '@/components/modal/adminmodal';
import ButtonCombo from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ButtonCombo';
import CocktailFileUpdate from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/CocktailFileUpdate';
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import useMediaQuery from '@/Hooks/useMediaQuery';
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea';
import SplitCard from '@/utils/Cards/Text card/SplitCard';
import React, { useEffect, useRef, useState } from 'react'
import axiosInstance from "@/components/Auth/axios";
import { createProduct, getAllDrinkBrands } from '@/store/slices/product';
import { useDispatch } from 'react-redux';
import CustomSelect, { CustomSelectForBrands } from '@/utils/CustomSelect';
import Breadcrumb from '@/components/Breadcrumb';
import { createMasterIngredient, getAllIngredientCategoryForSelect } from '@/store/slices/ingredients';


function AddIngredients({ subcategory }) {
    const isEdit = true;
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");

    const textAreaRef = useRef(null);
    const aboutref = useRef(null);
    const [editItem, setEditItem] = useState({})
    const [foucsed, setAsfocus] = useState(null)
    const [EditModal, setEditmodal] = useState(false)
    const [ingredientName, setName] = useState('')
    const [abv, setabv] = useState('')
    const [isSAve, setSaved] = useState(false)
    const [ingredient_Type, setIngredientType] = useState({ ingredient_id: '', ingredient_name: '' })
    const [ingredient_TypeArray, setIngredientTypeArray] = useState([])


    const dispatch = useDispatch()


    const toggleEdit = () => {
        setEdit(prev => !prev)
        console.log(textAreaRef.current.innerText);
    }

    // new generic approach

    const handleChange = event => {
        const newValue = event;
        if (/^\d*\.?\d*$/.test(newValue)) {
            setabv(newValue);
        }
    };

    function setActive(title, data) {
        // setNewMockData(((prev) => {
        //     return {
        //         ...prev,
        //         [title]: {
        //             ...prev[title],
        //             isActive: data,
        //         }
        //     }
        // }))

    }

    function editValues(title, data, index) {

        // setNewMockData(((prev) => {
        //     return {
        //         ...prev,
        //         [title]: data
        //     }
        // }))

    }

    function createdrink() {
        console.log('calling');
        let data = {
            master_ingredient_name: ingredientName,
            ingredient_type_id: ingredient_Type.ingredient_id,
            abv: abv,
            short_description: textAreaRef.current.value || '',
            description: aboutref.current.value || ''
        }


        dispatch(createMasterIngredient(data)).then((res) => {
            console.log(res);
            clearForm();
        })

    }
    function clearForm() {
        setabv('')
        setName('')
        setSaved(true)
        setTimeout(() => {

            setSaved(false)
        }, 1000);
    }
    useEffect(() => {
        dispatch(getAllIngredientCategoryForSelect()).then((res) => { setIngredientTypeArray(res) })
    }, [])

    return (
        <>
            {/* {EditModal &&
                <EditDualValue
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={editItem.desc}
                    inputtwo={editItem.quantity}
                    onSave={editValues}
                />
            } */}
            {EditModal &&
                <AddKeyValue
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    inputone={editItem.desc}
                    inputtwo={editItem.quantity}
                    onSave={editValues}
                />
            }
            <div className='outer-container'>
                <div className="flex flex-row items-center justify-between">

                    <div className="text-container ">
                        <Breadcrumb last={`/ ingredients`} />
                    </div>
                    <div className="flex items-center justify-center">

                        <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={() => { createdrink() }} />
                    </div>
                </div>
                {/* image and desc */}

                <div className="img-description-container md:flex md:items-center lg:flex lg:items-center mb-8">
                    <div className="imageContainer text-[#929292] flex flex-col justify-center items-center">
                        <CocktailFileUpdate />
                    </div>

                    <div className="desc-container inline-block w-full  text-white">
                        <div
                            className={`heading-container mb-[12px] flex justify-between items-center ${isMobile && "text-center"}`}
                        >
                            <div
                                className={`w-full flex items-center ${isMobile && "justify-around"
                                    }`}
                            >
                                <div className='input-desc flex flex-col'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Item Name</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                                        value={ingredientName || ''} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                {/* <div className='input-val flex flex-col ml-[25px]'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Value</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none pr-[5px]' />

                                </div> */}
                                <div className='input-desc flex flex-col ml-[25px]'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Ingredient Type</h3>
                                    <CustomSelectForBrands items={ingredient_TypeArray} optionalFunction={(e) => { console.log(e); setIngredientType({ ingredient_id: e.value, ingredient_name: e.label }) }} isclear={isSAve} />
                                </div>

                            </div>
                        </div>

                        <p
                            className={`description text-[16px] leading-6 ${isMobile && "text-center"
                                }`}
                        >
                            <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Add Detail</h3>
                            <DescriptionTextArea textAreaRef={textAreaRef} isEdit={true} content={''} isSAve={isSAve} minHeight={"250px"} />
                        </p>
                        <div className='input-desc '>
                            <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Strength</h3>
                            <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                                value={abv || ''} onChange={(e) => { handleChange(e.target.value) }} />
                        </div>

                    </div>


                </div>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Add Description</h3>
                <DescriptionTextArea textAreaRef={aboutref} maxheight={'200'} isEdit={true} content={''} isSAve={isSAve} minHeight={"250px"} />

            </div>
        </>
    )
}

export default AddIngredients