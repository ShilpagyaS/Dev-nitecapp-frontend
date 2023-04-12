import {
    CustomButton, OrangeButtons,
} from "@/utils/Buttons";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

const VideoModal = ({
    isModalOpen,
    onClickCancel,
    onSave,
    deleteBtn,
    title,
    desc,
    defaultvalue,
    onDelete,
    children
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
            maxWidth: "70%",
            minWidth: "270px",
            width: "90%",
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
            {children}
            <div className="w-full flex justify-center">
                <OrangeButtons
                    label={"Close"}
                    onClickHandler={handleCancel}
                ></OrangeButtons>
            </div>

        </Modal>
    );
};

export default VideoModal;
