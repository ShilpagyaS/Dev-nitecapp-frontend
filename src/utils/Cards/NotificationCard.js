import React from 'react'

function NotificationCard() {
    return (
        <div className='bg-[#333333] h-[70px] w-[170px] p-[5px] rounded-lg relative flex items-center justify-center'>
            <div className='relative h-[30px] w-[30px] bg-white rounded-[8px]'>

            </div>
            <div className='flex flex-col items-center justify-center ml-[10px] bg-transparent'>
                <h5 className='not-italic text-white bg-transparent font-semibold text-[13px] font-Inter'>Joshn WICK</h5>

                <p className='not-italic font-semibold bg-transparent text-[10px] text-[#8E8E8E] '>singhritwik9@gmail.com</p>

            </div>
        </div>
    )
}

export default NotificationCard