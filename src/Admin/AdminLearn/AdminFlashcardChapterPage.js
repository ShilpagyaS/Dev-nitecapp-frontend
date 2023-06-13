import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashcardSubCategory, EditFlashCard, EditFlashcardSubCategory } from '@/components/modal/LearnModals'
import AdminFlashcard from '@/utils/Cards/Learnsection/AdminFlashcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function AdminFlashcardChapterPage() {
    const [addCourseButton, setAddCourse] = useState(false)
    const [EditCourseButton, setEditCourse] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const route = useRouter()

    return (
        <>
            {addCourseButton &&
                <AddFlashcardSubCategory
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Subcategory'}
                    onSave={() => { }}
                />
            }
            {EditCourseButton &&
                <EditFlashcardSubCategory
                    isModalOpen={EditCourseButton}
                    onClickCancel={() => { setEditCourse(false) }}
                    title={'Subcategory'}
                    onSave={() => { }}
                />
            }
            <div>
                <Breadcrumb />
                <div className='bg-transparent col-span-3 flex items-center justify-between mb-[10px]'>
                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        Bar 101
                    </h5>


                    <ChipWithLeftButton condition={true} label={'Add Subcategories'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                </div>


                <AdminFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl('Bar 101')}/${enUrl('Psychology of Hospitality')}?id=${'2'}&typeid=${'3'}`) }} onEditCick={() => { setEditCourse(true) }} />
                {/* <AdminFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}&typeid=${typeid}`) }} /> */}

            </div>
        </>
    )
}

export default AdminFlashcardChapterPage