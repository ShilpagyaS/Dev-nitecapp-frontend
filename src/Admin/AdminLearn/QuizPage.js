import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashcardCategory, DeleteLearn } from '@/components/modal/LearnModals'
import { AddQuiz, EditQuiz } from '@/components/modal/Quizmodal'
import { deleteQuizById, emptyAllQuizList, getallquiz, getallquizByCat } from '@/store/slices/quiz'
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
        dispatch(getallquizByCat())
        return () => dispatch(emptyAllQuizList())
    }, [])
    const [addQuizButton, setaddQuiz] = useState(false)
    const [editQuiz, setEditQuiz] = useState(null)
    const { allquiz } = useSelector((state) => state.quiz)
    const [deletetemp, setdeletetemp] = useState(null)
    const [courseArray, setCourseArray] = useState([])
    useEffect(() => {
        if (allquiz.length) {
            setCourseArray(allquiz)
        }
    }, [allquiz])
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
                {
                    courseArray?.map((element) =>
                        <div className='mb-[30px]'>

                            <div className="flex items-center mb-[33px]">

                                <h5 className='not-italic font-semibold capitalize text-[24px] font-Inter leading-tight text-white mb-[2px]'>
                                    {element.type}
                                </h5>
                            </div>
                            {/* <div className='flex flex-col w-[300px] border border-[#3C3C3C] py-[12px] px-[30px] rounded-[13px] mb-[24px]'>
                                <h5 className='not-italic font-semibold text-[18px] font-Inter leading-tight text-white mb-[2px]'>
                                    {`Study All`}
                                </h5>
                                <h5 className='not-italic font-normal text-[16px] font-Inter leading-tight text-[#959595] mb-[2px]'>
                                    {`${element.cardsCount} Cards`}
                                </h5>

                            </div> */}
                            {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'> */}
                            <div className='flex gap-3 flex-wrap'>
                                {
                                    element?.quizzes?.map((i) =>

                                        <AdminQuizListcard data={i} onClickHandler={() => { route.push(`/learn/quizzes/${enUrl(i.name)}/?id=${i.quiz_id}`) }}
                                            onEditCick={() => setEditQuiz(i)}
                                            onDeleteClick={() => { setdeletetemp(i) }}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    )
                }
                {/* <div className='flex gap-3 flex-wrap'>
                    {allquiz.map((i) => {
                        return <AdminQuizListcard data={i} onClickHandler={() => { route.push(`/learn/quizzes/${enUrl(i.name)}/?id=${i.quiz_id}`) }}
                            onEditCick={() => setEditQuiz(i)}
                            onDeleteClick={() => { setdeletetemp(i) }}
                        />
                    })
                    }
                </div> */}



            </div>
        </>
    )
}

export default QuizPage