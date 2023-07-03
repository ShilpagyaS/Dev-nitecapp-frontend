import { getQuizQuiestions } from '@/store/slices/learnslice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QuizesCard from './QuizesCard'
import QuizesLiberary from './QuizesForLiberaryPart'

function UserQuizDetailpage({ quizid, quizName }) {
    const { quizesQuestion } = useSelector(state => state.learn)
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getQuizQuiestions(quizid))

        return () => {
        }
    }, [])

    return (
        <div>
            <QuizesCard name={quizName} quizArray={quizesQuestion.length ? quizesQuestion : []} />
            {/* <QuizesLiberary name={quizName} quizArray={quizesQuestion.length ? quizesQuestion : []} /> */}
        </div>
    )
}

export default UserQuizDetailpage