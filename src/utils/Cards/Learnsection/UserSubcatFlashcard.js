import React from 'react'

function UserSubcatFlashcard({ data, onClickHandler }) {
    return (
        <div className='p-[8px] w-[248px] h-[175px] flex flex-col border border-[#3C3C3C] rounded-[11px] cursor-pointer'   
        onClick={onClickHandler}
        >
            <div className='h-[95px] w-[230px] bg-[#D9D9D9] rounded-[12px]' >

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
              
            </div>
        </div>)
}

export default UserSubcatFlashcard