import Breadcrumb from '@/components/Breadcrumb'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React, { useState } from 'react'
import QuizesLiberary from '../QuizesForLiberaryPart'
import AccordianForPlayerSection from './AccordianForPlayerSection'
import ReactPlayer from 'react-player'
import { RxCross1 } from 'react-icons/rx'

function LiberaryStartScrreen({ itemsArray, isPreview, onCancelClick, isLearn }) {
    const [currentContent, setCurrentContent] = useState({ type: '', content: '' })
    const [Counter, setCounter] = useState(0)
    console.log("itemArray:", itemsArray);
    function currentContentFunction(content) {
        console.log(content);
        setCurrentContent(content)
    }
    const quiss = [

        {
            answer: "testing option...1",
            createdAt: "2023-06-23T07:57:35.000Z",
            image: "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
            option1: "testing option...1",
            option2: "testing option...2",
            option3: "testing option...3",
            option4: "testing option...4",
            points: 0,
            question: "testing quiz question...2",
            quiz_id: 1,
            quiz_question_id: 1,
            updatedAt: "2023-06-25T10:33:51.000Z",
        },
        {
            answer: "testing option...1",
            createdAt: "2023-06-23T07:57:35.000Z",
            image: "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
            option1: "option...1",
            option2: "option...2",
            option3: "option...3",
            option4: "option...4",
            points: 0,
            question: "testing quiz question...2",
            quiz_id: 1,
            quiz_question_id: 4,
            updatedAt: "2023-06-25T10:33:51.000Z",
        },
        {
            answer: "testing option...1",
            createdAt: "2023-06-23T07:57:35.000Z",
            image: "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
            option1: "testing...1",
            option2: "testing...2",
            option3: "testing...3",
            option4: "testing...4",
            points: 0,
            question: "testing quiz question...2",
            quiz_id: 1,
            quiz_question_id: 3,
            updatedAt: "2023-06-25T10:33:51.000Z",
        },

    ]
    return (
        <div className='h-full w-full'>
            <Breadcrumb />
            <div className='w-full flex items-center mb-[10px] justify-between'>
                <p className='text-[24px] font-Inter text-white font-semibold bg-transparent ml-[20px]'>
                    The Complete Bar Management Short Course
                </p>
                {
                    isPreview &&
                    <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { onCancelClick() }} />
                }
            </div>
            <p className='text-[12px] text-primary-base'>19% Completed</p>
            <div className='flex flex-row justify-start items-center w-full h-[4px] bg-[#2F2F2F] rounded-[18px] mt-[16px]'>
                <div className='bg-primary-base h-full transition-all duration-300 ease-in-out ' style={{ width: `${5 ? 10 : 0}%` }}></div>
            </div>
            <div className='h-full min-h-[300px] w-full grid grid-cols-7 mt-[10px]'>
                <div className='h-full rounded-[8px] bg-transparent border border-[#2F2F2F] col-span-2 p-[1px] mr-[5px] bg-[#0F0F0F]'>
                    <AccordianForPlayerSection isLearn={isLearn} ChapterArray={itemsArray[Counter]} onItemClicked={(content) => { if (content.type == 'video' || content.type == 'quiz' || content.type == 'content') currentContentFunction({ type: content.type, content: `${content.content}`, quizes: content.quizes }) }} onRightClick={() => { if (Counter < itemsArray.length - 1) setCounter(prev => prev + 1) }} onLeftClick={() => { if (Counter > 0) setCounter(prev => prev - 1) }} />
                </div>
                <div className='h-full rounded-[8px] border border-[#2F2F2F] col-span-5 p-[1px] bg-[#383838] text-white flex items-center justify-center' >
                    {currentContent.type == 'video' &&
                        <>
                            <div className=" w-full max-w-full  justify-center flex">
                                <ReactPlayer
                                    controls

                                    className="rounded-lg "
                                    url={currentContent.content} />
                            </div>
                        </>
                    }
                    {currentContent.type == 'content' &&

                        <div className='h-full w-full flex flex-col'>

                            {/* Content {currentContent.content} */}
                            {/* <div className="notificationModal w-full h-full">

                                <div className="text-white p-2 h-full editor w-full
                    ">
                                    <div className="text-white blogs" dangerouslySetInnerHTML={{ __html: currentContent.content }}></div>
                                </div>


                            </div> */}
                            {currentContent.quizes.length > 0 &&

                                <QuizesLiberary name={'quizName'} quizArray={currentContent.quizes.length > 0 ? currentContent.quizes : []} />
                            }
                        </div>

                    }
                    {currentContent.type == 'quiz' &&
                        <>
                            {/* <QuizesLiberary name={'quizName'} quizArray={quiss.length ? quiss : []} /> */}
                            <QuizesLiberary name={'quizName'} quizArray={currentContent.quizes.length > 0 ? currentContent.quizes : []} />

                        </>
                    }
                </div>

            </div>
            {/* <div className='flex w-full items-center justify-end mt-[15px]'>
                <ConditionalButton label={'Next'} condition={true} onClickHandler={() => { }} />

            </div> */}
        </div>
    )
}

export default LiberaryStartScrreen