import React from 'react'

function Buttons({ onClickHandler, label }) {
    return (
        <div className='pt-[26px]'>
            <button className='bg-[#F19B6C] py-[12px] px-[24px] h-[54px] w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full hover:bg-[#ee854d] text-black gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]' onClick={onClickHandler}>
                {label}
            </button>

        </div>
    )
}

export default Buttons

export function ConditionalButtons({ onClickHandler, condition, label }) {
    return (
        <div className='pt-[26px]'>
            <button className={` ${condition == true ? 'bg-[#F19B6C]' : 'bg-[#3E3E3E]'} py-[12px] px-[24px] h-[54px]w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full ${condition == true ? 'hover:bg-[#ee854d] ' : 'disabled:hover:bg-[#ee854d] cursor-no-drop '} text-black gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]`} onClick={onClickHandler}>
                {label}
            </button>

        </div>
    )
}
