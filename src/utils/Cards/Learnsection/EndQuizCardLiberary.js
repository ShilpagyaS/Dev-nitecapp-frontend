import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import Bigbutton, { Bigbutton2 } from '../Learnutils/Bigbutton';

function EndQuizCardLiberary({ nextClick, name, score, hidebutton }) {
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
                <p className='not-italic text-xl font-Inter text-[#959595] mt-[54px]'>You have successfully Completed <span className='text-white font-bold
    capitalize'>{`${name} Quiz`}</span>, here is the result</p>

                <div className='flex items-center justify-evenly w-full mt-[30px]'>
                    <div className='h-[70px] min-w-[130px]  border border-white bg-[#383838] rounded-[6px] p-[10px] 
       flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Total</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${score.total} / ${score.total} Questions`}</p>

                    </div>
                    <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
       flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Correct</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${score.correct} Questions`}</p>

                    </div>
                    <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
       flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Incorrect</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${score.incorrect} ${score.total > 1 ? 'Questions' : 'Question'}`}</p>

                    </div>
                    <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
       flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Score</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`${parseFloat((score.correct / score.total) * 100).toFixed(1)}%`} </p>

                    </div>
                    {/* <div className='h-[70px] w-[130px] border border-white bg-[#383838] rounded-[6px] p-[10px] 
       flex flex-col items-center justify-center' >
                        <p className='not-italic font-semibold text-[15px] bg-transparent text-white text-left w-full'> Points</p>
                        <p className='not-italic font-semibold text-[14px] bg-transparent text-white w-full text-left'> {`1253`} </p>

                    </div> */}
                </div>
            </div>
            {
                !hidebutton &&
                <div className=' w-full p-[20px] flex items-center justify-center mt-[13px]'>
                    <Bigbutton text={'Go to Learn '} colorTrue={false} onClickHandle={() => { router.push('/learn') }} />
                    <div className='ml-[20px]'>

                        <Bigbutton2 text={'Take me to Quizes Page'} colorTrue={true}
                            onClickHandle={() => {
                                // nextClick()
                                router.push('/learn/quizzes')
                            }} />
                    </div>
                </div>
            }
            {/* <ConditionalButton label={`Add ${componentName}`} condition={true} /> */}
        </div>
    )
}

export default EndQuizCardLiberary