import ResumeCourseCard from '@/utils/Cards/cruosalcards/ResumeCourseCard'
import React from 'react'
import CourceSlider from './CourceSlider'

function ResumeCourseSection() {
    return (
        <div className='learn-container'>
            <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[33px]'>
                Resume Courses
            </h5>
            <CourceSlider />
        </div>
    )
}

export default ResumeCourseSection