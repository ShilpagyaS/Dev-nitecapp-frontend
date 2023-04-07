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
                                src={selectedItem.image}
                                // src={'/asset/blue-moon.svg'}
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
export function NotificationModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type, label }) {
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
            paddingRight: "0px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [isClear, SetClear] = useState(false)
    const [EditModal, setEdit] = useState(false)
    const [users, setUsers] = useState([
        { id: 1, name: 'John Luis' },
        { id: 2, name: 'John Luis' },
        { id: 3, name: 'John Luis' },
        { id: 4, name: 'John Luis' },
        { id: 5, name: 'John Luis' },


    ]);

    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleSelectUser = (user) => {
        if (selectedUsers.includes(user)) {
            setSelectedUsers(selectedUsers.filter((u) => u !== user));
        } else {
            setSelectedUsers([...selectedUsers, user]);
        }
    };

    const handleSelectAllUsers = () => {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users);
        }
    };

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(selectedItem.body).then(() => {

        //     // onClickCancel();
        // })
        setEdit(true)
        console.log(selectedUsers);
        clearForm()

    };
    function clearForm() {
        SetClear(true)
        setSelectedUsers([])
        setTimeout(() => {
            SetClear(false)
        }, 500);
    }

    return (
        <>{EditModal &&
            <AddMessageTitle
                isModalOpen={EditModal}
                onClickCancel={() => { setEdit(false) }}
                onSave={() => { }}
                closeMain={() => { onClickCancel() }}
            />
        }
            <Modal
                isOpen={isModalOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={customStyles}
            >
                <div className="text-white border-none outline-none flex items-center justify-center">
                    <h4 className="text-[24px] leading-9 font-semibold font-Prata mb-4">{`Select Users`}</h4>
                </div>

                <div className='notificationModal h-[250px] mb-[10px]'>

                    <div>
                        <label className='text-white m-[5px] flex items-center'>
                            <input
                                type="checkbox"
                                checked={selectedUsers.length === users.length}
                                onChange={handleSelectAllUsers}
                            />
                            <p className='ml-[18px] not-italic font-semibold text-[14px] text-[#8E8E8E] leading-7'>

                                Select All
                            </p>
                        </label>
                    </div>
                    {users.map((user) => (
                        <div key={user.id}
                        >
                            <label className='text-white flex items-center cursor-pointer m-[5px]'>
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.includes(user)}
                                    onChange={() => handleSelectUser(user)}
                                />
                                <div className='h-[54px] w-[64px] bg-gray-400 ml-[18px] rounded-full relative'>
                                    <Image
                                        src={'/asset/Byron.jpeg'}
                                        width={64}
                                        height={54}
                                        className="text-[#A8A8A8] bg-[#2C2C2C] rounded-full"
                                    />
                                </div>
                                <div className='w-full flex flex-col p-[5px] pl-[19px] justify-between'>
                                    <h5 className='not-italic font-semibold text-[20px] leading-7 font-Inter'>{user.name}</h5>
                                    <p className='not-italic font-semibold text-[14px] text-[#8E8E8E] leading-7'>Sayaji@gmail.com</p>
                                </div>
                            </label>
                            <div className='w-full flex justify-center'>
                                <div className='bg-[#393636] w-[95%] h-[0.5px]'></div>
                            </div>
                        </div>
                    ))}



                </div>
                <div className='btncontainers flex items-center justify-end mt-[10px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Next'} condition={true} onClickHandler={handleSave} />
                    </div>

                </div>

            </Modal>
        </>
    )
}
export function AddMessageTitle({ isModalOpen, onClickCancel, onSave, id, closeMain }) {
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
    const [isfocused, setisFocused] = useState(false);

    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {

        onSave(input1, input2, id)
        onClickCancel();
        closeMain()
        setinput1("");
        setinput2("");

    };

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none w-full flex items-center justify-center ">
                <h4 className="text-[32px] not-italic font-normal font-Prata mb-[20px]">{`Notification`}</h4>
            </div>
            <div className='max-h-[456px]' >
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Title"
                    onChangeHandler={(e) => { setinput1(e.target.value) }}
                    value={input1}
                    name={"title"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Message
                    </h5>

                    <textarea className={`notificationModal h-[200px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={input2}
                        onChange={(e) => { setinput2(e.target.value) }} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>
                <div className='btncontainers flex items-center justify-between mt-[20px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-[#F19B6C] cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Send'} condition={input1 != "" ? true : false} onClickHandler={handleSave} />
                    </div>

                </div>
            </div>
        </Modal>
    )
}
export function AddUsersAndAdmins({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type }) {
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
            displayname: "",
            phone: "",
            role: "",
            pronouns: "",
            concept: "",
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
            <div className='notificationModal max-h-[406px] pr-[15px]' >
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Name"
                    onChangeHandler={handleChange}
                    value={brandForm.displayname}
                    name={"displayname"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
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
                    label="Phone"
                    onChangeHandler={handleChange}
                    value={brandForm.phone}
                    name={"phone"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Role"
                    onChangeHandler={handleChange}
                    value={brandForm.role}
                    name={"role"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Pronouns"
                    onChangeHandler={handleChange}
                    value={brandForm.pronouns}
                    name={"pronouns"}
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

                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Concept"
                    onChangeHandler={handleChange}
                    value={brandForm.concept}
                    name={"concept"}
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