import Image from 'next/image'
import React, { useState } from 'react'

function AdminFlashcard({ data, onClickHandler, onEditCick, onDeleteClick }) {
    const [isHover, setishover] = useState({
        hover: false,
        index: null
    })
    return (
        <div className='p-[8px] w-[248px] h-[175px] flex flex-col border border-[#3C3C3C] rounded-[11px] cursor-pointer'

            onMouseEnter={() => {
                setishover({
                    hover: true,
                    index: '2'
                })
            }} onMouseLeave={() => {
                setishover({
                    hover: false,
                    index: null
                })
            }}
        >
            <div className='h-[95px] w-[230px] bg-[#D9D9D9] rounded-[12px]' onClick={onClickHandler} >

            </div>
            <div className='flex items-center justify-between relative'>
                <div className=''>
                    <h2 className='not-italic font-bold text-xs font-Inter mt-[15px] text-white ml-[10px]' onClick={onClickHandler}>
                        Psychology of Hospitality
                    </h2>
                    <p className='not-italic font-[400] text-xs font-Inter mt-[5px] text-[#959595] ml-[10px]' onClick={onClickHandler}>
                        74 Cards
                    </p>
                </div>
                {
                    isHover.hover &&

                    <div className='bg-transparent flex items-center absolute right-2'>

                        {/* <div className="editbutton cursor-pointer flex items-center justify-center bg-primary-base p-2 rounded-full w-fit " onClick={() => { onclickEdit() }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" className="bg-transparent" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.47275 15.4172H17.25V17.2506H0.75V13.3611L9.825 4.28615L13.7135 8.17648L6.47183 15.4172H6.47275ZM11.1202 2.9909L13.0654 1.04573C13.2373 0.873883 13.4704 0.777344 13.7135 0.777344C13.9566 0.777344 14.1897 0.873883 14.3616 1.04573L16.9548 3.63898C17.1267 3.81088 17.2232 4.044 17.2232 4.28706C17.2232 4.53013 17.1267 4.76325 16.9548 4.93515L15.0097 6.8794L11.1212 2.9909H11.1202Z" fill="white" />
                        </svg>
                    </div> */}
                        <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mr-[5px]' onClick={() => { onEditCick() }}>
                            <Image
                                src={'/asset/EditVector.svg'}
                                // src={'/asset/DeleteVector.svg'}
                                width={20}
                                height={20}
                                className="bg-[#171717]"
                            />
                        </button>
                        <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center' onClick={() => { onDeleteClick() }}>
                            <Image
                                src={'/asset/DeleteVector.svg'}
                                // src={'/asset/DeleteVector.svg'}
                                width={20}
                                height={20}
                                className="bg-[#171717]"
                            />
                        </button>
                    </div>

                }
            </div>
        </div>
    )
}

export default AdminFlashcard