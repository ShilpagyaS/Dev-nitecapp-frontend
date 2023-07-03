import EndQuizCard from '@/utils/Cards/Learnsection/EndQuizCard';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import Breadcrumb from '../Breadcrumb';
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';

function QuizesLiberary({ name, quizArray }) {
    // const a = [1, 2, 3, 4]

    const [counter, setCounter] = useState(0);
    const [show, setisShow] = useState(false);
    const [answersheet, setAnserSheet] = useState({})
    const [selected, setSelected] = useState({})
    const [reportCard, setreportCard] = useState({
        correct: 0,
        incorrect: 0
    })
    useEffect(() => {
        let dummy = {}
        let dummy2 = {}
        quizArray.map((quiz) => { dummy = { ...dummy, [quiz.quiz_question_id]: '', [`check_${quiz.quiz_question_id}`]: false } })
        quizArray.map((quiz) => { dummy2 = { ...dummy2, [quiz.quiz_question_id]: '' } })
        setAnserSheet(dummy2)
        setSelected(dummy)
    }, [quizArray])
    useEffect(() => {
        console.log(selected);
    }, [selected])
    function prepareQuizReport(quizId, correctAnswer, selectedAnswer, condition) {
        if (!condition) {

            setSelected(prev => { return { ...prev, [quizId]: selectedAnswer } })
            if (correctAnswer == selectedAnswer) [
                setAnserSheet(prev => { return { ...prev, [quizId]: 1 } })
            ]
            else
                setAnserSheet(prev => { return { ...prev, [quizId]: 0 } })
        }

    }
    function finalreport() {
        let total = quizArray.length
        let Keys = Object.keys(answersheet)
        let correctCount = 0
        let incorrectCount = 0
        Keys.forEach(key => {
            answersheet[key] == 1 ? correctCount = correctCount + 1 : incorrectCount = incorrectCount + 1
        });
        let dummy = {
            total: total,
            correct: correctCount,
            incorrect: incorrectCount
        }
        setreportCard({ ...dummy })
    }
    const router = useRouter()
    return (
        <div>
            {/* <Breadcrumb /> */}
            {/* <h2 className="text-white text-[32px] leading-9 font-bold mb-[20px] ">
                Bar 101
            </h2> */}
            {
                !show ?

                    <div className='w-full min-h-[500px] h-full bg-[#383838] rounded-t-[12px] mt-[20px] relative overflow-hidden'>
                        <div className='w-full rounded-t-[12px] bg-transparent p-[15px] flex items-center justify-center  '>
                            {/* <div className='col-span-2 bg-transparent'>
                                <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { router.back() }} />
                            </div> */}
                            <div className='bg-transparent '>
                                <p className='font-[700] not-italic font-Inter text-white text-[18px] bg-transparent capitalize'>{name}</p>
                            </div>
                        </div>
                        <div className='h-[5px] w-full bg-[#7B7B7B] relative'>
                            <div className='absolute h-full bg-white transition-all duration-500 ease-in-out' style={{ width: `${((counter + 1) * 100) / quizArray.length}%` }}>

                            </div>

                        </div>
                        <div className='flex flex-col justify-between bg-[#F4F4F4]'>

                            <div className={`flex items-center bg-transparent w-full min-h-[370px] h-full transition-all duration-500 ease-in-out`} style={{ transform: `translateX(-${counter * 100}%)` }}>
                                {/* {a.slice(0, counter).map((a1, i) => */}
                                {quizArray.map((quiz, i) =>
                                    <div className={`mt-[30px] w-full shrink-0 flex flex-col items-center  px-[10%] h-full bg-transparent transition-all duration-500 ease-in-out `}  >

                                        <p className='font-[600] text-[14px] not-italic text-black bg-transparent capitalize'>{quiz.question}</p>
                                        <div className='mt-[20px] w-[65%] bg-transparent'>

                                            <div className={`rounded-full flex items-center 
                                            ${selected[quiz.quiz_question_id] == quiz.option1 ?
                                                    selected[`check_${quiz.quiz_question_id}`] == false ?
                                                        'bg-black text-white '
                                                        : answersheet[quiz.quiz_question_id] == 1 ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                                                    : 'bg-transparent text-black'}
                                             cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words
                                             ${selected[`check_${quiz.quiz_question_id}`] == false ? 'hover:text-white hover:bg-black' : ''}
                                             
                                              `} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option1, selected[`check_${quiz.quiz_question_id}`]) }}>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option1}</p>
                                            </div>
                                            <div className={`rounded-full flex items-center 
                                            ${selected[quiz.quiz_question_id] == quiz.option2 ?
                                                    selected[`check_${quiz.quiz_question_id}`] == false ?
                                                        'bg-black text-white '
                                                        : answersheet[quiz.quiz_question_id] == 1 ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                                                    : 'bg-transparent text-black'}
                                             cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words
                                             ${selected[`check_${quiz.quiz_question_id}`] == false ? 'hover:text-white hover:bg-black' : ''}
                                             
                                              `} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option2, selected[`check_${quiz.quiz_question_id}`]) }}>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option2}</p>
                                            </div>
                                            <div className={`rounded-full flex items-center 
                                            ${selected[quiz.quiz_question_id] == quiz.option3 ?
                                                    selected[`check_${quiz.quiz_question_id}`] == false ?
                                                        'bg-black text-white '
                                                        : answersheet[quiz.quiz_question_id] == 1 ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                                                    : 'bg-transparent text-black'}
                                             cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words
                                             ${selected[`check_${quiz.quiz_question_id}`] == false ? 'hover:text-white hover:bg-black' : ''}
                                             
                                              `} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option3, selected[`check_${quiz.quiz_question_id}`]) }}>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option3}</p>
                                            </div>
                                            <div className={`rounded-full flex items-center 
                                            ${selected[quiz.quiz_question_id] == quiz.option4 ?
                                                    selected[`check_${quiz.quiz_question_id}`] == false ?
                                                        'bg-black text-white '
                                                        : answersheet[quiz.quiz_question_id] == 1 ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                                                    : 'bg-transparent text-black'}
                                             cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words
                                             ${selected[`check_${quiz.quiz_question_id}`] == false ? 'hover:text-white hover:bg-black' : ''}
                                             
                                              `} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option4, selected[`check_${quiz.quiz_question_id}`]) }}>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option4}</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                                }
                            </div>
                            <div className=' w-full flex items-center justify-end bg-transparent mb-[10px] pr-[10px]'>

                                <div className='bg-transparent flex'>
                                    {
                                        !selected[`check_${quizArray[counter]?.quiz_question_id}`] ?
                                            <ConditionalButton label={'Check'} condition={true} onClickHandler={() => {
                                                // if (counter < quizArray.length - 1)
                                                //     setCounter(prev => prev + 1)
                                                let refid = ''
                                                refid = quizArray[counter]?.quiz_question_id
                                                console.log(answersheet);
                                                if (selected[refid] != '') {

                                                    if (selected[`check_${refid}`] == false) {

                                                        setSelected(
                                                            (prev) => {
                                                                return {
                                                                    ...prev,
                                                                    [`check_${refid}`]: true
                                                                }
                                                            }
                                                        )
                                                    }
                                                }
                                            }} />
                                            :
                                            <>
                                                {
                                                    counter < quizArray.length - 1 &&
                                                    <ConditionalButton label={'Next'} condition={true} onClickHandler={() => {
                                                        if (counter < quizArray.length - 1)
                                                            setCounter(prev => prev + 1)
                                                    }} />
                                                }
                                                {
                                                    counter === quizArray.length - 1 &&
                                                    <ConditionalButton label={'Submit'} condition={true} onClickHandler={() => {
                                                        // setCounter(1)
                                                        finalreport()
                                                        setisShow(true)

                                                    }} />
                                                }
                                            </>
                                    }
                                    {/* {
                                        counter < quizArray.length - 1 &&
                                        <ConditionalButton label={'Check'} condition={true} onClickHandler={() => {
                                            // if (counter < quizArray.length - 1)
                                            //     setCounter(prev => prev + 1)
                                            let refid = ''
                                            refid = quizArray[counter].quiz_question_id
                                            console.log(answersheet);
                                            if (selected[`check_${refid}`] == false) {

                                                setSelected(
                                                    (prev) => {
                                                        return {
                                                            ...prev,
                                                            [`check_${refid}`]: true
                                                        }
                                                    }
                                                )
                                            }
                                        }} />
                                    } */}

                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <h2 className="text-white capitalize text-[32px] leading-9 font-bold mb-[20px] ">
                            {name}
                        </h2>
                        <EndQuizCard
                            score={reportCard}
                            name={name}
                            nextClick={() => {
                                setCounter(0)
                                setisShow(false)
                            }} />
                    </>
            }
        </div >
    )
}

export default QuizesLiberary