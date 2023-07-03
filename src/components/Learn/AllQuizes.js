import { getAllQuizesCourses } from '@/store/slices/learnslice'
import UserQuizListcard from '@/utils/Cards/Learnsection/UserQuizListcard'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'

function AllQuizes() {
    const route = useRouter()
    const [quizarray, setQuizArray] = useState([])
    const { quizes } = useSelector(state => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllQuizesCourses())

        return () => {

        }
    }, [])
    useEffect(() => {
        if (quizes.length) {
            setQuizArray(quizes)
        }
    }, [quizes])



    return (
        <div>
            <Breadcrumb />
            <div className="flex items-center mb-[33px] w-full justify-between">

                <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Quizzes`}
                </h5>
            </div>
            {/* <EmptyQuizcomponent /> */}
            {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'> */}
            <div className='flex gap-3 flex-wrap'>
                {
                    quizarray?.map((quiz) =>
                        <UserQuizListcard data={quiz} onClickHandler={() => { route.push(`/learn/quizzes/${enUrl(quiz.name)}/?id=${quiz.quiz_id}`) }} />
                    )
                }
            </div>
        </div>

    )
}

export default AllQuizes