import { emptycourses, getCourses } from '@/store/slices/learnslice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'
import LIberaryComponents from './LIberaryComponents'

function LiberaryAll() {
    const [courses, setcourses] = useState([])
    const { liberarycourse } = useSelector((state) => state.learn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    useEffect(() => {
        console.log(liberarycourse);
        if (liberarycourse) {

            let dummy = liberarycourse?.map(
                (element) => {
                    return {
                        id: element.course_id,
                        img: element.image,
                        name: element.name,
                        progress: element.course_completed,
                        desc: element.description,
                    }

                }
            ) || []
            setcourses([...dummy])
        }
    }, [liberarycourse])
    return (
        <div className='w-full'>
            <Breadcrumb />
            <div className="flex items-center mb-[33px]">

                <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                    {`Library`}
                </h5>
            </div>
            <LIberaryComponents allCourses={courses} />
        </div>
    )
}

export default LiberaryAll