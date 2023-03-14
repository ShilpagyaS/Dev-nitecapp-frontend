import Image from 'next/image'
import React from 'react'

function ChipWithLeftButton({ label, condition, srcPath, onClickHandler }) {
    return (
        <div className={`w-[118px] h-[41.1px] cursor-pointer rounded-full bg-[#F19B6C] flex flex-row items-center pl-[11.5px] pr-[9.09px] justify-between`}
        onClick={onClickHandler}  >

            <Image
                src={srcPath}
                width={20}
                height={20}
                className="bg-[#F19B6C]"
            />
            <p className='text-black bg-[#F19B6C] not-italic font-semibold text-sm leading-6 tracking-[-0.374932px] '>{label}</p>
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
