import AdminFlashcard from '@/utils/Cards/Learnsection/AdminFlashcard'
import UserSubcatFlashcard from '@/utils/Cards/Learnsection/UserSubcatFlashcard'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

function FlashcardSubcategoryPage() {
    const route = useRouter()
    const data = {
        cardsCount: 50
    }
    return (
        <div>
            <Breadcrumb />
            <div className='bg-transparent col-span-3 flex items-center justify-between mb-[10px]'>
                <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    Bar 101
                </h5>
            </div>
            <div className='flex flex-col w-[300px] cursor-pointer border border-[#3C3C3C] py-[12px] px-[30px] rounded-[13px] mb-[24px]' onClick={() => { route.push(`/learn/flashcards/${enUrl('Bar 101')}/${enUrl('Psychology of Hospitality')}?id=${'2'}&typeid=${'3'}`) }}>
                <h5 className='not-italic font-semibold text-[18px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Study All`}
                </h5>
                <h5 className='not-italic font-normal text-[16px] font-Inter leading-tight text-[#959595] mb-[2px]'>
                    {`${data.cardsCount} Cards`}
                </h5>

            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>

                <UserSubcatFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl('Bar 101')}/${enUrl('Psychology of Hospitality')}?id=${'2'}&typeid=${'3'}`) }} />
                <UserSubcatFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl('Bar 101')}/${enUrl('Psychology of Hospitality')}?id=${'2'}&typeid=${'3'}`) }} />
                <UserSubcatFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl('Bar 101')}/${enUrl('Psychology of Hospitality')}?id=${'2'}&typeid=${'3'}`) }} />
                <UserSubcatFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl('Bar 101')}/${enUrl('Psychology of Hospitality')}?id=${'2'}&typeid=${'3'}`) }} />
                <UserSubcatFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl('Bar 101')}/${enUrl('Psychology of Hospitality')}?id=${'2'}&typeid=${'3'}`) }} />
            </div>
        </div>
    )
}

export default FlashcardSubcategoryPage