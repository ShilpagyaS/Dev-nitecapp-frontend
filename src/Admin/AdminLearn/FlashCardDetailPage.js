import Breadcrumb from '@/components/Breadcrumb'
import { EditFlashCard } from '@/components/modal/LearnModals'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import { emptycourses, getFlashcardDetail } from '@/store/slices/learnslice'
import BigFlashcard from '@/utils/Cards/Learnsection/BigFlashcard'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
const data = {
    image: '',
    frontSide: 'What are the four main ingredients in Beer?',
    flipside: 'Flip Side'
}
function AdminFlashCardDetailPage({ flashcardId }) {
    const [EditCourseButton, setEditCourse] = useState(false)
    const router = useRouter()
    const { flashcardDetail } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFlashcardDetail(flashcardId))
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    return (
        <>
            {EditCourseButton &&
                <EditFlashCard
                    isModalOpen={EditCourseButton}
                    onClickCancel={() => { setEditCourse(false) }}
                    data={flashcardDetail}
                    flashcardid={flashcardId}
                    title={'Flashcard'}
                    onSave={() => { }}
                />
            }
            <div>
                <Breadcrumb />
                <div className='bg-transparent col-span-3 flex items-center justify-between'>
                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>

                    </h5>

                    <ConditionalButton label={'Edit'} condition={true} onClickHandler={() => { setEditCourse(true) }} />
                </div>
                <div className='mt-[10px] w-full flex items-center justify-center relative'>
                    <div className='absolute top-2 left-2'>
                        <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { router.back() }} />

                    </div>
                    <BigFlashcard data={flashcardDetail} />
                </div>

            </div>
        </>
    )
}

export default AdminFlashCardDetailPage