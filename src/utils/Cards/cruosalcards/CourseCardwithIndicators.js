import Image from 'next/image'
import React from 'react'

function CourseCardwithIndicators() {
    return (
        <div className='flex flex-col items-start justify-center p-2 w-[138px] h-48 border border-[#3C3C3C] rounded-[12px]'>
            <div className='w-[118px] h-24 bg-gray-400 rounded-lg relative'>
                <Image
                    src="/asset/youtubeplaybutton.svg"
                    width={31.4}
                    height={20.66}
                    className="mr-3 absolute bottom-[12px] right-[0px] rounded-[4px]"
                />
            </div>
            <div className='w-24 h-10 not-italic font-bold text-sm text-white mt-[9px]'>
                Psychology of Hospitality
            </div>
            <div className='flex flex-row justify-center items-center w-[109px] h-[4px] bg-white rounded-[18px] mt-[16px]'>

            </div>

        </div>)
}

export default CourseCardwithIndicators