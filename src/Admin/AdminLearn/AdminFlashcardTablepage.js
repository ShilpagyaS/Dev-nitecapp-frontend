import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashCard, EditFlashCard } from '@/components/modal/LearnModals'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import AdminFlashcard from '@/utils/Cards/Learnsection/AdminFlashcard'
import BigFlashcard from '@/utils/Cards/Learnsection/BigFlashcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import FlashCardTables from './FLashcardTable'
function AdminFlashcardTablepage() {
    const [addCourseButton, setAddCourse] = useState(false)
    const [EditCourseButton, setEditCourse] = useState(false)
    const [showDetail, setShowDetail] = useState(false)

    return (
        <>
            {addCourseButton &&
                <AddFlashCard
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Flashcard'}
                    onSave={() => { }}
                />
            }
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
                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[5px]'>
                        Psychology Of Hospitality
                    </h5>
                </div>


                <FlashCardTables />

            </div>
        </>
    )
}

export default AdminFlashcardTablepage