import NotesModal from "@/components/modal/Modal"
import { addNoteDetails, deleteNoteDetails, emptyNotesList, getNoteDetails, updateNoteDetails } from "@/store/slices/notes"
import { OrangeButtons } from "@/utils/Buttons"
import { useState } from "react"
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
                {/* <p className=" bg-transparent mr-24px">{noteDetails?.user_notes || ""}</p> */}
                <textarea className={`hidescrollbar min-h-[90px] bg-[#2C2C2C] choice-container  w-full  py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none`} value={noteDetails?.user_notes || ""}
                    style={{ resize: 'none' }}
                    disabled />
                {noteDetails?.user_id === user.id && <button
                    onClick={handleEditModalOpen}
                    className="hover:text-primary-base font-bold"
                >Edit</button>}
            </div>
        }
    </div>
}
export default MultipleNotes