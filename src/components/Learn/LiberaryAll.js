import React from 'react'
import Breadcrumb from '../Breadcrumb'
import LIberaryComponents from './LIberaryComponents'

function LiberaryAll() {
    return (
        <div className='w-full'>
            <Breadcrumb />
            <div className="flex items-center mb-[33px]">

                <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                    {`Library`}
                </h5>
            </div>
            <LIberaryComponents />
        </div>
    )
}

export default LiberaryAll