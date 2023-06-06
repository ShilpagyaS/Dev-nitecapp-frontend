import { emptycourses, getCoursesDetail } from '@/store/slices/learnslice'
import LibraryDetailcard from '@/utils/Cards/Learnsection/LibraryDetailcard'
import { Customswitch2 } from '@/utils/customswitch'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'

function LibraryDetailPage({ courseId }) {
    const { courseDetail } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoursesDetail(courseId))
        return () => {
            dispatch(emptycourses())
        }
    }, [])

    return (
        <div>
            <Breadcrumb />
            <h2 className="text-white text-[24px] leading-9 font-bold mb-[20px] ">
                {courseDetail?.name}
            </h2>
            <div className='relative w-full h-[243px] rounded-md'>
                <Image src={courseDetail?.image || ""} fill className='object-cover rounded-md' />


            </div>
            <div className='my-[24px]'>

                <Customswitch2 />
            </div>
            {
                courseDetail?.chapters?.map((chapter) =>
                    <LibraryDetailcard chapter={chapter} courseId={courseId} courseName={courseDetail?.name} isAdmin={false} />
                )
            }

        </div>
    )
}

export default LibraryDetailPage