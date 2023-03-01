import { ChartVerticalBar } from '@/utils/ChartVerticalBar'
import React from 'react'

function SalesSection() {
    return (
        <div className='mt-[30px]'>
            <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[33px]'>
                Sales
            </h5>
            <div className='w-full h-[263px] border border-[#3C3C3C] rounded-[13px] ' >
                <ChartVerticalBar />
            </div>

        </div>
    )
}

export default SalesSection