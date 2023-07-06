import Breadcrumb from '@/components/Breadcrumb'
import LiberaryStartScrreen from '@/components/Learn/Udemy Learn Section/LiberaryStartScrreen'
import { AddChapter, AddContentEditor, AddDetails, AddModule, AddModuleContent, EditChapter, EditCourse, EditModule, EditModuleContent, VideoPreview } from '@/components/modal/LearnModals'
import { AddOneQuestion } from '@/components/modal/Quizmodal'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import AdminAcordion from '@/utils/Accordian/AdminAcordion'
import Image from 'next/image'
import React, { useState } from 'react'
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
                        type: 'quiz',
                        content: 'Content for Nested Nested Item 2 QUIZ', // quiz array
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

function LiberaryUserUdemyDetailPage({ isPreview }) {
    const [addDetail, setAddDetails] = useState(false)
    const [addChapter, setAddChapter] = useState(false)
    const [addModule, setAddModule] = useState(false)
    const [addContent, setAddContent] = useState(false)
    const [editCourse, seteditCourse] = useState(false)
    const [editChapter, seteditChapter] = useState(false)
    const [editModule, seteditModule] = useState(false)
    const [editContent, seteditContent] = useState(false)
    const [videoPreview, setVideoPreviewModal] = useState(false)
    const [isQuiz, setisQuiz] = useState(false);
    const [quizdata, setQuizdata] = useState(
        {
            question: "",
            isActive: true,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answer: null,
            isEdit: true,
            points: 1
        }
    );

    const [isStartLearning, setStartLearning] = useState(false)
    function addDetailssunction(item) {
        console.log('Add DEtails');
        setAddDetails(true)
    }
    function editCourseFunction(item) {
        console.log('editing course');
        seteditCourse(true)
    }
    function addChapterFunction(item) {
        console.log('adding chapter');
        setAddChapter(true)
    }
    function editChapterFunction(e, item) {
        e.stopPropagation();
        console.log('editing chapter');
        seteditChapter(true)
    }
    function addModuleFunction(e, item) {
        e.stopPropagation();
        console.log('adding Module');
        setAddModule(true)
    }
    function editModuleFunction(e, item) {
        e.stopPropagation();
        console.log('editing Module');
        seteditModule(true)
    }
    function AddContentFunction(e, item) {
        e.stopPropagation();
        console.log('adding Content');
        setAddContent(true)
    }
    function EditContentFunction(e, item) {
        e.stopPropagation();
        console.log('editing Content');
    }
    return (
        <>
            {editCourse &&
                <EditCourse
                    isModalOpen={editCourse}
                    onClickCancel={() => { seteditCourse(false) }}
                    title={'Course'}
                    onSave={(data) => { }}
                    data={{}}
                />
            }
            {addChapter &&
                <AddChapter
                    isModalOpen={addChapter}
                    onClickCancel={() => { setAddChapter(false) }}
                    title={'Chapter'}
                    courseId={''}
                    onSave={() => { }}
                />
            }
            {editChapter &&
                <EditChapter
                    isModalOpen={editChapter}
                    onClickCancel={() => { seteditChapter(false) }}
                    title={'Chapter'}
                    onSave={() => { }}
                    data={{}}
                    courseId={''}
                    chapterId={''}
                />
            }
            {addModule &&
                <AddModule
                    isModalOpen={addModule}
                    onClickCancel={() => { setAddModule(false) }}
                    courseChapter_id={''}
                    courseId={''}
                    title={'Module'}
                    onSave={() => { }}
                />
            }
            {editModule &&
                <EditModule
                    isModalOpen={editModule}
                    onClickCancel={() => { seteditModule(false) }}
                    title={'Module'}
                    data={{}}
                    onSave={() => { }}
                />
            }
            {addContent &&
                <AddModuleContent
                    isModalOpen={addContent}
                    onClickCancel={() => { setAddContent(false) }}
                    title={'Module Content'}
                    onSave={() => {

                    }}
                />
            }
            {addDetail &&
                <AddDetails
                    isModalOpen={addDetail}
                    onClickCancel={() => { setAddDetails(false) }}
                    title={'Module Content'}
                    onSave={() => {

                    }}
                />
            }
            {videoPreview &&
                <VideoPreview
                    isModalOpen={videoPreview}
                    onClickCancel={() => { setVideoPreviewModal(false) }}
                    title={'Module Content'}
                    onSave={() => {

                    }}
                />
            }
            {
                isQuiz &&
                <AddOneQuestion
                    data={quizdata}
                    setdata={setQuizdata}
                    isModalOpen={isQuiz}
                    onClickCancel={() => setisQuiz(false)}
                />
            }
            {/* {addContent &&
                <AddContentEditor
                    isModalOpen={addContent}
                    onClickCancel={() => { setAddContent(false) }}
                    title={'Module Content'}
                    onSave={() => {

                    }}
                />
            } */}
            <div>
                {/* Banner  */}
                {
                    !isStartLearning &&

                    <>
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
                                <button
                                    type={'button'}
                                    className={` bg-primary-base text-black h-[40px] flex items-center justify-center rounded-full font-semibold font-Inter  text-[16px] w-[150px]`}
                                    onClick={() => { setStartLearning(true) }}
                                >
                                    Preview
                                </button>
                            </div>
                            <div className="editbutton cursor-pointer flex items-center justify-center bg-primary-base p-2 rounded-full w-fit absolute bottom-0 right-1 " onClick={() => { editCourseFunction() }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" className="bg-transparent" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.47275 15.4172H17.25V17.2506H0.75V13.3611L9.825 4.28615L13.7135 8.17648L6.47183 15.4172H6.47275ZM11.1202 2.9909L13.0654 1.04573C13.2373 0.873883 13.4704 0.777344 13.7135 0.777344C13.9566 0.777344 14.1897 0.873883 14.3616 1.04573L16.9548 3.63898C17.1267 3.81088 17.2232 4.044 17.2232 4.28706C17.2232 4.53013 17.1267 4.76325 16.9548 4.93515L15.0097 6.8794L11.1212 2.9909H11.1202Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        {/* What youll learn   */}
                        <div className='min-h-[10px] flex flex-col w-full border border-[#5C5C5C] mt-[20px] p-[25px]'>
                            <div className='flex w-full items-center justify-between'>

                                <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                                    What you'll learn
                                </p>
                                {/* <ConditionalButton label={'Add / Edit Details'} condition={true} onClickHandler={() => { }} /> */}
                                <div className='flex items-center cursor-pointer' onClick={() => { addDetailssunction() }}>

                                    <span className={`bg-transparent mr-[3px]`}>
                                        {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                            <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                        </svg>

                                    </span>
                                    <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add / Edit Details</p>
                                </div>

                            </div>
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
                            <div className='w-full flex items-center justify-between'>

                                <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                                    Course Content
                                </p>
                                <div className='flex items-center cursor-pointer' onClick={() => { addChapterFunction() }}>

                                    <span className={`bg-transparent mr-[3px]`}>
                                        {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                            <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                        </svg>

                                    </span>
                                    <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add chapter</p>
                                </div>
                            </div>
                            <div className='w-full border border-[#404040] '>
                                <AdminAcordion
                                    onEditChapter={(e) => { editChapterFunction(e) }}
                                    onaddContent={(e) => { AddContentFunction(e) }}
                                    onAddmodule={(e) => { addModuleFunction(e) }}
                                    onEditmodule={(e) => { editModuleFunction(e) }}
                                    onEditContent={(e) => { EditContentFunction(e) }}
                                    videoPreviewClick={() => { setVideoPreviewModal(true) }}
                                    addquiz={() => { setisQuiz(true) }}
                                    items={items} />
                            </div>


                        </div>
                    </>
                }
                {isStartLearning &&

                    <LiberaryStartScrreen itemsArray={items} isPreview={true} onCancelClick={() => { setStartLearning(false) }} />

                }
            </div>
        </>
    )
}

export default LiberaryUserUdemyDetailPage