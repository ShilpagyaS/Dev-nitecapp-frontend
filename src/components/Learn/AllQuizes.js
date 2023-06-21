import UserQuizListcard from '@/utils/Cards/Learnsection/UserQuizListcard'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

function AllQuizes() {
    const route = useRouter()

    return (
        <div>
            <Breadcrumb />
            <div className="flex items-center mb-[33px] w-full justify-between">

                <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Quizzes`}
                </h5>
            </div>
            {/* <EmptyQuizcomponent /> */}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>

                <UserQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />
                <UserQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />
                <UserQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />
                <UserQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />
                <UserQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />
                <UserQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />
                <UserQuizListcard onClickHandler={() => { route.push(`/learn/quizzes/${enUrl('Bar 101')}/?id=${'2'}`) }} />
            </div>
        </div>

    )
}

export default AllQuizes