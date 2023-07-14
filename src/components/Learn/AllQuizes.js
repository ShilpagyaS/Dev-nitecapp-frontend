import { getAllQuizesCourses, getAllQuizesCoursesByCategory } from '@/store/slices/learnslice'
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
        dispatch(getAllQuizesCoursesByCategory())

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
            {
                quizarray?.map((element) =>
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
                                element?.quizzes?.map((quiz) =>

                                    <UserQuizListcard data={quiz} onClickHandler={() => { route.push(`/learn/quizzes/${enUrl(quiz.name)}/?id=${quiz.quiz_id}`) }} />

                                )
                            }
                        </div>
                    </div>
                )
            }
            {/* <div className='flex gap-3 flex-wrap'>
                {
                    quizarray?.map((quiz) =>
                        <UserQuizListcard data={quiz} onClickHandler={() => { route.push(`/learn/quizzes/${enUrl(quiz.name)}/?id=${quiz.quiz_id}`) }} />
                    )
                }
            </div> */}
        </div>

    )
}

export default AllQuizes