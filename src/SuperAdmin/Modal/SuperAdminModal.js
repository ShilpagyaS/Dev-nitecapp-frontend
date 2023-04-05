import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import { _INITIAL } from '@/utils/Constants';
import CustomSelect from '@/utils/CustomSelect';
import InputField from '@/utils/InputField';
import InputFieldWirhAutoWidth from '@/utils/InputFieldWithAutoWidth';
import UploadBrandLogoInput from '@/utils/uploadBrandInput';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
// import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';

export function AddSuperBrands({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type }) {
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
            paddingRight: "2px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [brandForm, setBrandForm] = useState(
        {
            email: "",
            brandname: "",
            displayname: "",
            address: "",
            city: "",
            state: "",
            country: "",
            password: "",
        }
    )
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        let dummytype = brandForm
        onSave(input1, dummytype)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    function handleChange(e) {
        const { name, value } = e.target;

        setBrandForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none w-full flex items-center justify-center ">
                <h4 className="text-[32px] not-italic font-normal font-Prata mb-[20px]">{`Create a Brand`}</h4>
            </div>
            <div className='brandModal max-h-[456px] pr-[15px]' >
                <UploadBrandLogoInput
                    placeholder=""
                    label="Brand Logo"
                    onChangeHandler={handleChange}
                    value={input1}
                    name={"logo"}
                    type={"text"}
                    errorResponnse={_INITIAL} />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Email"
                    onChangeHandler={handleChange}
                    value={brandForm.email}
                    name={"email"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />

                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Brand Name"
                    onChangeHandler={handleChange}
                    value={brandForm.brandname}
                    name={"brandname"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Display Name"
                    onChangeHandler={handleChange}
                    value={brandForm.displayname}
                    name={"displayname"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Address"
                    onChangeHandler={handleChange}
                    value={brandForm.address}
                    name={"address"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="City"
                    onChangeHandler={handleChange}
                    value={brandForm.city}
                    name={"city"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="State"
                    onChangeHandler={handleChange}
                    value={brandForm.state}
                    name={"state"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Country"
                    onChangeHandler={handleChange}
                    value={brandForm.country}
                    name={"country"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder="Enter Password"
                    label="Password"
                    onChangeHandler={handleChange}
                    value={brandForm.password}
                    name={"password"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <div className='btncontainers flex items-center justify-between mt-[20px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                    </div>

                </div>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Title</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
                </div>
                <div className='flex flex-col w-full'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Type</h3>
                <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}


        </Modal>
    )
}
// export function AddNewDataModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type }) {
//     const customStyles = {
//         content: {
//             top: "50%",
//             left: "50%",
//             right: "auto",
//             bottom: "auto",
//             transform: "translate(-50%, -50%)",
//             borderRadius: "8px",
//             border: "none",
//             background: "black",
//             padding: "24px",
//              maxWidth: "480px",
//   width: "90%",
//         },
//         overlay: {
//             background: "rgba(255, 255, 255, 0.1)",
//             backdropFilter: "blur(2.5px)",
//         },
//     };
//     const [input1, setinput1] = useState("")
//     const [input2, setinput2] = useState("")
//     // console.log(type);
//     const handleCancel = () => {
//         onClickCancel();
//         setinput1("");
//         setinput2("");

//     };

//     const handleSave = () => {
//         // console.log(type);
//         onSave(input1, input2)
//         onClickCancel();
//         setinput1("");
//         setinput2("");

//     };
//     return (
//         <Modal
//             isOpen={isModalOpen}
//             contentLabel="Example Modal"
//             ariaHideApp={false}
//             style={customStyles}
//         >
//             <div className="text-white border-none outline-none">
//                 <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
//             </div>
//             <div className='flex flex-col w-full mb-[26px]'>
//                 <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
//                 <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
//             </div>
//             {type == 1 &&
//                 <div className='flex flex-col w-full'>
//                     <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Value</h3>
//                     <input value={input2} onChange={(e) => { setinput2(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
//                 </div>
//             }
//             <div className='btncontainers flex items-center justify-end mt-[10px] '>
//                 <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
//                 <div className='ml-[24px]'>
//                     <ConditionalButton label={'Save'} condition={
//                         true
//                     } onClickHandler={handleSave} />
//                 </div>

//             </div>

//         </Modal>
//     )
// }
export function SuperBrandDelete({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
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
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className='w-full h-[154px] flex justify-center items-center mb-[28px] '>
                <Image
                    src={'/asset/Sayaji.jpg'}
                    width={179}
                    height={154}
                />
            </div>
            <div className="text-white flex items-center justify-center border-none outline-none">
                <h4 className="text-[22px] leading-9 font-normal mb-4 font-Prata">
                    {`Are you sure you want to delete this brand?`}
                </h4>
            </div>
            <div className='flex flex-col w-full items-center justify-center mb-[26px]'>
                <h3 className='italic font-normal text-[16px] leading-6 text-white font-Inter mb-[7px]'>
                    {`This step witll delete all users and brand data`}
                </h3>

            </div>
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel</p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Delete'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function SuperDeleteMessage({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
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
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave()
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Delete ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>
                    {`Do You Want To Delete ${input1} ?"`}
                </h3>

            </div>
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>No </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Yes'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
