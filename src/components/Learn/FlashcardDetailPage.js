import Flashcarddetailcomponent from '@/utils/Cards/Learnsection/Flashcarddetailcomponent'
import React, { useState } from 'react'

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
    return (
        <div>
            <Flashcarddetailcomponent data={arr[counter]} totalcards={arr.length} currentCard={counter} onNext={() => { if (counter < arr.length - 1) setCounter(prev => prev + 1) }} />
        </div>)
}

export default FlashcardDetailPage