import CircularProgress from '@/utils/CircularProgress'
import React from 'react'

function LearnSection() {
    return (
        <div className='learn-container mb-[49px]'>
            <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white '>
                Learn
            </h5>
            <div className='grid grid-cols-2 pt-[24px] gap-x-6'>
                <div className='grid gap-x-[24px] grid-cols-[139px_auto]'>
                    <div className='firstGrid'>

                        <CircularProgress percentage={0} svgUrl={"/asset/flashicon.svg"} innerText={3}/>
                    </div>
                    <div className='flex flex-col justify-center text-white'>

                        <h5 className='not-italic font-semibold text-[16px] font-Inter leading-tight  '>
                            Your Streak
                        </h5>
                        <>
                            <p className='not-italic font-normal text-base flex items-center tracking-[0.42px] '>
                                Finish a module to continue your 3-day streak.
                            </p>
                        </>
                    </div>

                </div>
                <div className='grid grid-cols-3 gap-x-6'>
                    <div className='firstGrid col-span-1'>

                        <CircularProgress percentage={52} innerText={52} />
                    </div>
                    <div className='flex flex-col justify-center text-white col-span-2'>

                        <h5 className='not-italic font-semibold text-[16px] font-Inter leading-tight  '>
                            Your Streak
                        </h5>
                        <>
                            <p className='not-italic font-normal text-base flex items-center tracking-[0.42px] '>
                                Finish a module to continue your 3-day streak.
                            </p>
                        </>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LearnSection