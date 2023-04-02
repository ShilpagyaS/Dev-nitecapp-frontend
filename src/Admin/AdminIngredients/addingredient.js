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


function AddIngredients({ subcategory }) {
    const isEdit = true;
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");

    const [newMockData, setNewMockData] = useState({

        abv: '',
        tastes: '',
        origin: '',
    });

    const textAreaRef = useRef(null);
    const [editItem, setEditItem] = useState({})
    const [foucsed, setAsfocus] = useState(null)
    const [EditModal, setEditmodal] = useState(false)
    const [drinkName, setName] = useState('')
    const [isSAve, setSaved] = useState(false)
    const [drinkBrand, setDrinkBrand] = useState({ brand_id: "", brand_name: "" })
    const [drinkBrandArray, setDrinkBrandArray] = useState([])

    const dispatch = useDispatch()


    const toggleEdit = () => {
        setEdit(prev => !prev)
        console.log(textAreaRef.current.innerText);
    }

    // new generic approach
    useEffect(() => {
        console.log(newMockData);

    }, [newMockData])


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

    function editValues(title, data, index) {

        setNewMockData(((prev) => {
            return {
                ...prev,
                [title]: data
            }
        }))

    }

    function createdrink() {
        console.log('calling');
        let data = {
            [`${subcategory}_name`]: drinkName,
            description: textAreaRef.current.value || '',
            abv: newMockData.abv,
            origin: newMockData.origin,
            tastes: newMockData.tastes,
            brand_id: drinkBrand.brand_id

        }
        dispatch(createProduct(subcategory, data)).then((res) => {
            console.log(res);
            clearForm();
        })

    }
    function clearForm() {

        setName(""); setNewMockData({
            abv: '',
            tastes: '',
            origin: '',

        });
        setSaved(true)
        setTimeout(() => {

            setSaved(false)
        }, 1000);
        setDrinkBrand({ brand_id: "", brand_name: "" })
    }
    useEffect(() => {
        dispatch(getAllDrinkBrands()).then((res) => { setDrinkBrandArray(res) })
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
                       <Breadcrumb last={`/ ingredients`}/>
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
                                        value={drinkName || ''} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                {/* <div className='input-val flex flex-col ml-[25px]'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Value</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none pr-[5px]' />

                                </div> */}
                                <div className='input-desc flex flex-col ml-[25px]'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Category</h3>
                                    <CustomSelectForBrands items={drinkBrandArray} optionalFunction={(e) => { console.log(e); setDrinkBrand({ brand_id: e.value, brand_name: e.label }) }} isclear={isSAve} />
                                </div>

                            </div>
                        </div>

                        <p
                            className={`description text-[16px] leading-6 ${isMobile && "text-center"
                                }`}
                        >
                            <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Detail</h3>
                            <DescriptionTextArea textAreaRef={textAreaRef} isEdit={true} content={''} isSAve={isSAve} minHeight={"250px"}  />
                        </p>
                        <div className='input-desc '>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Strength</h3>
                                    <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                                        value={drinkName || ''} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                    </div>

                </div>
               
            </div>
        </>
    )
}

export default AddIngredients