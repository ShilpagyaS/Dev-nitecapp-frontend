import React from 'react'

function Bigbutton({ colorTrue, onClickHandle, text }) {
    return (
        <div className={`w-[250px] flex rounded-full items-center justify-center not-italic font-semibold text-[20px] font-Inter py-[15px] cursor-pointer ${colorTrue ? 'bg-primary-base' : 'bg-[#2E2E2E] text-white'}`} onClick={onClickHandle}>
            {text}
        </div>
    )
}
export function Bigbutton2({ colorTrue, onClickHandle, text }) {
    return (
        <div className={`sm:w-[350px] w-full sm:p-0 p-4 flex rounded-full items-center justify-center not-italic font-semibold text-[20px] font-Inter sm:py-[15px] cursor-pointer ${colorTrue ? 'bg-primary-base' : 'bg-[#2E2E2E] text-white'}`} onClick={onClickHandle}>
            {text}
        </div>
    )
}

export default Bigbutton