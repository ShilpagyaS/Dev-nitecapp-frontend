import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function NewCheckListAccordian({ title, content, type, item, isLearn, defaultvalue, onOpenfuncObj, tasks, isprogressBar, progress }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
        if (onOpenfuncObj) {
            onOpenfuncObj.func()
        }
    };

    useEffect(() => {
        if (defaultvalue !== undefined) {
            setIsOpen(defaultvalue)
        }
    }, [defaultvalue])

    return (
        <div className="accordion text-white">
            <div className={`w-full flex justify-between cursor-pointer items-center ${type == 'user' ? 'bg-[#040404]' : type == 'checklist' ? 'bg-[#272727]' : 'bg-[#191919] border border-transparent border-b-[#292929]'} p-[15px]`}
                onClick={toggleAccordion}>
                {type == 'user' &&
                    <div className='flex shrink-0 items-center bg-transparent'>


                        <span className={`bg-transparent ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                            <Image src={'/asset/learnCourseArrowButton.svg'} height={22} width={18} className='bg-transparent' />
                        </span>

                        <h3 className='text-white text-[18px] font-semibold bg-transparent capitalize ml-[8px]'>{title}</h3>

                    </div>
                }
                {type == 'checklist' &&
                    <div className='flex shrink-0 items-center justify-between bg-transparent w-full'>



                        <h3 className='text-white bg-transparent capitalize ml-[8px]'>{title}</h3>
                        <div className='flex items-center bg-transparent'>
                            {/* {
                                isprogressBar &&
                                <div className='flex flex-row  justify-start items-center w-[150px] shrink-0 h-[4px] bg-[#2F2F2F] rounded-full ml-[2px]'>
                                    <div className='bg-primary-base h-full rounded-full transition-all duration-300 ease-in-out ' style={{ width: `${progress ? progress : 0}%` }}></div>
                                </div>
                            }
                            <span className={`bg-transparent shrink-0 ml-[10px] ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                                <Image src={'/asset/learnCourseArrowButton.svg'} height={22} width={18} className='bg-transparent' />
                            </span> */}
                            <h3 className='text-primary-hoverbase bg-transparent capitalize ml-[8px]' onClick={(e) => { e.stopPropagation(); router.push('/checklist/description') }}>{`Tasks (${tasks})`}</h3>

                        </div>

                    </div>
                }
                {!isLearn && <>
                    {(type == 'user' || type == 'checklist') &&
                        <div className='flex bg-transparent items-center'>
                            {item?.totaldocuments > 0 &&
                                <div className='flex items-center bg-transparent'>

                                    <span className={`bg-transparent mr-[5px]`}>
                                        <Image src={'/asset/doc.svg'} height={22} width={18} className='bg-transparent' />
                                    </span>
                                    <p className='text-[#B3B3B3] font-thin bg-transparent text-[14px] text-center'>{item.totaldocuments}</p>
                                </div>
                            }
                            {item?.videoTime > 0 &&
                                <div className='ml-[15px] flex items-center bg-transparent'>

                                    <span className={`bg-transparent mr-[5px]`}>
                                        <Image src={'/asset/vid.svg'} height={22} width={18} className='bg-transparent' />
                                    </span>
                                    <p className='text-[#B3B3B3] font-thin bg-transparent text-[14px] text-center'>{item?.videoTime}</p>
                                </div>
                            }
                        </div>
                    }
                </>
                }
            </div>
            {
                isOpen &&
                <div className={`w-full bg-transparent`}>
                    {content}
                </div>
            }
        </div>
    );
}


export default NewCheckListAccordian