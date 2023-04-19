import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ProfileFileUpdatewithoptionalisEdit } from '@/components/Userprofile/profileupload'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import { CustomChipWithLeftButton } from '@/utils/ChipWithLeftButton'
import EditCard from '@/utils/Cards/Text card/EditCard'
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea'
import { DummyNotes } from '@/components/spec-comp/notesComp/notes'
import { useDispatch, useSelector } from 'react-redux'
import { emptyAllGuests, getGuestDetail, putGuestDetail } from '@/store/slices/guests'
import moment from 'moment/moment'
import { uploadimage } from '@/store/slices/ui'
function GuestDetailsPage({ guestID }) {
    const [upimage, setimage] = useState(undefined)
    const [isEdit, setEdit] = useState(false)
    const bioref = useRef()
    const allergiesref = useRef()
    const preferencesref = useRef()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [birthday, setbirthday] = useState()
    const { guestDetails } = useSelector(state => state.guests)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getGuestDetail(guestID))
        return () => {
            dispatch(emptyAllGuests())
        }
    }, [])
    useEffect(() => {
        if (guestDetails) {
            setFirstName(guestDetails.first_name)
            setLastName(guestDetails.last_name)
            setphone(guestDetails.phone)
            setemail(guestDetails.email)
            setbirthday(moment(guestDetails.birthday).format('YYYY-MM-DD'))
        } 
    }, [guestDetails])

    function onSave() {
        let dummydata = {
            ...guestDetails,
            first_name: firstName,
            last_name: lastName,
            description: bioref.current.value,
            birthday: birthday,
            allergies: allergiesref.current.value,
            preferences: preferencesref.current.value,
            email: email,
            phone: phone

        }
        if (isEdit == true) {
            if (upimage) {
                dispatch(uploadimage(upimage)).then((imageurl) => {
                    if (imageurl && !imageurl?.error)
                        dispatch(putGuestDetail({ ...dummydata, image: imageurl }, guestID)).then((res) => {
                            console.log(res);
                        })
                    else console.log("cannot upload")
                })
            }
            else
                dispatch(putGuestDetail(dummydata, guestID)).then((res) => {
                    console.log(res);


                })
            setimage()
            toggleEdit()
        }



    }
    const toggleEdit = () => {
        setEdit(prev => !prev)
        // console.log(textAreaRef.current.innerText);
    }
    return (
        <div>
            <div className="flex flex-row items-center justify-between mb-[10px]">

                <Breadcrumb />
                <div className="flex items-center justify-center">

                    <ConditionalButton label={'Save'} condition={isEdit ? true : false} onClickHandler={onSave} />
                    <div className="ml-[15px]">
                        {!isEdit ?
                            <CustomChipWithLeftButton label={'Edit'} srcPath={'/asset/BlackEdit.svg'} onClickHandler={toggleEdit} condition={!isEdit} />
                            :
                            <ConditionalButton label={'Cancel'} condition={true} onClickHandler={() => { toggleEdit() }} />

                        }
                    </div>
                </div>
            </div>
            <div className='img-and-desc-container mt-[10px] flex items-center '>
                <div className='imagecontainer mr-[15px]'>
                    <ProfileFileUpdatewithoptionalisEdit isedit={isEdit} setimage={setimage} upimage={upimage} defaultImage={guestDetails.image} />
                </div>
                <div className='nameDesc flex flex-col items-start w-full'>
                    {!isEdit &&
                        <>
                            <h3 className="title text-[24px] font-bold mr-[16px] mb-[10px]" >

                                <EditCard editContent={`${guestDetails.first_name} ${guestDetails.last_name}`} isEdit={false} />
                            </h3>
                        </>
                    }
                    {isEdit &&
                        <div className='flex mb-[10px]'>

                            <div className='input-desc flex flex-col'>
                                {/* <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter First Name</h3> */}
                                <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none placeholder:text-[#959595] placeholder:italic '
                                    value={firstName || ''} onChange={(e) => { setFirstName(e.target.value) }}
                                    placeholder={'Enter First Name'}
                                />
                            </div>
                            <div className='input-val flex flex-col ml-[25px]'>
                                {/* <h3 className='not-italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>Enter Last Name</h3> */}
                                <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none placeholder:text-[#959595] placeholder:italic'
                                    value={lastName || ''} onChange={(e) => { setLastName(e.target.value) }}
                                    placeholder='Enter Last Name'
                                />

                            </div>

                        </div>
                    }

                    {!isEdit ?
                        <div className='desc text-white'>
                            {guestDetails.description}
                        </div>
                        :
                        <div className='w-full'>

                            <DescriptionTextArea textAreaRef={bioref} isEdit={isEdit} content={guestDetails.description} />

                        </div>
                    }

                </div>


            </div>
            <div className="properties-container text-white mb-8">
                <div className="strength-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Phone</p>
                    {!isEdit ?
                        <p className="font-medium"> {guestDetails.phone || "No Contact"}</p>
                        :
                        <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                            value={phone || ''} onChange={(e) => { setphone(e.target.value) }} />
                    }
                </div>
                <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Email</p>
                    {!isEdit ?
                        <p className="font-medium"> {guestDetails.email || 'Email not present'}</p>
                        :
                        <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                            value={email || ''} onChange={(e) => { setemail(e.target.value) }} />
                    }
                </div>
                <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Birthday</p>
                    {!isEdit ?
                        <p className="font-medium">
                            {moment(guestDetails.birthday).format("MMM Do YYYY")}
                        </p> :
                        <input type='date' value={birthday} onChange={(e) => { console.log(e.target.value); setbirthday(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none' />
                    }
                </div>


                {!isEdit ?
                    <>
                        {guestDetails.allergies &&
                            <div className="tastes-container  text-[16px] mb-4 pb-4 border-b border-[#222222]">
                                <p className="mr-6 mb-[10px]">Alergies</p>
                                <DescriptionTextArea textAreaRef={allergiesref} isEdit={false} content={guestDetails.allergies} />

                            </div>
                        }
                    </>
                    :
                    <div className='w-full border-b border-[#222222] mb-4 '>
                        <p className="mr-6 mb-[10px]">
                            Alergies
                        </p>
                        <DescriptionTextArea textAreaRef={allergiesref} isEdit={isEdit} content={guestDetails.allergies} />

                    </div>
                }
                {/* <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Preferences</p>
                    <p className="font-medium">
                        Lemon in his water, Old Fashioned with 3 cherries
                    </p>
                </div> */}
                {!isEdit ?
                    <>
                        {guestDetails.preferences &&
                            <div className='w-full border-b border-[#222222] mb-4 '>
                                <p className="mr-6 mb-[10px]">
                                    Preferences
                                </p>
                                <DescriptionTextArea textAreaRef={preferencesref} isEdit={false} content={guestDetails.preferences} />

                            </div>

                        }
                    </>
                    :
                    <div className='w-full border-b border-[#222222] mb-4 '>
                        <p className="mr-6 mb-[10px]">
                            Preferences
                        </p>
                        <DescriptionTextArea textAreaRef={preferencesref} isEdit={isEdit} content={guestDetails.preferences} />

                    </div>
                }
            </div>
            {/* <DummyNotes /> */}
            <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
                <p className=" bg-transparent mr-24px">{"Note 1"}</p>

                <button
                    onClick={() => { }}
                    className="hover:text-primary-base font-bold"
                >Edit</button>
            </div>
            <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
                <p className=" bg-transparent mr-24px">{"Note 2"}</p>

                <button
                    onClick={() => { }}
                    className="hover:text-primary-base font-bold"
                >Edit</button>
            </div>
            <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
                <p className=" bg-transparent mr-24px">{"Note 3"}</p>

                <button
                    onClick={() => { }}
                    className="hover:text-primary-base font-bold"
                >Edit</button>
            </div>

        </div>
    )
}

export default GuestDetailsPage