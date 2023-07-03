import Breadcrumb from '@/components/Breadcrumb'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React, { useState } from 'react'
import AccordianForPlayerSection from './AccordianForPlayerSection'

function LiberaryStartScrreen({ itemsArray }) {
    const [currentContent, setCurrentContent] = useState({ type: '', content: '' })
    const [Counter, setCounter] = useState(0)
    console.log("itemArray:", itemsArray);
    function currentContentFunction(content) {
        console.log(content);
        setCurrentContent(content)
    }
    return (
        <div className='h-full w-full'>
            <Breadcrumb />
            <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                The Complete Bar Management Short Course
            </p>
            <p className='text-[12px] text-primary-base'>19% Completed</p>
            <div className='flex flex-row justify-start items-center w-full h-[4px] bg-[#2F2F2F] rounded-[18px] mt-[16px]'>
                <div className='bg-primary-base h-full transition-all duration-300 ease-in-out ' style={{ width: `${5 ? 10 : 0}%` }}></div>
            </div>
            <div className='h-full w-full grid grid-cols-7 mt-[10px]'>
                <div className='h-full rounded-[8px] border border-[#2F2F2F] col-span-2 p-[1px] mr-[5px] bg-[#0F0F0F]'>
                    <AccordianForPlayerSection ChapterArray={itemsArray[Counter]} onItemClicked={(content) => { currentContentFunction({ type: content.type, content: `${content.content} , ${content.type} <--TYPE` }) }} onRightClick={() => { if (Counter < itemsArray.length - 1) setCounter(prev => prev + 1) }} onLeftClick={() => { if (Counter > 0) setCounter(prev => prev - 1) }} />
                </div>
                <div className='h-full rounded-[8px] border border-[#2F2F2F] col-span-5 p-[1px] bg-[#383838] text-white flex items-center justify-center' >
                    {currentContent.type == 'video' &&
                        <>
                            Video {currentContent.content}
                        </>
                    }
                    {currentContent.type == 'content' &&
                        <>
                            Content {currentContent.content}
                        </>
                    }
                    {currentContent.type == 'quiz' &&
                        <>
                            Quiz {currentContent.content}
                        </>
                    }
                </div>

            </div>
            <div className='flex w-full items-center justify-end mt-[15px]'>
                <ConditionalButton label={'Next'} condition={true} onClickHandler={() => { }} />

            </div>
        </div>
    )
}

export default LiberaryStartScrreen