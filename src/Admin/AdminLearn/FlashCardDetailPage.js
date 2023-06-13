import Breadcrumb from '@/components/Breadcrumb'
import { EditFlashCard } from '@/components/modal/LearnModals'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import BigFlashcard from '@/utils/Cards/Learnsection/BigFlashcard'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
const data = {
    image: '',
    frontSide: 'What are the four main ingredients in Beer?',
    flipside: 'Flip Side'
}
function AdminFlashCardDetailPage() {
    const [EditCourseButton, setEditCourse] = useState(false)
    const router = useRouter()
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
                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        Demo
                    </h5>

                    <ConditionalButton label={'Edit'} condition={true} onClickHandler={() => { setEditCourse(true) }} />
                </div>
                <div className='mt-[10px] w-full flex items-center justify-center relative'>
                    <div className='absolute top-2 left-2'>
                        <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { router.back() }} />

                    </div>
                    <BigFlashcard data={data} />
                </div>

            </div>
        </>
    )
}

export default AdminFlashCardDetailPage