import React, { useState } from 'react'

function Customswitch({ first, setfirst }) {
    return (
        <div className='cursor-pointer relative flex ' >
            <div className={`px-4 py-2 border-t-[2px] border-l-[2px] border-b-[2px] ${first ? 'text-[#959595]' : 'text-primary-base'} border-[#959595] font-semibold rounded-l-full`} onClick={() => { setfirst(false) }}>Detail</div>
            <div className={`px-4 py-2 border-t-[2px] border-r-[2px] border-b-[2px] border-[#959595] ${!first ? 'text-[#959595]' : 'text-primary-base'} font-semibold rounded-r-full`} onClick={() => { setfirst(true) }}>Recipe</div>
            <div className={`absolute px-4 py-2 bg-transparent z-10 border-[3px] border-primary-base rounded-full ${first ? 'translate-x-[74px]' : 'translate-x-0'} h-full w-[53%] transition duration-200 ease-in-out transform `} ></div>
        </div>
    )
}

export default Customswitch