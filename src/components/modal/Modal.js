import {
  CustomButton,
} from "@/utils/Buttons";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

const NotesModal = ({
  isModalOpen,
  onClickCancel,
  onSave,
  deleteBtn,
  title,
  desc,
  defaultvalue,
  onDelete
}) => {
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
      width: "480px",
    },
    overlay: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(2.5px)",
    },
  };
  const textAreaRef = useRef()
  const [isSAve, setSaved] = useState(false)


  const handleCancel = () => {
    onClickCancel();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
      style={customStyles}
    >
      <div className="text-white border-none outline-none">
        <h4 className="text-[24px] leading-9 font-semibold mb-4">{title}</h4>
        <DescriptionTextArea
          textAreaRef={textAreaRef}
          infiniteHeight
          isEdit={true} content={defaultvalue || ""} isSAve={isSAve} />
        <div
          className={`button-container flex ${deleteBtn ? "justify-between" : "justify-end"
            }`}
        >
          {deleteBtn && (
            <CustomButton background="#929292" color="white" label="Delete" 
            onClickHandler={()=>onDelete(textAreaRef.current.value)}
            />
          )}
          <div className="flex items-center">

            <CustomButton
              color="#F19B6C"
              label="Cancel"
              className="mr-6"

              onClickHandler={handleCancel}
            />

            <CustomButton background="#F19B6C" color="#fff" label="Save"
              onClick={() => onSave(textAreaRef.current.value)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotesModal;
