import { getUnitOFMeasure } from '@/store/slices/product';
import { _INITIAL } from '@/utils/Constants';
import CustomSelect, { CustomSelectWithAllBlackTheme } from '@/utils/CustomSelect';
import SelectWithDebounce from '@/utils/DebounceSelect';
import InputFieldWirhAutoWidth from '@/utils/InputFieldWithAutoWidth';
import SearchDrinkBrandDebounce from '@/utils/SearchDrinkBrandDebounce';
import SearchProductDebounce from '@/utils/SearchProductDebounce';
import UploadBrandLogoInput from '@/utils/uploadBrandInput';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import { useDispatch } from 'react-redux';
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';

export function AddItemModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type, label }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [selectedItem, setSelectedItem] = useState({ label: '', value: '', image: '', body: {} })
    const [isClear, SetClear] = useState(false)
    function onItemSelect(data) {
        console.log(data);
        setSelectedItem({ value: data.value, label: data.label, image: data.image, body: data.body })
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {
        let body = selectedItem
        console.log(body);
        onSave(selectedItem.body).then(() => {

            clearForm()
            // onClickCancel();
        })

    };
    function clearForm() {
        setSelectedItem({ label: '', value: '', image: '', body: {} })
        SetClear(true)
        setTimeout(() => {
            SetClear(false)
        }, 500);
    }
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>

            <div className='h-[200px] mb-[10px]'>

                <SearchProductDebounce
                    label={label}
                    type={type}
                    isClear={isClear}
                    placeholder={"search here"}
                    onChangeHandler={(e) => { onItemSelect(e) }}
                />
                {selectedItem.value == "" &&

                    <div className='flex flex-col w-full mb-[26px]'>
                        <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                            {`Here You can search and find the suitable product that are currently on our platform. Click on Add to add the product in your List after selecting `}
                        </h3>

                    </div>
                }
                {selectedItem.value != "" &&

                    <div className='flex items-center justify-around w-full mb-[26px] mt-[20px]'>

                        <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                            {`You Have Selected ${selectedItem.label} `}
                        </h3>
                        <div className='h-[70px] w-[70px] rounded-full relative'>
                            <Image
                                src={'/asset/blue-moon.svg'}
                                className={` rounded-full `}
                                fill
                                alt={'image'}
                                priority
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                    </div>

                }

            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddDrinkBrandsModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type, label }) {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "none",
            background: "black",
            padding: "24px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [selectedItem, setSelectedItem] = useState({ label: '', value: '', image: '', body: {} })
    const [isClear, SetClear] = useState(false)
    function onItemSelect(data) {
        console.log(data);
        setSelectedItem({ value: data.value, label: data.label, image: data.image, body: data.body })
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {
        let body = selectedItem
        console.log(body);
        // onSave(selectedItem.body).then(() => {

        //     // onClickCancel();
        // })
        
        clearForm()
    };
    function clearForm() {
        setSelectedItem({ label: '', value: '', image: '', body: {} })
        SetClear(true)
        setTimeout(() => {
            SetClear(false)
        }, 500);
    }
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>

            <div className='h-[200px] mb-[10px]'>

                <SearchDrinkBrandDebounce
                    label={label}
                    type={type}
                    isClear={isClear}
                    placeholder={"search here"}
                    onChangeHandler={(e) => { onItemSelect(e) }}
                />
                {selectedItem.value == "" &&

                    <div className='flex flex-col w-full mb-[26px]'>
                        <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                            {`Here You can search and find the suitable drink brand that are currently on our platform. Click on Add to add the brand in your List after selecting `}
                        </h3>

                    </div>
                }
                {selectedItem.value != "" &&

                    <div className='flex items-center justify-around w-full mb-[26px] mt-[20px]'>

                        <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                            {`You Have Selected ${selectedItem.label} `}
                        </h3>
                        <div className='h-[70px] w-[90px] rounded-[8px]  relative'>
                                        <Image
                                            src={'/asset/brand3.svg'}
                                            className={`rounded-[8px]`}
                                            fill
                                            alt={'image'}
                                            priority
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>

                    </div>

                }

            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}