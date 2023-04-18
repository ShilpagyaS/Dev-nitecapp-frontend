import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ProfileFileUpdatewithoptionalisEdit } from '@/components/Userprofile/profileupload'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import { CustomChipWithLeftButton } from '@/utils/ChipWithLeftButton'
import EditCard from '@/utils/Cards/Text card/EditCard'
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea'
import { DummyNotes } from '@/components/spec-comp/notesComp/notes'
function GuestDetailsPage({ guestID }) {
    const [upimage, setimage] = useState(undefined)
    const [isEdit, setEdit] = useState(false)
    const bioref = useRef()
    const allergiesref = useRef()
    const preferencesref = useRef()
    const nameref = useRef()
    const [phone, setphone] = useState('123456798')
    const [email, setemail] = useState('johndoe@gmail.com')
    const [EditModal, setEditmodal] = useState(false)
    const [editItem, setEditItem] = useState({})


    function onSave() {

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
                    <ProfileFileUpdatewithoptionalisEdit isedit={isEdit} setimage={setimage} upimage={upimage} defaultImage={'/asset/Byron.jpeg'} />
                </div>
                <div className='nameDesc flex flex-col items-start w-full'>
                    {!isEdit &&
                        <>
                            <h3 className="title text-[24px] font-bold mr-[16px] mb-[10px]" >

                                <EditCard editContent={'John Doe'} isEdit={false} />
                            </h3>
                        </>
                    }
                    {isEdit &&
                        <h3 className="title text-[24px] font-bold mr-[16px] mb-[10px]" >
                            <EditCard editContent={'John Doe'} isEdit={isEdit} divref={nameref} />
                        </h3>
                    }

                    {!isEdit ?
                        <div className='desc text-white'>
                            John has black hair and is always dressed in a gray suit. He works at City National bank across the street and often comes in after he’s off work!
                        </div>
                        :
                        <div className='w-full'>

                            <DescriptionTextArea textAreaRef={bioref} isEdit={isEdit} content={`John has black hair and is always dressed in a gray suit. He works at City National bank across the street and often comes in after he’s off work!`} />

                        </div>
                    }

                </div>


            </div>
            <div className="properties-container text-white mb-8">
                <div className="strength-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Phone</p>
                    {!isEdit ?
                        <p className="font-medium"> 123456798</p>
                        :
                        <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                            value={phone || ''} onChange={(e) => { setphone(e.target.value) }} />
                    }
                </div>
                <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Email</p>
                    {!isEdit ?
                        <p className="font-medium"> johndoe@gmail.com</p>
                        :
                        <input className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none'
                            value={email || ''} onChange={(e) => { setemail(e.target.value) }} />
                    }
                </div>
                <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Birthday</p>
                    {!isEdit ?
                        <p className="font-medium">
                            March 31st 1983
                        </p> :
                        <input type='date' className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none' />
                    }
                </div>


                {!isEdit ?
                    <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                        <p className="mr-6">Alergies</p>
                        <p className="font-medium">
                            Shellfish, Gluten sensitive
                        </p>
                    </div>
                    :
                    <div className='w-full border-b border-[#222222] mb-4 '>
                        <p className="mr-6 mb-[10px]">
                            Alergies
                        </p>
                        <DescriptionTextArea textAreaRef={allergiesref} isEdit={isEdit} content={` Shellfish, Gluten sensitive`} />

                    </div>
                }
                {/* <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
                    <p className="mr-6">Preferences</p>
                    <p className="font-medium">
                        Lemon in his water, Old Fashioned with 3 cherries
                    </p>
                </div> */}
                {!isEdit ?
                    <div className='w-full border-b border-[#222222] mb-4 '>
                        <p className="mr-6 mb-[10px]">
                            Preferences
                        </p>
                        <DescriptionTextArea textAreaRef={allergiesref} isEdit={false} content={`Lemon in his water, Old Fashioned with 3 cherries`} />

                    </div>
                    :
                    <div className='w-full border-b border-[#222222] mb-4 '>
                        <p className="mr-6 mb-[10px]">
                            Preferences
                        </p>
                        <DescriptionTextArea textAreaRef={allergiesref} isEdit={isEdit} content={`Lemon in his water, Old Fashioned with 3 cherries`} />

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