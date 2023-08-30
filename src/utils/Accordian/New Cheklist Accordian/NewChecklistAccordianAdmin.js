import { enUrl } from '@/utils/encoderfunc';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function NewChecklistAccordianAdmin({ title, content, type, categoryid, defaultvalue, onOpenfuncObj, tasks, onAddChecklistClick, onAddTasksCLick, onEditClick, ondelete }) {
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
            <div className={`w-full flex border border-[#404040]  justify-between  items-center ${type == 'user' ? 'bg-[#040404]' : type == 'checklist' ? 'bg-[#272727]' : 'bg-[#191919] border border-transparent border-b-[#292929]'} p-[15px]`}
                onClick={toggleAccordion}>
                {type == 'user' &&
                    <div className='flex items-center cursor-pointer justify-between w-full'>

                        <div className='flex shrink-0 items-center bg-transparent'>


                            <span className={`bg-transparent ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                                <Image src={'/asset/learnCourseArrowButton.svg'} height={22} width={18} className='bg-transparent' />
                            </span>

                            <h3 className='text-white text-[18px] font-semibold bg-transparent capitalize ml-[8px]'>{title}</h3>

                        </div>
                        <div className='flex items-center'>
                            <div className='flex items-center cursor-pointer' onClick={(e) => { onAddChecklistClick(e) }}>
                                <span className={`bg-transparent mr-[3px]`}>
                                    {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                        <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                    </svg>

                                </span>

                                <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add Checklist</p>
                            </div>
                            <div className='flex items-center cursor-pointer ml-[10px]' onClick={(e) => { onEditClick(e) }}>

                                <span className={`bg-transparent mr-[3px]`}>
                                    {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                        <path d="M6.162 12.6706H14V14.004H2V11.1753L8.6 4.5753L11.428 7.40463L6.16133 12.6706H6.162ZM9.542 3.6333L10.9567 2.21863C11.0817 2.09365 11.2512 2.02344 11.428 2.02344C11.6048 2.02344 11.7743 2.09365 11.8993 2.21863L13.7853 4.10463C13.9103 4.22965 13.9805 4.39919 13.9805 4.57596C13.9805 4.75274 13.9103 4.92228 13.7853 5.0473L12.3707 6.4613L9.54267 3.6333H9.542Z" />
                                    </svg>


                                </span>
                                <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Edit</p>
                            </div>
                            <button className='h-[20px] w-[20px] rounded-full bg-transparent flex items-center justify-center ml-[10px]'
                                // <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                                onClick={(e) => {
                                    ondelete(e)
                                }}>
                                <Image
                                    src={'/asset/DeleteVector.svg'}
                                    width={20}
                                    height={20}
                                    className="bg-transparent"
                                // className="bg-[#171717]"
                                />
                            </button>
                        </div>
                    </div>
                }
                {type == 'checklist' &&


                    <div className='flex shrink-0 items-center justify-between bg-transparent w-full ' onClick={() => {

                        // router.push(`/checklist/${enUrl(title)}?id=${categoryid}`)
                    }}>



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
                            <div className='flex items-center bg-transparent'>
                                {
                                    tasks < 1 ?

                                        <div className='flex items-center  bg-transparent cursor-pointer' onClick={(e) => { onAddTasksCLick(e) }}>
                                            <span className={`bg-transparent mr-[3px]`}>
                                                {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base bg-transparent'>
                                                    <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                                </svg>

                                            </span>

                                            <p className='text-[14px] text-primary-base not-italic bg-transparent font-semibold mr-[10px] '>Add Tasks</p>
                                        </div>
                                        :
                                        <>
                                            <div className='flex items-center cursor-pointer bg-transparent mr-[10px]' onClick={(e) => { e.stopPropagation; router.push(`/checklist/${enUrl(title)}?id=${categoryid}`) }}>

                                                {/* <span className={`bg-transparent mr-[3px]`}>
                                                    <svg width="20" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent' >
                                                        <path d="M25.3176 19.4991C25.3176 22.7166 22.7176 25.3166 19.5001 25.3166C16.2826 25.3166 13.6826 22.7166 13.6826 19.4991C13.6826 16.2816 16.2826 13.6816 19.5001 13.6816C22.7176 13.6816 25.3176 16.2816 25.3176 19.4991Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='stroke-primary-base' />
                                                        <path d="M19.5002 32.9387C25.2365 32.9387 30.5827 29.5587 34.304 23.7087C35.7665 21.4174 35.7665 17.5662 34.304 15.2749C30.5827 9.42492 25.2365 6.04492 19.5002 6.04492C13.764 6.04492 8.41773 9.42492 4.69648 15.2749C3.23398 17.5662 3.23398 21.4174 4.69648 23.7087C8.41773 29.5587 13.764 32.9387 19.5002 32.9387Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='stroke-primary-base' />
                                                    </svg>


                                                </span> */}
                                                <p className='text-[16px] bg-transparent text-primary-base not-italic font-semibold mr-[10px] '>{`Tasks (${tasks})`} </p>
                                            </div>
                                        </>
                                }
                                <div className='flex items-center cursor-pointer ml-[10px] bg-transparent' onClick={(e) => { onEditClick(e) }}>

                                    <span className={`bg-transparent mr-[3px]`}>
                                        {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base bg-transparent'>
                                            <path d="M6.162 12.6706H14V14.004H2V11.1753L8.6 4.5753L11.428 7.40463L6.16133 12.6706H6.162ZM9.542 3.6333L10.9567 2.21863C11.0817 2.09365 11.2512 2.02344 11.428 2.02344C11.6048 2.02344 11.7743 2.09365 11.8993 2.21863L13.7853 4.10463C13.9103 4.22965 13.9805 4.39919 13.9805 4.57596C13.9805 4.75274 13.9103 4.92228 13.7853 5.0473L12.3707 6.4613L9.54267 3.6333H9.542Z" />
                                        </svg>


                                    </span>
                                    <p className='text-[14px] bg-transparent text-primary-base not-italic font-semibold mr-[10px] '>Edit</p>
                                </div>
                                <button className='h-[20px] w-[20px] rounded-full bg-transparent flex items-center justify-center ml-[10px]'
                                    // <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                                    onClick={(e) => {
                                        ondelete(e)


                                    }}>
                                    <Image
                                        src={'/asset/DeleteVector.svg'}
                                        width={20}
                                        height={20}
                                        className="bg-transparent"
                                    // className="bg-[#171717]"
                                    />
                                </button>
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