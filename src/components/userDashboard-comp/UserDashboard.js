import React from 'react'
import { useSelector } from 'react-redux'
import IndicatorSlider from './IndicatorSlider'
import LeaderShipComponent from './LeaderShipComponent'
import LearnSection from './LearnSection'
import ResumeCourseSection from './ResumeCourseSection'
import SalesSection from './SalesSection'

function UserDashboard() {
    const {user}=useSelector((state)=>state.auth)
    return (
        <>
            <div className="Header-container flex-col flex justify-between lg:items-center md:items-center mb-8 w-full ">
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h1 className="heading text-white text-[32px] leading-tight font-semibold font-Inter">
                        Dashboard
                    </h1>
                </div>
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h5 className='text-white not-italic font-normal text-base font-Inter'>Welcome back, {user?.display_name || ""} Finish a module to continue your Streak.</h5>
                </div>
            </div>
            <LearnSection />
            <ResumeCourseSection />
            <SalesSection />
            <IndicatorSlider />
            <LeaderShipComponent />



        </>
    )
}

export default UserDashboard