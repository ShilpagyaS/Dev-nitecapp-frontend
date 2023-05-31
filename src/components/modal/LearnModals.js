import LearnFileUpload from "@/utils/Cards/Learnsection/LearnUploadImage";
import { _INITIAL } from "@/utils/Constants";
import { CustomSelectWithAllBlackTheme } from "@/utils/CustomSelect";
import InputFieldWirhAutoWidth from "@/utils/InputFieldWithAutoWidth";
import { useState } from "react";
import Modal from "react-modal";
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';

export function AddCourse({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            name: "",
            desc: "",
            instructorName: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-[350px] mb-[10px] notificationModal p-8'>
                <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Course Image
                </h5>
                <LearnFileUpload />

                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Course Name"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Instructor Name"
                    onChangeHandler={handleChange}
                    value={courseForm.instructorName}
                    name={"instructorName"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Description
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.desc}
                        name={'desc'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddChapter({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            name: "",
            desc: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-full mb-[10px] '>
                <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Course Image
                </h5>
                <LearnFileUpload />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Chapter Name"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Description
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.desc}
                        name={'desc'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditChapter({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            name: "",
            desc: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
            </div>
            <div className='h-full mb-[10px] '>
            <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Course Image
                </h5>
                <LearnFileUpload />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Chapter Name"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Description
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.desc}
                        name={'desc'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddModule({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            name: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-full mb-[10px] '>
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Module Title"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditModule({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            name: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-full mb-[10px] '>
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Module Title"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddModuleContent({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            type: "",
            textcontent: "",
            image: null
        }
    )
    const [isfocused, setisFocused] = useState(false);
    const [contentType, setContentType] = useState({ value: '', label: '' })
    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-full mb-[10px] '>
                <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Content Type
                    </h5>
                </div>
                <div className='mb-[8px]'>
                    <CustomSelectWithAllBlackTheme
                        items={[
                            { label: 'Image', value: 'Image' },
                            { label: 'Text', value: 'text' },
                        ]}
                        optionalFunction={(e) => {
                            console.log(e);
                            setContentType({ value: e.value, label: e.label })
                        }} />
                </div>
                {
                    contentType.value == 'Image' &&
                    <>
                        <h5
                            className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                ? "text-[#959595]"
                                : "text-white"

                                }`}
                        >
                            Course Image
                        </h5>
                        <LearnFileUpload />
                    </>
                }
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Content
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.textcontent}
                        name={'textcontent'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>

            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditModuleContent({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            type: "",
            textcontent: "",
            image: null
        }
    )
    const [isfocused, setisFocused] = useState(false);
    const [contentType, setContentType] = useState({ value: '', label: '' })
    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-full mb-[10px] '>
                <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Content Type
                    </h5>
                </div>
                <div className='mb-[8px]'>
                    <CustomSelectWithAllBlackTheme
                        items={[
                            { label: 'Image', value: 'Image' },
                            { label: 'Text', value: 'text' },
                        ]}
                        optionalFunction={(e) => {
                            console.log(e);
                            setContentType({ value: e.value, label: e.label })
                        }} />
                </div>
                {
                    contentType.value == 'Image' &&
                    <>
                        <h5
                            className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                ? "text-[#959595]"
                                : "text-white"

                                }`}
                        >
                            Course Image
                        </h5>
                        <LearnFileUpload />
                    </>
                }
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Content
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.textcontent}
                        name={'textcontent'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>

            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddFlashCard({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            image: "",
            question: "",
            answer: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);
    const [isfocused2, setisFocused2] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-[350px] mb-[10px] notificationModal p-8'>
                <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Flashcard Image
                </h5>
                <LearnFileUpload isEdit={true} />
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Question
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.question}
                        name={'question'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused2 == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Answer
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused2 == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.answer}
                        name={'answer'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused2(true);
                        }}
                        onBlur={(e) => {
                            setisFocused2(false);
                        }}
                    />
                </div>
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditFlashCard({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState(
        {
            image: "",
            question: "",
            answer: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);
    const [isfocused2, setisFocused2] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        // onSave(body)
        onClickCancel();


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
            </div>
            {/* <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='not-italic font-normal text-base leading-6 text-gray-600 font-Inter mb-[7px]'>Enter Description</h3>
                <input value={input1} onChange={(e) => { setinput1(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] rounded outline-none focus:outline-none' />
            </div> */}
            <div className='h-[350px] mb-[10px] notificationModal p-8'>
                <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Flashcard Image
                </h5>
                <LearnFileUpload isEdit={true} />
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Question
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.question}
                        name={'question'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused(true);
                        }}
                        onBlur={(e) => {
                            setisFocused(false);
                        }}
                    />
                </div>
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused2 == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Answer
                    </h5>

                    <textarea className={`notificationModal h-[150px] choice-container w-full py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center text-left outline-none 
                     focus:outline-none  ${isfocused2 == true ? 'border border-white' : 'border border-[#3C3C3C]'}
                     appearance-none`}
                        value={courseForm.answer}
                        name={'answer'}
                        onChange={handleChange} style={{ resize: 'none' }}
                        onFocus={(e) => {
                            setisFocused2(true);
                        }}
                        onBlur={(e) => {
                            setisFocused2(false);
                        }}
                    />
                </div>
            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}