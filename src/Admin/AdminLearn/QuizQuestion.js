import InputField from "@/utils/InputField"
import SwitchComp from "@/utils/SwitchComp"
import Image from "next/image"
import { useState } from "react"

const QuizQuestion = ({ index, onDeleteClick }) => {
    const [Correct, setcorrect] = useState(null)
    const onCorrectChnage = (value) => {
        if (Correct === value) setcorrect(null)
        else setcorrect(value)
    }


    return (
        <div className="w-full border-2 border-gray-200 p-4 ">
            <div className="flex justify-between">

                <div className="text-white text-xl font-semibold">Question {index + 1}</div>
                <div className="flex ">
                    <SwitchComp />
                    <button className='h-[40px] w-[40px] ml-2 rounded-full bg-[#171717] flex items-center justify-center' onClick={() => { onDeleteClick() }}>
                        <Image
                            src={'/asset/DeleteVector.svg'}
                            width={20}
                            height={20}
                            className="bg-[#171717]"
                        />
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <QuestionInput />
            </div>


            <div className="w-full my-4 text-white">
                <h4 className="text-[1rem] font-semibold">Options</h4>
            </div>

            {["A", "B", "C", "D"].map((v) => <div className="text-white mt-4">
                <div className="flex items-center justify-center gap-4">
                    <div>
                        {v}
                    </div>
                    <div className="flex w-full">
                        <QuestionInput />
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className={`h-4 w-4 border-2 border-white ${Correct === v ? 'bg-white' : 'bg-black'}`}
                            onClick={() => onCorrectChnage(v)} >
                            {Correct === v ?
                                <svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 0.375H19.5C19.7984 0.375 20.0845 0.493526 20.2955 0.704505C20.5065 0.915483 20.625 1.20163 20.625 1.5V19.5C20.625 19.7984 20.5065 20.0845 20.2955 20.2955C20.0845 20.5065 19.7984 20.625 19.5 20.625H1.5C1.20163 20.625 0.915483 20.5065 0.704505 20.2955C0.493526 20.0845 0.375 19.7984 0.375 19.5V1.5C0.375 1.20163 0.493526 0.915483 0.704505 0.704505C0.915483 0.493526 1.20163 0.375 1.5 0.375ZM9.37838 15L17.3321 7.04513L15.7414 5.45437L9.37838 11.8185L6.19575 8.63588L4.605 10.2266L9.37838 15Z" fill="white" />
                                </svg> : <></>}

                        </div>
                        <div className={`${Correct === v ? 'text-white' : `text-gray-600`}`}>Correct</div>
                    </div>
                </div>
            </div>
            )}



        </div>
    )
}

export default QuizQuestion


const QuestionInput = () => {
    return <input className="bg-[#2C2C2C] w-full h-10 px-2 text-white rounded-md " />
}