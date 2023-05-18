import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function DashboardLiberaryCard({ completionPercentageOuter, image, name, desc }) {
    const [completionPercentage, setcompletepercentage] = useState(null)
    useEffect(() => {
        if (completionPercentageOuter) {
            setTimeout(() => {
                setcompletepercentage(completionPercentageOuter)
            }, 1000);
        }
    }, [])

    return (
        <div className='max-w-[373px] w-full h-[293px] border border-[#3C3C3C] rounded-[13px] px-[6px] py-[8px] cursor-pointer'>
            <div className='imagecontainer relative max-w-[360px] w-[100%] h-[152px]'>
                <Image src={image} fill className='rounded-[8px] object-cover' />
                <div className='absolute h-full w-full bg-[#00000087] flex items-center justify-center'>

                    <p className='not-italic font-[500] text-[24px] font-Inter text-white bg-transparent w-[200px]'>{name} </p>
                </div>

            </div>
            <p className='not-italic font-normal text-[16px] font-Inter text-[#959595] mt-[15px]'>
                {desc}
            </p>
            <div className='flex items-center justify-end not-italic font-normal text-[14px] font-Inter text-[#959595] mx-[10px] '>
                {`${completionPercentage ? completionPercentage : 0}% Complete`}
            </div>
            <div className='w-full px-[10px]'>

                <div className='flex flex-row justify-start items-center w-full h-[4px] bg-[#2F2F2F] rounded-[18px] mt-[16px]'>
                    <div className='bg-primary-base h-full transition-all duration-300 ease-in-out ' style={{ width: `${completionPercentage ? completionPercentage : 0}%` }}></div>
                </div>
            </div>

        </div>
    )
}

export default DashboardLiberaryCard