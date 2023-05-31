import Image from 'next/image'
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
export function Customswitch2() {
    const [first, setfirst] = useState(false)
    return (
        <div className='cursor-pointer relative flex rounded-full border border-[#3C3C3C] w-[220px] px-[1px] py-[2px]'>
            <div className='bg-transparent z-10 flex px-[20px] py-[8px] items-center rounded-full w-[110px] ' onClick={() => { setfirst(false) }} >
                <div className='relative h-[26px] w-[26px] bg-transparent'>
                    <Image src={'/asset/notesvg.svg'} fill className='object-contain bg-transparent' />
                </div>
                <p className='not-italic font-normal text-[16px] font-Inter ml-[8px] text-white bg-transparent'>Read</p>
            </div>
            <div className='bg-transparent z-10 flex px-[10px] py-[2px] items-center w-[100px] rounded-full' onClick={() => { setfirst(true) }}>
                <div className='relative h-[26px] w-[26px] bg-transparent'>
                    <Image src={'/asset/videocircle.png'} fill className='object-contain bg-transparent' />
                </div>
                <p className='not-italic font-normal text-[16px] font-Inter ml-[8px] text-white bg-transparent'>Watch</p>
            </div>
            <div className={`bg-[#3C3C3C] w-[110px] absolute h-[90%] rounded-full ${first ? ' translate-x-[106px]' : 'translate-x-0'} transition duration-200 ease-in-out transform`}>

            </div>
        </div>
    )
}
export function Customswitch3() {
    const [first, setfirst] = useState(false)
    return (
        <div className='cursor-pointer relative flex rounded-full border border-[#3C3C3C] w-[420px] px-[1px] py-[2px]'>
            <div className='bg-transparent z-10 flex px-[20px] py-[4px] items-center rounded-full w-[210px] ' onClick={() => { setfirst(false) }} >
                <div className='relative h-[26px] w-[26px] bg-transparent'>
                    <Image src={'/asset/notesvg.svg'} fill className='object-contain bg-transparent' />
                </div>
                <p className='not-italic font-normal text-[14px] font-Inter ml-[8px] text-white bg-transparent'>Upload Read Content</p>
            </div>
            <div className='bg-transparent z-10 flex px-[10px] py-[4px] items-center w-[200px] rounded-full' onClick={() => { setfirst(true) }}>
                <div className='relative h-[26px] w-[26px] bg-transparent'>
                    <Image src={'/asset/videocircle.png'} fill className='object-contain bg-transparent' />
                </div>
                <p className='not-italic font-normal text-[14px] font-Inter ml-[8px] text-white bg-transparent'>Upload Video Content</p>
            </div>
            <div className={`bg-[#3C3C3C] w-[210px] absolute h-[90%] rounded-full ${first ? ' translate-x-[206px]' : 'translate-x-0'} transition duration-200 ease-in-out transform`}>

            </div>
        </div>
    )
}