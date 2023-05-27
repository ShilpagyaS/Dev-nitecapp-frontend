import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

function AllFlashCardcard({ onclickhandle }) {
    const router = useRouter();
    return (
        <div className='max-w-[382px] h-[150px] border border-[#3C3C3C] p-[12px] flex items-center justify-between rounded-[10px] cursor-pointer' onClick={() => { router.push("/learn/flashcards/Bar?id=5") }} >
            <div className=' flex flex-col justify-center pl-[20px]'>
                <div className='not-italic font-bold text-[18px] font-Inter text-white'>
                    The Delphi Brand Orientation
                </div>
                <div className='not-italic font-normal text-[16px] text-[#959595]'>
                    11 cards
                </div>
            </div>
            <div className=' relative h-[125px] w-[125px] rounded-[10px]'>
                <Image src={'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} fill className='rounded-[10px] object-cover' />
            </div>


        </div>
    )
}

export default AllFlashCardcard