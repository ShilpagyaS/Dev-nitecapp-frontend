import Image from 'next/image'
import React from 'react'

function Search() {
    return (
        <div className="search-container flex items-center bg-[#1D1D1D] w-[201px] h-[40px] rounded-[10.9744px] pl-[20px]">
            <Image
                src={'/asset/SearchIcon.svg'}
                width={14}
                height={25}
                className="bg-[#1D1D1D] "
            />
            <input
                className="bg-[#1D1D1D] text-[16px] ml-[10px] leading-6 h-full rounded-[10.9744px] focus:outline-none placeholder:font-Inter placeholder:text-[14px] placeholder-[#959595] text-white pr-[10px] "
                type="text"
                placeholder="Search"
            />
        </div>
    )
}

export default Search