import Breadcrumb from '@/components/Breadcrumb'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React, { useState } from 'react'
import UdemyLiberaryBanner from '@/utils/Cards/Learnsection/UdemyLiberaryBanner'
import UdemyLiberaryCourseInfoSection from '@/utils/Cards/Learnsection/UdemyLiberaryCourseInfoSection'
import Image from 'next/image'
import Accordiansection from './Accordiansection'
import LiberaryStartScrreen from './LiberaryStartScrreen'

function LearnSection() {
    const items = [
        {
            title: 'Introduction and basics of bar ',
            // content: 'Content for Item 1',
            type: 'chapter',
            totaldocuments: 4,
            videoTime: '06.35',
            items: [
                {
                    title: 'Module Item 1',
                    type: 'module',
                    totaldocuments: 4,
                    videoTime: '06.35',
                    // content: 'Content for Nested Item 1',
                    items: [
                        {
                            title: 'Nested Video',
                            type: 'video',
                            videoTime: '06.35',
                            content: 'Content for Module Item 1 Video',
                        },
                        {
                            title: 'Nested content',
                            type: 'content',
                            content: 'Content for  Module Item 1 Content',
                        },
                        {
                            title: 'Nested Content 2',
                            type: 'content',
                            content: 'Content for Nested Nested Item 2',
                        },
                        {
                            title: 'Nested Quiz',
                            type: 'Quiz',
                            content: 'Content for Nested Nested Item 2 QUIZ',
                        },
                    ],
                },
                {
                    title: 'Module Item 2',
                    type: 'module',
                    content: 'Content for Nested Item 2',
                },
            ],
        },
        {
            title: 'Ingredients Mixup',
            content: 'Content for Item 2',
            type: 'chapter',
        },
        {
            title: 'Item 3',
            // content: 'Content for Item 3',
            totaldocuments: 4,
            videoTime: '06.35',
            type: 'chapter',
            items: [
                {
                    title: 'Nested Item 3',
                    content: 'Content for Nested Item 3',
                    type: 'module',
                    items: [
                        {
                            title: 'Nested Nested Item 1',
                            type: 'video',
                            videoTime: '06.35',
                            // content: 'Content for Nested Nested Item 1',
                        },
                        {
                            title: 'Nested Nested Item 2',
                            type: 'content',
                            // content: 'Content for Nested Nested Item 2',
                        },
                    ],
                },
            ],
        },
    ]
    const [isStartLearning, setStartLearning] = useState(false)
    return (
        <div className='h-full w-full'>
            {/* Banner */}
            {
                !isStartLearning &&

                <>
                    <UdemyLiberaryBanner startLearncClick={() => { setStartLearning(true) }} />
                    <UdemyLiberaryCourseInfoSection />
                    <div className='courseIncludes w-full mt-[20px]'>
                        <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                            This course Includes:
                        </p>
                        <div className=' w-full grid grid-cols-3'>
                            <div className='w-full flex '>
                                <span>
                                    <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                </span>
                                <p className='text-white'>
                                    65.5 hours on-demand video
                                </p>
                            </div>
                            <div className='w-full flex '>
                                <span>
                                    <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                </span>
                                <p className='text-white'>
                                    65.5 hours on-demand video
                                </p>
                            </div>
                            <div className='w-full flex '>
                                <span>
                                    <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                </span>
                                <p className='text-white'>
                                    65.5 hours on-demand video
                                </p>
                            </div>
                            <div className='w-full flex '>
                                <span>
                                    <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                </span>
                                <p className='text-white'>
                                    65.5 hours on-demand video
                                </p>
                            </div>

                        </div>
                    </div>
                    <Accordiansection arrayItems={items} />
                </>
            }
            {isStartLearning &&

                <LiberaryStartScrreen itemsArray={items} />

            }
        </div>
    )
}

export default LearnSection