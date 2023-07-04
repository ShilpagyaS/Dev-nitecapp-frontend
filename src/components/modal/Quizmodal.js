import { createChapter, createCourse, createModule, createModulePage, emptycourses, getCourseDropdown, getCourses, putChapter, putCourse, putModulePage } from "@/store/slices/learnslice";
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
            padding: "24px",
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
                    dispatch(addnewQuiz({ ...dummydata, image: imageurl })).then((res) => {

                        onClickCancel()



                    })
                else console.log("cannot upload")
            })
        }
        else {
            debugger
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
            <div className='btncontainers flex items-center justify-end ' >

                <svg onClick={handleCancel} className="cursor-pointer" width="63" height="51" viewBox="0 0 63 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2798 20.239L6.62601 24.014L5.07475 22.7557L9.72853 18.9806L5.07475 15.2055L6.62601 13.9472L11.2798 17.7222L15.9336 13.9472L17.4848 15.2055L12.831 18.9806L17.4848 22.7557L15.9336 24.014L11.2798 20.239Z" fill="white" fill-opacity="0.78" />
                </svg>


            </div>
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Add ${title}`}</h4>
            </div>
            <div className='h-[350px] mb-[10px] notificationModal p-8'>

                <LearnFileUpload defaultImage={quiz.image} setimage={setimage} upimage={upimage} isEdit={true} />

                <InputFieldWirhAutoWidth
                    placeholder=""
                    label="Quiz Title"
                    onChangeHandler={handleChange}
                    value={quiz.name}
                    name={"name"}
                    type={"text"}
                    errorResponnse={_INITIAL}
                />

                <div className='w-full flex justify-center mt-8'>
                    <ConditionalButton label={'Save &  Add Questions to Quiz'} condition={true} onClickHandler={handleSave} />
                </div>
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
            padding: "24px",
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
        debugger
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
            <div className='btncontainers flex items-center justify-end ' >

                <svg onClick={handleCancel} className="cursor-pointer" width="63" height="51" viewBox="0 0 63 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2798 20.239L6.62601 24.014L5.07475 22.7557L9.72853 18.9806L5.07475 15.2055L6.62601 13.9472L11.2798 17.7222L15.9336 13.9472L17.4848 15.2055L12.831 18.9806L17.4848 22.7557L15.9336 24.014L11.2798 20.239Z" fill="white" fill-opacity="0.78" />
                </svg>


            </div>
            <div className="text-white border-none outline-none flex items-center justify-center">
                <h4 className="text-[24px] leading-9 font-semibold mb-4">{`Edit ${title}`}</h4>
            </div>
            <div className='h-[350px] mb-[10px] notificationModal p-8'>

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

                <div className='w-full flex justify-center mt-8'>
                    <ConditionalButton label={'Save Quiz'} condition={true} onClickHandler={handleSave} />
                </div>
            </div>


        </Modal>
    )
}
