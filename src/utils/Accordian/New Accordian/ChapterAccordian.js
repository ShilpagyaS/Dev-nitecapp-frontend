import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AccordianNew from './AccordianNew';

function ChapterAccordian({ chapters }) {
    const [arr, setArr] = useState([])
    useEffect(() => {
        if (chapters.length) {

            setArr(chapters)
        }
    }, [chapters])

    return (

        <div className='w-full mt-[25px] '>
            <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                Course Content
            </p>
            <div className='w-full border border-[#404040] '>
                {arr.length > 0 &&
                    <>

                        {arr.map((chapter) => (
                            <AccordianNew
                                key={chapter.courseChapter_id}
                                title={chapter.name}
                                type='chapter'
                                item={{ totaldocuments: chapter.pages_count, videoTime: chapter.video_count }}
                                content={chapter.modules.map((module) => (
                                    <AccordianNew
                                        key={module.courseModule_id}
                                        title={module.name}
                                        type='module'
                                        item={{ totaldocuments: module.pages_count, videoTime: module.video_count }}
                                        content={
                                            <>
                                                <div className='bg-[#191919] '>
                                                    {module.page_and_video_list?.length > 0 && (
                                                        <>
                                                            {module.page_and_video_list.map((pages) => (
                                                                <div className='bg-transparent flex justify-between items-center cursor-pointer border border-transparent border-b-[#292929] p-[15px] capitalize '
                                                                    onClick={() => {
                                                                        console.log(
                                                                            pages?.course_module_page_id
                                                                                ? "page"
                                                                                : pages?.course_module_videos_id
                                                                                    ? "video"
                                                                                    : "default"
                                                                        );
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
                            />
                        ))}
                    </>}
            </div>
        </div>
    );
};

export default ChapterAccordian