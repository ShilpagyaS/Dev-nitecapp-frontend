import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import React from 'react'

function UdemyLiberaryBanner({ startLearncClick, data }) {
    return (
        <div className='w-full h-full flex flex-col relative '>
            <div className=' min-h-[250px] h-full w-full relative '>
                <Image src={'/asset/BannerLearnCourse.png'} fill className='h-full w-full object-cover' />
            </div>
            <div className='absolute w-full h-full flex flex-col justify-between top-0 bg-transparent p-[20px] pt-[2px]'>
                <div className='bg-transparent'>

                    <Breadcrumb />
                    <p className='text-[22px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                        {data?.name}
                    </p>
                    <p className='text-[16px] text-white font-thin bg-transparent '>
                        {data?.description}
                    </p>
                </div>
                <p className='text-[14px] font-Inter text-white font-normal bg-transparent my-[10px]'>
                    Created By : <span className='text-primary-base bg-transparent'>{data?.instructor_name}</span>
                </p>
                <button
                    type={'button'}
                    className={` bg-primary-base text-black h-[40px] flex items-center justify-center rounded-full font-semibold font-Inter  text-[16px] w-[150px]`}
                    onClick={() => { startLearncClick() }}
                >
                    Start Learning
                </button>
            </div>

        </div>
    )
}

export default UdemyLiberaryBanner