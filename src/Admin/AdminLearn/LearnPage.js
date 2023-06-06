import LIberaryComponents from '@/components/Learn/LIberaryComponents'
import { AddCourse } from '@/components/modal/LearnModals'
import { emptycourses, getCourses } from '@/store/slices/learnslice'
import ModuleAdminCard from '@/utils/Cards/Learnsection/ModuleAdminCard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function LearnPage() {
    const [addCourseButton, setAddCourse] = useState(false)
    const [courses, setcourses] = useState([])
    const { course } = useSelector((state) => state.learn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    useEffect(() => {
        console.log(course);
        let dummy = course?.map(
            (element) => {
                return {
                    id: element.course_id,
                    img: element.image,
                    name: element.name,
                    progress: 30,
                    desc: element.description,
                } 

            }
        ) || []
        setcourses([...dummy])
    }, [course])
    return (
        <>
            {addCourseButton &&
                <AddCourse
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Course'}
                    onSave={() => { }}
                />
            }
 
            <div>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center mb-[33px] mt-[35px]">

                        <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                            {`Learning Library`}
                        </h5>
                        <Image src={'/asset/Vector 5.svg'} height={15} width={8} className={'ml-[20px]'} />
                    </div>
                    <ChipWithLeftButton condition={true} label={'Add Course'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                </div>
                <LIberaryComponents allCourses={courses} isAdmin={true}/>
            </div>
        </>
    )
}

export default LearnPage