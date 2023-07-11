import { CraeteQuizScore } from '@/store/slices/learnslice';
import EndQuizCard from '@/utils/Cards/Learnsection/EndQuizCard';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../Breadcrumb';
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';

function QuizesCard({ name, quizArray, quizId }) {
    // const a = [1, 2, 3, 4]
    const [counter, setCounter] = useState(0);
    const [show, setisShow] = useState(false);
    const [answersheet, setAnserSheet] = useState({})
    const [selected, setSelected] = useState({})
    const { scorecard } = useSelector(state => state.learn)

    const dispatch = useDispatch()
    const [newReport, setnewReport] = useState({ quiz_id: quizId, answer_list: [] })
    const [optimisedreportCard, setoptimised] = useState(null)
    const [reportCard, setreportCard] = useState({
        correct: 0,
        incorrect: 0
    })
    useEffect(() => {
        let dummy = {}
        quizArray.map((quiz) => { dummy = { ...dummy, [quiz.quiz_question_id]: '' } })
        setAnserSheet(dummy)
        setSelected(dummy)

        let newReportLogic = []
        newReportLogic = quizArray.map((quiz) => { return { quiz_question_id: quiz.quiz_question_id, answer: "" } })
        console.log(newReportLogic);
        setnewReport((prev) => {
            return { ...prev, answer_list: newReportLogic }
        })
    }, [quizArray])
    useEffect(() => {
        console.log(scorecard);
        if (scorecard) {
            console.log(scorecard);
        }
    }, [scorecard])
    function onNewReportClick(id, answered) {
        let dummy = []
        dummy = newReport.answer_list.map((quiz) => {
            if (quiz.quiz_question_id == id) {
                return {
                    ...quiz, answer: answered
                }
            }
            else return { ...quiz }

        })
        console.log(dummy);
        setnewReport((prev) => {
            return { ...prev, answer_list: dummy }
        })
    }
    function prepareQuizReport(quizId, correctAnswer, selectedAnswer) {
        onNewReportClick(quizId, selectedAnswer)
        setSelected(prev => { return { ...prev, [quizId]: selectedAnswer } })
        if (correctAnswer == selectedAnswer) [
            setAnserSheet(prev => { return { ...prev, [quizId]: 1 } })
        ]
        else
            setAnserSheet(prev => { return { ...prev, [quizId]: 0 } })

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
            total_question: total,
            correct: correctCount,
            incorrect: incorrectCount,
            score: 40,
        }
        setreportCard({ ...dummy })
    }
    const router = useRouter()
    return (
        <div>
            <Breadcrumb />
            {/* <h2 className="text-white text-[32px] leading-9 font-bold mb-[20px] ">
                Bar 101
            </h2> */}
            {
                quizArray.length > 0 ? <>


                    {
                        !show ?

                            <div className='w-full min-h-[500px] h-full bg-[#383838] rounded-t-[12px] mt-[20px] relative overflow-hidden'>
                                <div className='w-full rounded-t-[12px] bg-transparent p-[15px] grid grid-cols-5 '>
                                    <div className='col-span-2 bg-transparent'>
                                        <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { router.back() }} />
                                    </div>
                                    <div className='bg-transparent col-span-3'>
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

                                                    <div className={`rounded-full flex items-center ${selected[quiz.quiz_question_id] == quiz.option1 ? 'bg-black text-white ' : 'bg-transparent text-black'} text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words hover:text-white hover:bg-black`} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option1); }}>
                                                        <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option1}</p>
                                                    </div>
                                                    <div className={`rounded-full flex items-center ${selected[quiz.quiz_question_id] == quiz.option2 ? 'bg-black text-white ' : 'bg-transparent text-black'} text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words hover:text-white hover:bg-black`} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option2) }}>
                                                        <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option2}</p>
                                                    </div>
                                                    <div className={`rounded-full flex items-center ${selected[quiz.quiz_question_id] == quiz.option3 ? 'bg-black text-white ' : 'bg-transparent text-black'} text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words hover:text-white hover:bg-black`} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option3) }}>
                                                        <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option3}</p>
                                                    </div>
                                                    <div className={`rounded-full flex items-center ${selected[quiz.quiz_question_id] == quiz.option4 ? 'bg-black text-white ' : 'bg-transparent text-black'} text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px]  border border-black break-words hover:text-white hover:bg-black`} onClick={() => { prepareQuizReport(quiz.quiz_question_id, quiz.answer, quiz.option4) }}>
                                                        <p className='not-italic font-Inter font-normal bg-transparent'>{quiz.option4}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                        }
                                    </div>
                                    <div className=' w-full flex items-center justify-end bg-transparent mb-[10px] pr-[10px]'>

                                        <div className='bg-transparent flex'>
                                            {counter > 0 &&
                                                <div className="bg-transparent mr-[10px]">
                                                    <button
                                                        className={` bg-transparent
                                py-[7px] px-[24px] h-[41px] rounded-full text-black border border-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                                                        onClick={() => { if (counter > 0) setCounter(prev => prev - 1) }}

                                                    >
                                                        {`Previous`}
                                                    </button>
                                                </div>
                                            }
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
                                                    dispatch(CraeteQuizScore(newReport, quizId)).then(() => {

                                                        // finalreport()
                                                        setisShow(true)
                                                    })

                                                }} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : scorecard &&
                            <>
                                <h2 className="text-white capitalize text-[32px] leading-9 font-bold mb-[20px] ">
                                    {name}
                                </h2>
                                <EndQuizCard
                                    score={scorecard}
                                    name={name}
                                    nextClick={() => {
                                        setCounter(0)
                                        setisShow(false)
                                    }} />
                            </>
                    }
                </>
                    :
                    <div className='flex flex-col items-center justify-center h-full w-full'>
                        <Image
                            className="bg-transparent"
                            src="/asset/EmptyFrame.svg"
                            width={302}
                            height={186}
                            alt="Empty"
                            priority
                        />
                        <p className='not-italic font-bold text-xl font-Inter text-white mt-[54px]'>There is no Data present here</p>
                    </div>
            }
        </div >
    )
}

export default QuizesCard