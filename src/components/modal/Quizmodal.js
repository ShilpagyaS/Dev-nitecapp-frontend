import { createChapter, createCourse, createModule, createModulePage, createModuleQuestions, deleteModuleQuestion, emptycourses, getCourseDropdown, getCourses, getQuizCategoryDropDown, putChapter, putCourse, putModulePage, putModuleQuestion } from "@/store/slices/learnslice";
import { uploadimage } from "@/store/slices/ui";
import LearnFileUpload from "@/utils/Cards/Learnsection/LearnUploadImage";
import { _INITIAL } from "@/utils/Constants";
import { CustomSelectWithAllBlackTheme } from "@/utils/CustomSelect";
import InputFieldWirhAutoWidth from "@/utils/InputFieldWithAutoWidth";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import { successtoast } from '../tostify'
import { addnewQuiz, updateQuizById } from "@/store/slices/quiz";
import QuizQuestion, { QuizQuestionOnlyOne } from "@/Admin/AdminLearn/QuizQuestion";
import { RxCross1 } from "react-icons/rx";
import { DeleteLearn } from "./LearnModals";
export function AddQuiz({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, }) {
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
            padding: "11px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [quiz, setquiz] = useState(
        {
            name: "",
            image: null,
            category: ""
        }
    )

    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
    const [courses, setcoursesdropdown] = useState([])
    const [iscategorySelected, setIsCategorySelected] = useState(false)
    const [categorySelected, setCategorySelected] = useState(null)

    useEffect(() => {
        dispatch(getQuizCategoryDropDown()).then((res) => { console.log(res); setcoursesdropdown(res) })
    }, [])
    function handleChange(e) {
        const { name, value } = e.target;

        setquiz((prev) => {
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
            setquiz((prev) => {
                return { ...prev, category: e.value }
            })
        }
        else {
            setCategorySelected(null)
            setquiz((prev) => {
                return { ...prev, category: "" }
            })
        }



    }

    const handleSave = () => {

        let dummydata = {
            name: quiz.name,
            image: quiz.image,
            category_name: quiz.category
        }
        console.log(dummydata);

        onClickCancel();
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(addnewQuiz({ ...dummydata, image: imageurl })).then((res) => {

                        onClickCancel()



                    })
                else console.log("cannot upload")
            })
        }
        else {

            dispatch(addnewQuiz({ ...dummydata }))
            onClickCancel()




        }


    };


    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <div className='btncontainers flex items-center justify-between ' >
                <div></div>
                <div className="text-white border-none outline-none flex items-center justify-center">
                    <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
                </div>
                {/* <svg onClick={handleCancel} className="cursor-pointer" width="63" height="51" viewBox="0 0 63 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2798 20.239L6.62601 24.014L5.07475 22.7557L9.72853 18.9806L5.07475 15.2055L6.62601 13.9472L11.2798 17.7222L15.9336 13.9472L17.4848 15.2055L12.831 18.9806L17.4848 22.7557L15.9336 24.014L11.2798 20.239Z" fill="white" fill-opacity="0.78" />
                </svg> */}
                <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={handleCancel} />



            </div>
            <div className='max-h-[350px] h-full mb-[10px] notificationModal p-4'>
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
                        items={[
                            ...courses,
                            { value: null, label: 'Add a New Category' },
                        ]}
                        optionalFunction={(e) => {
                            console.log(e);
                            oncategoruSelected(e)
                            // setBrandForm(prev => { return { ...prev, role: e.value } })
                        }} />
                </div>
                {
                    iscategorySelected && !categorySelected &&
                    <InputFieldWirhAutoWidth
                        placeholder=""
                        label="Category"
                        onChangeHandler={handleChange}
                        value={quiz.category}
                        name={"category"}
                        type={"text"}
                        errorResponnse={_INITIAL}
                    />
                }
                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Quiz Title"
                    onChangeHandler={handleChange}
                    value={quiz.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />
                <LearnFileUpload defaultImage={quiz.image} setimage={setimage} upimage={upimage} isEdit={true} />


            </div>
            <div className='w-full flex justify-center mt-2 mb-3'>
                <ConditionalButton label={'Save &  Add Questions to Quiz'} condition={true} onClickHandler={handleSave} />
            </div>

        </Modal>
    )
}

