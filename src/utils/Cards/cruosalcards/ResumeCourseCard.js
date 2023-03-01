import React from 'react'

function ResumeCourseCard({ completionPercentage }) {
    return (
        <div className='flex flex-col items-start justify-center p-2 w-[138px] h-[197px] border border-[#3C3C3C] rounded-[12px]'>
            <div className='w-[118px] h-24 bg-gray-400 rounded-lg'>

            </div>
            <div className='w-24 h-10 not-italic font-bold text-sm text-white mt-[9px]'>
                Psychology of Hospitality
            </div>
            <div className='flex flex-row justify-start items-center w-[109px] h-[4px] bg-white rounded-[18px] mt-[16px]'>
                <div className='bg-[#F19B6C] h-full' style={{ width: `${completionPercentage * 109 / 100}px` }}></div>
            </div>

        </div>
    )
}

export default ResumeCourseCard