import AllFlashCardcard from '@/utils/Cards/Learnsection/AllFlashCardcard'
import Flashcarddetailcomponent from '@/utils/Cards/Learnsection/Flashcarddetailcomponent'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

function FlashcardAllSection() {
    return (
        <div>
            <Breadcrumb />
            <div className="flex items-center mb-[33px]">

                <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Flashcards`}
                </h5>
            </div>
            <div className="flex items-center mb-[33px]">

                <h5 className='not-italic font-semibold text-[24px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Courses`}
                </h5>
            </div>
            <div className='flex flex-col w-[300px] border border-[#3C3C3C] py-[12px] px-[30px] rounded-[13px] mb-[24px]'>
                <h5 className='not-italic font-semibold text-[18px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Study All`}
                </h5>
                <h5 className='not-italic font-normal text-[16px] font-Inter leading-tight text-[#959595] mb-[2px]'>
                    {`72 Cards`}
                </h5>

            </div>
            <div className='grid grid-cols-3 gap-4'>
                <AllFlashCardcard />
                <AllFlashCardcard />
                <AllFlashCardcard />
            </div>
        </div>
    )
}

export default FlashcardAllSection