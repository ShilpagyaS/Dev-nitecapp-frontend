import Breadcrumb from '@/components/Breadcrumb'
import { AddChapter, AddModule, EditChapter } from '@/components/modal/LearnModals'
import { emptycourses, getCoursesDetail } from '@/store/slices/learnslice'
import CourseFileUpload from '@/utils/Cards/Learnsection/CourseUpload'
import LearnFileUpload from '@/utils/Cards/Learnsection/LearnUploadImage'
import LibraryDetailcard from '@/utils/Cards/Learnsection/LibraryDetailcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function LiberaryDetailPageAdmin({ courseId }) {
    const [addCourseButton, setAddCourse] = useState(false)
    const [EditaChapter, setEditChapter] = useState(false)
    const [Addmodule, setaddmodule] = useState(false)
    const [selectedData, setselectedData] = useState(false)
    const [chapterId, setChapterId] = useState(null)
    const { courseDetail } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoursesDetail(courseId))
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    useEffect(() => {
        console.log(courseDetail);
    }, [courseDetail])

    return (
        <>
            {addCourseButton &&
                <AddChapter
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Chapter'}
                    courseId={courseId}
                    onSave={() => { }}
                />
            }
            {EditaChapter &&
                <EditChapter
                    isModalOpen={EditaChapter}
                    onClickCancel={() => { setEditChapter(false) }}
                    title={'Chapter'}
                    onSave={() => { }}
                    data={selectedData}
                    courseId={courseId}
                    chapterId={chapterId}
                />
            }
            {Addmodule &&
                <AddModule
                    isModalOpen={Addmodule}
                    onClickCancel={() => { setaddmodule(false) }}
                    courseChapter_id={chapterId}
                    courseId={courseId}
                    title={'Module'}
                    onSave={() => { }}
                />
            }
            <div>
                <Breadcrumb />
                <h2 className="text-white text-[24px] leading-9 font-bold mb-[20px] ">
                    {courseDetail?.name}
                </h2>
                <div className='relative w-full h-[243px] rounded-md'>
                    {/* <Image src={'https://s3-alpha-sig.figma.com/img/9770/d818/a32e7194911e9df4c2a5d70359966994?Expires=1685318400&Signature=RgW9nRp4fhiRCAwyTeo98tdo33EC3vgMXfmNqOMGpzXAzkKLEQUIDe0FcLYdPXRMc8ctftepWNkZ2phTc3R8q1~rqhRRPO13XPmk7py3vwuL9PwqxlKo18oEd2RHzMCFmG3P65Iw4P7DbwP-6BOT6gk698mPaQJqhnwcQvjC4Xh0kANHdTwbhep6ujyrpigWZ19Bb8i78IaOBpHopz08VApgIs5eojobqZMcWQ35NuEIznUJz3ti66Ichw-9RGfn22YKTo075LRR52IOYebAggGdtudze390JoWqUDbqy6dfTN5gPfxu6vcjOlx4Fmw0YPJRLPCiF7bpnc327KggaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} fill className='object-cover rounded-md' /> */}

                    <CourseFileUpload isEdit={true} defaultImage={courseDetail?.image || null} />
                </div>
                <div className='my-[24px] flex items-center justify-end'>
                    <ChipWithLeftButton condition={true} label={'Add Chapter'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />

                </div>
                {
                    courseDetail?.chapters?.map((chapter) =>
                        <LibraryDetailcard chapter={chapter} courseId={courseId} courseName={courseDetail?.name} isAdmin={true}
                            onEditClick={() => {
                                setselectedData({
                                    course_id: courseId,
                                    name: chapter.name,
                                    description: chapter.description,
                                    image: chapter.image,
                                });
                                setChapterId(chapter.courseChapter_id);
                                setEditChapter(true)
                            }} onaddmoculeclick={() => { setChapterId(chapter.courseChapter_id); console.log(chapter.courseChapter_id); setaddmodule(true) }} />
                    )
                }
            </div>
        </>
    )
}

export default LiberaryDetailPageAdmin