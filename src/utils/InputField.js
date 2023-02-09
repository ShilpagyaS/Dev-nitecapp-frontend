import React, { useState } from 'react'

function InputField({ placeholder, label, value, name, onChangeHandler, type }) {
    const [isfocused, setisFocused] = useState(false)
    return (
        <div className=" flex flex-col gap-[4px] items-start mb-[11px]">
            <h5 className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${isfocused == false ? 'text-[#959595]' : 'text-white'}`} >{label}</h5>

            <input className='box-border mt-[4px] py-[8px] pr-[13px] pl-[16px]  rounded-[9px] h-[50px] min-w-[302px] max-w-[302px] border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px] bg-black placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none focus:border-white  focus:ring-offset-white block w-full focus:ring-1 appearance-none' placeholder={placeholder} name={name} value={value} onChange={onChangeHandler} type={type} onFocus={(e) => { setisFocused(true) }} onBlur={(e) => { setisFocused(false) }} />
        </div>)
}

export default InputField