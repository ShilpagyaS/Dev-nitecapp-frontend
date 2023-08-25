import React from 'react'

function ChecklistLogs() {
    const list = [1,2,3,4,5,6,7,8,9]
    return (
        <div>
            <div className='grid grid-cols-12 bg-[#181818] rounded-lg p-2 mb-[10px]'>
                <div className='col-span-3 flex items-center justify-start bg-transparent pl-[10px]'>
                    <div className='w-[16px] h-[16px] border border-[#959595] rounded-md mr-[10px]'>

                    </div>
                    <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                        Checklist
                    </h3>
                </div>
                <div className='col-span-2 flex items-center justify-center bg-transparent'>
                    <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                        Group
                    </h3>
                </div>
                <div className='col-span-2 flex items-center justify-center bg-transparent'>
                    <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                        {`Submitted(Role)`}
                    </h3>
                </div>
                <div className='col-span-2 flex items-center justify-center bg-transparent'>
                    <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                        Submitted by
                    </h3>
                </div>
                <div className='col-span-3 flex items-center justify-center bg-transparent'>
                    <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                        Date / Time
                    </h3>
                </div>
            </div>
            {
                list.map(() =>
                    <div className='grid grid-cols-12 bg-transparent border border-x-0 border-t-0 border-b-[#161616] rounded-lg p-2 mb-[10px] hover:bg-[#222222] hover:border-white hover:border cursor-pointer'>
                        <div className='col-span-3 flex items-center justify-start bg-transparent pl-[10px]'>
                            <div className='w-[16px] h-[16px] border border-[#959595] rounded-md mr-[10px]'>

                            </div>
                            <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                Bartender Opening List (4/5)
                            </h3>
                        </div>
                        <div className='col-span-2 flex items-center justify-center bg-transparent'>
                            <h3 className='text-white font-semibold truncate rounded-[4px] not-italic text-[14px] bg-primary-base py-[2px] px-[8px] '>
                                The Delphi Cafe Coffee | Tea
                            </h3>
                        </div>
                        <div className='col-span-2 flex items-center justify-center bg-transparent'>
                            <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                Server
                            </h3>
                        </div>
                        <div className='col-span-2 flex items-center justify-center bg-transparent'>
                            <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                Shubham Namdev
                            </h3>
                        </div>
                        <div className='col-span-3 flex items-center justify-center bg-transparent'>
                            <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                08/12/2023 (10:24 AM)
                            </h3>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ChecklistLogs