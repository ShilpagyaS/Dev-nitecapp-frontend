import useNavDetails from "@/Hooks/useNavDetails"
import ConditionalButton from "@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton"
import { errortoast } from "@/components/tostify"
import { updateQuizQuestionById } from "@/store/slices/quiz"
import SwitchComp from "@/utils/SwitchComp"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"


const QuizQuestion = ({ index, onDeleteClick, data, setdata }) => {
    const [Correct, setcorrect] = useState(null)
    const [localdata, setlocaldata] = useState({})
    const [localdataprev, setlocaldataprev] = useState({})
    const { productId } = useNavDetails()
    const dispatch = useDispatch()
    useEffect(() => {
        setlocaldata(data)
        setlocaldataprev(data)
    }, [data])

    const onInputChange = (field, value) => {

        const local = { ...localdata }
        local[field] = value
        setlocaldata(local)

    }



    return (
        <div className="w-full border-2 border-gray-200 p-4 ">
            <div className="flex justify-between">

                <div className="text-white text-xl font-semibold">Question {index + 1}</div>
                <div className="flex ">

                    {!localdata.isEdit && <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                        onClick={() => { onInputChange("isEdit", true) }}>
                        <Image
                            src={'/asset/EditVector.svg'}
                            width={20}
                            height={20}
                            className="bg-[#171717]"
                        />
                    </button>}
                    <button className='h-[40px] w-[40px] mx-2 rounded-full bg-[#171717] flex items-center justify-center' onClick={() => { onDeleteClick(localdata) }}>
                        <Image
                            src={'/asset/DeleteVector.svg'}
                            width={20}
                            height={20}
                            className="bg-[#171717]"
                        />
                    </button>
                    <SwitchComp showHideStatus={localdata?.isActive} onChangeHandler={(e) => {
                        const local = { ...localdata }

                        local.isActive = e
                        dispatch(updateQuizQuestionById(localdata.quiz_question_id, productId, { isActive: e }))
                        onInputChange("isActive", e)
                    }} />
                </div>
            </div>

            <div className="mt-4 text-white">
                <QuestionInput value={localdata?.question} isEdit={localdata.isEdit}
                    onChangeHandler={(e) => onInputChange(`question`, e.target.value)}
                />
            </div>


            <div className="w-full my-4 text-white">
                <h4 className="text-[1rem] font-semibold">Options</h4>
            </div>

            {["A", "B", "C", "D"].map((v, inx) => <div className="text-white mt-4">
                <div className="flex items-center justify-center gap-4">
                    {localdata?.isEdit && <div>
                        {v}
                    </div>}
                    <div className="flex w-full">
                        <QuestionInput type="option" value={localdata?.[`option${inx + 1}`]} isEdit={localdata.isEdit}
                            onChangeHandler={(e) => onInputChange(`option${inx + 1}`, e.target.value)}
                        />
                    </div>
                    {localdata.isEdit && <div className="flex gap-2 justify-center items-center">
                        <div className={`h-[27px] w-[27px] border-2 border-white ${localdata?.answer === localdata?.[`option${inx + 1}`] ? 'bg-white' : 'bg-black'}`}
                            onClick={() => { localdata.isEdit && onInputChange('answer', localdata?.[`option${inx + 1}`]) }}
                        >
                            {localdata?.answer === localdata?.[`option${inx + 1}`] ?
                                <svg width="23" height="23" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3762_52428)">
                                        <path d="M4.5 3.375H22.5C22.7984 3.375 23.0845 3.49353 23.2955 3.7045C23.5065 3.91548 23.625 4.20163 23.625 4.5V22.5C23.625 22.7984 23.5065 23.0845 23.2955 23.2955C23.0845 23.5065 22.7984 23.625 22.5 23.625H4.5C4.20163 23.625 3.91548 23.5065 3.7045 23.2955C3.49353 23.0845 3.375 22.7984 3.375 22.5V4.5C3.375 4.20163 3.49353 3.91548 3.7045 3.7045C3.91548 3.49353 4.20163 3.375 4.5 3.375ZM12.3784 18L20.3321 10.0451L18.7414 8.45437L12.3784 14.8185L9.19575 11.6359L7.605 13.2266L12.3784 18Z" fill="#F19B6C" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3762_52428">
                                            <rect width="27" height="27" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                : <></>}

                        </div>
                        <div className={`${localdata?.answer === localdata?.[`option${inx + 1}`] ? 'text-white' : `text-gray-600`}`}>Correct</div>
                    </div>}
                </div>
            </div>
            )}
            {!localdata.isEdit && <div className="text-primary-base">
                <h1>Correct Answer Points : {localdata?.points}</h1>
            </div>}
            {localdata.isEdit && <div className="flex justify-between items-center w-full mt-4 ">
                {localdata?.isEdit && <div className="text-primary-base">
                    + Add Correct Answer Points
                    <PointsInput value={localdata?.points} isEdit={localdata?.isEdit} onChangeHandler={(e) => onInputChange(`points`, e.target.value)} />
                </div>

                }
                <div className="flex items-center" >
                    <div><button onClick={() => {
                        setlocaldata({ ...localdataprev, isEdit: false });

                    }} className="text-primary-base mr-2">Cancel</button></div>

                    <ConditionalButton label="save" condition={true} onClickHandler={() => {

                        setdata({ ...localdata, isEdit: false }, index)

                    }} />

                </div>

            </div>
            }


        </div>
    )
}

export default QuizQuestion

