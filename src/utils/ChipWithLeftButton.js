import Image from 'next/image'
import React from 'react'

function ChipWithLeftButton({ label, condition, srcPath, onClickHandler }) {
    return (
        <div className={`h-[41.1px] cursor-pointer rounded-full ${condition ? 'bg-[#F19B6C]' : 'bg-[#3E3E3E]'} flex flex-row items-center px-[24px] py-[7px] justify-center`}
            onClick={onClickHandler} >

            <Image
                src={srcPath}
                width={20}
                height={20}
                className="bg-transparent"
            />
       
            <p className='not-italic font-semibold text-sm leading-6 text-black bg-transparent tracking-[-0.374932px] ml-[15px]'>{label}</p>
        </div>
    )
}

export default ChipWithLeftButton
export function CustomChipWithLeftButton({ label, condition, srcPath, onClickHandler }) {
    return (
        <div className={`h-[41.1px] cursor-pointer rounded-full ${condition ? 'bg-[#F19B6C]' : 'bg-[#3E3E3E]'} flex flex-row items-center px-[24px] py-[7px] justify-center`}
            onClick={onClickHandler} >

            <Image
                src={srcPath}
                width={12}
                height={11}
                className="bg-transparent"
            />
            <p className='not-italic font-semibold text-sm leading-6 text-black bg-transparent tracking-[-0.374932px] ml-[15px]'>{label}</p>
        </div>
    )
}
