import React from 'react'
import { RxCross1 } from 'react-icons/rx'

function LearnModuleContentCard() {
    return (
        <div className='w-full min-h-[200px] h-[80%] bg-[#383838] rounded-t-[12px] mt-[50px]'>
            <div className='w-full rounded-t-[12px] bg-transparent p-[15px] grid grid-cols-5'>
                <div className='col-span-2 bg-transparent'>
                    <RxCross1 size={25} color="#929292" className='bg-transparent' />
                </div>
                <div className='bg-transparent col-span-3'>

                </div>
            </div>
        </div>
    )
}

export default LearnModuleContentCard