export const QuizQuestionOnlyOne = ({ index, onDeleteClick, data, setdata, handleSave }) => {
    const [Correct, setcorrect] = useState(null)
    const [localdata, setlocaldata] = useState({})
    const [localdataprev, setlocaldataprev] = useState({})
    const { productId } = useNavDetails()
    const dispatch = useDispatch()
    useEffect(() => {
        setlocaldata(data)
        setlocaldataprev(data)
    }, [data])

    const onInputChange = (field, value) => {

        const local = { ...localdata }
        local[field] = value
        setlocaldata(local)

    }



    return (
        <div className="w-full  p-4 ">
            <div className="flex justify-between">

                <div className="text-white text-xl font-semibold">Question </div>
                <div className="flex ">

                    {!localdata.isEdit && <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                        onClick={() => { onInputChange("isEdit", true) }}>
                        <Image
                            src={'/asset/EditVector.svg'}
                            width={20}
                            height={20}
                            className="bg-[#171717]"
                        />
                    </button>}
                </div>
            </div>

            <div className="mt-4 text-white">
                <QuestionInput value={localdata?.question} isEdit={localdata.isEdit}
                    onChangeHandler={(e) => onInputChange(`question`, e.target.value)}
                />
            </div>


            <div className="w-full my-4 text-white">
                <h4 className="text-[1rem] font-semibold">Options</h4>
            </div>

            {["A", "B", "C", "D"].map((v, inx) => <div className="text-white mt-4">
                <div className="flex items-center justify-center gap-4">
                    {localdata?.isEdit && <div>
                        {v}
                    </div>}
                    <div className="flex w-full">
                        <QuestionInput type="option" value={localdata?.[`option${inx + 1}`]} isEdit={localdata.isEdit}
                            onChangeHandler={(e) => onInputChange(`option${inx + 1}`, e.target.value)}
                        />
                    </div>
                    {localdata.isEdit && <div className="flex gap-2 justify-center items-center">
                        <div className={`h-[27px] w-[27px] border-2 border-white ${localdata?.answer === localdata?.[`option${inx + 1}`] ? 'bg-white' : 'bg-black'}`}
                            onClick={() => { localdata.isEdit && onInputChange('answer', localdata?.[`option${inx + 1}`]) }}
                        >
                            {localdata?.answer === localdata?.[`option${inx + 1}`] ?
                                <svg width="23" height="23" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3762_52428)">
                                        <path d="M4.5 3.375H22.5C22.7984 3.375 23.0845 3.49353 23.2955 3.7045C23.5065 3.91548 23.625 4.20163 23.625 4.5V22.5C23.625 22.7984 23.5065 23.0845 23.2955 23.2955C23.0845 23.5065 22.7984 23.625 22.5 23.625H4.5C4.20163 23.625 3.91548 23.5065 3.7045 23.2955C3.49353 23.0845 3.375 22.7984 3.375 22.5V4.5C3.375 4.20163 3.49353 3.91548 3.7045 3.7045C3.91548 3.49353 4.20163 3.375 4.5 3.375ZM12.3784 18L20.3321 10.0451L18.7414 8.45437L12.3784 14.8185L9.19575 11.6359L7.605 13.2266L12.3784 18Z" fill="#F19B6C" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3762_52428">
                                            <rect width="27" height="27" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                : <></>}

                        </div>
                        <div className={`${localdata?.answer === localdata?.[`option${inx + 1}`] ? 'text-white' : `text-gray-600`}`}>Correct</div>
                    </div>}
                </div>
            </div>
            )}
            {/* {!localdata.isEdit && <div className="text-primary-base">
                <h1>Correct Answer Points : {localdata?.points}</h1>
            </div>}
            {localdata.isEdit && <div className="flex justify-between items-center w-full mt-4 ">
                {localdata?.isEdit && <div className="text-primary-base">
                    + Add Correct Answer Points
                    <PointsInput value={localdata?.points} isEdit={localdata?.isEdit} onChangeHandler={(e) => onInputChange(`points`, e.target.value)} />
                </div>

                }

            </div>
            } */}

            {localdata?.isEdit && <div className="text-primary flex items-center w-full mt-4 justify-end" >
                {/* <div><button onClick={() => {
                    setlocaldata({ ...localdataprev, isEdit: false });

                }} className="text-primary-base mr-2">Cancel</button></div> */}

                <ConditionalButton label="Save" condition={
                    (localdata.option1 != '' &&
                        localdata.option2 != '' &&
                        localdata.option3 != '' &&
                        localdata.option4 != '' &&
                        localdata.answer != null &&
                        localdata.question != '') ? true : false

                } onClickHandler={() => {
                    console.log(localdata);
                    handleSave(localdata)
                    setdata({ ...localdata }, index)
                    // setdata({ ...localdata, isEdit: false }, index)

                }} />

            </div>}

        </div>
    )
}




const QuestionInput = ({ value, isEdit, onChangeHandler, type }) => {
    return isEdit ?
        <input

            value={value}
            onChange={onChangeHandler}
            className="bg-[#2C2C2C] w-full h-10 px-2 text-white rounded-md " />
        : <div className="my-2 mx-4 ">
            <div className="flex items-center">
                {type === "option" && <svg className="mr-3" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="3.5" stroke="white" />
                </svg>
                }
                {value}</div>
        </div>
}


const PointsInput = ({ value, isEdit, onChangeHandler, type }) => {
    return isEdit ?
        <input

            value={value}
            onChange={onChangeHandler}
            className="bg-[#2C2C2C] w-full h-10 px-2 text-white rounded-md " />
        : <div className="my-2 mx-4 ">
            <div className="flex items-center">
                {type === "option" && <svg className="mr-3" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="3.5" stroke="white" />
                </svg>
                }
                {value}</div>
        </div>
}


