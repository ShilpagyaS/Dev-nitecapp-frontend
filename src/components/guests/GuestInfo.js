import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ProfileFileUpdatewithoptionalisEdit } from '@/components/Userprofile/profileupload'
import { emptyAllGuests, getGuestDetail } from '@/store/slices/guests'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import DescriptionTextArea from '@/utils/Cards/Text card/DescriptionTextArea'
import Notes from '../spec-comp/notesComp/notes'
import MultipleNotes from '../spec-comp/notesComp/multiplenotes'
import { OrangeButtons } from '@/utils/Buttons'
import { addGuestNoteDetails, addNoteDetails, deleteGuestNoteDetails, updateGuestNoteDetails } from '@/store/slices/notes'
import NotesModal from '../modal/Modal'

function GuestInfo({ guestID }) {
  const { guestDetails } = useSelector(state => state.guests)
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [upimage, setimage] = useState(undefined)
  const [isNotesAdded, setIsNotesAdded] = useState(false)
  const allergiesref = useRef()
  const preferencesref = useRef()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  useEffect(() => {

    dispatch(getGuestDetail(guestID))
    return () => {
      dispatch(emptyAllGuests())
    }
  }, [])

  useEffect(() => {
    const inx = guestDetails?.notes?.find((i) => i.user_id === user.id)
    if (inx) {
      setIsNotesAdded(true)
    } else {
      setIsNotesAdded(false)
    }

  }, [guestDetails])
  const handleCloseModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <Breadcrumb />
      <div className='img-and-desc-container mt-[10px] flex items-center mb-[10px]'>
        <div className='imagecontainer mr-[15px]'>
          <div className={`img-container relative max-w-[186px] min-w-[186px]  rounded-full h-[186px] mr-[31px] `}>
            {/* <Image src="/asset/coctail1.png" className="w-full" fill /> */}

            <Image src={guestDetails.image || '/asset/avatar2.png'} className="w-full rounded-full border-2 border-[#484848]" fill priority />

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

        <NotesModal
          title="Add Notes"
          desc="Enter Note here: |"
          isModalOpen={isAddModalOpen}
          onSave={(note) => {
            dispatch(addGuestNoteDetails('guest', guestID, note))
            handleCloseModal()

          }}
          onClickCancel={handleCloseModal}
        />

        <div className="sub-heading-container flex justify-between items-center mb-[21px]">
          <h4 className="text-white text-[20px] leading-[32px] font-semibold">
            Notes
          </h4>
          {!isNotesAdded && <OrangeButtons
            onClickHandler={() => { setIsAddModalOpen(true) }}
            label="Add Notes"
            noPadding={true}
          />}
        </div>
        {guestDetails?.notes?.map((i) => {
          return <MultipleNotes noteDetails={i} onUpdate={(note) => {
            dispatch(updateGuestNoteDetails('guest', guestID, note, i.guest_notes_id))
          }}
            onDelete={() => {
              dispatch(deleteGuestNoteDetails('guest', guestID, i.guest_notes_id))

            }}
          />
        })}

      </div>
    </div>
  )
}

export default GuestInfo