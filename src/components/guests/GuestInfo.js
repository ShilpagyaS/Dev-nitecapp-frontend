import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import React, { useState } from 'react'
import { ProfileFileUpdatewithoptionalisEdit } from '@/components/Userprofile/profileupload'
import { DummyNotes } from '../spec-comp/notesComp/notes'

function GuestInfo({ guestId }) {

  const [upimage, setimage] = useState(undefined)

  return (
    <div>
      <Breadcrumb />
      <div className='img-and-desc-container mt-[10px] flex items-center '>
        <div className='imagecontainer mr-[15px]'>
          <ProfileFileUpdatewithoptionalisEdit isedit={false} setimage={setimage} upimage={upimage} defaultImage={'/asset/Byron.jpeg'} />
        </div>
        <div className='nameDesc flex flex-col items-start'>
          <div className='namecontainer'>
            <h3 className="title text-[24px] font-bold mb-[25px] text-white">
              John Doe
            </h3>
          </div>
          <div className='desc text-white'>
            John has black hair and is always dressed in a gray suit. He works at City National bank across the street and often comes in after he’s off work!
          </div>
        </div>


      </div>
      <div className="properties-container text-white mb-8">
        <div className="strength-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Phone</p>
          <p className="font-medium"> 123456798</p>
        </div>
        <div className="origin-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Email</p>
          <p className="font-medium"> johndoe@gmail.com</p>
        </div>
        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Birthday</p>
          <p className="font-medium">
            March 31st 1983
          </p>
        </div>
        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Alergies</p>
          <p className="font-medium">
            Shellfish, Gluten sensitive
          </p>
        </div>
        <div className="tastes-container flex justify-between items-center text-[16px] mb-4 pb-4 border-b border-[#222222]">
          <p className="mr-6">Preferences</p>
          <p className="font-medium">
            Lemon in his water, Old Fashioned with 3 cherries
          </p>
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
    </div>
  )
}

export default GuestInfo