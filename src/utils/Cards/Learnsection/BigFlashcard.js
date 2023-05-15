import Image from 'next/image'
import React, { useState } from 'react'

function BigFlashcard() {
    const [slide, setslide] = useState(false)
    return (
        <div className={`w-[626px] h-[430px] border border-[#3C3C3C] p-[15px] rounded-[16px] flex flex-col `}>
            <div className={`w-[594px] h-[300px] bg-[#383838] rounded-[13px] p-[31px] flex items-center justify-between transition-all duration-500 ease-in-out ${slide ? 'translate-y-1/3' : 'translate-y-0'}`}>
                <div className={`h-[200px] w-[200px] bg-[#D9D9D9] rounded-[13px] transition-all duration-500 ease-in-out ${slide ? 'opacity-0 w-0' : 'opacity-1'}`}>

                </div>
                <div className={`h-full text-center flex items-center justify-center bg-transparent pl-[20px] transition-all duration-500 ease-in-out ${slide ? 'w-full' : ''}`}>
                    <p className='font-normal font-Inter text-[18px] not-italic text-white bg-transparent'>What are the four main ingredients in Beer?</p>

                </div>
            </div>
            <div className={`w-full flex justify-center items-center transition-all duration-500 ease-in-out bg-transparent ${slide ? '-translate-y-[250px]' : 'translate-y-0 mt-[20px] '}`}>
                <div className={`relative w-[19px] h-[22px] animate-bounce cursor-pointer bg-transparent`} onClick={() => setslide(prev => !prev)}>
                    <Image src={'/asset/doubledown.svg'} fill className={`object-contain bg-transparent transition-all duration-500 ease-in-out ${slide ? 'rotate-180' : 'rotate-0 '}`} />
                </div>
            </div>


        </div>
    )
}

export default BigFlashcard