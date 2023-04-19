import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ProfileFileUpdatewithoptionalisEdit } from '@/components/Userprofile/profileupload'
import { emptyAllGuests, getGuestDetail } from '@/store/slices/guests'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea'

function GuestInfo({ guestID }) {
  const { guestDetails } = useSelector(state => state.guests)
  const dispatch = useDispatch()
  const [upimage, setimage] = useState(undefined)
  const allergiesref = useRef()
  const preferencesref = useRef()
  useEffect(() => {

    dispatch(getGuestDetail(guestID))
    return () => {
      dispatch(emptyAllGuests())
    }
  }, [])
  return (
    <div>
      <Breadcrumb />
      <div className='img-and-desc-container mt-[10px] flex items-center mb-[10px]'>
        <div className='imagecontainer mr-[15px]'>
          <div className={`img-container relative max-w-[186px] min-w-[186px]  rounded-full h-[186px] mr-[31px] `}>
            {/* <Image src="/asset/coctail1.png" className="w-full" fill /> */}

            <Image src={guestDetails.image || '/asset/avatar2.png'} className="w-full rounded-full border-2 border-[#484848]" fill />

          </div>        </div>
        <div className='nameDesc flex flex-col items-start'>
          <div className='namecontainer'>
            <h3 className="title text-[24px] font-bold mb-[25px] text-white">
              {`${guestDetails.first_name} ${guestDetails.last_name}`}
            </h3>
          </div>
          <div className='desc text-white'>
            {guestDetails.description}
          </div>
        </div>


      </div>
      <div className="properties-container text-white mb-8">
        <div className="strength-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Phone</p>
          <p className="font-medium"> {guestDetails.phone || "No Contact"}</p>
        </div>
        <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Email</p>
          <p className="font-medium"> {guestDetails.email || 'Email not present'}</p>
        </div>
        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Birthday</p>
          <p className="font-medium">
            {moment(guestDetails.birthday).format("MMM Do YYYY")}
          </p>
        </div>
        {guestDetails.allergies &&
          <div className="tastes-container  text-[16px] mb-4 pb-4 border-b border-[#222222]">
            <p className="mr-6 mb-[10px]">Alergies</p>
            <DescriptionTextArea textAreaRef={allergiesref} isEdit={false} content={guestDetails.allergies} />

          </div>
        }
        {guestDetails.preferences &&
          <div className='w-full border-b border-[#222222] mb-4 '>
            <p className="mr-6 mb-[10px]">
              Preferences
            </p>
            <DescriptionTextArea textAreaRef={preferencesref} isEdit={false} content={guestDetails.preferences} />

          </div>

        }
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
    </div>
  )
}

export default GuestInfo