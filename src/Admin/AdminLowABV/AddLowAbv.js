import { EditDualValue, EditKeyValue } from '@/components/modal/adminmodal';
import ButtonCombo from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ButtonCombo';
import CocktailFileUpdate from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/CocktailFileUpdate';
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import useMediaQuery from '@/Hooks/useMediaQuery';
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea';
import SplitCard from '@/utils/Cards/Text card/SplitCard';
import React, { useEffect, useRef, useState } from 'react'
import axiosInstance from "@/api/axios";


function AddLowAbv() {
    const isEdit = true;
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");

    const [newMockData, setNewMockData] = useState({

        strength: 'Enter Value',
        tastes: 'Enter Value',
        origin: 'Enter Value',
    });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editItem, setEditItem] = useState({})
    const [drinkname, setdrinkName] = useState("")
    const [abvVal, setabvval] = useState("")
    const [foucsed, setAsfocus] = useState(null)
    const [EditModal, setEditmodal] = useState(false)
    const textAreaRef = useRef(null);


    const toggleEdit = () => {
        setEdit(prev => !prev)
        console.log(textAreaRef.current.innerText);
    }

    // new generic approach
    useEffect(() => {
        console.log(newMockData);

    }, [newMockData])
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
            low_no_abv_name: drinkname,
            abv: abvVal,
            description: textAreaRef.current.value || " "
        }
        axiosInstance({
            url: `/api/low_no_abv/add_new_low_no_abv`,
            method: "POST",
            data
        })
    }

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
            <div className='outer-container'>
                <div className="flex flex-row items-center justify-between">

                    <div className="text-container ">
                        <p className="text-white text-[14px]">
                            <span className="text-[#CCCCCC]">Specs / Low No ABV </span>
                        </p>
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
                                    <input value={drinkname} onChange={(e) => { setdrinkName(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none' />
                                </div>
                                <div className='input-val flex flex-col ml-[25px]'>
                                    <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter ABV in numbers</h3>
                                    <input value={abvVal} onChange={(e) => { setabvval(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none pr-[5px]' />

                                </div>
                            </div>
                        </div>

                        <p
                            className={`description text-[16px] leading-6 ${isMobile && "text-center"
                                }`}
                        >
                            <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Add Desc</h3>
                            <DescriptionTextArea textAreaRef={textAreaRef} isEdit={true} content={''} />
                        </p>
                    </div>

                </div>
                <div className="border border-[#3C3C3C] p-[15px] m-[8px]">
                    <div className="method-container mb-[32px]">
                        <div className="sub-heading-container flex justify-between items-center mb-[21px]">
                            <h4 className="text-white text-[20px] leading-[32px] font-semibold capitalize">

                            </h4>
                            {isEdit && <ButtonCombo onAddClick={() => {
                                // type == null ? setFirstTimemodal(true) :
                                //     setAddmodal(true)
                                // console.log('not null --.', type);


                            }}
                                // onDeleteClick={() => { setIsDeleteModalOpen(true) }}
                                customize={{ add: false, switch: true }}
                                // isActive={localIsActive}
                                setActive={() => { }}


                            />}

                        </div>
                        <div className="method-details-container">

                            <div onDoubleClick={() => { setEditItem({ index: 0, desc: 'strength', quantity: newMockData.strength }); if (foucsed == 0) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                onClick={() => { setAsfocus(0); if (foucsed == 0) setAsfocus(null) }} className={`${foucsed == 0 ? 'outline-none ring ring-violet-300' : ''}`}>

                                <SplitCard desc={"Strength"} quantity={newMockData.strength} />

                            </div>
                            <div onDoubleClick={() => { setEditItem({ index: 1, desc: 'origin', quantity: newMockData.origin }); if (foucsed == 1) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                onClick={() => { setAsfocus(1); if (foucsed == 1) setAsfocus(null) }} className={`${foucsed == 1 ? 'outline-none ring ring-violet-300' : ''}`}>

                                <SplitCard desc={"Origin"} quantity={newMockData.origin} />
                            </div>
                            <div onDoubleClick={() => { setEditItem({ index: 2, desc: 'tastes', quantity: newMockData.tastes }); if (foucsed == 2) setAsfocus(null); if (isEdit) setEditmodal(true) }}
                                onClick={() => { setAsfocus(2); if (foucsed == 2) setAsfocus(null) }} className={`${foucsed == 2 ? 'outline-none ring ring-violet-300' : ''}`}>

                                <SplitCard desc={"Taste"} quantity={newMockData.tastes} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddLowAbv