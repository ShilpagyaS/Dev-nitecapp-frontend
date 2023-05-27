import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Moduleinititalcard({ show, name, completionPercentageOuter }) {
    const [completionPercentage, setcompletepercentage] = useState(null)
    const route = useRouter()
    useEffect(() => {
        if (show == true) {
            setTimeout(() => {
                setcompletepercentage(completionPercentageOuter)
            }, 600);
        }
    }, [show])
    return (
        <div className={`  ${show ? 'h-[101px] w-[386px] p-[20px] mt-[30px] ' : 'h-0 w-0 opacity-0 m-0'} transition-all duration-300 ease-in-out rounded-md border border-[#3C3C3C] `}  onClick={() => { route.push(`/learn/library/Bar 101/intor?id=2`) }}>
            <p className={`not-italic font-semibold  text-white ${show ? 'w-full text-[22px]' : 'w-0  opacity-0 text-[0px]'} transition-all duration-300 ease-in-out`}>{name}</p>
            <div className='w-full '>

                <div className={`flex flex-row justify-start items-center ${show ? 'w-full h-[4px]' : 'h-0 w-0  opacity-0'} transition-all duration-300 ease-in-out bg-[#2F2F2F] rounded-[18px] mt-[16px]`}>
                    <div className='bg-primary-base h-full transition-all duration-300 ease-in-out ' style={{ width: `${completionPercentage ? completionPercentage : 0}%` }}></div>
                </div>
            </div>
        </div>)
}

export default Moduleinititalcard