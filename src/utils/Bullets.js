import React from 'react'

export default function Bullets(props) {
    console.log(props.messageArray)
    return (
        <>
            <div className='mb-[14px]' >

                <ul className='list-disc max-w-[302px] text-[#959595] pl-4 '>
                    {
                        props.messageArray.map((msg, i) =>
                            <li key={i} className='text-[12px] font-Inter font-normal leading-tight tracking-[0.42px]'>
                                <div className='h-[19px] flex items-center mt-[1px]'>
                                    {msg}
                                </div>
                            </li>
                        )
                    }


                </ul>
            </div>
        </>
    )
}
