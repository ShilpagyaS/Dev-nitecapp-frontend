import AccordianTwo from '@/utils/Accordian/AccordianTwo'
import AccordianNew from '@/utils/Accordian/New Accordian/AccordianNew'
import Image from 'next/image'
import React from 'react'

function AccordianForPlayerSection({ ChapterArray, onItemClicked, onRightClick, onLeftClick, isLearn }) {
    return (
        <div>
            <div className='bg-[#0F0F0F] text-white p-[5px] min-h-[50px] flex items-center justify-between'>
                <div className={`bg-transparent flex items-center cursor-pointer`} onClick={() => { onLeftClick() }}>
                    <Image src={'/asset/LearnRightArrowKey.svg'} height={22} width={18} className='bg-transparent rotate-180  ' />
                </div>
                <p className='text-white bg-transparent px-[10px]'>{`Chapter: ${ChapterArray.name}`} </p>

                <span className={`bg-transparent flex items-center justify-center cursor-pointer`} onClick={() => { onRightClick() }}>
                    <Image src={'/asset/LearnRightArrowKey.svg'} height={22} width={18} className='bg-transparent' />
                </span>
            </div>
            <div className='max-h-[320px] h-[320px] overflow-auto hidescrollbar'>

                {/* <AccordianTwo items={ChapterArray.items} onClickItem={(item) => { onItemClicked(item) }} /> */}
                {ChapterArray.modules.map((module) => (
                    <AccordianNew
                        key={module.courseModule_id}
                        title={module.name}
                        type='module'
                        isLearn={isLearn}
                        item={{ totaldocuments: '55', videoTime: '45' }}
                        content={
                            <>
                                <div className='bg-[#191919] '>
                                    {module.page_and_video_list?.length > 0 && (
                                        <>
                                            {module.page_and_video_list.map((pages) => (
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
                                                            onItemClicked({ type: 'content', content: pages.description })
                                                        }
                                                        if (pages?.course_module_videos_id) {
                                                            onItemClicked({ type: 'video', content: pages.video_url })
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
                                            ))}
                                        </>
                                    )}
                                    {module.modules_questions.length > 0 && (
                                        <>
                                            <div className='bg-transparent flex justify-between items-center border border-transparent border-b-[#292929] p-[15px] capitalize '
                                                onClick={() => {

                                                }}
                                            >
                                                <div className='flex shrink-0 items-center bg-transparent'>


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
                                                    <div className='w-[22px]'></div>

                                                    <h3 className='text-white bg-transparent ml-[8px]'>Recape Questions</h3>
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