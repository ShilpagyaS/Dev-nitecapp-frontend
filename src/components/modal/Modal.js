import {
  ConditionalButtons,
  OrangeButtons,
  CustomButton,
} from "@/utils/Buttons";
import React, { useState } from "react";
import Modal from "react-modal";

const NotesModal = ({
  isModalOpen,
  onClickCancel,
  onSave,
  deleteBtn,
  title,
  desc,
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

  const handleCancel = () => {
    onClickCancel();
  };
  const [state, setstate] = useState(desc)
  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
      style={customStyles}
    >
      <div className="text-white border-none outline-none">
        <h4 className="text-[24px] leading-9 font-semibold mb-4">{title}</h4>
        <p className="text-[18px] leading-[27px] mb-10" contentEditable>{desc}</p>
        <div
          className={`button-container flex ${deleteBtn ? "justify-between" : "justify-end"
            }`}
        >
          {deleteBtn && (
            <CustomButton background="#929292" color="white" label="Delete" />
          )}
          <div className="flex">
            <div className="mr-6">
              <CustomButton
                color="#F19B6C"
                label="Cancel"
                onClickHandler={handleCancel}
              />
            </div>
            <CustomButton background="#F19B6C" color="#fff" label="Save" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotesModal;
