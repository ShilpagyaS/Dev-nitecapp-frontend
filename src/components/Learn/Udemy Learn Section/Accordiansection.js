import Accordion from '@/utils/Accordian/Accordian'
import React from 'react'

function Accordiansection({ arrayItems, }) {
    return (
        <div className='w-full mt-[25px] '>
            <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                Coruse Content
            </p>
            <div className='w-full border border-[#404040] '>
                <Accordion items={arrayItems} />
            </div>


        </div>
    )
}

export default Accordiansection