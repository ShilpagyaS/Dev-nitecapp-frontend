import Modal from "react-modal";
import { CKEditor } from 'ckeditor4-react';
import { ConditionalButtons } from "@/utils/Buttons";
import { useState } from "react";
export function EditorModuleContent({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
    const [data, setdata] = useState("")
    const [isEditormode, setEditormode] = useState(false)
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
            display: "flex",
            flexDirection: "column",
            width: "90vw",
            height: '90vh'
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };


    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white mb-2 w-full flex justify-end">
                <button onClick={() => onClickCancel()}>
                    Close
                </button></div>

            <div>
                <div className="flex  gap-3 h-[50px] justify-center my-2 text-white">

                    <button label="Editor View" className={`py-2 px-4 ${!isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => setEditormode(false)} >Editor View</button>

                    <button label="Preview" className={`py-2 px-4 ${isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => setEditormode(true)} >Preview</button>
                </div>
                {!isEditormode ? <CKEditor

                    initData={data}
                    config={{
                        height: 500,

                    }}
                    onChange={(event) => { setdata(event.editor.getData()); }} />
                    : <div className="text-white min-h-[600px]
                    border-2 border-white p-2 
                    editor
                    ">
                        <div className="text-white blogs" dangerouslySetInnerHTML={{ __html: data }}></div>
                    </div>
                }
            </div>


        </Modal>
    )
}