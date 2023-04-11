import React from 'react'

export function ConditionalButton({ onClickHandler, condition, label }) {
    return (
        <div className="">
            <button
                className={` ${condition == true ? "bg-[#F19B6C]" : "bg-[#3E3E3E]"
                    } py-[5px] px-[17px] h-[41px] rounded-full ${condition == true
                        ? "hover:bg-[#ee854d] "
                        : "disabled:hover:bg-[#ee854d] cursor-no-drop "
                    } text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                onClick={() => { if (condition == true) onClickHandler() }}
            >
                {label}
            </button>
        </div>
    );
}

export default ConditionalButton