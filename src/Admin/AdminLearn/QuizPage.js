import Breadcrumb from '@/components/Breadcrumb'
import AdminQuizListcard from '@/utils/Cards/Learnsection/AdminQuizListcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import EmptyQuizcomponent from '@/utils/emptyQuizcomponent'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function QuizPage() {
    const route = useRouter()
    const [addCourseButton, setAddCourse] = useState(false)


    return (
        <>
            {addCourseButton &&
                <AddFlashcardCategory
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Category'}
                    onSave={() => { }}
                />
            }
            <div>
                <Breadcrumb />
                <div className="flex items-center mb-[33px] w-full justify-between">

                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        {`Quizzes`}
                    </h5>
                    <ChipWithLeftButton condition={true} label={'Add Quize'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />

                </div>
                {/* <EmptyQuizcomponent /> */}
                <AdminQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />

            </div>
        </>
    )
}

export default QuizPage