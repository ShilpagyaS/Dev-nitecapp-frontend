import React from 'react'

function SplitCard({ desc, quantity }) {
    return (
        <div className="choice-container bg-[#2C2C2C] w-full  py-2 px-4 rounded-[5px] flex justify-between text-white mb-[16px] items-center">
            <p className=" bg-transparent ">{desc}</p>
            <p className=" bg-transparent ">{quantity != '' ? quantity : 'Enter Value'}</p>
        </div>
    )
}

export default SplitCard