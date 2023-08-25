import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function NewChecklistAccordianAdmin({ title, content, type, item, defaultvalue, onOpenfuncObj, tasks, onAddChecklistClick, onAddTasksCLick }) {
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
            <div className={`w-full flex border border-[#404040]  justify-between cursor-pointer items-center ${type == 'user' ? 'bg-[#040404]' : type == 'checklist' ? 'bg-[#272727]' : 'bg-[#191919] border border-transparent border-b-[#292929]'} p-[15px]`}
                onClick={toggleAccordion}>
                {type == 'user' &&
                    <div className='flex items-center justify-between w-full'>

                        <div className='flex shrink-0 items-center bg-transparent'>


                            <span className={`bg-transparent ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                                <Image src={'/asset/learnCourseArrowButton.svg'} height={22} width={18} className='bg-transparent' />
                            </span>

                            <h3 className='text-white text-[18px] font-semibold bg-transparent capitalize ml-[8px]'>{title}</h3>

                        </div>
                        <div className='flex items-center cursor-pointer' onClick={(e) => { onAddChecklistClick(e) }}>
                            <span className={`bg-transparent mr-[3px]`}>
                                {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                    <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                </svg>

                            </span>

                            <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add Checklist</p>
                        </div>
                    </div>
                }
                {type == 'checklist' &&


                    <div className='flex shrink-0 items-center justify-between bg-transparent w-full '>



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

                            <div className='flex items-center  bg-transparent cursor-pointer' onClick={(e) => { onAddTasksCLick(e) }}>
                                <span className={`bg-transparent mr-[3px]`}>
                                    {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base bg-transparent'>
                                        <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                    </svg>

                                </span>

                                <p className='text-[14px] text-primary-base not-italic bg-transparent font-semibold mr-[10px] '>Add Tasks</p>
                            </div>
                        </div>
                    </div>

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


export default NewChecklistAccordianAdmin