import Image from 'next/image';
import React, { useState } from 'react'

function AdminNewAccordian({ title, content, type, item, isLearn, onEditChapter, onAddmodule, onEditmodule, onaddContent }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion text-white">
            <div className={`w-full flex justify-between cursor-pointer items-center ${type == 'chapter' ? 'bg-[#040404]' : type == 'module' ? 'bg-[#272727]' : 'bg-[#191919] border border-transparent border-b-[#292929]'} p-[15px]`} onClick={toggleAccordion}>
                <div className='flex shrink-0 items-center bg-transparent'>

                    {(type == 'chapter' || type == 'module') &&

                        <span className={`bg-transparent ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                            <Image src={'/asset/learnCourseArrowButton.svg'} height={22} width={18} className='bg-transparent' />
                        </span>
                    }

                    <h3 className='text-white bg-transparent capitalize ml-[8px]'>{title}</h3>
                </div>
                {!isLearn && <>
                    {(type == 'chapter' || type == 'module') &&
                        <div className='flex bg-transparent items-center'>
                            {/* Admin Buttons */}
                            {
                                type == 'chapter' &&
                                <>
                                    <div className='flex items-center cursor-pointer' onClick={(e) => { onAddmodule(e) }}>
                                        <span className={`bg-transparent mr-[3px]`}>
                                            {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                                <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                            </svg>

                                        </span>

                                        <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add Module</p>
                                    </div>
                                    <div className='flex items-center cursor-pointer' onClick={(e) => { onEditChapter(e) }}>

                                        <span className={`bg-transparent mr-[3px]`}>
                                            {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                                <path d="M6.162 12.6706H14V14.004H2V11.1753L8.6 4.5753L11.428 7.40463L6.16133 12.6706H6.162ZM9.542 3.6333L10.9567 2.21863C11.0817 2.09365 11.2512 2.02344 11.428 2.02344C11.6048 2.02344 11.7743 2.09365 11.8993 2.21863L13.7853 4.10463C13.9103 4.22965 13.9805 4.39919 13.9805 4.57596C13.9805 4.75274 13.9103 4.92228 13.7853 5.0473L12.3707 6.4613L9.54267 3.6333H9.542Z" />
                                            </svg>


                                        </span>
                                        <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Edit Chapter</p>
                                    </div>
                                </>
                            }
                            {
                                type == 'module' &&
                                <>
                                    <div className='flex items-center cursor-pointer bg-transparent' onClick={(e) => { onaddContent(e) }}>

                                        <span className={`bg-transparent mr-[3px]`}>
                                            {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base bg-transparent'>
                                                <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                            </svg>

                                        </span>

                                        <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] bg-transparent'>Add Content</p>
                                    </div>
                                    <div className='flex items-center cursor-pointer bg-transparent' onClick={(e) => { onEditmodule(e) }}>

                                        <span className={`bg-transparent mr-[3px]`}>
                                            {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base bg-transparent'>
                                                <path d="M6.162 12.6706H14V14.004H2V11.1753L8.6 4.5753L11.428 7.40463L6.16133 12.6706H6.162ZM9.542 3.6333L10.9567 2.21863C11.0817 2.09365 11.2512 2.02344 11.428 2.02344C11.6048 2.02344 11.7743 2.09365 11.8993 2.21863L13.7853 4.10463C13.9103 4.22965 13.9805 4.39919 13.9805 4.57596C13.9805 4.75274 13.9103 4.92228 13.7853 5.0473L12.3707 6.4613L9.54267 3.6333H9.542Z" />
                                            </svg>


                                        </span>
                                        <p className='text-[14px] bg-transparent text-primary-base not-italic font-semibold mr-[10px] '>Edit Module</p>
                                    </div>
                                </>
                            }

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
export default AdminNewAccordian