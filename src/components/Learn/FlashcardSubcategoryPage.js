import { emptycourses, getFlashcardSubcategories } from '@/store/slices/learnslice'
import UserSubcatFlashcard from '@/utils/Cards/Learnsection/UserSubcatFlashcard'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'

function FlashcardSubcategoryPage({ categoryid, subcategory }) {
    const route = useRouter()
    const data = {
        cardsCount: 50
    }
    const { course } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFlashcardSubcategories(categoryid))
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    return (
        <div>
            <Breadcrumb />
            <div className='bg-transparent col-span-3 flex items-center justify-between mb-[10px]'>
                <h5 className='not-italic capitalize font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    {subcategory}
                </h5>
            </div>
            {data.cardsCount > 0 &&

                <div className='flex flex-col w-[300px] cursor-pointer border border-[#3C3C3C] py-[12px] px-[30px] rounded-[13px] mb-[24px]' onClick={() => { route.push(`/learn/flashcards/${enUrl(subcategory)}/${enUrl('Study All')}?id=${categoryid}&typeid=${categoryid}`) }}>
                    <h5 className='not-italic font-semibold text-[18px] font-Inter leading-tight text-white mb-[2px]'>
                        {`Study All`}
                    </h5>
                    <h5 className='not-italic font-normal text-[16px] font-Inter leading-tight text-[#959595] mb-[2px]'>
                        {`${course.cardsCount} Cards`}
                    </h5>

                </div>
            }
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4z'>
                {course?.subCategoryList?.map((sub) =>
                    <UserSubcatFlashcard data={sub} onClickHandler={() => { route.push(`/learn/flashcards/${enUrl(subcategory)}/${enUrl(sub.name)}?id=${sub.flashcard_subcategory_id}&typeid=${categoryid}`) }} />
                )
                }
            </div>
        </div>
    )
}

export default FlashcardSubcategoryPage