import CourceSlider from '@/Admin/AdminDashboard-comp/CourceSlider'
import IndicatorSlider from '@/Admin/AdminDashboard-comp/IndicatorSlider'
import LearnSection from '@/Admin/AdminDashboard-comp/LearnSection'
import ResumeCourseSection from '@/Admin/AdminDashboard-comp/ResumeCourseSection'
import BigFlashcard from '@/utils/Cards/Learnsection/BigFlashcard'
import DashboardLiberaryCard from '@/utils/Cards/Learnsection/DashboardLiberaryCard'
import Image from 'next/image'
import React from 'react'
import LIberaryComponents from './LIberaryComponents'

function Learn() {
    return (
        <div>
            {/* <BigFlashcard /> */}
            {/* <DashboardLiberaryCard completionPercentageOuter={37} /> */}
            <ResumeCourseSection />
            <div className="flex items-center mb-[33px] mt-[35px]">

                <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                    {`Learning Liberary`}
                </h5>
                <Image src={'/asset/Vector 5.svg'} height={15} width={8} className={'ml-[20px]'} />
            </div>
            <LIberaryComponents />
            <IndicatorSlider />
        </div>
    )
}

export default Learn