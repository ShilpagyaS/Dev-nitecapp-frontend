import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { CustomSelectWithAllBlackTheme } from "@/utils/CustomSelect";
import InputFieldWirhAutoWidth, { InputFieldWirhAutoWidthNomargin } from "@/utils/InputFieldWithAutoWidth";
import { _INITIAL } from "@/utils/Constants";
import ConditionalButton from "../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton";
import { emptyAllOutlet, getOutlets } from "@/store/slices/outlet";
import { getUserRoles } from "@/store/slices/manageusers";
import Image from "next/image";
import { createChecklistByid, createChecklistGroup, createChecklistTask, createHistory, createSubtask, MasterAPIForupdateAndDelete } from "@/store/slices/checklist";
import { successtoast } from "../tostify";
import { DescriptionTextAreaGrayWintBorder } from "@/utils/Cards/Text card/DescriptionTextArea";
import ReviewCard from "@/utils/ReviewCard";
import { useRouter } from "next/router";
import useMediaQuery from "@/Hooks/useMediaQuery";

export function AddChecklistCategory({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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

    const [userRolesSelected, setUserRolesSelected] = useState({})
    const [outletSelected, setOutletSelected] = useState()
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
    const [upimage, setimage] = useState(null);
    const { outlets } = useSelector((state) => state.outlets)
    const [userroles, setUserRoles] = useState([])
    const [outletsList, setoutles] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserRoles()).then((res) => { setUserRoles(res) })
        dispatch(getOutlets())
        return () => dispatch(emptyAllOutlet())
    }, [])
    useEffect(() => {
        let dummy
        dummy = outlets?.map((e) => { return { value: e.outlet_id, label: e.outlet_name, hotel_id: e.hotel_id } }) || []
        console.log(dummy);
        setoutles(dummy)
    }, [outlets])
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
        let dummy = {}
        dummy = {
            ...userRolesSelected,
            outlet_id: outletSelected,
            title: courseForm.name
        }
        console.log(dummy);
        dispatch(createChecklistGroup(dummy)).then((res) => {
            console.log(res);
            console.log('else');


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
            <div className='min-h-[250px] h-full max-h-[330px] mb-[10px] p-4'>
                <div className="flex flex-col gap-[4px] items-start lg:mb-[4px] mb-[4px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Outlet<sup>*</sup>
                    </h5>
                </div>
                <div className='mb-[8px]'>

                    <CustomSelectWithAllBlackTheme
                        items={outletsList}
                        optionalFunction={(e) => {
                            console.log(e);
                            setOutletSelected(e.value)

                        }} />
                </div>
                <div className="flex flex-col gap-[4px] items-start lg:mb-[4px] mb-[4px]">
                    <h5
                        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
                    // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                    >
                        Roles<sup>*</sup>
                    </h5>
                </div>
                <div className='mb-[8px]'>

                    <CustomSelectWithAllBlackTheme
                        items={userroles}
                        optionalFunction={(e) => {
                            console.log(e);
                            setUserRolesSelected({ user_role_id: e.value, user_role_name: e.label })

                        }} />
                </div>
                <InputFieldWirhAutoWidth
                    placeholder="Enter Title"
                    label="Title"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                    required={true}

                />
            </div>
            <div className='btncontainers flex items-center justify-end '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddChecklist({ isModalOpen, onClickCancel, onSave, title, data, }) {
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

        console.log({
            checkList_id: data,
            title: courseForm.name
        });
        dispatch(createChecklistByid({
            checkList_id: data,
            title: courseForm.name
        })).then((res) => {
            console.log(res);
            console.log('else');


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
            <div className='min-h-[100px] h-full max-h-[330px] mb-[10px] p-4'>

                <InputFieldWirhAutoWidth
                    placeholder=" (Ex: Bartender Opening Checklist)"
                    label="Title"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                    required={true}

                />
            </div>
            <div className='btncontainers flex items-center justify-end '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function AddTasks({ isModalOpen, onClickCancel, onSave, type, id, title, data }) {
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
            maxWidth: "580px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState([
        {
            title: "",
            sub_task: []
        }
    ]
    )
    const [isreview, setReview] = useState(false)
    const [isHover, setishover] = useState({
        hover: false,
        index: null
    })
    const dispatch = useDispatch()
    function handleChange(e, index) {
        const { name, value } = e.target;
        const updatedQuestions = [...courseForm];
        updatedQuestions[index][name] = event.target.value;
        console.log(updatedQuestions);
        setCourse(updatedQuestions);
    }
    function handleSubtaskhChange(e, index, i) {
        const { name, value } = e.target;
        const updatedQuestions = [...courseForm];
        updatedQuestions[index].sub_task[i].title = e.target.value;

        console.log(updatedQuestions);
        setCourse(updatedQuestions);
    }
    function AddBullet(e, index) {
        setCourse([...courseForm, { title: '', sub_task: [] }])
    }
    function addSubtaskClicked(index) {
        let dummy = []
        dummy = courseForm.map((element, i) => {
            if (i == index) {
                return {
                    ...element,
                    sub_task: [...element.sub_task, {
                        title: ''
                    }]
                }
            }
            else {
                return { ...element }
            }
        })
        setCourse([...dummy])

    }
    function deletetask(index) {
        let dummy = []
        dummy = courseForm.filter((element, i) => i != index)
        setCourse([...dummy])
    }
    function deleteSubTask(index, i) {
        let dummy = []
        let dummy2 = courseForm[index].sub_task.filter((elemnt, ind) => ind != i)
        dummy = courseForm.map((element, index1) => {
            if (index1 == index) {
                return {
                    ...element,
                    sub_task: [...dummy2]
                }
            }
            else {
                return { ...element }
            }
        })
        setCourse([...dummy])
    }
    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {
        setReview(true)

    };
    return (
        <>
            {isreview &&
                <ReviewTask
                    type={type}
                    id={id}
                    data={
                        {

                            ...data,
                            task_list: [...courseForm]
                        }
                    }

                    isModalOpen={isreview}
                    onClickCancel={() => { setReview(false) }}

                    onSave={() => { onClickCancel() }}
                />
            }
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
                <div className='min-h-[170px] max-h-[350px] h-full pr-[10px] notificationModal'>

                    {courseForm.map((point, index) =>
                        <div className="flex flex-col">
                            <div className="w-full flex items-center">
                                <div className="relative h-full w-full" onDoubleClick={() => { console.log('DoubleClock on ', index); }}
                                    onMouseEnter={() => {
                                        setishover({
                                            hover: true,
                                            index: index
                                        })
                                    }} onMouseLeave={() => {
                                        setishover({
                                            hover: false,
                                            index: null
                                        })
                                    }}
                                >

                                    <InputFieldWirhAutoWidthNomargin
                                        placeholder=""
                                        label=""
                                        onChangeHandler={(e) => { handleChange(e, index) }}
                                        value={courseForm[index].title}
                                        name={"title"}
                                        type={"text"}
                                        errorResponnse={_INITIAL}
                                    />
                                    {
                                        isHover.hover && isHover.index == index && courseForm.length > 1 &&

                                        <div className="text-white flex items-center justify-end absolute top-2 right-0 bg-transparent">
                                            <button className='h-[40px] w-[40px] rounded-full bg-transparent flex items-center justify-center mx-[5px]'
                                                // <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                                                onClick={() => { deletetask(index) }}>
                                                <Image
                                                    src={'/asset/DeleteVector.svg'}
                                                    width={20}
                                                    height={20}
                                                    className="bg-transparent"
                                                // className="bg-[#171717]"
                                                />
                                            </button>
                                        </div>
                                    }

                                </div>
                                <div className="ml-[5px] cursor-pointer" onClick={() => { addSubtaskClicked(index) }}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                        <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                {
                                    point?.sub_task?.map((sub_task, i) =>
                                        <div className="flex items-center">
                                            <div className="relative w-[40px] h-[60px] ">

                                                <div className="w-[50%] h-[50%] border-b border-b-[#3C3C3C] border-l border-l-[#3C3C3C] absolute top-0 right-0 rounded-bl-lg"></div>
                                                {i < point?.sub_task?.length - 1 ? <div className="w-[50%] h-[50%]  border-l border-l-[#3C3C3C] absolute top-[50%] right-0 "></div> : <></>}
                                            </div>
                                            <div className="w-full">

                                                <InputFieldWirhAutoWidthNomargin
                                                    placeholder=""
                                                    label=""
                                                    onChangeHandler={(e) => { handleSubtaskhChange(e, index, i) }}
                                                    value={courseForm[index].sub_task[i].title}
                                                    name={"title"}
                                                    type={"text"}
                                                    errorResponnse={_INITIAL}
                                                />
                                            </div>
                                            {/* <div className="ml-[5px] w-[19px] " >

                                    </div> */}

                                            <button className='h-[20px] w-[20px] rounded-full bg-transparent flex items-center justify-center ml-[10px]'
                                                // <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                                                onClick={() => { deleteSubTask(index, i) }}>
                                                <Image
                                                    src={'/asset/DeleteVector.svg'}
                                                    width={20}
                                                    height={20}
                                                    className="bg-transparent"
                                                // className="bg-[#171717]"
                                                />
                                            </button>

                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )}
                    <div className="w-full flex items-center justify-end mt-[8px]" onClick={() => { AddBullet() }}>
                        <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] cursor-pointer border border-primary-base p-[5px] rounded-lg'>Add New Task</p>
                    </div>


                </div>
                <div className='btncontainers flex items-center justify-between mt-[10px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Review'} condition={true} onClickHandler={handleSave} />
                    </div>

                </div>

            </Modal >
        </>
    )
}
export function ReviewTask({ isModalOpen, onClickCancel, onSave, type, title, data, id }) {
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
            maxWidth: "580px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const dispatch = useDispatch()
    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        dispatch(createChecklistTask({ ...data }, type, id)).then((res) => {
            console.log(res);
            console.log('else');


            onClickCancel()
            onSave()

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
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Review Tasks`}</h4>
            </div>

            <div className='min-h-[170px] max-h-[350px] h-full w-full pr-[15px] notificationModal'>

                {data?.task_list?.map((point, index) =>
                    <div className="flex flex-col ">
                        <div className="border my-[10px] rounded-lg border-[#959595] text-white bg-[#3C3C3C;] p-[5px] pl-[10px] flex items-center w-full">
                            <h3 className="text-white bg-transparent">

                                {point.title}
                            </h3>
                        </div>
                        {
                            point?.sub_task?.map((sub_task, i) =>
                                <div className="w-full my-[10px] flex items-center">
                                    <div className='checkboxcircle shrink-0 h-[18px] ml-[30px] mr-[8px] w-[18px] rounded-full border-[1px] border-primary-hoverbase bg-[#262323]'>

                                    </div>
                                    <div className="border rounded-lg border-[#959595] text-white bg-transparent p-[5px] pl-[10px] flex items-center w-full">
                                        <h3 className="text-white bg-transparent">

                                            {sub_task.title}
                                        </h3>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )}

            </div>
            <div className='btncontainers flex items-center justify-between mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Edit </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal >
    )
}
export function AddComment({ isModalOpen, onClickCancel, onSave, id, data, }) {
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
    const textAreaRef = useRef()


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
        console.log(
            {
                ...data,
                comment: textAreaRef.current.value
            }
        );
        dispatch(createHistory(
            {
                ...data,
                comment: textAreaRef.current.value
            }, id, data.date
        ))
        setTimeout(() => {
            onClickCancel()
        }, 100);

    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-[5px]">{`Comment`}</h4>
            </div>
            <div className='min-h-[100px] h-full max-h-[250px] mb-[10px] p-2 notificationModal '>

                <h3 className='text-primary-base text-[14px] font-[400] italic mb-[20px] '>Comments will be read by management, please review before submitting</h3>
                <div className='w-full pr-[15px]'>

                    <DescriptionTextAreaGrayWintBorder placeholder={'Add Your Comment'} textAreaRef={textAreaRef} isEdit={true} content={data.comment} infiniteHeight={true} />
                </div>
            </div>
            <div className='btncontainers flex items-center justify-end '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Submit'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal>
    )
}
export function ReviewTaskUser({ isModalOpen, onClickCancel, onSave, structuredata, title, notes, completed, flagged, data, isAdmin }) {
    const isMobile = useMediaQuery("(max-width: 414px)");
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
            padding: `${isMobile ? '10px' : '24px'}`,
            // maxWidth: "580px",
            width: `${isMobile ? '90%' : '70%'}`,
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const dispatch = useDispatch()
    const textAreaRef = useRef()
    const router = useRouter()
    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        dispatch(createHistory(
            {
                ...structuredata
            }, structuredata.type_id, structuredata.date)).then((res) => {


                onClickCancel()
                successtoast({ message: 'Successfully Submitted' })
                router.push('/checklists')

            })


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] font-[600]">Review Tasks
                    {
                        isAdmin && <span className="font-[400] italic text-[#959595]">{`  (${title})`}</span>
                    }
                </h2>
                <div className="cursor-pointer">
                    <svg width="24" className="cursor-pointer"
                        onClick={onClickCancel}
                        height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </div>
            </div>

            <div className='min-h-[170px] max-h-[350px] h-full w-full pr-[15px] notificationModal' >
                {!isMobile ?
                    <div className="w-full flex items-center justify-center my-[20px]">
                        <div className=" mx-[25px] flex items-center flex-col px-[20px] py-[10px] rounded-[5px] bg-[#141414] border border-[#212121]">
                            <h3 className="text-[16px] text-white bg-transparent">Total Tasks</h3>
                            <h3 className="text-primary-base text-[16px] bg-transparent">{data.length}</h3>
                        </div>
                        <div className="mx-[25px] flex items-center flex-col px-[20px] py-[10px] rounded-[5px] bg-[#141414] border border-[#212121]">
                            <h3 className="text-[16px] text-white bg-transparent">Completed</h3>
                            <h3 className="text-primary-base text-[16px] bg-transparent">{completed}</h3>
                        </div>
                        <div className="mx-[25px] flex items-center flex-col px-[20px] py-[10px] rounded-[5px] bg-[#141414] border border-[#212121]">
                            <h3 className="text-[16px] text-white bg-transparent">Flagged</h3>
                            <h3 className="text-primary-base text-[16px] bg-transparent">{flagged}</h3>
                        </div>

                    </div>
                    : <div className="w-full flex flex-col items-start justify-center my-[20px]">
                        <div className=" m-[10px] mr-[15px] w-full flex items-center justify-center px-[20px] py-[10px] rounded-[5px] bg-[#141414] border border-[#212121]">
                            <h3 className="text-[16px] text-white bg-transparent">Total Tasks</h3>
                            <h3 className="text-primary-base text-[16px] bg-transparent ml-[10px]">{data.length}</h3>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className=" m-[10px] w-full flex items-center px-[20px] py-[10px] rounded-[5px] bg-[#141414] border border-[#212121]">
                                <h3 className="text-[16px] text-white bg-transparent">Completed</h3>
                                <h3 className="text-primary-base text-[16px] bg-transparent ml-[10px]">{completed}</h3>
                            </div>
                            <div className="ml-[10px] my-[10px] flex w-full items-center px-[20px] py-[10px] rounded-[5px] bg-[#141414] border border-[#212121]">
                                <h3 className="text-[16px] text-white bg-transparent">Flagged</h3>
                                <h3 className="text-primary-base text-[16px] bg-transparent ml-[10px]">{flagged}</h3>
                            </div>
                        </div>
                    </div>
                }
                <ReviewCard tasks={data} />
                <h3 className='text-primary-base text-[18px] font-[600] not-italic mb-[7px] px-[15px] '>Notes</h3>
                <div className='w-full px-[15px]'>

                    <div className="text-white whitespace-pre-wrap	 border border-[#363636] rounded-[7px] bg-[#101010] w-full py-2 px-4 ">
                        {notes}
                    </div>
                </div>

            </div>
            {!isAdmin &&
                <div className='btncontainers flex items-center justify-between mt-[10px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Edit </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Submit'} condition={true} onClickHandler={handleSave} />
                    </div>

                </div>
            }

        </Modal >
    )
}
export function ResetModal({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
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
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Reset Checklist`}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='italic font-normal text-[18px] leading-6 text-white font-Inter mb-[7px]'>
                    {`Are you sure you want to reset the checklist? All checked items and notes will be permanently deleted.This action cannot be undone.`}
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
export function EditChecklist({ isModalOpen, onClickCancel, id, data, title, type, }) {
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
    useEffect(() => {
        setCourse({
            name: data?.title || "",

        })
    }, [data])
    const [isfocused, setisFocused] = useState(false);
    const [DeleteModal, setDeleteModal] = useState(false)
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
            title: courseForm.name,
        }


        console.log('else block');
        dispatch(MasterAPIForupdateAndDelete(dummydata, type, id, 'Updated')).then((res) => {
            console.log(res);
            console.log('else');


            onClickCancel()

        })




        console.log(dummydata);


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
                {/* <h5
                    className={` w - full not - italic font - normal font - Inter text - [14px] flex mb - [5px] items - center leading - tight  ${
        isfocused == false
        ? "text-[#959595]"
        : "text-white"

    } `}
                >
                    Chapter Image
                </h5>
                <LearnFileUpload defaultImage={data.image || null} setimage={setimage} upimage={upimage} isEdit={true} /> */}
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Name"
                    onChangeHandler={handleChange}
                    value={courseForm.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                {/* <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
                    <h5
                        className={` w - full not - italic font - normal font - Inter text - [14px] flex items - center leading - tight  ${
        isfocused == false
        ? "text-[#959595]"
        : "text-white"

    } `}
                    >
                        Description
                    </h5>

                    <textarea className={`notificationModal h - [150px] choice - container w - full py - 2 px - 4 rounded - [5px] flex justify - between text - white mb - [16px] items - center text - left outline - none
    focus: outline - none  ${ isfocused == true ? 'border border-white' : 'border border-[#3C3C3C]' }
    appearance - none`}
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
                </div> */}
            </div>
            <div className='btncontainers flex items-center justify-between mt-[10px] '>
                {/* <button
                    className={`bg - [#3E3E3E] py - [7px] px - [24px] h - [41px] rounded - full


    text - black gap - 1 font - semibold font - Inter tracking - [0.42px] text - [16px]`}
                    onClick={() => { setDeleteModal(true) }}
                >
                    Delete
                </button> */}
                <div className="flex items-center justify-end w-full">

                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Edit'} condition={true} onClickHandler={handleSave} />
                    </div>
                </div>

            </div>

        </Modal>
    )
}
export function ViewComment({ isModalOpen, onClickCancel, onSave, title, data, }) {
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
    const textAreaRef = useRef()


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


    };
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] font-[600]">Comment</h2>
                <div className="cursor-pointer">
                    <svg width="24" className="cursor-pointer"
                        onClick={onClickCancel}
                        height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </div>
            </div>
            <div className='min-h-[100px] h-full max-h-[250px] mb-[10px] p-2 notificationModal '>

                <div className='w-full px-[15px]'>

                    <div className="text-white whitespace-pre-wrap	 border border-[#363636] rounded-[7px] bg-[#101010] w-full py-2 px-4 ">
                        {data}
                    </div>
                </div>
            </div>
            {/* <div className='btncontainers flex items-center justify-end '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div> */}

        </Modal>
    )
}
export function DeleteChecklist({ isModalOpen, onClickCancel, onSave, deleteBtn, title, type, inputone, inputtwo, index }) {
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
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Delete ${title} `}</h4>
            </div>
            <div className='flex flex-col w-full mb-[26px]'>
                <h3 className='italic font-normal text-base leading-6 text-[#959595] font-Inter mb-[7px]'>
                    {`Deleting this will permanantly remove all the data of the selected item.Do You Want To Delete ${title} ?"`}
                </h3 >

            </div >
            <div className='btncontainers flex items-center justify-between mt-[18px] '>


                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>No </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Yes'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal >
    )
}
export function AddSubtask({ isModalOpen, onClickCancel, onSave, id, title, data }) {
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
            maxWidth: "580px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [courseForm, setCourse] = useState([
        {
            title: "",

        }
    ]
    )
    const [isreview, setReview] = useState(false)
    const [isHover, setishover] = useState({
        hover: false,
        index: null
    })
    const dispatch = useDispatch()
    function handleChange(e, index) {
        const { name, value } = e.target;
        const updatedQuestions = [...courseForm];
        updatedQuestions[index][name] = event.target.value;
        console.log(updatedQuestions);
        setCourse(updatedQuestions);
    }

    function AddBullet(e, index) {
        setCourse([...courseForm, { title: '', }])
    }

    function deletetask(index) {
        let dummy = []
        dummy = courseForm.filter((element, i) => i != index)
        setCourse([...dummy])
    }

    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {
        setReview(true)

    };
    return (
        <>
            {isreview &&
                <ReviewSubtaskTask
                    data={
                        {

                            ...data,
                            sub_task: [...courseForm]
                        }
                    }
                    id={id}
                    isModalOpen={isreview}
                    onClickCancel={() => { setReview(false) }}

                    onSave={() => { onClickCancel() }}
                />
            }
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
                <div className='min-h-[170px] max-h-[350px] h-full pr-[10px] notificationModal'>

                    {courseForm.map((point, index) =>
                        <div className="flex flex-col">
                            <div className="w-full flex items-center">
                                <div className="relative h-full w-full" onDoubleClick={() => { console.log('DoubleClock on ', index); }}
                                    onMouseEnter={() => {
                                        setishover({
                                            hover: true,
                                            index: index
                                        })
                                    }} onMouseLeave={() => {
                                        setishover({
                                            hover: false,
                                            index: null
                                        })
                                    }}
                                >

                                    <InputFieldWirhAutoWidth
                                        placeholder=""
                                        label=""
                                        onChangeHandler={(e) => { handleChange(e, index) }}
                                        value={courseForm[index].title}
                                        name={"title"}
                                        type={"text"}
                                        errorResponnse={_INITIAL}
                                    />
                                    {
                                        isHover.hover && isHover.index == index && courseForm.length > 1 &&

                                        <div className="text-white flex items-center justify-end absolute top-2 right-0 bg-transparent">
                                            <button className='h-[40px] w-[40px] rounded-full bg-transparent flex items-center justify-center mx-[5px]'
                                                // <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                                                onClick={() => { deletetask(index) }}>
                                                <Image
                                                    src={'/asset/DeleteVector.svg'}
                                                    width={20}
                                                    height={20}
                                                    className="bg-transparent"
                                                // className="bg-[#171717]"
                                                />
                                            </button>
                                        </div>
                                    }

                                </div>
                                {/* <div className="ml-[5px] cursor-pointer" onClick={() => { addSubtaskClicked(index) }}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                        <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                    </svg>
                                </div> */}
                            </div>

                        </div>
                    )}
                    <div className="w-full flex items-center justify-end mt-[8px]" onClick={() => { AddBullet() }}>
                        <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] cursor-pointer border border-primary-base p-[5px] rounded-lg'>Add New SubTask</p>
                    </div>


                </div>
                <div className='btncontainers flex items-center justify-between mt-[10px] '>
                    <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Cancel </p>
                    <div className='ml-[24px]'>
                        <ConditionalButton label={'Review'} condition={true} onClickHandler={handleSave} />
                    </div>

                </div>

            </Modal >
        </>
    )
}
export function ReviewSubtaskTask({ isModalOpen, onClickCancel, onSave, deleteBtn, title, data, id }) {
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
            maxWidth: "580px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const dispatch = useDispatch()
    const handleCancel = () => {
        onClickCancel();


    };

    const handleSave = () => {

        dispatch(createSubtask({ ...data }, id)).then((res) => {
            console.log(res);
            console.log('else');


            onClickCancel()
            onSave()

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
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Review Tasks`}</h4>
            </div>

            <div className='min-h-[170px] max-h-[350px] h-full w-full pr-[15px] notificationModal'>

                {data?.sub_task?.map((point, index) =>
                    <div className="flex flex-col ">
                        <div className="border my-[10px] rounded-lg border-[#959595] text-white bg-[#3C3C3C;] p-[5px] pl-[10px] flex items-center w-full">
                            <h3 className="text-white bg-transparent">

                                {point.title}
                            </h3>
                        </div>
                    </div>
                )}

            </div>
            <div className='btncontainers flex items-center justify-between mt-[10px] '>
                <p className='not-italic font-medium text-base leading-6 font-Inter text-primary-base cursor-pointer' onClick={handleCancel}>Edit </p>
                <div className='ml-[24px]'>
                    <ConditionalButton label={'Add'} condition={true} onClickHandler={handleSave} />
                </div>

            </div>

        </Modal >
    )
}