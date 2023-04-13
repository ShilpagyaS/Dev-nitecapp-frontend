import { getAllusers, getRoles, sendEmail } from '@/store/slices/manageusers';
import { emptyAllOutlet, getOutlets } from '@/store/slices/outlet';
import { getUnitOFMeasure } from '@/store/slices/product';
import NotificationCard from '@/utils/Cards/NotificationCard';
import { _INITIAL } from '@/utils/Constants';
import CustomSelect, { CustomSelectWithAllBlackTheme } from '@/utils/CustomSelect';
import SelectWithDebounce from '@/utils/DebounceSelect';
import InputFieldWirhAutoWidth from '@/utils/InputFieldWithAutoWidth';
import SearchCategoryDebounce from '@/utils/SearchCategory';
import SearchDrinkBrandDebounce from '@/utils/SearchDrinkBrandDebounce';
import SearchProductByCategoryId from '@/utils/SearchProductByCategoryId';
import SearchProductDebounce from '@/utils/SearchProductDebounce';
import UploadBrandLogoInput from '@/utils/uploadBrandInput';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import { errortoast, successtoast } from '../tostify';

export function AddItemModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type, label, productId }) {
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
        onSave(selectedItem.body).then((res) => {
            console.log(res);
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                :
                successtoast({ message: `Product added successfully` });
            if (!res?.error)
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

                {!productId && <SearchProductDebounce
                    label={label}
                    type={type}
                    isClear={isClear}
                    placeholder={"search here"}
                    onChangeHandler={(e) => { onItemSelect(e) }}
                />}
                {productId &&
                    <SearchProductByCategoryId
                        label={label}
                        type={type}
                        isClear={isClear}
                        productId={productId}
                        placeholder={"search here"}
                        onChangeHandler={(e) => { onItemSelect(e) }}
                    />
                }
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
                                src={selectedItem.image || '/asset/noimagedrinkeditsquare.jpg'}
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
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddCategoryModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type, label, productId }) {
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
        let body = {
            category_id: selectedItem.value,
            type: selectedItem.body.type
        }
        console.log(body);

        onSave(body).then((res) => {
            console.log(res);
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: `Product added successfully` });
            if (!res?.error)
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

                <SearchCategoryDebounce
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
                                src={selectedItem.image || '/asset/noimagedrinkeditsquare.jpg'}
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
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
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
        let body = {
            brand_id: selectedItem.value,
            type: selectedItem.body.type
        }
        console.log(body);
        onSave(body).then((res) => {
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                :
                successtoast({ message: `Brand added successfully` });
            if (!res?.error)
                clearForm()
            // onClickCancel();
        })

        // clearForm()
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
                {type ?
                    <SearchDrinkBrandDebounce
                        label={label}
                        type={type}
                        isClear={isClear}
                        placeholder={"search here"}
                        onChangeHandler={(e) => { onItemSelect(e) }}
                    />
                    :

                    <SearchDrinkBrandDebounce
                        label={label}
                        isClear={isClear}
                        placeholder={"search here"}
                        onChangeHandler={(e) => { onItemSelect(e) }}
                    />
                }
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
                                src={selectedItem.image || '/asset/noimagedrinkeditsquare.jpg'}
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
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function NotificationModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, desc, type, label, roles }) {
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
            paddingRight: "10px",
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
    const [users, setUsers] = useState([]);
    const [list, SetList] = useState()
    const { allUsers } = useSelector((state) => state.manageusers)
    const [selectOption, setoptions] = useState()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllusers())

    }, [])
    useEffect(() => {
        if (allUsers)
            setUsers(allUsers)
        console.log(list);
    }, [allUsers])
    console.log(roles);
    // const [users, setUsers] = useState([
    //     { id: 1, name: 'John Luis' },
    //     { id: 2, name: 'John Luis' },
    //     { id: 3, name: 'John Luis' },
    //     { id: 4, name: 'John Luis' },
    //     { id: 5, name: 'John Luis' },


    // ]);

    const [selectedUsers, setSelectedUsers] = useState([]);
    function setlocal(value) {
        setSelectedUsers(value)
    }

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
        // onClickCancel();

    };
    function clearForm() {
        SetClear(true)
        setSelectedUsers([])
        setTimeout(() => {
            SetClear(false)
        }, 500);
    }
    function chooseOption(e) {
        if (e.value == 0) {
            setUsers(allUsers)
        }
        else {
            let dummy = allUsers.filter((element) => e.value == parseInt(element.role))
            console.log(dummy);
            setUsers(dummy)
        }
    }
    return (
        <>{EditModal &&
            <AddMessageTitle
                isModalOpen={EditModal}
                onClickCancel={() => { setEdit(false) }}
                onSave={(data) => {

                    // return dispatch(createProductAndUpdatingList('beer', data))
                    return dispatch(sendEmail(data))
                }}
                closeMain={() => { onClickCancel(); clearForm() }}
                setLocal={setlocal}
                list={selectedUsers}
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

                    <div className='flex items-center justify-between pr-[10px]'>
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
                        <div className='w-[200px]'>

                            <CustomSelect items={[{ value: 0, label: 'All' }, ...roles]}
                                optionalFunction={(e) => { console.log(e); chooseOption(e); setoptions(e.value) }}
                            />
                        </div>

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
                                    {user.image ?
                                        <Image src={user.image}
                                            alt="image"
                                            className='rounded-full'
                                            fill
                                            style={{ objectFit: 'cover' }} />
                                        :
                                        <Image src={'/asset/User avatar default.png'}
                                            alt="image"
                                            className='rounded-full'
                                            fill
                                            style={{ objectFit: 'cover' }} />
                                    }
                                </div>
                                <div className='w-full flex flex-col p-[5px] pl-[19px] justify-between'>
                                    <h5 className='not-italic font-semibold text-[18px] leading-7 font-Inter'>{user.full_name}</h5>
                                    <p className='not-italic font-semibold text-[14px] text-[#8E8E8E] leading-7'>{user.email}</p>
                                </div>
                            </label>
                            <div className='w-full flex justify-center'>
                                <div className='bg-[#393636] w-[95%] h-[0.5px]'></div>
                            </div>
                        </div>
                    ))}



                </div>
                <div className='btncontainers flex items-center justify-end mt-[10px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Next'} condition={selectedUsers.length > 0} onClickHandler={handleSave} />
                    </div>

                </div>

            </Modal>
        </>
    )
}
export function AddMessageTitle({ isModalOpen, onClickCancel, onSave, id, closeMain, list, setLocal }) {
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
    const [EditModal, setEdit] = useState(false)
    const constantlist = list;
    const [selectedUsers, setSelectedUsers] = useState(list);
    const handleCancel = () => {
        console.log('text cancel');
        setLocal(selectedUsers)
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    function settinglocal(value) {
        console.log(value);
        setSelectedUsers(value)
        setEdit(false)
    }
    const handleSave = () => {
        console.log(selectedUsers);
        let dummyArray = selectedUsers.map((e) => { return { email: e.email } })

        let body
        body = {
            title: input1,
            message: input2,
            userList: dummyArray,
        }
        console.log(body);
        onSave(body).then((res) => {
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: `Notification Sent` });
            if (!res?.error) {

                onClickCancel();
                closeMain()
                setinput1("");
                setinput2("");
            }
        })

    };
    return (
        <>{

            EditModal &&
            <SelectedUsers
                isModalOpen={EditModal}
                onClickCancel={() => { setEdit(false) }}
                title={'Selected Users'}
                onSave={() => { }}
                setLocal={(e) => { settinglocal(e) }}
                list={selectedUsers}

            />
        }

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
                    {/* <NotificationCard /> */}
                    <div className='flex items-center justify-end w-full cursor-pointer' onClick={() => { setEdit(true) }}>
                        <p className='italic font-semibold bg-transparent text-left text-[13px] text-primary-base '>You have added {selectedUsers?.length} users for notification click here to see all</p>

                    </div>
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
                        <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                        <div className='ml-[24px]'>
                            <ConditionalButton label={'Send'} condition={(input1 != "" && input2 != "") ? true : false} onClickHandler={handleSave} />
                        </div>

                    </div>
                </div>
            </Modal>
        </>
    )
}
export function SelectedUsers({ isModalOpen, onClickCancel, list, deleteBtn, setLocal, desc, type, label }) {
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
            paddingRight: "10px",
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
    // const [list, SetList] = useState()
    const [users, setUsers] = useState(list);
    const [selectedUsers, setSelectedUsers] = useState(list);
    const handleSelectUser = (user) => {
        if (selectedUsers.includes(user)) {
            setSelectedUsers(selectedUsers.filter((u) => u !== user));
        } else {
            setSelectedUsers([...selectedUsers, user]);
        }
    };
    console.log('enteres');
    const handleSelectAllUsers = () => {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users);
        }
    };

    const handleCancel = () => {
        console.log('clicking cancel');
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(selectedItem.body).then(() => {

        //     // onClickCancel();
        // })
        setEdit(true)
        setLocal(selectedUsers)
        console.log(selectedUsers);

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
                list={selectedUsers}
            />
        }
            <Modal
                isOpen={isModalOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={customStyles}
            >
                <div className="text-white border-none outline-none flex items-center justify-center">
                    <h4 className="text-[24px] leading-9 font-semibold font-Prata mb-4">{`View All`}</h4>
                </div>

                <div className='notificationModal max-h-[456px] mb-[10px]'>

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
                                    {user.image ?
                                        <Image src={user.image}
                                            alt="image"
                                            className='rounded-full'
                                            fill
                                            style={{ objectFit: 'cover' }} />
                                        :
                                        <Image src={'/asset/User avatar default.png'}
                                            alt="image"
                                            className='rounded-full'
                                            fill
                                            style={{ objectFit: 'cover' }} />
                                    }
                                </div>
                                <div className='w-full flex flex-col p-[5px] pl-[19px] justify-between'>
                                    <h5 className='not-italic font-semibold text-[18px] leading-7 font-Inter'>{user.full_name}</h5>
                                    <p className='not-italic font-semibold text-[14px] text-[#8E8E8E] leading-7'>{user.email}</p>
                                </div>
                            </label>
                            <div className='w-full flex justify-center'>
                                <div className='bg-[#393636] w-[95%] h-[0.5px]'></div>
                            </div>
                        </div>
                    ))}



                </div>
                <div className='btncontainers flex items-center justify-end mt-[10px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Next'} condition={true} onClickHandler={handleSave} />
                    </div>

                </div>

            </Modal>
        </>
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
    const [enableOption, setEnableOption] = useState(false);
    const [roles, setroles] = useState([])
    const [outletsList, setoutles] = useState([])
    const [outletdetails, setOutletDetail] = useState({})
    const [testvalue, settestvalue] = useState({ label: "", value: "" })
    const { outlets } = useSelector((state) => state.outlets)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOutlets())
        dispatch(getRoles()).then((res) => { let d = res.filter((e) => e.value != 1); setroles(d) })
        return () => dispatch(emptyAllOutlet())

    }, [])
    useEffect(() => {
        let dummy
        dummy = outlets?.map((e) => { return { value: e.outlet_id, label: e.outlet_name, hotel_id: e.hotel_id } }) || []
        console.log(dummy);
        setoutles(dummy)
    }, [outlets])


    const [brandForm, setBrandForm] = useState(
        {
            email: "",
            displayname: null,
            phone: "",
            role: "",
            pronouns: "",
            outlet: "",
            password: "",
            hotel: ""
        }
    )
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        let dummydata = brandForm
        if (brandForm.role > 4)
            dummydata = {
                full_name: brandForm.displayname,
                email: brandForm.email,
                phone: brandForm.phone,
                password: brandForm.password,
                role_id: brandForm.role,
                outlet_id: brandForm.outlet,
                hotel_id: brandForm.hotel,
                pronouns: brandForm.pronouns
            }
        else
            dummydata = {
                full_name: brandForm.displayname,
                email: brandForm.email,
                phone: brandForm.phone,
                password: brandForm.password,
                role_id: brandForm.role,
                pronouns: brandForm.pronouns
            }
        console.log(dummydata);
        onSave(dummydata).then((res) => {
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: `User added successfully` });
            if (!res?.error)
                onClickCancel();
        })
        setinput1("");
        setinput2("");

    };
    function clearForm() {

    }
    function handlephoneNumber(e) {
        const newValue = event.target.value;
        if (/^\d{0,3}-?\d{0,3}-?\d{0,4}$/.test(newValue)) {
            handleChange(e)
        }
    }
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
                <h4 className="text-[32px] not-italic font-normal font-Prata mb-[20px]">{`Add a User`}</h4>
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
                    required={true}

                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Email"
                    onChangeHandler={handleChange}
                    value={brandForm.email}
                    name={"email"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                    required={true}

                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Phone"
                    onChangeHandler={handlephoneNumber}
                    value={brandForm.phone}
                    name={"phone"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                    required={true}

                />
                <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Role<sup>*</sup>
                    </h5>
                </div>
                <div className='mb-[8px]'>

                    <CustomSelectWithAllBlackTheme
                        items={roles}
                        optionalFunction={(e) => {
                            console.log(e);
                            setBrandForm(prev => { return { ...prev, role: e.value } })
                        }} />
                </div>
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Pronouns"
                    onChangeHandler={handleChange}
                    value={brandForm.pronouns}
                    name={"pronouns"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                {parseInt(brandForm.role) >= 5 &&
                    <>
                        <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                            <h5
                                className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                            // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                            >
                                Outlet<sup>*</sup>
                            </h5>
                        </div>
                        <div className='mb-[8px]'>

                            <CustomSelectWithAllBlackTheme
                                items={outletsList}
                                optionalFunction={(e) => {
                                    console.log(e);
                                    setBrandForm(prev => { return { ...prev, outlet: e.value, hotel: e.hotel_id } })
                                }} />
                        </div>
                    </>
                }
                <InputFieldWirhAutoWidth
                    placeholder="Enter Password"
                    label="Password"
                    onChangeHandler={handleChange}
                    value={brandForm.password}
                    name={"password"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                    required={true}

                />



                <div className='btncontainers flex items-center justify-between mt-[20px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Add'}
                            condition={(
                                brandForm.displayname != "" &&
                                brandForm.password != "" &&
                                brandForm.role != "" && (

                                    brandForm.role >= 5 ? brandForm.outlet != "" : true
                                ) &&
                                brandForm.email != "") ? true : false
                            } onClickHandler={handleSave} />
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
export function EditUsersAndAdmins({ isModalOpen, onClickCancel, onSave, deleteBtn, title, data, type }) {
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
    const [enableOption, setEnableOption] = useState(false);
    const [roles, setroles] = useState([])
    const [outletsList, setoutles] = useState([])
    const [outletdetails, setOutletDetail] = useState({})
    const [testvalue, settestvalue] = useState({ label: "", value: "" })
    const { outlets } = useSelector((state) => state.outlets)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(data);
        dispatch(getOutlets())
        dispatch(getRoles()).then((res) => { let d = res.filter((e) => e.value != 1); console.log(d); setroles(d) })
        return () => dispatch(emptyAllOutlet())

    }, [])
    useEffect(() => {
        let dummy
        dummy = outlets?.map((e) => { return { value: e.outlet_id, label: e.outlet_name, hotel_id: e.hotel_id } }) || []
        console.log(dummy);
        setoutles(dummy)
    }, [outlets])

    const [brandForm, setBrandForm] = useState(
        {
            email: data?.email,
            displayname: data?.full_name,
            phone: data?.phone,
            role: data?.role,
            pronouns: data?.pronouns,
            outlet: data?.outlet_id,
            hotel: data?.hotel_id,
        }
    )

    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        let dummydata
        if (brandForm.role > 4)
            dummydata = {
                user_id: data?.id,
                full_name: brandForm.displayname,
                phone: brandForm.phone,
                pronouns: brandForm.pronouns,
                role: brandForm.role,
                outlet_id: brandForm.outlet,
                hotel_id: brandForm.hotel
            }
        else
            dummydata = {
                user_id: data?.id,
                full_name: brandForm.displayname,
                phone: brandForm.phone,
                pronouns: brandForm.pronouns,
                role: brandForm.role,
            }
        console.log(dummydata);
        onSave(dummydata).then((res) => {
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: `User Edited successfully` });
            if (!res?.error)
                onClickCancel()
        })
        setinput1("");
        setinput2("");

    };
    function clearForm() {

    }
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
                <h4 className="text-[32px] not-italic font-normal font-Prata mb-[20px]">{`Edit a User`}</h4>
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
                    required={true}

                />
                {/* <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Email"
                    onChangeHandler={handleChange}
                    value={brandForm.email}
                    name={"email"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                /> */}
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Phone"
                    onChangeHandler={handleChange}
                    value={brandForm.phone}
                    name={"phone"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                    required={true}

                />
                <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Role<sup>*</sup>
                    </h5>
                </div>
                <div className='mb-[8px]'>

                    <CustomSelectWithAllBlackTheme
                        items={roles}
                        defaultSelect={{ value: data?.role, label: data?.role_name }}
                        optionalFunction={(e) => {
                            console.log(e);
                            setBrandForm(prev => { return { ...prev, role: e.value } })
                        }} />
                </div>
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Pronouns"
                    onChangeHandler={handleChange}
                    value={brandForm.pronouns}
                    name={"pronouns"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                {brandForm.role >= 5 &&
                    <>
                        <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                            <h5
                                className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
                        text-[#959595]`}
                            // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                            >
                                Outlet<sup>*</sup>
                            </h5>
                        </div>

                        <div className='mb-[8px]'>
                            {console.log('outlet')}

                            <CustomSelectWithAllBlackTheme
                                items={outletsList}
                                defaultSelect={data.outlet_id ? { value: data?.outlet_id, label: data?.outlet_name, hotel_id: data?.hotel_id } : null}
                                optionalFunction={(e) => {
                                    console.log(e);
                                    setBrandForm(prev => { return { ...prev, outlet: e.value, hotel: e.hotel_id } })
                                }} />
                        </div>

                        {/* {!data.outlet_id &&
                            <div className='mb-[8px]'>
                                {console.log('nooutlet')}
                                <CustomSelectWithAllBlackTheme
                                    items={outletsList}
                                    optionalFunction={(e) => {
                                        console.log(e);
                                        console.log('selecting ');
                                        setBrandForm(prev => {
                                            return { ...prev, outlet: e.value, hotel: e.hotel_id }
                                        })
                                    }} />
                            </div>
                        } */}
                    </>
                }
                {/* <InputFieldWirhAutoWidth
                    placeholder="Enter Password"
                    label="Password"
                    onChangeHandler={handleChange}
                    value={brandForm.password}
                    name={"password"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                /> */}



                <div className='btncontainers flex items-center justify-between mt-[20px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Edit'}
                            condition={(
                                brandForm.displayname != "" &&
                                brandForm.password != "" &&
                                brandForm.role != "" && (

                                    brandForm.role >= 5 ? brandForm.outlet != "" : true
                                ) &&
                                brandForm.email != "") ? true : false
                            } onClickHandler={handleSave} />
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
export function DeleteUserorAdmin({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
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
                <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                    {`Deleting this will permanantly remove all the data of the User .Do You Want To Delete ${title} ?"`}
                </h3>

            </div>
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>No </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Yes'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}