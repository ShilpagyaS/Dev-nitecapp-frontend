import Flashcarddetailcomponent from '@/utils/Cards/Learnsection/Flashcarddetailcomponent'
import React, { useState } from 'react'
import Breadcrumb from '../Breadcrumb'
import FlashcardEndScreen from './FlashcardEndScreen'

function FlashcardDetailPage() {
    const data = {
        image: '',
        frontSide: 'What are the four main ingredients in Beer?',
        flipside: 'Flip Side'
    }
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
    const [missedandLearn, setMissedAndLearn] = useState({
        missed: 0,
        learned: 0,
    }
    )
    function setStats(key) {
        if (missedandLearn.missed + missedandLearn.learned < arr.length - 1)
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

                <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                    {`Bar 101`}
                </h5>
            </div>
            {
                !ishow &&
                <Flashcarddetailcomponent stats={missedandLearn} setStats={setStats} data={arr[counter]} totalcards={arr.length} currentCard={counter} onNext={() => { console.log('counter-> ', counter, arr.length - 1, ishow); if (counter >= arr.length - 1) setshow(true); if (counter < arr.length - 1) setCounter(prev => prev + 1); }} />
            }
            {
                ishow &&
                <FlashcardEndScreen />
            }
        </div>)
}

export default FlashcardDetailPage