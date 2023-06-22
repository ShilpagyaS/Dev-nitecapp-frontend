import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashCard, EditFlashCard } from '@/components/modal/LearnModals'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import AdminFlashcard from '@/utils/Cards/Learnsection/AdminFlashcard'
import BigFlashcard from '@/utils/Cards/Learnsection/BigFlashcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import FlashCardTables from './FLashcardTable'
function AdminFlashcardTablepage({ subcategoryid, subcategory }) {
    const [addCourseButton, setAddCourse] = useState(false)
    const [EditCourseButton, setEditCourse] = useState(false)
    const [showDetail, setShowDetail] = useState(false)

    return (
        <>
            {EditCourseButton &&
                <EditFlashCard
                    isModalOpen={EditCourseButton}
                    onClickCancel={() => { setEditCourse(false) }}
                    title={'Flashcard'}
                    onSave={() => { }}
                />
            }
            <div>
                <Breadcrumb />
                <div className='bg-transparent col-span-3 flex items-center justify-between'>
                    <h5 className='not-italic capitalize font-semibold text-[32px] font-Inter leading-tight text-white mb-[5px]'>
                       {subcategory}
                    </h5>
                </div>


                <FlashCardTables id={subcategoryid} />

            </div>
        </>
    )
}

export default AdminFlashcardTablepage