import NotesModal from "@/components/modal/Modal"
import { addNoteDetails, deleteNoteDetails, emptyNotesList, getNoteDetails, updateNoteDetails } from "@/store/slices/notes"
import { OrangeButtons } from "@/utils/Buttons"
import { DescriptionTextAreaGray } from "@/utils/Cards/Text card/DescriptionTextArea"
import Image from "next/image"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const MultipleNotes = ({ subcategory, id, noteDetails, onUpdate, onDelete }) => {
    const dispatch = useDispatch()
    //   useEffect(() => {
    //     dispatch(getNoteDetails(subcategory, id))
    //     return () => {
    //       dispatch(emptyNotesList())
    //     }
    //   }, [])
    // const { noteDetails } = useSelector((state) => state.notes)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const { user } = useSelector((state) => state.auth)
    const textarea = useRef()
    const handleEditModalOpen = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(true);
    };

    const handleAddModalOpen = () => {
        setIsEditModalOpen(false);
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
    };
    return <div className="notes-container ">
        <NotesModal
            title="New Notes"
            desc="Enter Note here: |"
            isModalOpen={isAddModalOpen}
            onSave={(note) => {
                dispatch(addNoteDetails(subcategory, id, note))
                handleCloseModal()
            }}
            onClickCancel={handleCloseModal}
        />
        <NotesModal
            title="Edit Notes"
            defaultvalue={noteDetails?.user_notes || ""}
            //desc={productDetails.user_notes}
            onSave={(note) => {
                handleCloseModal()
                onUpdate(note)
            }}
            deleteBtn={true}
            onDelete={(note) => {
                onDelete()
                handleCloseModal()

            }}
            isModalOpen={isEditModalOpen}
            onClickCancel={handleCloseModal}
        />

        {(noteDetails?.user_notes && noteDetails?.user_notes !== "") &&
            <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
                <div className="bg-transparent flex flex-col w-full">

                    <div className="bg-transparent flex items-center mb-[2px]">
                        <div className="relative h-[34px] w-[34px] rounded-full">
                            <Image src={noteDetails?.image || '/asset/avatar2.png'} className="w-full rounded-full border-2 border-[#484848] object-contain" fill priority />

                        </div>
                        <h5 className="text-[16px] font-Inter text-[#959595] italic font-normal ml-[10px] bg-transparent capitalize">{noteDetails?.user_full_name}</h5>
                    </div>
                    <div className="w-full bg-transparent">

                        <div className="w-full">

                            <DescriptionTextAreaGray textAreaRef={textarea} disabled={true} content={noteDetails?.user_notes || ""} />
                        </div>
                    </div>
                </div>
                {noteDetails?.user_id === user.id &&
                    <button
                        onClick={handleEditModalOpen}
                        className="hover:text-primary-base font-bold"
                    >Edit
                    </button>}
            </div>
        }
    </div>
}
export default MultipleNotes