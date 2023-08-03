import Image from 'next/image'
import React, { useState } from 'react'

function Search({ search, setSearch }) {
    const [isFocus, setFocus] = useState(false)
    return (

        <div className={`search-container flex items-center bg-[#1D1D1D] md:min-w-[201px] h-[40px] rounded-[10.9744px] pl-[20px] ${isFocus ? 'border border-white' : ''}`} >
            <Image
                src={'/asset/SearchIcon.svg'}
                width={14}
                height={25}
                className="bg-[#1D1D1D] "
                priority
            />
            <input
                className={`bg-[#1D1D1D] text-[16px] ml-[10px] leading-6 h-full rounded-[10.9744px] focus:outline-none placeholder:font-Inter placeholder:text-[14px] placeholder-[#959595] text-white pr-[10px] `}
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
            />
        </div>
    )
}

export default Search