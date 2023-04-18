import NotesModal from "@/components/modal/Modal"
import { addNoteDetails, deleteNoteDetails, emptyNotesList, getNoteDetails, updateNoteDetails } from "@/store/slices/notes"
import { OrangeButtons } from "@/utils/Buttons"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Notes = ({ subcategory, id }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNoteDetails(subcategory, id))
    return () => {
      dispatch(emptyNotesList())
    }
  }, [])
  const { noteDetails } = useSelector((state) => state.notes)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
        dispatch(updateNoteDetails(subcategory, id, note, noteDetails?.[`${subcategory}_notes_id`]))
        handleCloseModal()
      }}
      deleteBtn={true}
      onDelete={(note) => {
        handleCloseModal()
        dispatch(deleteNoteDetails(subcategory, id, note, noteDetails?.[`${subcategory}_notes_id`]))
      }}
      isModalOpen={isEditModalOpen}
      onClickCancel={handleCloseModal}
    />
    <div className="sub-heading-container flex justify-between items-center mb-[21px]">
      <h4 className="text-white text-[20px] leading-[32px] font-semibold">
        Notes
      </h4>
      {(!noteDetails?.user_notes || noteDetails?.user_notes === "") && <OrangeButtons
        onClickHandler={handleAddModalOpen}
        label="Add Notes"
        noPadding={true}
      />}
    </div>
    {(noteDetails?.user_notes && noteDetails?.user_notes !== "") &&
      <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
        <p className=" bg-transparent mr-24px">{noteDetails?.user_notes || ""}</p>

        <button
          onClick={handleEditModalOpen}
          className="hover:text-primary-base font-bold"
        >Edit</button>
      </div>
    }
  </div>
}
export default Notes
export const DummyNotes = ({ subcategory, id }) => {
  const dispatch = useDispatch()

  const { noteDetails } = useSelector((state) => state.notes)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
        // dispatch(addNoteDetails(subcategory, id, note))
        handleCloseModal()
      }}
      onClickCancel={handleCloseModal}
    />
    <NotesModal
      title="Edit Notes"
      defaultvalue={noteDetails?.user_notes || ""}
      //desc={productDetails.user_notes}
      onSave={(note) => {
        // dispatch(updateNoteDetails(subcategory, id, note, noteDetails?.[`${subcategory}_notes_id`]))
        handleCloseModal()
      }}
      deleteBtn={true}
      onDelete={(note) => {
        handleCloseModal()
        // dispatch(deleteNoteDetails(subcategory, id, note, noteDetails?.[`${subcategory}_notes_id`]))
      }}
      isModalOpen={isEditModalOpen}
      onClickCancel={handleCloseModal}
    />
    <div className="sub-heading-container flex justify-between items-center mb-[21px]">
      <h4 className="text-white text-[20px] leading-[32px] font-semibold">
        Notes
      </h4>
      {(!noteDetails?.user_notes || noteDetails?.user_notes === "") && <OrangeButtons
        onClickHandler={handleAddModalOpen}
        label="Add Notes"
        noPadding={true}
      />}
    </div>
    {(noteDetails?.user_notes && noteDetails?.user_notes !== "") &&
      <div className="note-text-container flex justify-between items-center bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
        <p className=" bg-transparent mr-24px">{noteDetails?.user_notes || ""}</p>

        <button
          onClick={handleEditModalOpen}
          className="hover:text-primary-base font-bold"
        >Edit</button>
      </div>
    }
  </div>
}
