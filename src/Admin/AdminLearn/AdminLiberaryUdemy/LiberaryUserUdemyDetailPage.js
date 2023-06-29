import Breadcrumb from '@/components/Breadcrumb'
import AdminAcordion from '@/utils/Accordian/AdminAcordion'
import Image from 'next/image'
import React from 'react'
const points = [
    'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
    'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
    'How to make perfect beer quantity  ',
    'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
    'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
]
let x = Math.ceil(points.length / 2)
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
function LiberaryUserUdemyDetailPage() {
    function addChapter(item) {
        console.log('adding chapter');
    }
    function addModule(item) {
        console.log('adding Module');
    }
    function editChapter(item) {
        console.log('editing chapter');
    }
    function editModule(item) {
        console.log('editing Module');
    }
    function AddContent(item) {
        console.log('adding Content');
    }
    function EditContent(item) {
        console.log('editing Content');
    }
    return (
        <div>
            {/* Banner  */}
            <div className='w-full h-full flex flex-col relative '>
                <div className=' min-h-[250px] h-full w-full relative '>
                    <Image src={'/asset/BannerLearnCourse.png'} fill className='h-full w-full object-cover' />
                </div>
                <div className='absolute w-full h-full flex flex-col justify-between top-0 bg-transparent p-[20px] pt-[2px]'>
                    <div className='bg-transparent'>

                        <Breadcrumb />
                        <p className='text-[22px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                            The Complete Bar Management Short Course
                        </p>
                        <p className='text-[16px] text-white font-thin bg-transparent '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <p className='text-[14px] font-Inter text-white font-normal bg-transparent my-[10px]'>
                        Created By : <span className='text-primary-base bg-transparent'>Angela Yu</span>
                    </p>
                </div>

            </div>
            {/* What youll learn   */}
            <div className='min-h-[10px] flex flex-col w-full border border-[#5C5C5C] mt-[20px] p-[25px]'>
                <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                    What you'll learn
                </p>
                <div className='bulletsPoints grid grid-cols-2'>
                    <div className='w-full flex flex-col'>
                        {
                            points.slice(0, x).map((bullet) =>
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        {bullet}
                                    </p>
                                </div>

                            )
                        }

                    </div>
                    <div className='w-full flex flex-col'>
                        {
                            points.slice(x).map((bullet) =>
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        {bullet}
                                    </p>
                                </div>

                            )
                        }
                    </div>

                </div>
            </div>
            {/* this course include  */}
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
            {/* Accordian */}
            <div className='w-full mt-[25px] '>
                <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                    Coruse Content
                </p>
                <div className='w-full border border-[#404040] '>
                    <AdminAcordion items={items} />
                </div>


            </div>
        </div>
    )
}

export default LiberaryUserUdemyDetailPage