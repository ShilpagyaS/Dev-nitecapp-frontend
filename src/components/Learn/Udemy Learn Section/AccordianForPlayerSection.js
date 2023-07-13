import AccordianTwo from '@/utils/Accordian/AccordianTwo'
import AccordianNew from '@/utils/Accordian/New Accordian/AccordianNew'
import Image from 'next/image'
import React from 'react'

function AccordianForPlayerSection({ ChapterArray, onItemClicked, onRightClick, onLeftClick, isLearn, counterindex, onCounterChange }) {
    return (
        <div className='h-full'>
            <div className='bg-[#0F0F0F] text-white p-[5px] min-h-[50px] flex items-center justify-between'>
                <div className={`bg-transparent flex items-center cursor-pointer`} onClick={() => { onLeftClick() }}>
                    <Image src={'/asset/LearnRightArrowKey.svg'} height={22} width={18} className='bg-transparent rotate-180  ' />
                </div>
                <p className='text-white bg-transparent px-[10px]'>{`Chapter: ${ChapterArray.name}`} </p>

                <span className={`bg-transparent flex items-center justify-center cursor-pointer`} onClick={() => { onRightClick() }}>
                    <Image src={'/asset/LearnRightArrowKey.svg'} height={22} width={18} className='bg-transparent' />
                </span>
            </div>
            <div className='max-h-[400px] h-full min-h-[320] overflow-auto hidescrollbar bg-transparent'>

                {/* <AccordianTwo items={ChapterArray.items} onClickItem={(item) => { onItemClicked(item) }} /> */}
                {ChapterArray.modules.map((module, index) => (
                    <AccordianNew
                        key={module.courseModule_id}
                        title={module.name}
                        type='module'

                        isLearn={isLearn}
                        onOpenfuncObj={{
                            func: () => {
                                onCounterChange(counterindex.index, index, 0)
                            }
                        }}
                        defaultvalue={counterindex.modules.index === index}
                        item={{ totaldocuments: '55', videoTime: '45' }}
                        content={
                            <>
                                <div className={`bg-[#191919] `}>
                                    {module.page_and_video_list?.length > 0 && (
                                        <>
                                            {module.page_and_video_list.map((pages, cindex) => (
                                                <div className={`${counterindex?.modules?.content?.index === cindex && counterindex?.modules.index === index ? `border-2 border-white` : ""} bg-transparent `}>

                                                    <div className='bg-transparent flex justify-between items-center border border-transparent border-b-[#292929] p-[15px] capitalize cursor-pointer'
                                                        onClick={() => {
                                                            console.log(
                                                                pages?.course_module_page_id
                                                                    ? "page"
                                                                    : pages?.course_module_videos_id
                                                                        ? "video"
                                                                        : "default"
                                                            );
                                                            if (pages?.course_module_page_id) {
                                                                onItemClicked({ type: 'content', content: pages.description, quizes: pages.modules_questions }, cindex)
                                                            }
                                                            if (pages?.course_module_videos_id) {
                                                                onItemClicked({ type: 'video', content: pages.video_url, quizes: pages.modules_questions }, cindex)
                                                            }
                                                        }}
                                                    >
                                                        <div className='flex shrink-0 items-center bg-transparent'>


                                                            {pages?.course_module_page_id &&

                                                                <span className={`bg-transparent mr-[5px]`}>
                                                                    <Image src={'/asset/doc.svg'} height={22} width={18} className='bg-transparent' />
                                                                </span>
                                                            }
                                                            {pages?.course_module_videos_id &&

                                                                <span className={`bg-transparent mr-[5px]`}>
                                                                    <Image src={'/asset/vid.svg'} height={22} width={18} className='bg-transparent' />
                                                                </span>
                                                            }

                                                            <h3 className='text-white bg-transparent ml-[8px]'>{pages.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                    {module.modules_questions.length > 0 && (
                                        <>
                                            <div className={`${counterindex?.modules?.content?.index === module?.page_and_video_list?.length ? `border-2 border-white` : "border border-transparent border-b-[#292929] "} bg-transparent flex justify-between items-center p-[15px] capitalize `}
                                                onClick={() => { onItemClicked({ type: 'recapquiz', content: '', quizes: module.modules_questions }, module?.page_and_video_list?.length) }}
                                            >
                                                <div className={` flex shrink-0 items-center bg-transparent cursor-pointer`}
                                                >


                                                    {/* {pages?.course_module_page_id &&

                                                                <span className={`bg-transparent mr-[5px]`}>
                                                                    <Image src={'/asset/doc.svg'} height={22} width={18} className='bg-transparent' />
                                                                </span>
                                                            }
                                                            {pages?.course_module_videos_id &&

                                                                <span className={`bg-transparent mr-[5px]`}>
                                                                    <Image src={'/asset/vid.svg'} height={22} width={18} className='bg-transparent' />
                                                                </span>
                                                            } */}
                                                    <div className='w-[22px] '></div>

                                                    <h3 className='text-white bg-transparent ml-[8px]'>Recap Questions</h3>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        }
                    />
                ))}
            </div>
        </div>
    )
}

export default AccordianForPlayerSection