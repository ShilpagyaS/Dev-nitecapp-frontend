import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function ResumeCourseCard({ completionPercentageOuter, data }) {
    const [completionPercentage, setcompletepercentage] = useState(null)
    useEffect(() => {
        if (completionPercentageOuter) {
            setTimeout(() => {
                setcompletepercentage(completionPercentageOuter)
            }, 1000);
        }
    }, [])
    return (
        <div className='flex flex-col items-start justify-center p-2 w-[138px] h-[197px] border border-[#3C3C3C] rounded-[12px]'>
            <div className='w-[118px] h-24 bg-gray-400 rounded-lg relative '>
                {/* <Image src={data.image } fill priority/> */}
            </div>
            <div className='w-24 h-10 not-italic font-bold text-sm text-white mt-[9px]'>
                {data?.name || 'Psychology of Hospitality'}
            </div>
            <div className='flex flex-row justify-start items-center w-[109px] h-[4px] bg-white rounded-[18px] mt-[16px]'>
                <div className='bg-primary-base h-full transition-all duration-300 ease-in-out ' style={{ width: `${completionPercentage ? completionPercentage : 0}%` }}></div>
            </div>

        </div>
    )
}

export default ResumeCourseCard