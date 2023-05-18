import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import Moduleinititalcard from './moduleinititalcard'

function LibraryDetailcard() {
    const [show, setShow] = useState(false)
    const [completionPercentage, setcompletepercentage] = useState(null)
    useEffect(() => {
        if (show == true) {
            setTimeout(() => {
                setcompletepercentage(30)
            }, 1000);
        }
    }, [show])

    return (
        <div className='min-h-[260px] h-full min-w-[600px] border border-[#3C3C3C] rounded-[13px] p-[30px]'>

            <div className={`h-[180px] flex justify-between ${show ? 'opacity-[0.4]' : ' '}`}>
                <div className='flex'>
                    <div className='h-[200px] w-[200px] relative rounded-[10px]'>
                        <Image src={'https://s3-alpha-sig.figma.com/img/9509/1d5e/ca0aac92c5c45f6828c548cbab321649?Expires=1685318400&Signature=cuK19Er4yBa29BNfrBwH6R~LBvmLgxQVDA2FUtvuARijNd8q3e3ORjIGlbD2Sg7F3H7przbjw0260DO~6FVttG4mMC60DdysQPeOfgqpYb4ksDHbKJVlj0AtiD8xOcdMAsxhTgkcQstxBfl~sa0idGyAaha1xZWsk8r8sfaZcyKPWeyUG8SsMP15xOBgdf42RJldAQjyqtJyv2GRnX3n7mLmrR3oonFssu0kOR06sSFsNW4FD35lwl7BRqhFiHq-UB1wlKU~AoBd8XDAUUFHcSY-Cd4ZIbM2vcqJo3jl30cS2ievylZ0nScQ1kT5Guf9CRmalP2C3NmJxYyIj9sNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} fill className='rounded-[10px] object-cover' />
                    </div>
                    <div className='h-full flex flex-col ml-[30px] mt-[20px]'>
                        <p className='not-italic font-bold text-[24px] text-white'>Beer</p>
                        <p className='not-italic font-normal text-[20px] text-[#959595]'>4 Modules</p>
                        <p className='not-italic font-normal text-[16px] text-[#959595] mt-[25px]'>Learn the basics of Beer</p>
                    </div>
                </div>
                <div className='h-full flex flex-col justify-between items-center'>

                    <AiOutlineHeart size="25px" color="#fff" />
                    <div className='cursor-pointer' onClick={() => { setShow(prev => !prev) }}>

                        <Image src={'/asset/Vector 5.svg'} height={20} width={10} className={`${show ? 'rotate-[270deg]' : 'rotate-90'} transition-all duration-300 ease-in-out`} />
                    </div>


                </div>
            </div>
            <div className='grid grid-cols-2'>
                <Moduleinititalcard show={show} completionPercentageOuter={30} name={'Introduction to Beer'} />
                <Moduleinititalcard show={show} completionPercentageOuter={20} name={'Enemies of Beer'} />

            </div>
        </div>
    )
}

export default LibraryDetailcard