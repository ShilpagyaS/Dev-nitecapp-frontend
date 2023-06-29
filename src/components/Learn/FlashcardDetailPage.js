import { emptycourses, getFlashCardsBySubcategoryId } from '@/store/slices/learnslice'
import Flashcarddetailcomponent from '@/utils/Cards/Learnsection/Flashcarddetailcomponent'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'
import FlashcardEndScreen from './FlashcardEndScreen'

function FlashcardDetailPage({ subcatecodyId, subcategoyName }) {

    const arr = [
        {
            image: '',
            frontSide: 'What are the four main ingredients in Beer?',
            flipside: 'Flip Side'
        },
        {
            image: '',
            frontSide: 'What are the four main ingredients in Beer?2',
            flipside: 'Flip Side2'
        },
        {
            image: '',
            frontSide: 'What are the four main ingredients in Beer?3',
            flipside: 'Flip Side3'
        },
        {
            image: '',
            frontSide: 'What are the four main ingredients in Beer?4',
            flipside: 'Flip Side4'
        },
    ]
    const [counter, setCounter] = useState(0)
    const [ishow, setshow] = useState(false)
    const { flashcard } = useSelector((state) => state.learn)
    const [newList, setList] = useState([])
    const [missedandLearn, setMissedAndLearn] = useState({
        missed: 0,
        learned: 0,
    }
    )
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getFlashCardsBySubcategoryId(subcatecodyId))

        return () => {
            dispatch(emptycourses())
        }
    }, [])
    useEffect(() => {
        console.log('falshcards-->', flashcard);
        if (flashcard.length) {
            setList([...flashcard])
        }
    }, [flashcard])
    function setStats(key) {
        if (missedandLearn.missed + missedandLearn.learned < arr.length)
            setMissedAndLearn((prev) => {
                return {
                    ...prev, [key]: prev[key] + 1
                }
            })
    }
    return (
        <div>
            <Breadcrumb />
            <div className="flex items-center mb-[33px]">

                <h5 className='not-italic font-semibold capitalize text-2xl font-Inter leading-tight text-white mb-[2px]'>
                    {subcategoyName}
                </h5>
            </div>
            {
                !ishow &&
                <Flashcarddetailcomponent stats={missedandLearn} setStats={setStats} data={newList[counter]} totalcards={newList.length} currentCard={counter} onNext={() => { console.log('counter-> ', counter, newList.length - 1, ishow); if (counter >= newList.length - 1) setshow(true); if (counter < newList.length - 1) setCounter(prev => prev + 1); }} />
            }
            {
                ishow &&
                <FlashcardEndScreen deckname={subcategoyName} totalcards={newList.length} learned={missedandLearn.learned} missed={missedandLearn.missed} readCards={counter + 1} />
            }
        </div>)
}

export default FlashcardDetailPage