import { createChapter, createCourse, Createflashcard, CreateFlashcardcategory, CreateFlashcardSubcategory, createModule, createModulePage, emptycourses, getChaptersdropdown, getCourseDropdown, getCourses, getspecscategorydropdown, getSpecsDropdown, putChapter, putCourse, putFlashcard, putFlashcardCategory, putFlashcardsubcategory, putModulePage } from "@/store/slices/learnslice";
import { uploadimage } from "@/store/slices/ui";
import LearnFileUpload from "@/utils/Cards/Learnsection/LearnUploadImage";
import { _INITIAL } from "@/utils/Constants";
import { CustomSelectWithAllBlackTheme } from "@/utils/CustomSelect";
import InputFieldWirhAutoWidth from "@/utils/InputFieldWithAutoWidth";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import { successtoast } from '../tostify'
import { CKEditor } from 'ckeditor4-react';

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
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
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

        let dummydata = {
            name: courseForm.name,
            description: courseForm.desc,
            instructor_name: courseForm.instructorName
        }
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(createCourse({ ...dummydata, image: imageurl })).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Added successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(createCourse(dummydata)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Added successfully' });

                onClickCancel()

            })



        }


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
                <LearnFileUpload setimage={setimage} upimage={upimage} isEdit={true} />

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
export function EditCourse({ isModalOpen, onClickCancel, onSave, deleteBtn, data, title, desc, }) {
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
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
    useEffect(() => {
        setCourse({
            name: data?.name || "",
            desc: data?.description || "",
            instructorName: data?.instructor_name || ""
        })
    }, [data])

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

        let dummydata = {
            ...data,
            name: courseForm.name,
            description: courseForm.desc,
            instructor_name: courseForm.instructorName
        }
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(putCourse({ ...dummydata, image: imageurl }, dummydata.course_id)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Updated successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(putCourse(dummydata, dummydata.course_id)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Updated successfully' });

                onClickCancel()

            })



        }
        console.log(data);


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
                    Course Image
                </h5>
                <LearnFileUpload defaultImage={data.image || null} setimage={setimage} upimage={upimage} isEdit={true} />

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
                    <ConditionalButton label={'Edit'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddChapter({ isModalOpen, onClickCancel, onSave, deleteBtn, courseId, title, desc, }) {
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
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
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



        let dummydata = {
            course_id: courseId,
            name: courseForm.name,
            description: courseForm.desc,
        }
        console.log(dummydata);
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(createChapter({ ...dummydata, image: imageurl }, courseId)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Added successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(createChapter(dummydata, courseId)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Added successfully' });

                onClickCancel()

            })



        }





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
                    Chapter Image
                </h5>
                <LearnFileUpload setimage={setimage} upimage={upimage} isEdit={true} />
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
export function AddModulePage({ isModalOpen, onClickCancel, onSave, deleteBtn, moduleid, title, desc, }) {
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
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
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



        let dummydata = {
            course_module_id: moduleid,
            title: courseForm.name,
            description: courseForm.desc,
        }
        console.log(dummydata);
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(createModulePage({ ...dummydata, image: imageurl }, moduleid)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Added successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(createModulePage(dummydata, moduleid)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Added successfully' });

                onClickCancel()

            })



        }





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
                    Page Image
                </h5>
                <LearnFileUpload setimage={setimage} upimage={upimage} isEdit={true} />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Page Title"
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
export function EditModulePage({ isModalOpen, onClickCancel, modulepageid, moduleid, data, title, desc, }) {
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
    useEffect(() => {
        setCourse({
            name: data?.title || "",
            desc: data?.description || "",
        })
    }, [data])
    const [isfocused, setisFocused] = useState(false);
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()

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

        let dummydata = {
            title: courseForm.name,
            description: courseForm.desc,
        }
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(putModulePage({ ...dummydata, image: imageurl }, modulepageid, moduleid)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Updated successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(putModulePage(dummydata, modulepageid, moduleid)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Updated successfully' });

                onClickCancel()

            })



        }
        console.log(data);


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
                    Module Page Image
                </h5>
                <LearnFileUpload defaultImage={data.image || null} setimage={setimage} upimage={upimage} isEdit={true} />
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Module Page Title"
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
                    <ConditionalButton label={'Edit'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function EditChapter({ isModalOpen, onClickCancel, courseId, chapterId, data, title, desc, }) {
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
    useEffect(() => {
        setCourse({
            name: data?.name || "",
            desc: data?.description || "",
        })
    }, [data])
    const [isfocused, setisFocused] = useState(false);
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()

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

        let dummydata = {
            ...data,
            name: courseForm.name,
            description: courseForm.desc,
        }
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(putChapter({ ...dummydata, image: imageurl }, chapterId, courseId)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Updated successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(putChapter(dummydata, chapterId, courseId)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Updated successfully' });

                onClickCancel()

            })



        }
        console.log(data);


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
                    Chapter Image
                </h5>
                <LearnFileUpload defaultImage={data.image || null} setimage={setimage} upimage={upimage} isEdit={true} />
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
                    <ConditionalButton label={'Edit'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddModule({ isModalOpen, onClickCancel, onSave, courseId, courseChapter_id, title, desc, }) {
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
    const dispatch = useDispatch()

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

        let dummydata = {
            course_id: courseId,
            name: courseForm.name,
            courseChapter_id: courseChapter_id
        }
        dispatch(createModule(dummydata, courseId)).then((res) => {
            console.log(res);
            console.log('else');
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: 'Added successfully' });

            onClickCancel()

        })


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
            name: "",
            videoUrl: ""
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
        console.log(courseForm);
        // onSave({
        //     type: contentType.value,
        //     name: courseForm.name,
        //     videoUrl: courseForm.videoUrl

        // })
        // onClickCancel();


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
            <div className='min-h-[170px] h-full pr-[10px] notificationModal'>
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
                            { label: 'Content Page', value: 'content' },
                            { label: 'Video', value: 'video' },
                            { label: 'Quiz', value: 'quiz' },
                        ]}
                        optionalFunction={(e) => {
                            console.log(e);
                            setContentType({ value: e.value, label: e.label })
                        }} />
                </div>
                {
                    contentType.value == 'content' &&
                    <>
                        <InputFieldWirhAutoWidth
                            placeholder=""
                            label="Title"
                            onChangeHandler={handleChange}
                            value={courseForm.name}
                            name={"name"}
                            type={"text"}
                            errorResponnse={_INITIAL}
                        />
                        <div className="w-full flex items-center justify-end">
                            <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] cursor-pointer'>Open Editor</p>
                        </div>
                    </>
                }
                {
                    contentType.value == 'video' &&
                    <>
                        <InputFieldWirhAutoWidth
                            placeholder=""
                            label="Title"
                            onChangeHandler={handleChange}
                            value={courseForm.name}
                            name={"name"}
                            type={"text"}
                            errorResponnse={_INITIAL}
                        />
                        <InputFieldWirhAutoWidth
                            placeholder="Paste your Url"
                            label="Video Url"
                            onChangeHandler={handleChange}
                            value={courseForm.videoUrl}
                            name={"videoUrl"}
                            type={"text"}
                            errorResponnse={_INITIAL}
                        />
                    </>
                }
                {
                    contentType.value == 'quiz' &&
                    <>
                        <InputFieldWirhAutoWidth
                            placeholder=""
                            label="Title"
                            onChangeHandler={handleChange}
                            value={courseForm.name}
                            name={"name"}
                            type={"text"}
                            errorResponnse={_INITIAL}
                        />
                        <div className="w-full flex items-center justify-end">
                            <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] cursor-pointer'>Add Quiz</p>
                        </div>
                    </>
                }

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
export function EditModuleContent({ isModalOpen, onClickCancel, onSave, deleteBtn, data, title, desc, }) {
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
    useEffect(() => {
        setCourse({

            type: data.type,
            textcontent: data.text || '',
            image: data.image || ''

        })
    }, [data])

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
        console.log(data);
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
                            { label: 'Image', value: 'image' },
                            { label: 'Text', value: 'text' },
                        ]}
                        defaultSelect={data.type == 'text' ? { label: 'Text', value: 'text' } : { label: 'Image', value: 'image' }}
                        optionalFunction={(e) => {
                            console.log(e);
                            setContentType({ value: e.value, label: e.label })
                        }} />
                </div>
                {
                    contentType.value == 'image' &&
                    <>
                        <h5
                            className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                ? "text-[#959595]"
                                : "text-white"

                                }`}
                        >
                            Content Image
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
export function AddFlashCard({ isModalOpen, onClickCancel, onSave, subcategoryId, categoryId, ingredientType, title, desc, }) {
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
    const dispatch = useDispatch()
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
        let dummydata = {
            flashcard_category_id: categoryId,
            flashcard_subcategory_id: subcategoryId,
            name: courseForm.question,
            front_text: courseForm.question,
            flip_text: courseForm.answer

        }
        console.log(dummydata);
        // onSave(body)
        dispatch(Createflashcard(dummydata, subcategoryId)).then((res) => {
            console.log(res);
            console.log('else');
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: 'Added successfully' });

            onClickCancel()

        })


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
                        Front Text
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
                        Flip text
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
export function EditFlashCard({ isModalOpen, onClickCancel, onSave, data, flashcardid, title, desc, }) {
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
    const [upimage, setimage] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        setCourse({
            image: data?.image,
            question: data?.front_text,
            answer: data?.flip_text,
        })
    }, [])

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
        let dummydata = {
            ...data,
            flip_text: courseForm.answer,
            front_text: courseForm.question,
        }

        console.log(dummydata);
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(putFlashcard({ ...dummydata, image: imageurl }, flashcardid)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Updated successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(putFlashcard(dummydata, flashcardid)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Updated successfully' });

                onClickCancel()

            })



        }

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
                <LearnFileUpload defaultImage={data.image || null} setimage={setimage} upimage={upimage} isEdit={true} />
                <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false
                            ? "text-[#959595]"
                            : "text-white"

                            }`}
                    >
                        Front Text
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
                        Flip text
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
                    <ConditionalButton label={'Save'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
// ------------------------------ FlashcardModals --------------------------------------------
export function AddFlashcardCategory({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            type: "",
        }
    )

    const [result, setResult] = useState({})
    const [typeOfForm, setType] = useState(null)
    const [isNone, setINone] = useState(false)
    const [categorySelected, setCategorySelected] = useState(null)
    const [iscategorySelected, setIsCategorySelected] = useState(false)
    const [categoryType, seytcatType] = useState('')
    const [data, setdata] = useState({
        courses: [], specs: [
            {
                value: 'beer',
                name: 'Beer'
            },
            {
                value: 'wine',
                name: 'Wine'
            },
            {
                value: 'spirit',
                name: 'Spirit'
            },
            {
                value: 'low_no_abv',
                name: 'Low / No Abv'
            },
            {
                value: null,
                name: 'None'
            }
        ],
        others: null
    })

    // const data = {
    //     courses: [
    //         {
    //             value: 'The Delphi Orientataion',
    //             name: 'The Delphi Orientataion'
    //         },
    //         {
    //             value: 'Bar 101 ',
    //             name: 'Bar 101'
    //         },
    //         {
    //             value: null,
    //             name: 'None'
    //         }
    //     ],
    //     specs: [
    //         {
    //             value: 'Beer',
    //             name: 'Beer'
    //         },
    //         {
    //             value: 'Wine',
    //             name: 'Wine'
    //         },
    //         {
    //             value: null,
    //             name: 'None'
    //         }
    //     ],
    //     others: null
    // }
    const [categoryDroptown, setDropdown] = useState([])
    const [isfocused, setisFocused] = useState(false);
    const [reset, setReset] = useState(false);
    const [upimage, setimage] = useState(null);
    const [courses, setcoursesdropdown] = useState([])
    const [specs, setspecsdropdown] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourseDropdown()).then((res) => { console.log(res); setcoursesdropdown(res) })
        // dispatch(getSpecsDropdown()).then((res) => { console.log(res); setspecsdropdown(res) })

    }, [])
    useEffect(() => {
        console.log(courses);
        setdata((prev) => {
            return {
                ...prev,
                courses: [...courses, {
                    value: null,
                    name: 'None'
                }],
            }

        })
    }, [courses])
    // useEffect(() => {
    //     console.log(courses);
    //     setdata((prev) => {
    //         return {
    //             ...prev,
    //             specs: [...specs, {
    //                 value: null,
    //                 name: 'None'
    //             }],
    //         }

    //     })
    // }, [specs])

    function handleChange(e) {
        const { name, value } = e.target;

        setCourse((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    function onTypeSelect(e) {
        setReset(true)
        seytcatType(e.value)
        setIsCategorySelected(false)
        if (e.value == 'others') {
            setDropdown(null)
            setType(2)
            setIsCategorySelected(false)
            setCategorySelected(null)

        }
        else {
            console.log(data[e.value]);
            setDropdown(() => {
                return data[e.value].map((element) => {
                    return {
                        value: element.value,
                        label: element.name,
                        data: element
                    }
                })
            }
            )
            setCourse({
                name: "",
                type: "",
            })
            setType(1)
        }
        setTimeout(() => {

            setReset(false)
        }, 100);
    }
    function oncategoruSelected(e) {
        console.log('running category select', e);
        setIsCategorySelected(true)
        if (e.value) {
            setCategorySelected(e)
            setCourse({
                name: "",
                type: "",
            })

        }
        else {
            setCategorySelected(null)
        }



    }
    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        let dummydata = {
            type: categoryType
        }
        console.log(dummydata, categorySelected);
        if (categorySelected) {
            dummydata = { ...dummydata, name: categorySelected.data.name, image: categorySelected.data.image, subcategory_id: categorySelected.data.value }
            dispatch(CreateFlashcardcategory(dummydata)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Added successfully' });

                onClickCancel()

            })
        }
        console.log(dummydata);
        if (!categorySelected) {
            console.log('notseleced');
            dummydata = { ...dummydata, name: courseForm.name, image: "", subcategory_id: '' }

            if (upimage) {
                dispatch(uploadimage(upimage)).then((imageurl) => {
                    if (imageurl && !imageurl?.error)
                        dispatch(CreateFlashcardcategory({ ...dummydata, image: imageurl })).then((res) => {
                            console.log(res);
                            console.log('else');
                            res?.error ?
                                // errortoast({ message: res.message }) 
                                ''
                                : successtoast({ message: 'Added successfully' });

                            onClickCancel()

                        })
                    else console.log("cannot upload")
                })
            }
            else {

                console.log('else block');
                dispatch(CreateFlashcardcategory(dummydata)).then((res) => {
                    console.log(res);
                    console.log('else');
                    res?.error ?
                        // errortoast({ message: res.message }) 
                        ''
                        : successtoast({ message: 'Added successfully' });

                    onClickCancel()

                })



            }
        }


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
            <div className='min-h-[200px] h-full max-h-[330px] notificationModal mb-[10px] p-4'>
                <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Type<sup>*</sup>
                    </h5>
                </div>
                <div className='mb-[8px]'>

                    <CustomSelectWithAllBlackTheme
                        items={[
                            { value: 'courses', label: 'Courses' },
                            { value: 'specs', label: 'Specs' },
                            { value: 'others', label: 'Others' },
                        ]}
                        optionalFunction={(e) => {
                            console.log(e);
                            onTypeSelect(e)
                            // setBrandForm(prev => { return { ...prev, role: e.value } })
                        }} />
                </div>
                {
                    typeOfForm == 1 &&
                    <>

                        <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                            <h5
                                className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                            // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                            >
                                Select Category<sup>*</sup>
                            </h5>
                        </div>
                        <div className='mb-[8px]'>

                            <CustomSelectWithAllBlackTheme
                                // items={[
                                //     { value: 'courses', label: 'Courses' },
                                //     { value: 'specs', label: 'Specs' },
                                //     { value: 'others', label: 'Others' },
                                // ]}
                                items={categoryDroptown}
                                resetValue={reset}
                                optionalFunction={(e) => {
                                    oncategoruSelected(e)
                                    console.log(e);
                                    // setBrandForm(prev => { return { ...prev, role: e.value } })
                                }} />
                        </div>
                        {
                            iscategorySelected && !categorySelected && <>

                                <InputFieldWirhAutoWidth
                                    placeholder=""
                                    label="Category Name"
                                    onChangeHandler={handleChange}
                                    value={courseForm.name}
                                    name={"name"}
                                    type={"text"}
                                    errorResponnse={_INITIAL}
                                />
                                <h5
                                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                        ? "text-[#959595]"
                                        : "text-white"

                                        }`}
                                >
                                    Category Image
                                </h5>
                                <LearnFileUpload setimage={setimage} upimage={upimage} isEdit={true} />
                            </>
                        }
                        {
                            iscategorySelected && categorySelected && <>
                                <h5
                                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                        ? "text-[#959595]"
                                        : "text-white"

                                        }`}
                                >
                                    Category Image
                                </h5>
                                {categorySelected.data.image ?

                                    <LearnFileUpload defaultImage={categorySelected.data.image} isEdit={false} />

                                    :
                                    <div className=" w-full relative min-h-[100px] h-full border border-[#787878]  rounded-[8px]" >

                                        <Image
                                            className=" w-full rounded-[8px]"
                                            src={'/asset/nodrinkinverted.webp'}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            priority

                                        />

                                    </div>
                                }
                            </>
                        }
                    </>
                }
                {
                    typeOfForm == 2 &&
                    <>
                        <InputFieldWirhAutoWidth
                            placeholder=""
                            label="Category Name"
                            onChangeHandler={handleChange}
                            value={courseForm.name}
                            name={"name"}
                            type={"text"}
                            errorResponnse={_INITIAL}
                        />
                        <h5
                            className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                ? "text-[#959595]"
                                : "text-white"

                                }`}
                        >
                            Category Image
                        </h5>
                        <LearnFileUpload setimage={setimage} upimage={upimage} isEdit={true} />
                    </>
                }

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
export function EditFlashcardCategory({ isModalOpen, onClickCancel, onSave, data, ingredientType, title, desc, }) {
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
            type: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
    useEffect(() => {
        setCourse({
            name: data.name
        })
    }, [])
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
        console.log(data);
        let dummydata = {
            ...data,
            name: courseForm.name,

        }
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(putFlashcardCategory({ ...dummydata, image: imageurl }, data.flashcard_category_id)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Updated successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(putFlashcardCategory(dummydata, data.flashcard_category_id)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Updated successfully' });

                onClickCancel()

            })



        }

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
            <div className='h-[250px] mb-[10px] p-4'>
                {/* <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Category Type<sup>*</sup>
                    </h5>
                </div> */}
                {/* <div className='mb-[8px]'>

                    <CustomSelectWithAllBlackTheme
                        items={[
                            { value: 'courses', label: 'Courses' },
                            { value: 'specs', label: 'Specs' },
                            { value: 'others', label: 'Others' },
                        ]}
                        optionalFunction={(e) => {
                            console.log(e);
                            // setBrandForm(prev => { return { ...prev, role: e.value } })
                        }} />
                </div> */}
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Categoey Name"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Category Image
                </h5>
                <LearnFileUpload defaultImage={data?.image} setimage={setimage} upimage={upimage} isEdit={true} />


            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddFlashcardSubCategory({ isModalOpen, type, onClickCancel, onSave, categoryid, specname, title, desc, }) {
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
    const [upimage, setimage] = useState(undefined);
    const [categorySelected, setCategorySelected] = useState(null)
    const [iscategorySelected, setIsCategorySelected] = useState(false)
    const dispatch = useDispatch()
    const [courses, setcoursesdropdown] = useState([])
    useEffect(() => {
        if (type == 'courses')
            dispatch(getChaptersdropdown(categoryid)).then((res) => { console.log(res); setcoursesdropdown(res) })
        if (type == 'specs')
            dispatch(getspecscategorydropdown('spirit')).then((res) => { console.log(res); setcoursesdropdown(res) })

    }, [])
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
    function oncategoruSelected(e) {
        console.log('running category select', e);
        console.log(e);
        setIsCategorySelected(true)
        if (e.value) {
            setCategorySelected(e)
        }
        else {
            setCategorySelected(null)
            setCourse({
                name: "",
            })
        }



    }

    const handleSave = () => {

        let dummydata = {
            category_id: categoryid
        }
        if (categorySelected) {
            dummydata = { ...dummydata, name: categorySelected.label, image: categorySelected.image }
            dispatch(CreateFlashcardSubcategory(dummydata, categoryid)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Added successfully' });

                onClickCancel()

            })
        }
        else if (courseForm.name != '') {
            dummydata = { ...dummydata, name: courseForm.name }

            console.log(dummydata);
            if (upimage) {
                dispatch(uploadimage(upimage)).then((imageurl) => {
                    if (imageurl && !imageurl?.error)
                        dispatch(CreateFlashcardSubcategory({ ...dummydata, image: imageurl }, categoryid)).then((res) => {
                            console.log(res);
                            console.log('else');
                            res?.error ?
                                // errortoast({ message: res.message }) 
                                ''
                                : successtoast({ message: 'Added successfully' });

                            onClickCancel()

                        })
                    else console.log("cannot upload")
                })
            }
            else {

                console.log('else block');
                dispatch(CreateFlashcardSubcategory(dummydata, categoryid)).then((res) => {
                    console.log(res);
                    console.log('else');
                    res?.error ?
                        // errortoast({ message: res.message }) 
                        ''
                        : successtoast({ message: 'Added successfully' });

                    onClickCancel()

                })


            }
        }

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
            <div className='max-h-[330px] h-full mb-[10px] p-4'>
                <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Select Flashcard Deck<sup>*</sup>
                    </h5>
                </div>
                <div className='mb-[8px]'>

                    <CustomSelectWithAllBlackTheme
                        items={[
                            ...courses,
                            { value: null, label: 'New' },
                        ]}
                        optionalFunction={(e) => {
                            console.log(e);
                            oncategoruSelected(e)
                            // setBrandForm(prev => { return { ...prev, role: e.value } })
                        }} />
                </div>
                {
                    iscategorySelected && !categorySelected && <>
                        <InputFieldWirhAutoWidth
                            placeholder=""
                            label="Flashcard Deck Name"
                            onChangeHandler={handleChange}
                            value={courseForm.name}
                            name={"name"}
                            type={"text"}
                            errorResponnse={_INITIAL}
                        />
                        <h5
                            className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                ? "text-[#959595]"
                                : "text-white"

                                }`}
                        >
                            Flashcard Deck Image
                        </h5>
                        <LearnFileUpload setimage={setimage} upimage={upimage} isEdit={true} />
                    </>
                }
                {
                    iscategorySelected && categorySelected && <>
                        <h5
                            className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                                ? "text-[#959595]"
                                : "text-white"

                                }`}
                        >
                            Flashcard Deck Image
                        </h5>
                        <LearnFileUpload defaultImage={categorySelected.image || '/asset/nodrinkinverted.webp'} isEdit={false} />
                    </>
                }

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
export function EditFlashcardSubCategory({ isModalOpen, onClickCancel, onSave, categoryid, ingredientType, title, data, }) {
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
            type: "",
        }
    )
    const [isfocused, setisFocused] = useState(false);
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
    useEffect(() => {
        setCourse({
            name: data.name
        })
    }, [])

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
        console.log(data);
        let dummydata = {
            ...data,
            name: courseForm.name,

        }
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(putFlashcardsubcategory({ ...dummydata, image: imageurl }, data.flashcard_subcategory_id, categoryid)).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Updated successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(putFlashcardsubcategory(dummydata, data.flashcard_subcategory_id, categoryid)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Updated successfully' });

                onClickCancel()

            })



        }


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
            <div className='max-h-[330px] h-full mb-[10px] p-4'>

                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Flashcard Deck Name"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Flashcard Deck Image
                </h5>
                <LearnFileUpload defaultImage={data?.image} setimage={setimage} upimage={upimage} isEdit={true} />


            </div>
            <div className='btncontainers flex items-center justify-end mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Save'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function DeleteLearn({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
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
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const handleCancel = () => {
        onClickCancel();
        setinput1("");
        setinput2("");

    };

    const handleSave = () => {
        onSave()
        onClickCancel();
        setinput1("");
        setinput2("");

    };
    // console.log(inputone, '-->', input1);
    useEffect(() => {
        setinput1(inputone)
        setinput2(inputtwo)
    }, [])

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Delete ${title}`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                    {`Deleting this will permanantly remove all the data of the selected item .Do You Want To Delete ${title} ?"`}
                </h3>

            </div>
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>No </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Yes'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddContent({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
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

        let dummydata = {
            name: courseForm.name,
            description: courseForm.desc,
            instructor_name: courseForm.instructorName
        }
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(createCourse({ ...dummydata, image: imageurl })).then((res) => {
                        console.log(res);
                        res?.error ?
                            // errortoast({ message: res.message }) 
                            ''
                            :
                            successtoast({ message: 'Added successfully' });
                        onClickCancel()
                        console.log('if');


                    })
                else console.log("cannot upload")
            })
        }
        else {

            console.log('else block');
            dispatch(createCourse(dummydata)).then((res) => {
                console.log(res);
                console.log('else');
                res?.error ?
                    // errortoast({ message: res.message }) 
                    ''
                    : successtoast({ message: 'Added successfully' });

                onClickCancel()

            })



        }


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
                <LearnFileUpload setimage={setimage} upimage={upimage} isEdit={true} />

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

