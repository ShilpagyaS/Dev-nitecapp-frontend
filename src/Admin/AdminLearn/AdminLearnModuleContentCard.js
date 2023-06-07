import { AddModuleContent, EditModuleContent } from '@/components/modal/LearnModals';
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton';
import Image from 'next/image';
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';

function AdminLearnModuleContentCard({ onCancelButton }) {
    const [moduleData, setmd] = useState({
        heading: 'Heading',
        content: [
            {
                type: 'text',
                image: '',
                text: 'text'
            },
            {
                type: 'image',
                image: '',
                text: 'image text'
            },
        ]
    })
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [counter, setCounter] = useState(1);
    const [addCourseButton, setAddCourse] = useState(false)
    const [editcntnt, seteditontent] = useState(false)
    const [isHover, setishover] = useState({
        hover: false,
        index: null
    })
    const [selected, setselectedData] = useState()
    const [header, setHeader] = useState("")
    function addContent(data) {
        setmd((prev) => {
            return {
                ...prev,
                content: [...prev.content, data]
            }
        })
    }
    return (
        <>
            {editcntnt &&
                <EditModuleContent
                    isModalOpen={editcntnt}
                    onClickCancel={() => { seteditontent(false) }}
                    title={'Module Content'}
                    data={selected}
                    onSave={() => { }}
                />
            }
            {addCourseButton &&
                <AddModuleContent
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Module Content'}
                    onSave={(data) => {
                        addContent(data)
                    }}
                />
            }
            <div className='w-full min-h-[500px] h-full bg-[#383838] rounded-t-[12px] mt-[20px] relative overflow-hidden'>
                <div className='w-full rounded-t-[12px] bg-transparent p-[15px] grid grid-cols-5 '>
                    <div className='col-span-2 bg-transparent'>
                        <RxCross1 size={25} color="#929292" className='bg-transparent cursor-pointer' onClick={() => { onCancelButton() }} />
                    </div>
                    <div className='bg-transparent col-span-3 flex items-center justify-between'>
                        <p className='font-[700] not-italic font-Inter text-white text-[18px] bg-transparent'>{moduleData.heading}</p>
                        <ConditionalButton label={'Edit'} condition={true} onClickHandler={() => { }} />

                    </div>
                </div>
                <div className='h-[5px] w-full bg-[#7B7B7B] relative'>
                    <div className='absolute h-full bg-white transition-all duration-500 ease-in-out' style={{ width: `${((100) * 100) / a.length}%` }}>
                    {/* <div className='absolute h-full bg-white transition-all duration-500 ease-in-out' style={{ width: `${((counter) * 100) / a.length}%` }}> */}

                    </div>

                </div>
                <div className='flex flex-col justify-between bg-transparent'>

                    <div className='flex flex-col items-center bg-transparent w-full min-h-[370px] h-full'>
                        {moduleData?.content.map((a1, i) =>
                            <div className={`mt-[30px]  text-center px-[2%] module-content h-full w-full  bg-transparent transition-all duration-500 ease-in-out `}  >
                                {
                                    a1?.type == 'text' ?
                                        <div className='border borer-white rounded-md w-full p-2 bg-transparent relative'
                                            onMouseEnter={() => {
                                                setishover({
                                                    hover: true,
                                                    index: i
                                                })
                                            }} onMouseLeave={() => {
                                                setishover({
                                                    hover: false,
                                                    index: null
                                                })
                                            }}>
                                            <p className='font-[600] text-[14px] not-italic text-white bg-transparent '>{a1.text} </p>
                                            {isHover.hover && isHover.index == i &&
                                                < div className="editbutton cursor-pointer flex items-center justify-center bg-primary-base p-2 rounded-full w-fit absolute top-[2px] right-[5px] " onClick={() => { setselectedData(a1); seteditontent(true) }}>
                                                    <svg width="15" height="15" viewBox="0 0 18 18" className="bg-transparent" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.47275 15.4172H17.25V17.2506H0.75V13.3611L9.825 4.28615L13.7135 8.17648L6.47183 15.4172H6.47275ZM11.1202 2.9909L13.0654 1.04573C13.2373 0.873883 13.4704 0.777344 13.7135 0.777344C13.9566 0.777344 14.1897 0.873883 14.3616 1.04573L16.9548 3.63898C17.1267 3.81088 17.2232 4.044 17.2232 4.28706C17.2232 4.53013 17.1267 4.76325 16.9548 4.93515L15.0097 6.8794L11.1212 2.9909H11.1202Z" fill="white" />
                                                    </svg>



                                                </div>
                                            }
                                        </div>
                                        :
                                        <div className='border borer-white rounded-md w-full p-2 bg-transparent relative'>

                                            <div className='flex flex-col items-center bg-transparent relative'
                                                onMouseEnter={() => {
                                                    setishover({
                                                        hover: true,
                                                        index: i
                                                    })
                                                }} onMouseLeave={() => {
                                                    setishover({
                                                        hover: false,
                                                        index: null
                                                    })
                                                }}>
                                                <div className='relative  w-[60%] aspect-[16/9] rounded-md bg-transparent mb-[10px]'>
                                                    <Image src={'https://s3-alpha-sig.figma.com/img/8ff1/565e/669fd1f717ef070f8e5fd22320363689?Expires=1686528000&Signature=KRsKsvyKKR3ab8Dra39LqMcdlix3DKVigDrUD03nkhAO5XIFU1Ao8Rxl2JX8SNiLLSiyqgEPyh8hluqUOGrhke9WtYnk4Dp2wpjZBGHNrgLWoS5lIYIHXnMSFe7GgLkrjTK-j6tuIPDf-MknqLrqodQk5LfOt9U-FJUGCO5V25ZEKXbSS9u071wqn2Ryy9oBFHrkV~MJT1Mqk7LHg3ljZzQe33Y989hPy3FZY3pOE3zkk-d~e0GHjt9GxJVqAu7OUiGX-n8tugGhF3xeZbF7v8VhFBOqcfvIpNPKJsTNaScKusm1StsCh2VGsytnXs0TlFdPFgPd332XVuykgDgZyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                                                        fill
                                                        className='object-cover bg-transparent rounded-md'
                                                    />
                                                </div>
                                                <p className='font-[600] text-[14px] not-italic text-white bg-transparent '>{a1.text} </p>
                                                {isHover.hover && isHover.index == i &&
                                                    < div className="editbutton cursor-pointer flex items-center justify-center bg-primary-base p-2 rounded-full w-fit absolute top-[2px] right-[5px] " onClick={() => { setselectedData(a1); seteditontent(true) }}>
                                                        <svg width="15" height="15" viewBox="0 0 18 18" className="bg-transparent" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.47275 15.4172H17.25V17.2506H0.75V13.3611L9.825 4.28615L13.7135 8.17648L6.47183 15.4172H6.47275ZM11.1202 2.9909L13.0654 1.04573C13.2373 0.873883 13.4704 0.777344 13.7135 0.777344C13.9566 0.777344 14.1897 0.873883 14.3616 1.04573L16.9548 3.63898C17.1267 3.81088 17.2232 4.044 17.2232 4.28706C17.2232 4.53013 17.1267 4.76325 16.9548 4.93515L15.0097 6.8794L11.1212 2.9909H11.1202Z" fill="white" />
                                                        </svg>



                                                    </div>
                                                }
                                            </div>
                                        </div>
                                }
                            </div>
                        )
                        }
                        <div className='bg-transparent w-full flex items-center justify-end mt-[10px] pr-[10px]'>
                            <ConditionalButton label={'Add'} condition={true} onClickHandler={() => { setAddCourse(true) }} />

                        </div>
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