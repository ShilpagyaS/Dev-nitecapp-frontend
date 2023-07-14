import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function BigFlashcard({ data, reset, setResetFalse }) {
    useEffect(() => {
        if (reset) {
            setslide(false)
            setResetFalse()
        }
    }, [reset])

    const [slide, setslide] = useState(false)
    return (
        <div className={`w-[626px] h-[430px] border border-[#3C3C3C] p-[15px] rounded-[16px] flex flex-col `}>
            {/* <div className={`w-full h-[430px] border border-[#3C3C3C] p-[15px] rounded-[16px] flex flex-col `}> */}
            <div className={`w-[594px] h-[300px] bg-[#383838] rounded-[13px] p-[31px] flex items-center  transition-all duration-500 ease-in-out cursor-pointer ${slide ? 'translate-y-1/3' : 'translate-y-0'}`} onClick={() => setslide(prev => !prev)}>
                {/* <div className={`w-full h-[300px] bg-[#383838] rounded-[13px] p-[31px] flex items-center justify-between transition-all duration-500 ease-in-out ${slide ? 'translate-y-1/3' : 'translate-y-0'}`}> */}
                {data?.image ?
                    <>
                        <div className={`h-[200px] bg-transparent shrink-0 relative rounded-[13px] transition-all duration-500 ease-in-out ${slide ? 'opacity-0 w-0' : 'opacity-1 w-[200px]'}`}>
                            <Image src={data?.image} fill className='object-contain bg-transparent rounded-[13px]' />
                        </div>
                    </> :
                    <div className={`h-[200px] bg-[#D9D9D9] shrink-0 rounded-[13px] transition-all duration-500 ease-in-out ${slide ? 'opacity-0 w-0' : 'opacity-1 w-[200px]'}`}>

                    </div>
                }
                <div className={`h-full text-center flex items-center justify-center bg-transparent pl-[20px] transition-all duration-500 ease-in-out w-full`}>
                    <p className='font-normal font-Inter text-[18px] not-italic text-white bg-transparent'>{!slide ? data?.front_text : data?.flip_text}</p>

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