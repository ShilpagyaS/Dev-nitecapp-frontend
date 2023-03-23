import React from 'react'

function Simplecard({i, content }) {
    return (
        <div className="choice-container bg-[#2C2C2C] w-full py-2 px-4 rounded-[5px] text-white mb-[16px]">
            <p className=" bg-transparent ">
                {`${i}. ${content}`}
            </p>
        </div>
    )
}

export default Simplecard