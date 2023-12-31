import { enUrl } from '@/utils/encoderfunc';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function DashboardLiberaryCard({ completionPercentageOuter, image, name, desc, item, isAdmin, onclickEdit, onDelete }) {
    const [completionPercentage, setcompletepercentage] = useState(null)
    const [isHover, setishover] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (completionPercentageOuter) {
            setTimeout(() => {
                setcompletepercentage(completionPercentageOuter)
            }, 1000);
        }
    }, [])

    return (
        <div className='max-w-[373px] w-full flex flex-col min-h-[293px] h-full border border-[#3C3C3C] rounded-[13px] px-[6px] py-[8px] cursor-pointer relative' onMouseEnter={() => { setishover(true) }} onMouseLeave={() => { setishover(false) }}>
            <div className='imagecontainer relative max-w-[360px] w-[100%] h-[152px]' onClick={() => { router.push(`/learn/library/${enUrl(item.name)}?id=${item.id}`) }}>
                <Image src={image} fill className='rounded-[8px] object-cover' />
                <div className='absolute h-full w-full bg-[#00000087] flex items-center justify-center'>

                    <p className='not-italic font-[500] text-[24px] capitalize font-Inter text-white bg-transparent w-[200px] text-center'>{name} </p>
                </div>

            </div>
            <p className='not-italic flex-auto font-normal text-[16px] font-Inter text-[#959595] mt-[15px] px-3' onClick={() => { router.push(`/learn/library/${enUrl(item.name)}?id=${item.id}`) }}>
                {desc}
            </p>
            {
                !isAdmin &&
                <div className='w-full h-[50px]'>
                    <div className='flex items-center justify-end not-italic font-normal text-[14px] font-Inter text-[#959595] mx-[10px] ' onClick={() => { router.push(`/learn/library/${enUrl(item.name)}?id=${item.id}`) }}>
                        {`${completionPercentage > 0 ? parseFloat(completionPercentage).toFixed(1) : 0}% Complete`}

                    </div>

                    <div className='w-full px-[10px] ' onClick={() => { router.push(`/learn/library/${enUrl(item.name)}?id=${item.id}`) }}>

                        <div className='flex flex-row justify-start items-center w-full h-[4px] bg-[#2F2F2F] rounded-[18px] mt-[16px]'>
                            <div className='bg-primary-base h-full transition-all duration-300 ease-in-out ' style={{ width: `${completionPercentage ? completionPercentage : 0}%` }}></div>
                        </div>
                    </div>
                </div>
            }
            {
                isAdmin && isHover &&
                <div className='absolute top-3 right-3 flex items-center bg-transparent'>
                    <button className='h-[35px] w-[35px] mr-[5px] rounded-full bg-transparent flex items-center justify-center' onClick={() => { onDelete() }}>
                        {/* <button className='h-[35px] w-[35px] mr-[5px] rounded-full bg-[#171717] flex items-center justify-center' onClick={() => { }}> */}
                        <Image
                            src={'/asset/DeleteVector.svg'}
                            width={18}
                            height={18}
                            className="bg-transparent"
                        />
                    </button>
                    <div className="editbutton cursor-pointer flex items-center justify-center bg-primary-base p-2 rounded-full w-fit " onClick={() => { onclickEdit(); }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" className="bg-transparent" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.47275 15.4172H17.25V17.2506H0.75V13.3611L9.825 4.28615L13.7135 8.17648L6.47183 15.4172H6.47275ZM11.1202 2.9909L13.0654 1.04573C13.2373 0.873883 13.4704 0.777344 13.7135 0.777344C13.9566 0.777344 14.1897 0.873883 14.3616 1.04573L16.9548 3.63898C17.1267 3.81088 17.2232 4.044 17.2232 4.28706C17.2232 4.53013 17.1267 4.76325 16.9548 4.93515L15.0097 6.8794L11.1212 2.9909H11.1202Z" fill="white" />
                        </svg>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardLiberaryCard