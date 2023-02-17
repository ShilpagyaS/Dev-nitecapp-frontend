import React from 'react'
import { _INITIAL, _ERROR, _PASS } from './Constants'

export default function Bullets(props) {
    // console.log(props.messageArray)
    return (
        <>
            <div className='mb-[14px] flex flex-col justify-start max-w-[300px] min-w-[300px]' >

                <ul className='list-disc max-w-[302px]  pl-4 '>
                    {
                        props.messageArray.map((msg, i) =>
                            <li key={i} className={`text-[12px] font-Inter font-normal leading-tight tracking-[0.42px] 
                            ${msg.response == _ERROR ? 'text-[#EB4949]' : msg.response == _PASS ? 'text-[#3FD79C]' : 'text-[#959595]'}
                            `}>
                                <div className='min-h-[19px] flex items-center mt-[1px]'>
                                    {msg.message}
                                </div>
                            </li>
                        )
                    }


                </ul>
            </div>
        </>
    )
}
