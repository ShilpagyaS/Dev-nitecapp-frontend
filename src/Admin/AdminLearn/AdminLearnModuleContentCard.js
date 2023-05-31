import { EditModuleContent } from '@/components/modal/LearnModals';
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';

function AdminLearnModuleContentCard({ onCancelButton }) {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [counter, setCounter] = useState(1);
    const [addCourseButton, setAddCourse] = useState(false)

    return (
        <>
            {addCourseButton &&
                <EditModuleContent
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Module Content'}
                    onSave={() => { }}
                />
            }
            <div className='w-full min-h-[500px] h-full bg-[#383838] rounded-t-[12px] mt-[20px] relative overflow-hidden'>
                <div className='w-full rounded-t-[12px] bg-transparent p-[15px] grid grid-cols-5 '>
                    <div className='col-span-2 bg-transparent'>
                        <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { onCancelButton() }} />
                    </div>
                    <div className='bg-transparent col-span-3 flex items-center justify-between'>
                        <p className='font-[700] not-italic font-Inter text-white text-[18px] bg-transparent'>Introduction to Beer</p>
                        <ConditionalButton label={'Edit'} condition={true} onClickHandler={() => { setAddCourse(true)}} />

                    </div>
                </div>
                <div className='h-[5px] w-full bg-[#7B7B7B] relative'>
                    <div className='absolute h-full bg-white transition-all duration-500 ease-in-out' style={{ width: `${((counter) * 100) / a.length}%` }}>

                    </div>

                </div>
                <div className='flex flex-col justify-between bg-transparent'>

                    <div className='flex flex-col items-center bg-transparent w-full min-h-[370px] h-full'>
                        {a.slice(0, counter).map((a1, i) =>
                            <div className={`mt-[30px]  text-center px-[10%] module-content h-full ${counter >= i ? 'opacity-1 w-full' : 'opacity-0 w-0'} bg-transparent transition-all duration-500 ease-in-out `}  >
                                <p className='font-[600] text-[14px] not-italic text-white bg-transparent '>{a1} Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.</p>
                            </div>
                        )
                        }
                    </div>
                    <div className=' w-full flex items-center justify-end bg-transparent mb-[10px] pr-[10px]'>

                        <div className='bg-transparent flex'>
                            {/* {counter > 0 &&
                            <div className="bg-transparent mr-[10px]">
                                <button
                                    className={` bg-transparent py-[7px] px-[24px] h-[41px] rounded-full text-white border border-white gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                                    onClick={() => { if (counter > 1) setCounter(prev => prev - 1) }}

                                >
                                    {`Previous`}
                                </button>
                            </div>
                        }
                        {
                            counter < a.length - 1 &&
                            <ConditionalButton label={'Continue'} condition={true} onClickHandler={() => { if (counter < a.length - 1) setCounter(prev => prev + 1) }} />
                        } */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AdminLearnModuleContentCard