export function AddContentEditor({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            // maxWidth: "480px",
            width: "90%",
            height: "90%"
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
    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()




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
            <div className='h-[450px] mb-[10px] notificationModal p-8'>
                <h5
                    className={` w-full not-italic font-normal font-Inter text-[14px] flex mb-[5px] items-center leading-tight  ${isfocused == false
                        ? "text-[#959595]"
                        : "text-white"

                        }`}
                >
                    Course Image
                </h5>

                <CKEditor onChange={(e) => { console.log(e.editor.getData()) }} />

            </div>


        </Modal>
    )
}
export function AddDetails({ isModalOpen, onClickCancel, onSave, deleteBtn, title, }) {
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
    const [courseForm, setCourse] = useState([
        {
            id: '',
            name: "",
        }
    ]
    )
    const [isfocused, setisFocused] = useState(false);
    const [contentType, setContentType] = useState({ value: '', label: '' })
    function handleChange(e, index) {
        const { name, value } = e.target;
        const updatedQuestions = [...courseForm];
        updatedQuestions[index][name] = event.target.value;
        console.log(updatedQuestions);
        setCourse(updatedQuestions);
    }
    function AddBullet(e, index) {
        setCourse([...courseForm, { id: '', name: '' }])
    }
    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {
        console.log(courseForm);
        // onSave({
        //     type: contentType.value,
        //     name: courseForm.name,
        //     videoUrl: courseForm.videoUrl

        // })
        // onClickCancel();


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
            <div className='min-h-[170px] h-full pr-[10px] notificationModal'>

                {courseForm.map((point, index) =>
                    <InputFieldWirhAutoWidth
                        placeholder=""
                        label="Course Name"
                        onChangeHandler={(e) => { handleChange(e, index) }}
                        value={courseForm[index].name}
                        name={"name"}
                        type={"text"}
                        errorResponnse={_INITIAL}
                    />
                )}


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
