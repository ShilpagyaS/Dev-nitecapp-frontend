import { getCategorySearch, getProductSearch } from '@/store/slices/product';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const SearchCategoryDebounce = ({
    placeholder,
    label,
    defaultvalue,
    type,
    onChangeHandler,
    isClear,
    // searchoptions,
    functiondata
}) => {
    const [enableOption, setEnableOption] = useState(false);
    const [searchoptions, setsearchoptions] = useState([])
    const [testvalue, settestvalue] = useState({ label: "", value: "" })
    const dispatch = useDispatch()

    useEffect(() => {
        if (defaultvalue) {
            settestvalue({ label: defaultvalue.name, value: defaultvalue.ingredient_id })
        }
    }, [defaultvalue])

    useEffect(() => {
        if (isClear == true) {
            settestvalue({ label: '', value: '' })
        }
    }, [isClear])

    useEffect(() => {

        console.log(testvalue);
        const getData = setTimeout(async () => dispatch(getCategorySearch(testvalue, type)).then(res => {
            // console.log(res);
            if (res) { setsearchoptions(res) }
            else setsearchoptions([])
        }
        ), 100)
        // const getData = setTimeout(async () => functiondata().then(res => { console.log(res); if (res) { setsearchoptions(res) }else setsearchoptions([]) }), 500)
        return () => clearTimeout(getData)


    }, [testvalue])

    return (
        <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
            <h5
                className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
             text-[#959595]`}
            // ${enableOption == false ? "text-[#959595]" : "text-white"}`}
            >
                {label}
            </h5>
            <div className="relative w-full">
                <input
                    className={`box-border mt-[4px] py-[8px] pl-[16px] rounded-[9px] h-[50px] border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px] 
                     placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none
              focus:border-white  focus:ring-offset-white focus:ring-1 
                block w-full  appearance-none pr-[35px]`}
                    type="text"
                    name="concept"
                    placeholder={placeholder}
                    value={testvalue.label}
                    onChange={(e) => {

                        settestvalue({ label: e.target.value, value: "" })
                        // onChangeHandler({ label: e.target.value, value: "" })
                    }
                    }
                    onFocus={() => {
                        setEnableOption(true);
                    }}
                />
                <div
                    className={`cursor-pointer absolute top-2 right-2 flex items-center h-[40px]
                 ${enableOption == false ? "text-[#959595]" : "text-white"}`}
                >
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="7.72656"
                            cy="7.79956"
                            r="6.75"
                            stroke="#929292"
                            strokeWidth="1.5"
                        />
                        <rect
                            x="13.8203"
                            y="12.1089"
                            width="6.83381"
                            height="1.5"
                            transform="rotate(40.6744 13.8203 12.1089)"
                            fill="#929292"
                        />
                    </svg>
                </div>
                {enableOption && searchoptions.length > 0 && (
                    <div className="relative">
                        <div className="absolute z-10  max-h-[180px] scrollbar overflow-y-scroll  w-full px-1 bg-black border border-white rounded-lg shadow-md mt-1">
                            {searchoptions.map((option, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center cursor-pointer w-full text-left px-[15px] py-2 text-[#A8A8A8] hover:bg-white hover:text-black focus:outline-none"
                                    onClick={() => {
                                        onChangeHandler(option);
                                        console.log(option);
                                        settestvalue(option)
                                        setEnableOption(false);
                                    }}
                                >
                                    {option.label}
                                    <div className='h-[50px] w-[50px] rounded-full relative'>
                                        <Image
                                            src={option.image || '/asset/noimagedrinkeditsquare.jpg'}
                                            // src={'/asset/blue-moon.svg'}
                                            className={` rounded-full `}
                                            fill
                                            alt={'image'}
                                            priority
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default SearchCategoryDebounce