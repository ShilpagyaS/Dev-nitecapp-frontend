import EndQuizCard from '@/utils/Cards/Learnsection/EndQuizCard';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import Breadcrumb from '../Breadcrumb';
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';

function QuizesCard() {
    const a = [1, 2, 3, 4]
    const [counter, setCounter] = useState(0);
    const [show, setisShow] = useState(false);
    const router = useRouter()
    return (
        <div>
            <Breadcrumb />
            {/* <h2 className="text-white text-[32px] leading-9 font-bold mb-[20px] ">
                Bar 101
            </h2> */}
            {
                !show ?

                    <div className='w-full min-h-[500px] h-full bg-[#383838] rounded-t-[12px] mt-[20px] relative overflow-hidden'>
                        <div className='w-full rounded-t-[12px] bg-transparent p-[15px] grid grid-cols-5 '>
                            <div className='col-span-2 bg-transparent'>
                                <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={()=>{router.back()}} />
                            </div>
                            <div className='bg-transparent col-span-3'>
                                <p className='font-[700] not-italic font-Inter text-white text-[18px] bg-transparent'>Quiz Heading</p>
                            </div>
                        </div>
                        <div className='h-[5px] w-full bg-[#7B7B7B] relative'>
                            <div className='absolute h-full bg-white transition-all duration-500 ease-in-out' style={{ width: `${((counter + 1) * 100) / a.length}%` }}>

                            </div>

                        </div>
                        <div className='flex flex-col justify-between bg-[#F4F4F4]'>

                            <div className={`flex items-center bg-transparent w-full min-h-[370px] h-full transition-all duration-500 ease-in-out`} style={{ transform: `translateX(-${counter * 100}%)` }}>
                                {/* {a.slice(0, counter).map((a1, i) => */}
                                {a.map((a1, i) =>
                                    <div className={`mt-[30px] w-full shrink-0 flex flex-col items-center  px-[10%] h-full bg-transparent transition-all duration-500 ease-in-out `}  >

                                        <p className='font-[600] text-[14px] not-italic text-black bg-transparent '>{a1} Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.</p>
                                        <div className='mt-[20px] w-[65%] bg-transparent'>
                                            <div className='rounded-full flex items-center text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px] bg-transparent border border-black break-words hover:text-white hover:bg-black'>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>Water Minerals</p>
                                            </div>
                                            <div className='rounded-full flex items-center text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px] bg-transparent border border-black break-words hover:text-white hover:bg-black'>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>Option 2</p>
                                            </div>
                                            <div className='rounded-full flex items-center text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px] bg-transparent border border-black break-words hover:text-white hover:bg-black'>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>Option 3</p>
                                            </div>
                                            <div className='rounded-full flex items-center text-black cursor-pointer justify-center px-[15px] py-[2px] w-full mb-[10px] min-h-[35px] bg-transparent border border-black break-words hover:text-white hover:bg-black'>
                                                <p className='not-italic font-Inter font-normal bg-transparent'>Opition 4</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                                }
                            </div>
                            <div className=' w-full flex items-center justify-end bg-transparent mb-[10px] pr-[10px]'>

                                <div className='bg-transparent flex'>
                                    {counter > 0 &&
                                        <div className="bg-transparent mr-[10px]">
                                            <button
                                                className={` bg-transparent
                                py-[7px] px-[24px] h-[41px] rounded-full text-black border border-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                                                onClick={() => { if (counter > 0) setCounter(prev => prev - 1) }}

                                            >
                                                {`Previous`}
                                            </button>
                                        </div>
                                    }
                                    {
                                        counter < a.length - 1 &&
                                        <ConditionalButton label={'Next'} condition={true} onClickHandler={() => {
                                            if (counter < a.length - 1)
                                                setCounter(prev => prev + 1)
                                        }} />
                                    }
                                    {
                                        counter === a.length - 1 &&
                                        <ConditionalButton label={'Submit'} condition={true} onClickHandler={() => {
                                            // setCounter(1)
                                            setisShow(true)

                                        }} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <h2 className="text-white text-[32px] leading-9 font-bold mb-[20px] ">
                            Bar 101
                        </h2>
                        <EndQuizCard nextClick={()=>{
                               setCounter(0)
                               setisShow(false)
                        }} />
                    </>
            }
        </div >
    )
}

export default QuizesCard