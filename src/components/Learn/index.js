import CourceSlider from '@/Admin/AdminDashboard-comp/CourceSlider'
import IndicatorSlider from '@/Admin/AdminDashboard-comp/IndicatorSlider'
import LearnSection from '@/Admin/AdminDashboard-comp/LearnSection'
import ResumeCourseSection from '@/Admin/AdminDashboard-comp/ResumeCourseSection'
import { emptycourses, getAllFlashCardCategorys, getAllQuizesCourses, getCourses } from '@/store/slices/learnslice'
import BigFlashcard from '@/utils/Cards/Learnsection/BigFlashcard'
import DashboardLiberaryCard from '@/utils/Cards/Learnsection/DashboardLiberaryCard'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LIberaryComponents from './LIberaryComponents'

function Learn() {
    const [courses, setcourses] = useState([])
    const [flashcards, setFlashcards] = useState([])
    const [quizes, setQuizes] = useState([])
    const { learnScreenQuizes, learnScreenFlashcards, learnScreenCourses } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        dispatch(getCourses())
        dispatch(getAllFlashCardCategorys())
        dispatch(getAllQuizesCourses())
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    useEffect(() => {
        console.log(learnScreenCourses);
        let dummy = learnScreenCourses?.map(
            (element) => {
                return {
                    id: element.course_id,
                    img: element.image,
                    name: element.name,
                    progress: element.course_completed,
                    desc: element.description,
                }

            }
        ) || []
        setcourses([...dummy])
    }, [learnScreenCourses])
    useEffect(() => {
        console.log(learnScreenFlashcards);
        let dummy = learnScreenFlashcards?.map(
            (element) => {
                return {
                    id: element.flashcard_category_id,
                    image: element.image,
                    name: element.name,
                    type: 'flashcard',
                    desc: element.description,
                    completionPercentage: '30'
                }

            }
        ) || []
        setFlashcards([...dummy])
    }, [learnScreenFlashcards])
    useEffect(() => {
        console.log(learnScreenQuizes);
        let dummy = learnScreenQuizes?.map(
            (element) => {
                return {
                    id: element.quiz_id,
                    image: element.image,
                    name: element.name,
                    desc: element.description,
                    completionPercentage: '30'
                }

            }
        ) || []
        setQuizes([...dummy])
    }, [learnScreenQuizes])
    function routeToFlashcard(name, id) {
        router.push(`/learn/flashcards/${name}?id=${id}`)
    }
    function routeToQuizes(name, id) {
        router.push(`/learn/quizzes/${name}?id=${id}`)
    }
    return (
        <div>

            {/* <ResumeCourseSection /> */}
            <div className="heading-text lg:mb-0 md:mb-0 mb-[20px]">
                <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
                    Learn
                </h1>
            </div>
            <div className="flex items-center mb-[33px] mt-[35px]">

                <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                    {`Learning Library`}
                </h5>
                <Image src={'/asset/Vector 5.svg'} height={15} width={8} className={'ml-[20px]'} />
            </div>
            <LIberaryComponents allCourses={courses} />
            <IndicatorSlider data={flashcards} name={`Flashcards`} onCardClick={(name, id) => { routeToFlashcard(name, id) }} />
            <IndicatorSlider data={quizes} name={`Quizzes`} onCardClick={(name, id) => { routeToQuizes(name, id) }} />
        </div>
    )
}

export default Learn