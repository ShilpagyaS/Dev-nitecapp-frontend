import Image from 'next/image'
import React, { useEffect } from 'react'

function CircularProgress({ percentage, svgUrl, innerText }) {
    const circumference = 2 * 22 / 7 * 55.6
    return (
        <div className="flex items-center justify-center w-32" >
            <svg className="transform -rotate-90 w-32 h-32 ">
                <circle cx="64.5" cy="64.5" r="55.6" stroke="currentColor" stroke-width="13.9" fill="transparent"
                    className="text-[#ffffff33]" />
                <circle cx="64.5" cy="64.5" r="55.6" stroke="currentColor" stroke-width="13.9" fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - percentage / 100 * circumference}
                    className="text-primary-base " />
            </svg>
            {!svgUrl ?
                <span className="absolute not-italic font-semibold font-Inter text-2xl leading-4 text-white" >{innerText} %


                </span>
                :
                <>
                    <div className='absolute flex justify-center items-center '>
                        <p className='not-italic font-semibold font-Inter text-2xl leading-4 text-white'>
                            {innerText}
                        </p>
                        <Image
                            src={svgUrl}
                            width={14}
                            height={25}
                            className="ml-[7px]"
                        />
                    </div>
                </>}
        </div>
    )
}

export default CircularProgress
export function CircularProgressForCheckbox({ percentage, svgUrl, innerText }) {
    useEffect(() => {

    }, [percentage, innerText])

    const circumference = 2 * 22 / 7 * 35.6
    return (
        <div className="flex items-center justify-center w-[90px] relative" >
            <svg className="transform -rotate-90 w-[90px] h-[90px] ">
                <circle cx="45" cy="45" r="35.6" stroke="currentColor" stroke-width="10.9" fill="transparent"
                    className="text-[#ffffff33]" />
                <circle cx="45" cy="45" r="35.6" stroke="currentColor" stroke-width="10.9" fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - percentage / 100 * circumference}
                    className="text-primary-base " />
            </svg>
            {!svgUrl ?
                <span className="absolute not-italic font-semibold font-Inter text-[14px] leading-4 text-white w-full h-full bg-transparent flex items-center justify-center" >{innerText} %

                </span>
                :
                <>
                    <div className='absolute flex justify-center items-center '>
                        <p className='not-italic font-semibold font-Inter text-2xl leading-4 text-white'>
                            {innerText}
                        </p>
                        {
                            svgUrl &&
                            <Image
                                src={svgUrl}
                                width={14}
                                height={25}
                                className="ml-[7px]"
                            />
                        }
                    </div>
                </>}
        </div>
    )
}