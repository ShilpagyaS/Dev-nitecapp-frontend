import Bigbutton, { Bigbutton2 } from '@/utils/Cards/Learnutils/Bigbutton';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

function FlashcardEndScreen({ deckname, totalcards, readCards, learned, missed }) {
    const router = useRouter()
    return (
        <div className='h-full w-full'>
            <div className='border border-[#3C3C3C] flex flex-col items-center justify-center h-full w-full p-[50px] '>


                <Image
                    className="bg-transparent"
                    src="/asset/CongratsSVG.svg"
                    width={302}
                    height={186}
                    alt="Empty"
                />
                <p className='not-italic text-xl font-Inter text-[#959595] mt-[54px]'>You have successfully Completed <span className='text-white capitalize font-bold
            '>{deckname} Flashcard</span>, here is the result</p>

                <div className='flex items-center justify-evenly w-full mt-[30px]'>
                    <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
               flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Total</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${readCards} / ${totalcards}`} cards</p>

                    </div>
                    <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
               flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Learned</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${learned} cards`}</p>

                    </div>
                    <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
               flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Missed</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${missed} ${missed > 1 ? 'cards' : 'card'}`}</p>

                    </div>
                    <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
               flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Percentage</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${parseFloat((learned / totalcards) * 100).toFixed(1)}%`} </p>

                    </div>
                </div>
            </div>
            <div className=' w-full p-[20px] flex items-center justify-center mt-[13px]'>
                <Bigbutton text={'Go to Learn '} colorTrue={false} onClickHandle={() => { router.push('/learn') }} />
                <div className='ml-[20px]'>

                    <Bigbutton2 text={'Take me to Flashcards'} colorTrue={true} onClickHandle={() => { router.push('/learn/flashcards') }} />
                </div>
            </div>
            {/* <ConditionalButton label={`Add ${componentName}`} condition={true} /> */}
        </div>
    )
}

export default FlashcardEndScreen