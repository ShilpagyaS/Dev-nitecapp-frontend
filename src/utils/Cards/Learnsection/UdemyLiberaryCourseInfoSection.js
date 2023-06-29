import Image from 'next/image';
import React from 'react'

function UdemyLiberaryCourseInfoSection() {
    const points = [
        'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
        'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
        'How to make perfect beer quantity  ',
        'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
        'How to make perfect beer quantity of ingredients, mixture of water, soda and fruits. ',
    ]
    let x = Math.ceil(points.length / 2)
    console.log(points.slice(0, x), points.slice(x));
    return (
        <div className='min-h-[10px] flex flex-col w-full border border-[#5C5C5C] mt-[20px] p-[25px]'>
            <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                What you'll learn
            </p>
            <div className='bulletsPoints grid grid-cols-2'>
                <div className='w-full flex flex-col'>
                    {
                        points.slice(0, x).map((bullet) =>
                            <div className='w-full flex '>
                                <span>
                                    <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                </span>
                                <p className='text-white'>
                                    {bullet}
                                </p>
                            </div>

                        )
                    }

                </div>
                <div className='w-full flex flex-col'>
                    {
                        points.slice(x).map((bullet) =>
                            <div className='w-full flex '>
                                <span>
                                    <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                </span>
                                <p className='text-white'>
                                    {bullet}
                                </p>
                            </div>

                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default UdemyLiberaryCourseInfoSection