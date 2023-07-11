import Breadcrumb from '@/components/Breadcrumb'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React, { useState } from 'react'
import QuizesLiberary from '../QuizesForLiberaryPart'
import AccordianForPlayerSection from './AccordianForPlayerSection'
import ReactPlayer from 'react-player'
import { RxCross1 } from 'react-icons/rx'
import { SupriseQuizQuestion } from '@/components/modal/Quizmodal'

function LiberaryStartScrreen({ itemsArray, isPreview, onCancelClick, isLearn }) {

    const [currentContent, setCurrentContent] = useState({ type: '', content: '' })
    const [Counter, setCounter] = useState({
        index: 0, length: itemsArray.length,
        modules: {
            index: 0,
            length: itemsArray[0].modules.length,
            content: { index: 0, length: itemsArray[0]?.modules[0]?.length || 0 }
        }
    })

    function currentContentFunction(content, cindex) {
        onModuleChnage(Counter.index, Counter.modules.index, cindex)
        setCurrentContent(content)
    }

    const [quizmodal, setquizmodal] = useState(false)

    const onRightClick = () => {
        if (Counter.index < itemsArray.length - 1) {
            const data = structuredClone(Counter)
            data.index = data.index + 1
            data.modules.index = 0
            data.modules.length = itemsArray[data.index].modules.length
            data.modules.content.index = 0
            data.modules.content.length = itemsArray[data.index].modules[data.modules.index]?.page_and_video_list?.length || 0
            const pages = itemsArray[data.index].modules[data.modules.index]?.page_and_video_list[data.modules.content.index]
            if (pages) {
                if (pages?.course_module_page_id) {
                    setCurrentContent({ type: 'content', content: pages.description, quizes: pages.modules_questions })

                }
                if (pages?.course_module_videos_id) {
                    setCurrentContent({ type: 'video', content: pages.video_url, quizes: pages.modules_questions })
                }
            }
            else {

                setCurrentContent({ type: 'none', content: "", quizes: [] })
            }
            setCounter(data)
        }
    }
    const onLeftClick = () => {
        if (Counter.index > 0) {
            const data = structuredClone(Counter)
            data.index = data.index - 1
            data.modules.index = 0
            data.modules.length = itemsArray[data.index].modules.length
            data.modules.content.index = 0
            data.modules.content.length = itemsArray[data.index].modules[data.modules.index]?.page_and_video_list?.length || 0
            setCounter(data)
            const pages = itemsArray[data.index].modules[data.modules.index]?.page_and_video_list[data.modules.content.index]
            if (pages) {
                if (pages?.course_module_page_id) {
                    setCurrentContent({ type: 'content', content: pages.description, quizes: pages.modules_questions })
                }
                if (pages?.course_module_videos_id) {
                    setCurrentContent({ type: 'video', content: pages.video_url, quizes: pages.modules_questions })
                }
            }

        }
    }

    const onModuleChnage = (chapter, moduleindex, contentindex) => {
        const data = structuredClone(Counter)
        data.index = chapter
        data.modules.index = moduleindex
        data.modules.length = itemsArray[chapter].modules.length
        data.modules.content.index = contentindex
        data.modules.content.length = itemsArray[data.index]?.modules[data.modules.index]?.page_and_video_list?.length
        const pages = itemsArray[data.index].modules[data.modules.index]?.page_and_video_list[data.modules.content.index]

        if (pages) {
            if (pages?.course_module_page_id) {
                setCurrentContent({ type: 'content', content: pages.description, quizes: pages.modules_questions })
            }
            if (pages?.course_module_videos_id) {
                setCurrentContent({ type: 'video', content: pages.video_url, quizes: pages.modules_questions })
            }
        }
        else {
            debugger
            setCurrentContent({ type: 'none', content: "", quizes: [] })
        }
        setCounter(data)
    }


    const onNextclick = (checkquiz) => {

        if (currentContent?.quizes?.length && checkquiz && (currentContent.type === "content" || currentContent.type === "video")) {
            setquizmodal(true)

            return
        }

        if (Counter.modules.content.length > 0 && Counter.modules.content.index === Counter.modules.content.length - 1
            && itemsArray[Counter.index]?.modules?.[Counter.modules.index]?.modules_questions?.length > 0 &&
            currentContent.type !== "recapquiz") {
            setCurrentContent({ type: 'recapquiz', content: '', quizes: itemsArray[Counter.index]?.modules[Counter.modules.index].modules_questions })
            const data = structuredClone(Counter)
            data.modules.content.index = data.modules.content.length
            setCounter(data)
            return
        }
        if (Counter.modules.content.length > 0 && Counter.modules.content.index < Counter.modules.content.length - 1) {
            onModuleChnage(Counter.index, Counter.modules.index, Counter.modules.content.index + 1)

            return
        }
        if (Counter.modules.length > 0 && Counter.modules.index < Counter.modules.length - 1) {
            onModuleChnage(Counter.index, Counter.modules.index + 1, 0)

            return
        }
        if (Counter.length > 0 && Counter.index < Counter.length - 1) {

            onModuleChnage(Counter.index + 1, 0, 0)
            return
        }
    }


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
                    <AccordianForPlayerSection isLearn={isLearn}
                        ChapterArray={itemsArray[Counter.index]}
                        onCounterChange={(a, b, c) => onModuleChnage(a, b, c)}
                        counterindex={Counter}
                        onItemClicked={(content, cindex) => {
                            if (content.type == 'video' || content.type == 'quiz' || content.type == 'content' || content.type == 'recapquiz')
                                currentContentFunction({ type: content.type, content: `${content.content}`, quizes: content.quizes }, cindex)
                        }}
                        onRightClick={onRightClick}
                        onLeftClick={onLeftClick} />
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
                    <SupriseQuizQuestion isModalOpen={quizmodal}
                        onClickCancel={() => { onNextclick(false); setquizmodal(false) }}
                    >


                        <QuizesLiberary name={'quizName'} quizArray={currentContent?.quizes?.length > 0 ? currentContent.quizes : []} />

                    </SupriseQuizQuestion>

                    {currentContent.type == 'none' && <></>
                    }
                    {currentContent.type == 'content' &&

                        <div className='h-full w-full flex flex-col'>

                            {/* Content {currentContent.content} */}
                            <div className="notificationModal w-full h-full">

                                <div className="text-white p-2 h-full editor w-full
                    ">
                                    <div className="text-white blogs" dangerouslySetInnerHTML={{ __html: currentContent.content }}></div>
                                </div>


                            </div>


                        </div>

                    }
                    {currentContent.type == 'quiz' &&
                        <>
                            {/* <QuizesLiberary name={'quizName'} quizArray={quiss.length ? quiss : []} /> */}
                            <QuizesLiberary name={'quizName'} quizArray={currentContent.quizes.length > 0 ? currentContent.quizes : []} />

                        </>
                    }
                    {currentContent.type == 'recapquiz' &&
                        <>
                            {/* <QuizesLiberary name={'quizName'} quizArray={quiss.length ? quiss : []} /> */}
                            <QuizesLiberary name={'quizName'} quizArray={currentContent.quizes.length > 0 ? currentContent.quizes : []} />

                        </>
                    }
                </div>

            </div>
            <div className='flex w-full items-center justify-end mt-[15px]'>
                <ConditionalButton label={'Next'} condition={true} onClickHandler={() => { onNextclick(true) }} />

            </div>
        </div>
    )
}

export default LiberaryStartScrreen