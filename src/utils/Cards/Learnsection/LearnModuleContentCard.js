import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

function LearnModuleContentCard() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [counter, setCounter] = useState(0);
    return (
        <div className='w-full min-h-[500px] h-full bg-[#383838] rounded-t-[12px] mt-[20px] relative overflow-hidden'>
            <div className='w-full rounded-t-[12px] bg-transparent p-[15px] grid grid-cols-5 '>
                <div className='col-span-2 bg-transparent'>
                    <RxCross1 size={25} color="#929292" className='bg-transparent' />
                </div>
                <div className='bg-transparent col-span-3'>
                    <p className='font-[700] not-italic font-Inter text-white text-[18px] bg-transparent'>Introduction to Beer</p>
                </div>
            </div>
            <div className='h-[5px] w-full bg-[#7B7B7B] relative'>
                <div className='absolute h-full bg-white transition-all duration-500 ease-in-out' style={{ width: `${((counter + 1) * 100) / a.length}%` }}>

                </div>

            </div>
            <div className='flex items-center bg-transparent w-full overflow-x-hidden h-full'>
                {a.map((a1) =>
                    <div className={`mt-[30px]  text-center w-full px-[10%] module-content flex-grow-0 flex-shrink-0 h-full bg-transparent transition-all duration-500 ease-in-out `} style={{ transform: `translateX(-${counter * 100}%)`, }}>
                        <p className='font-[600] text-[14px] not-italic text-white bg-transparent '>{a1} Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.</p>
                    </div>
                )
                }
            </div>
            <div className='absolute bottom-4 right-4 bg-transparent flex'>
                {counter > 0 &&
                    <div className="bg-transparent mr-[10px]">
                        <button
                            className={` bg-transparent
                             py-[7px] px-[24px] h-[41px] rounded-full text-white border border-white gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                            onClick={() => { setCounter(prev => prev - 1) }}

                        >
                            {`Previous`}
                        </button>
                    </div>
                }
                <ConditionalButton label={'Continue'} condition={true} onClickHandler={() => { if (counter < a.length - 1) setCounter(prev => prev + 1) }} />
            </div>
        </div >
    )
}

export default LearnModuleContentCard