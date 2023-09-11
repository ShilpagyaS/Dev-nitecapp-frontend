import { enUrl } from '@/utils/encoderfunc';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function NewCheckListAccordian({ title, content, onClickFunction, type, completed, inProgress, defaultvalue, onOpenfuncObj, tasks, categoryid, isprogressBar, progress }) {
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
                    <div className='w-full flex items-center justify-start cursor-pointer'>

                        <div className='flex shrink-0 cur items-center bg-transparent'>


                            <span className={`bg-transparent ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                                <Image src={'/asset/learnCourseArrowButton.svg'} height={22} width={18} className='bg-transparent' />
                            </span>

                            <h3 className='text-white text-[18px] font-semibold bg-transparent capitalize ml-[8px]'>{title}</h3>

                        </div>
                    </div>
                }
                {type == 'checklist' &&
                    <div className='flex shrink-0 items-center cursor-pointer justify-between bg-transparent w-full flex-wrap' onClick={(e) => { e.stopPropagation(); onClickFunction(); router.push(`/checklists/${enUrl(title)}?id=${categoryid}`) }}>



                        <h3 className='text-white bg-transparent capitalize ml-[8px]'>{title}</h3>
                        <div className='flex items-center bg-transparent'>
                            {inProgress &&
                                <h3 className='text-[#FFC130] ml-[8px] animate-pulse text-[16px] cursor-pointer font-thin italic bg-transparent capitalize mr-[8px]' >In Progress</h3>
                            }
                            {completed &&
                                <h3 className='text-[#3EAF3F] text-[16px] cursor-pointer font-thin italic bg-transparent capitalize mr-[8px]' >Completed</h3>
                            }
                            <h3 className='text-primary-hoverbase text-[16px] cursor-pointer font-semibold italic bg-transparent capitalize ml-[8px]' >{`Tasks (${tasks})`}</h3>
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


export default NewCheckListAccordian