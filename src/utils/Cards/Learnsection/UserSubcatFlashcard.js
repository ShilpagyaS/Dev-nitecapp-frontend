import Image from 'next/image'
import React from 'react'

function UserSubcatFlashcard({ data, onClickHandler }) {
    return (
        <div className='p-[8px] min-w-[150px] max-w-[250px] w-full h-[175px] flex flex-col border border-[#3C3C3C] rounded-[11px] cursor-pointer'
        onClick={onClickHandler}
        >
            {data?.image ?
                <div className='h-[95px] min-w-[100px] relative rounded-[12px]'>
                    <Image src={data.image} fill className='rounded-[12px] object-cover'/>

                </div>
                :
                <div className='h-[95px] min-w-[100px] w-full bg-[#D9D9D9] rounded-[12px]' >
                </div>
            }
            <div className='flex items-center justify-between relative'>
                <div className=''>
                    <h2 className='not-italic font-bold text-xs font-Inter mt-[15px] text-white ml-[10px]' >
                        {data?.name}
                    </h2>
                    <p className='not-italic font-[400] text-xs font-Inter mt-[5px] text-[#959595] ml-[10px]'>
                        {` ${data?.cardCount ? data?.cardCount : `0`} Cards`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserSubcatFlashcard