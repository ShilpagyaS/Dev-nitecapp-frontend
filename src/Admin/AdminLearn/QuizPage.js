import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashcardCategory } from '@/components/modal/LearnModals'
import { AddQuiz, EditQuiz } from '@/components/modal/Quizmodal'
import AdminQuizListcard from '@/utils/Cards/Learnsection/AdminQuizListcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import EmptyQuizcomponent from '@/utils/emptyQuizcomponent'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function QuizPage() {
    const route = useRouter()
    const [addQuizButton, setaddQuiz] = useState(false)
    const [editQuiz, setEditQuiz] = useState(null)
    const { allquiz } = useSelector((state) => state.quiz)
    return (
        <>
            {addQuizButton &&
                <AddQuiz
                    isModalOpen={addQuizButton}
                    onClickCancel={() => { setaddQuiz(false) }}
                    title={'Quiz'}
                    onSave={() => { }}
                />
            }

            {editQuiz &&
                <EditQuiz
                    isModalOpen={editQuiz !== null}
                    onClickCancel={() => { setEditQuiz(null) }}
                    title={'Quiz'}
                    data={editQuiz}
                    onSave={() => { }}
                />
            }
            <div>
                <Breadcrumb />
                <div className="flex items-center mb-[33px] w-full justify-between">

                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        {`Quizzes`}
                    </h5>
                    <ChipWithLeftButton condition={true} label={'Add Quize'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setaddQuiz(true) }} />

                </div>
                {/* <EmptyQuizcomponent /> */}
                <div className='flex gap-3 flex-wrap'>
                    {allquiz.map((i) => {
                        return <AdminQuizListcard data={i} onClickHandler={() => { route.push(`/learn/quizzes/${enUrl(i.name)}/?id=${'2'}`) }}
                            onEditCick={() => setEditQuiz(i)}

                        />
                    })
                    }
                </div>



            </div>
        </>
    )
}

export default QuizPage