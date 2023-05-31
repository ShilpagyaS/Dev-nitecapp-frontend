import Image from 'next/image'
import React from 'react'

function ModuleAdminCard({ onEditButtonClick, onDeleteButtonClick }) {
    return (
        <div className='max-w-[388px] w-full h-[144px] flex items-center p-[12px] rounded-[20px] border border-[#3C3C3C]'>
            <div className='relative h-[120px] w-[120px] rounded-[12px]'>
                <Image src={'/asset/ma.png'} fill className='rounded-[12px] object-cover' />
            </div>
            <div className='flex flex-col w-[75%] h-full'>
                <div className='w-full flex items-center justify-end '>
                    <Image src={'/asset/EditVector.svg'} height={20} width={20} className='cursor-pointer' onClick={() => { onEditButtonClick() }} />
                </div>
                <div className='flex flex-col pl-[20px] h-[80%] justify-center'>
                    <h1 className='not-italic font-Inter text-[18px] font-[700] text-white'>Heading</h1>
                    <p className='not-italic font-Inter text-[14px] font-[400] text-[#959595]'>Lorem ipsum dolor sit amet, consectetur ...</p>

                </div>
                <div className='w-full flex items-center justify-end '>
                    <Image src={'/asset/DeleteVector.svg'} height={20} width={20} className='cursor-pointer' onClick={() => { onDeleteButtonClick() }} />

                </div>
            </div>
        </div>
    )
}

export default ModuleAdminCard