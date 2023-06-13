import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashcardCategory, EditFlashcardCategory } from '@/components/modal/LearnModals'
import AllFlashCardcard from '@/utils/Cards/Learnsection/AllFlashCardcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useState } from 'react'

const detail = [
    {

        type: 'Courses',
        cardsCount: 12,
        categories: [
            {
                id: '2',
                name: 'The Delphi Orientataion',
                noOfCards: 5,
                images: 'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

            },
            {
                id: '2',
                name: 'Bar 101',
                noOfCards: 3,
                images: 'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

            },
            {
                id: '2',
                name: 'New Course',
                noOfCards: 15,
                images: 'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

            },
        ]
    },
    {

        type: 'Specs',
        cardsCount: 17,
        categories: [
            {
                id: '2',
                name: 'Beer',
                noOfCards: 6,
                images: 'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

            },
            {
                id: '2',
                name: 'Wine',
                noOfCards: 3,
                images: 'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

            },
            {
                id: '2',
                name: 'Spirit',
                noOfCards: 7,
                images: 'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

            },
        ]
    },
]


function FLashCards() {
    const [addCourseButton, setAddCourse] = useState(false)
    const [EditCourseButton, setEditCourse] = useState(false)
    const [globaldata, getGlobaldata] = useState(null)
    return (
        <>
            {addCourseButton &&
                <AddFlashcardCategory
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Category'}
                    onSave={() => { }}
                />
            }
            {EditCourseButton &&
                <EditFlashcardCategory
                    isModalOpen={EditCourseButton}
                    onClickCancel={() => { setEditCourse(false) }}
                    title={'Category'}
                    onSave={() => { }}
                />
            }

            <div>
                <Breadcrumb />
                <div className="flex items-center mb-[33px] w-full justify-between">

                    <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        {`Flashcards`}
                    </h5>
                    <ChipWithLeftButton condition={true} label={'Add Categories'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />

                </div>
                {
                    detail.map((element) =>
                        <div className='mb-[30px]'>

                            <div className="flex items-center mb-[33px]">

                                <h5 className='not-italic font-semibold text-[24px] font-Inter leading-tight text-white mb-[2px]'>
                                    {element.type}
                                </h5>
                            </div>
                            <div className='flex flex-col w-[300px] border border-[#3C3C3C] py-[12px] px-[30px] rounded-[13px] mb-[24px]'>
                                <h5 className='not-italic font-semibold text-[18px] font-Inter leading-tight text-white mb-[2px]'>
                                    {`Study All`}
                                </h5>
                                <h5 className='not-italic font-normal text-[16px] font-Inter leading-tight text-[#959595] mb-[2px]'>
                                    {`${element.cardsCount} Cards`}
                                </h5>

                            </div>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                                {
                                    element.categories.map((cat) =>

                                        <AllFlashCardcard data={cat} isAdmin={true} onEditCick={() => { setEditCourse(true) }} />
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default FLashCards