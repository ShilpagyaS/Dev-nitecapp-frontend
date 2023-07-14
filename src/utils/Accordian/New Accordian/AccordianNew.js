import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function AccordianNew({ title, content, type, item, isLearn, defaultvalue, onOpenfuncObj }) {
    const [isOpen, setIsOpen] = useState(false);

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
            <div className={`w-full flex justify-between cursor-pointer items-center ${type == 'chapter' ? 'bg-[#040404]' : type == 'module' ? 'bg-[#272727]' : 'bg-[#191919] border border-transparent border-b-[#292929]'} p-[15px]`}
                onClick={toggleAccordion}>
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

export default AccordianNew