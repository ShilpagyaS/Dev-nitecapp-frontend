import React from 'react'

export function ConditionalButton({ onClickHandler, condition, label }) {
    return (
        <div className="">
            <button
                className={` ${condition == true ? "bg-primary-base" : "bg-[#3E3E3E]"
                    } py-[7px] px-[24px] h-[41px] rounded-full ${condition == true
                        ? "hover:bg-primary-hoverbase "
                        : "disabled:hover:bg-primary-hoverbase cursor-no-drop "
                    } text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
                onClick={() => { if (condition == true) onClickHandler() }}
            >
                {label}
            </button>
        </div>
    );
}

export default ConditionalButton