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

            <div className="flex-auto " style={{ height: '100%' }}>
                {!isEditormode ? <CKEditor

                    initData={data}
                    config={{
                        height: 500,
                        addCss: '.cke_editable { background-color: black; color: white }'

                    }}
                    onChange={(event) => { setdata(event.editor.getData()); }} />
                    : <div className="text-white">
                        <div dangerouslySetInnerHTML={{ __html: data }}></div>
                    </div>
                }
            </div>
            <div className="flex flex-1 gap-3 h-[100px] justify-center text-white">

                <button label="Editor View" condition={true} onClick={() => setEditormode(false)} >Editor View</button>

                <button label="Preview" condition={true} onClick={() => setEditormode(true)} >Preview</button>
            </div>
        </Modal>
    )
}