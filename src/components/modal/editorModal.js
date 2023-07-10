import Modal from "react-modal";
import { CKEditor } from 'ckeditor4-react';
import { ConditionalButtons } from "@/utils/Buttons";
import { useState } from "react";
export function EditorModuleContent({ isModalOpen, onClickCancel, onSave, data, setdata, title, desc, }) {

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
            <div className="text-white mb-2 w-full flex justify-between items-center">
                <div></div>
                <div className="flex  gap-3 h-[50px] justify-center my-2 text-white">

                    <button label="Editor View" className={`py-2 px-4 ${!isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => setEditormode(false)} >Editor View</button>

                    <button label="Preview" className={`py-2 px-4 ${isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => { setEditormode(true); console.log(data); }} >Preview</button>
                </div>
                <div className="cursor-pointer">

                    <svg width="24" className="cursor-pointer"
                        onClick={onClickCancel}
                        height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </div>
            </div>

            <div className="notificationModal ">
                {/* <div className="flex  gap-3 h-[50px] justify-center my-2 text-white">

                    <button label="Editor View" className={`py-2 px-4 ${!isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => setEditormode(false)} >Editor View</button>

                    <button label="Preview" className={`py-2 px-4 ${isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => setEditormode(true)} >Preview</button>
                </div> */}
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
export function EditorModuleContentPreview({ isModalOpen, onClickCancel, onSave, data, setdata, title, desc, }) {

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
            <div className="text-white mb-2 w-full flex justify-between items-center">
                <div></div>

                <div className="cursor-pointer">

                    <svg width="24" className="cursor-pointer"
                        onClick={onClickCancel}
                        height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </div>
            </div>

            <div className="notificationModal ">
                {/* <div className="flex  gap-3 h-[50px] justify-center my-2 text-white">

                    <button label="Editor View" className={`py-2 px-4 ${!isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => setEditormode(false)} >Editor View</button>

                    <button label="Preview" className={`py-2 px-4 ${isEditormode ? `bg-primary-base` : ``} rounded-lg text-white border-2 border-primary-base`} condition={true} onClick={() => setEditormode(true)} >Preview</button>
                </div> */}
                <div className="text-white min-h-[200px] h-full
                    border-2 border-white p-2 
                    editor
                    ">
                    <div className="text-white blogs" dangerouslySetInnerHTML={{ __html: data }}></div>
                </div>

            </div>


        </Modal>
    )
}