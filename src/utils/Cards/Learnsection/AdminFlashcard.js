import Image from 'next/image'
import React, { useState } from 'react'

function AdminFlashcard({ data, onClickHandler, onEditCick, onDeleteClick }) {
    const [isHover, setishover] = useState({
        hover: false,
        index: null
    })
    return (
        <div className='p-[8px] min-w-[150px] max-w-[250px] w-full h-[175px] flex flex-col border border-[#3C3C3C] rounded-[11px] cursor-pointer'

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
            {data?.image ?
                <div className='h-[95px] min-w-[100px] relative rounded-[12px]'>
                    <Image src={data.image} fill className='rounded-[12px] object-cover'
                        onClick={() => {
                            // router.push(`/learn/flashcards/${data.name}?id=${data.id}`)
                            onClickHandler()
                        }
                        } />

                </div>
                :
                <div className='h-[95px] min-w-[100px] w-full bg-[#D9D9D9] rounded-[12px]' onClick={onClickHandler} >
                </div>
            }
            <div className='flex items-center justify-between relative'>
                <div className=''>
                    <h2 className='not-italic font-bold text-xs font-Inter mt-[15px] text-white ml-[10px]' onClick={onClickHandler}>
                        {data?.name}
                    </h2>
                    <p className='not-italic font-[400] text-xs font-Inter mt-[5px] text-[#959595] ml-[10px]' onClick={onClickHandler}>
                        {` ${data?.cardCount ? data?.cardCount : `0`} Cards`}
                    </p>
                </div>
                {
                    isHover.hover &&

                    <div className='bg-transparent flex items-center absolute right-2'>

                        <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mr-[5px]' onClick={() => { onEditCick() }}>
                            <Image
                                src={'/asset/EditVector.svg'}
                                width={20}
                                height={20}
                                className="bg-[#171717]"
                            />
                        </button>
                        <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center' onClick={() => { onDeleteClick() }}>
                            <Image
                                src={'/asset/DeleteVector.svg'}
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