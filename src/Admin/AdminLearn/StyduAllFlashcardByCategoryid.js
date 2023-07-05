import Breadcrumb from '@/components/Breadcrumb'
import FlashcardEndScreen from '@/components/Learn/FlashcardEndScreen'
import { emptycourses, getAllFlashCardsByCategoryId, getFlashCardsByType } from '@/store/slices/learnslice'
import Flashcarddetailcomponent from '@/utils/Cards/Learnsection/Flashcarddetailcomponent'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function StyduAllFlashcardByCategoryid({ id, categoryName }) {

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

        dispatch(getAllFlashCardsByCategoryId(id))

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
        if (missedandLearn.missed + missedandLearn.learned < newList.length)
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
                    {categoryName}
                </h5>
            </div>
            {newList?.length ?
                <>
                    {
                        !ishow &&
                        <Flashcarddetailcomponent stats={missedandLearn} setStats={setStats} data={newList[counter]} totalcards={newList.length} currentCard={counter} onNext={() => { console.log('counter-> ', counter, newList.length - 1, ishow); if (counter >= newList.length - 1) setshow(true); if (counter < newList.length - 1) setCounter(prev => prev + 1); }} />
                    }
                    {
                        ishow &&
                        <FlashcardEndScreen deckname={categoryName} totalcards={newList.length} learned={missedandLearn.learned} missed={missedandLearn.missed} readCards={counter + 1} />
                    }
                </>
                :
                <>
                    <div className='flex flex-col items-center justify-center h-full w-full'>
                        <Image
                            className="bg-transparent"
                            src="/asset/EmptyFrame.svg"
                            width={302}
                            height={186}
                            alt="Empty"
                            priority
                        />
                        <p className='not-italic font-bold text-xl font-Inter text-white mt-[54px]'>There is no Data present here</p>
                    </div>
                </>
            }
        </div>)
}

export default StyduAllFlashcardByCategoryid