export function EditQuiz({ isModalOpen, onClickCancel, onSave, deleteBtn, ingredientType, title, desc, data }) {
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
            padding: "11px",
            maxWidth: "480px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const [quiz, setquiz] = useState(
        {
            name: "",
            image: null,
        }
    )

    useEffect(() => {

        if (data.name)
            setquiz(data)
        else setquiz({
            name: "",
            image: null,
        })
    }, [data])

    const [upimage, setimage] = useState(undefined);
    const dispatch = useDispatch()
    function handleChange(e) {
        const { name, value } = e.target;

        setquiz((prev) => {
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
            name: quiz.name,
            image: quiz.image
        }

        onClickCancel();
        if (upimage) {
            dispatch(uploadimage(upimage)).then((imageurl) => {
                if (imageurl && !imageurl?.error)
                    dispatch(updateQuizById(quiz.quiz_id, { ...dummydata, image: imageurl })).then((res) => {
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
            dispatch(updateQuizById(quiz.quiz_id, { ...dummydata })).then((res) => {
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
            <div className='btncontainers flex items-center justify-between ' >
                <div></div>
                <div className="text-white border-none outline-none flex items-center justify-center">
                    <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
                </div>
                {/* <svg onClick={handleCancel} className="cursor-pointer" width="63" height="51" viewBox="0 0 63 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2798 20.239L6.62601 24.014L5.07475 22.7557L9.72853 18.9806L5.07475 15.2055L6.62601 13.9472L11.2798 17.7222L15.9336 13.9472L17.4848 15.2055L12.831 18.9806L17.4848 22.7557L15.9336 24.014L11.2798 20.239Z" fill="white" fill-opacity="0.78" />
                </svg> */}
                <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={handleCancel} />



            </div>
            <div className='max-h-[350px] h-full mb-[10px] notificationModal p-8'>

                <LearnFileUpload setimage={setimage} upimage={upimage}
                    defaultImage={quiz.image}
                    isEdit={true} />

                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Quiz Title"
                    onChangeHandler={handleChange}
                    value={quiz.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />

            </div>
            <div className='w-full flex justify-center  mt-2 mb-3'>
                <ConditionalButton label={'Save Quiz'} condition={true} onClickHandler={handleSave} />
            </div>


        </Modal>
    )
}

export function AddOneQuestion({ isModalOpen, onClickCancel, onSave, otherdata, courseId,
}) {
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
            maxWidth: "680px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const dispatch = useDispatch()
    const [data, setdata] = useState(
        {
            question: "",
            isActive: true,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answer: null,
            isEdit: true,
            points: 1
        }
    );
    function handleSave(data) {
        console.log(otherdata);
        console.log(data);
        let dummydata = {
            ...otherdata,
            option1: data.option1,
            option2: data.option2,
            option3: data.option3,
            option4: data.option4,
            answer: data.answer,
            question: data.question
        }
        console.log(dummydata);
        dispatch(createModuleQuestions(dummydata, courseId)).then((res) => {
            console.log(res);
            console.log('else');
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: 'Added successfully' });

            onClickCancel()

        })
    }

    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}

        >
            <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] font-[600]">Add a Question</h2>
                <svg width="24" className="cursor-pointer"
                    onClick={onClickCancel}
                    height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
            </div>
            <QuizQuestionOnlyOne data={data} setdata={setdata} handleSave={handleSave} />
        </Modal >
    )
}
export function EditOneQuestion({ isModalOpen,
    onClickCancel, onSave, courseId, qna, title, desc,
}) {
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
            maxWidth: "680px",
            width: "90%",
        },
        overlay: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(2.5px)",
        },
    };
    const dispatch = useDispatch()
    const [DeleteModal, setDeleteModal] = useState(false)

    const [data, setdata] = useState(
        {
            question: "",
            isActive: true,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answer: '',
            isEdit: false,
            points: 1
        }
    );
    useEffect(() => {
        setdata({ ...qna, isEdit: false })
    }, [qna])

    function handleSave(data) {
        console.log(data);
        console.log(qna);
        let dummydata = {
            ...data,
            option1: data.option1,
            option2: data.option2,
            option3: data.option3,
            option4: data.option4,
            answer: data.answer,
            question: data.question
        }
        console.log(dummydata);
        dispatch(putModuleQuestion(dummydata, dummydata.module_question_id, courseId)).then((res) => {
            console.log(res);
            console.log('else');
            res?.error ?
                // errortoast({ message: res.message }) 
                ''
                : successtoast({ message: 'Updated successfully' });

            onClickCancel()

        })
    }
    return (
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}

        >
            {DeleteModal &&
                <DeleteLearn
                    isModalOpen={DeleteModal}
                    onClickCancel={() => { setDeleteModal(false) }}
                    title={'Question'}
                    onSave={() => {
                        // console.log(selectedData.name, selectedData);
                        dispatch(deleteModuleQuestion(data.module_question_id, courseId)).then(() => { onClickCancel() })
                        // onClickCancel()
                    }}
                />}
            <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] font-[600]">Edit Question</h2>
                <svg width="24" className="cursor-pointer"
                    onClick={onClickCancel}
                    height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
            </div>
            <QuizQuestionOnlyOne data={data} setdata={setdata} handleSave={handleSave} onDeleteClick={() => { setDeleteModal(true) }} />
        </Modal >
    )
}



export function SupriseQuizQuestion({ isModalOpen,
    onClickCancel, onSave, courseId, qna, title, desc, children
}) {
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
            maxWidth: "680px",
            width: "90%",
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
            <div className="flex justify-between mb-4">
                <h2 className="text-white text-[25px] font-[600]">Answer Question</h2>
                <div className="cursor-pointer">
                    <svg width="24" className="cursor-pointer"
                        onClick={onClickCancel}
                        height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </div>
            </div>
            {children}
        </Modal >
    )
}

