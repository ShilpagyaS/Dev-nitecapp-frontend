import {
    CustomButton,
} from "@/utils/Buttons";
import DescriptionTextArea from "@/utils/Cards/Text card/DescriptionTextArea";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import FileUpdate from "./uploadui"
import { uploadimage } from "@/store/slices/ui";
import { useDispatch } from "react-redux";
const MediaLibModal = ({
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

            width: "70%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const textAreaRef = useRef()
    const dispatch = useDispatch()
    const [upimage, setimage] = useState()
    const [isUploading, setuploading] = useState(false)
    const [url, seturl] = useState("")
    const onUpload = () => {
        setuploading(true)
        dispatch(uploadimage(upimage)).then((imageurl) => {
            if (imageurl && !imageurl?.error) {
                seturl(imageurl)
                setuploading(false)
            }
            else {
                seturl(imageurl)
                setuploading(false)
                console.log("cannot upload")
            }
        })

    }

    const handleCancel = () => {
        onClickCancel();
    };
    const [isCopied, setCopied] = useState(false)
    const oncopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(codeRef1.current.innerText)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }
    const codeRef1 = useRef()
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] font-[600]">Upload Media</h2>
                <svg width="24" className="cursor-pointer"
                    onClick={() => { onClickCancel(); seturl("") }}
                    height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
            </div>

            <div className="w-full justify-between items-center">
                <FileUpdate defaultImage={""}
                    setimage={setimage}
                    isEdit={true} id="mediaupload"
                    onUpload={onUpload}
                    isUploading={isUploading}
                    imageurl={url}
                />
                {url !== "" && <div className="flex">
                    <div className="text-white flex items-center " ref={codeRef1} >{url}</div>
                    <div className="cursor-pointer p-2  rounded-lg"
                        onClick={oncopy}
                    ><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg>
                    </div>

                </div>}
                {isCopied && <div className="font-bold text-white">
                    Copied!
                </div>}
            </div>
            <div className="pl-2 italic text-zinc-500 border-l-4 border-gray-300  mt-4">
                Upload Your Media here and Use the Url to add it to editor
            </div>
        </Modal>
    );
};

export default MediaLibModal;
