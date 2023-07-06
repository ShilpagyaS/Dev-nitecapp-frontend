import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashcardCategory, DeleteLearn } from '@/components/modal/LearnModals'
import { AddQuiz, EditQuiz } from '@/components/modal/Quizmodal'
import { deleteQuizById, emptyAllQuizList, getallquiz } from '@/store/slices/quiz'
import AdminQuizListcard from '@/utils/Cards/Learnsection/AdminQuizListcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'

import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function QuizPage() {
    const route = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallquiz())
        return () => dispatch(emptyAllQuizList())
    }, [])
    const [addQuizButton, setaddQuiz] = useState(false)
    const [editQuiz, setEditQuiz] = useState(null)
    const { allquiz } = useSelector((state) => state.quiz)
    const [deletetemp, setdeletetemp] = useState(null)

    const onfinaldelete = () => {
        dispatch(deleteQuizById(deletetemp.quiz_id))
        setdeletetemp(null)
    }
    return (
        <>
            {addQuizButton &&
                <AddQuiz
                    isModalOpen={addQuizButton}
                    onClickCancel={() => { setaddQuiz(false) }}
                    title={'Quiz'}

                />
            }

            {editQuiz &&
                <EditQuiz
                    isModalOpen={editQuiz !== null}
                    onClickCancel={() => { setEditQuiz(null) }}
                    title={'Quiz'}
                    data={editQuiz}

                />
            }
            <div>
                <Breadcrumb />
                <div className="flex items-center mb-[33px] w-full justify-between">

                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        {`Quizzes`}
                    </h5>
                    <ChipWithLeftButton condition={true} label={'Add a Quiz'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setaddQuiz(true) }} />

                </div>

                <DeleteLearn isModalOpen={deletetemp} title={"Quiz"}
                    onSave={onfinaldelete}
                    onClickCancel={() => { setdeletetemp(null) }} />


                {/* <EmptyQuizcomponent /> */}
                <div className='flex gap-3 flex-wrap'>
                    {allquiz.map((i) => {
                        return <AdminQuizListcard data={i} onClickHandler={() => { route.push(`/learn/quizzes/${enUrl(i.name)}/?id=${i.quiz_id}`) }}
                            onEditCick={() => setEditQuiz(i)}
                            onDeleteClick={() => { setdeletetemp(i) }}
                        />
                    })
                    }
                </div>



            </div>
        </>
    )
}

export default QuizPage