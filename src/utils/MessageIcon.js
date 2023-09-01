import React from 'react'

function MessageIcon({ onMessageClick, comment }) {
    return (
        <div className='p-[3px] rounded-full h-[30px] w-[30px] bg-[#292929] flex items-center justify-center' onClick={onMessageClick}>
            <div className='relative bg-transparent'>

                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                    <path d="M7.3677 6.63189C7.77465 6.63189 8.10454 6.30199 8.10454 5.89505C8.10454 5.4881 7.77465 5.1582 7.3677 5.1582C6.96075 5.1582 6.63086 5.4881 6.63086 5.89505C6.63086 6.30199 6.96075 6.63189 7.3677 6.63189Z" className='bg-transparent fill-primary-base' />
                    <path d="M10.315 6.63189C10.7219 6.63189 11.0518 6.30199 11.0518 5.89505C11.0518 5.4881 10.7219 5.1582 10.315 5.1582C9.90802 5.1582 9.57812 5.4881 9.57812 5.89505C9.57812 6.30199 9.90802 6.63189 10.315 6.63189Z" className='bg-transparent fill-primary-base' />
                    <path d="M4.42044 6.63189C4.82738 6.63189 5.15728 6.30199 5.15728 5.89505C5.15728 5.4881 4.82738 5.1582 4.42044 5.1582C4.01349 5.1582 3.68359 5.4881 3.68359 5.89505C3.68359 6.30199 4.01349 6.63189 4.42044 6.63189Z" className='bg-transparent fill-primary-base' />
                    <path d="M12.5263 0H2.21053C1.62426 0 1.062 0.232894 0.647448 0.647448C0.232894 1.062 0 1.62426 0 2.21053V13.2632C0.000225 13.3937 0.0351391 13.5219 0.101169 13.6345C0.167198 13.7472 0.261972 13.8402 0.375789 13.9042C0.485915 13.9666 0.610261 13.9996 0.736842 14C0.869093 14 0.998896 13.9643 1.11263 13.8968L4.42105 11.8926C4.54334 11.8198 4.6841 11.784 4.82632 11.7895H12.5263C13.1126 11.7895 13.6748 11.5566 14.0894 11.142C14.5039 10.7275 14.7368 10.1652 14.7368 9.57895V2.21053C14.7368 1.62426 14.5039 1.062 14.0894 0.647448C13.6748 0.232894 13.1126 0 12.5263 0ZM13.2632 9.57895C13.2632 9.77437 13.1855 9.96179 13.0473 10.1C12.9092 10.2382 12.7217 10.3158 12.5263 10.3158H4.82632C4.42387 10.3155 4.02897 10.425 3.68421 10.6326L1.47368 11.9589V2.21053C1.47368 2.0151 1.55132 1.82769 1.6895 1.6895C1.82769 1.55132 2.0151 1.47368 2.21053 1.47368H12.5263C12.7217 1.47368 12.9092 1.55132 13.0473 1.6895C13.1855 1.82769 13.2632 2.0151 13.2632 2.21053V9.57895Z" className='bg-transparent fill-primary-base' />
                </svg>
                {
                    comment != '' &&
                    <div className='w-[10px] h-[10px] border-black animate-bounce  bg-white border-[2px]  absolute right-[-3px] top-[-3px] rounded-full '>
                        {/* <div className='w-[10px] h-[10px] border-black animate-bounce  bg-[#959595] border-[2px]  absolute right-[-3px] top-[-3px] rounded-full '> */}

                    </div>
                }
            </div>
        </div>
    )
}

export default MessageIcon