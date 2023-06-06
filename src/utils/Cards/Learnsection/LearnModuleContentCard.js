import Breadcrumb from '@/components/Breadcrumb';
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

function LearnModuleContentCard({ moduleId }) {
    const a = [1, 2, 3, 4]
    const [counter, setCounter] = useState(1);
    return (
        <div>
            <Breadcrumb />
            <h2 className="text-white text-[24px] leading-9 font-bold mb-[20px] ">
                Introduction to Beer
            </h2>
            <div className='w-full min-h-[500px] h-full bg-[#383838] rounded-t-[12px] mt-[20px] relative overflow-hidden'>
                <div className='w-full rounded-t-[12px] bg-transparent p-[15px] grid grid-cols-5 '>
                    <div className='col-span-2 bg-transparent'>
                        <RxCross1 size={25} color="#929292" className='bg-transparent' />
                    </div>
                    <div className='bg-transparent col-span-3'>
                        <p className='font-[700] not-italic font-Inter text-white text-[18px] bg-transparent'>Chapter Heading</p>
                    </div>
                </div>
                <div className='h-[5px] w-full bg-[#7B7B7B] relative'>
                    <div className='absolute h-full bg-white transition-all duration-500 ease-in-out' style={{ width: `${((counter) * 100) / a.length}%` }}>

                    </div>

                </div>
                <div className='flex flex-col justify-between bg-transparent'>

                    <div className='flex flex-col items-center bg-transparent w-full min-h-[370px] h-full'>
                        {a.slice(0, counter).map((a1, i) =>
                            <div className={`mt-[30px]  text-center px-[10%] h-full ${counter >= i ? 'opacity-1 w-full' : 'opacity-0 w-0'} bg-transparent transition-all duration-500 ease-in-out `}  >
                                {a1 % 2 != 0 ?
                                    <p className='font-[600] text-[14px] not-italic text-white bg-transparent '>{a1} Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.</p>
                                    :
                                    <div className='flex flex-col items-center bg-transparent'>
                                        <div className='relative  w-[90%] aspect-[16/9] rounded-md bg-transparent mb-[10px]'>
                                            <Image src={'https://s3-alpha-sig.figma.com/img/8ff1/565e/669fd1f717ef070f8e5fd22320363689?Expires=1686528000&Signature=KRsKsvyKKR3ab8Dra39LqMcdlix3DKVigDrUD03nkhAO5XIFU1Ao8Rxl2JX8SNiLLSiyqgEPyh8hluqUOGrhke9WtYnk4Dp2wpjZBGHNrgLWoS5lIYIHXnMSFe7GgLkrjTK-j6tuIPDf-MknqLrqodQk5LfOt9U-FJUGCO5V25ZEKXbSS9u071wqn2Ryy9oBFHrkV~MJT1Mqk7LHg3ljZzQe33Y989hPy3FZY3pOE3zkk-d~e0GHjt9GxJVqAu7OUiGX-n8tugGhF3xeZbF7v8VhFBOqcfvIpNPKJsTNaScKusm1StsCh2VGsytnXs0TlFdPFgPd332XVuykgDgZyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                                                fill
                                                className='object-cover bg-transparent rounded-md'
                                            />
                                        </div>
                                        <p className='font-[600] text-[14px] not-italic text-white bg-transparent '>{a1} Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.</p>

                                    </div>
                                }
                            </div>
                        )
                        }
                    </div>
                    <div className=' w-full flex items-center justify-end bg-transparent mb-[10px] pr-[10px]'>

                        <div className='bg-transparent flex'>
                            {counter > 0 &&
                                <div className="bg-transparent mr-[10px]">
                                    <button
                                        className={` bg-transparent
                                py-[7px] px-[24px] h-[41px] rounded-full text-white border border-white gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                                        onClick={() => { if (counter > 1) setCounter(prev => prev - 1) }}

                                    >
                                        {`Previous`}
                                    </button>
                                </div>
                            }
                            {
                                counter < a.length - 1 &&
                                <ConditionalButton label={'Continue'} condition={true} onClickHandler={() => {
                                    if (counter < a.length - 1)
                                        setCounter(prev => prev + 1)
                                }} />
                            }
                            {
                                counter === a.length - 1 &&
                                <ConditionalButton label={'Next'} condition={true} onClickHandler={() => {
                                    setCounter(1)
                                }} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LearnModuleContentCard