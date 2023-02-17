import React from 'react'

function PrepText({ingredient , quantity}) {
    return (
        <div className='flex h-[40px] w-[485px] items-center justify-between py-2 px-4 bg-[#2C2C2C]'>
            <div className=''>

                <h3 className="not-italic font-normal text-base leading-6 bg-[#2C2C2C]">
                    {ingredient}
                </h3>
            </div>
            <div>

                <h3 className="not-italic font-normal text-base leading-6 bg-[#2C2C2C]">
                    {quantity}
                </h3>
            </div>
        </div>
    )
}

export default PrepText


// exampl to use  <PrepText ingredient={'Spirit of choice'} quantity={'2 oz'} />