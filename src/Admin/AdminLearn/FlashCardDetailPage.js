import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashCard, EditFlashCard } from '@/components/modal/LearnModals'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import AdminFlashcard from '@/utils/Cards/Learnsection/AdminFlashcard'
import BigFlashcard from '@/utils/Cards/Learnsection/BigFlashcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import FlashCardTables from './FLashcardTable'

function AdminFlashCardDetailPage() {
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
                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        Bar 101
                    </h5>
                    {showDetail ?
                        <ConditionalButton label={'Edit'} condition={true} onClickHandler={() => { setEditCourse(true) }} />

                        :

                        <ChipWithLeftButton condition={true} label={'Add Flashcards'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                    }

                </div>
                {showDetail ?
                    <div className='mt-[10px] w-full flex items-center justify-center relative'>
                        <div className='absolute top-2 left-2'>
                            <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { setShowDetail(false) }} />

                        </div>
                        <BigFlashcard />
                    </div>
                    :

                    // <AdminFlashcard onClickHandler={() => { setShowDetail(true) }} />
                    <FlashCardTables />

                }
            </div>
        </>
    )
}

export default AdminFlashCardDetailPage