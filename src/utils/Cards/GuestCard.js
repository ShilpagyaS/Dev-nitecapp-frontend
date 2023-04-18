import Image from 'next/image'
import React from 'react'

function GuestCard({ image, name, onClickHandler }) {
    return (
        <div className='cursor-pointer px-[5px] sm:w-[140px] sm:h-[175px] border border-[#3C3C3C] rounded-[5px] flex flex-col m-[10px] justify-center items-center'
            onClick={onClickHandler}
        >
            <div className='relative sm:w-[93px] sm:h-[93px] rounded-full'>
                <Image src={image || '/asset/User avatar default.png'}
                    alt='userImage' fill className='object-contain rounded-full' />
            </div>
            <div className='w-full text-center'>

                <h3 className='w-full not-italic font-Inter font-semibold text-[16px] text-white mt-[19px] truncate'>
                    {name}
                </h3>
            </div>
        </div>
    )
}

export default GuestCard