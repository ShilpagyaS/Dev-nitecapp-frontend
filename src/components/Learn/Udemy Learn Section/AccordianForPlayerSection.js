import AccordianTwo from '@/utils/Accordian/AccordianTwo'
import Image from 'next/image'
import React from 'react'

function AccordianForPlayerSection({ ChapterArray, onItemClicked, onRightClick, onLeftClick }) {
    return (
        <div>
            <div className='bg-[#0F0F0F] text-white p-[5px] min-h-[50px] flex items-center justify-between'>
                <div className={`bg-transparent flex items-center cursor-pointer`} onClick={() => { onLeftClick() }}>
                    <Image src={'/asset/LearnRightArrowKey.svg'} height={22} width={18} className='bg-transparent rotate-180  ' />
                </div>
                <p className='text-white bg-transparent px-[10px]'>{`Chapter: ${ChapterArray.title}`} </p>

                <span className={`bg-transparent flex items-center justify-center cursor-pointer`} onClick={() => { onRightClick() }}>
                    <Image src={'/asset/LearnRightArrowKey.svg'} height={22} width={18} className='bg-transparent' />
                </span>
            </div>
            <div className='max-h-[320px] h-[320px] overflow-auto hidescrollbar'>

                <AccordianTwo items={ChapterArray.items} onClickItem={(item) => { onItemClicked(item) }} />
            </div>
        </div>
    )
}

export default AccordianForPlayerSection