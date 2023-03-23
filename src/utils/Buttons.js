import React from "react";

export function Buttons({ onClickHandler, label }) {
  return (
    <div className="pt-[26px]">
      <button
        className="bg-[#F19B6C] py-[12px] px-[24px] h-[54px] w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full hover:bg-[#ee854d] text-black gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]"
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
}

export function CustomButton({
  onClickHandler,
  label,
  color,
  background,
  rounded,
  hover,
}) {
  return (
    <button
      className={` h-fit
     ${background ? `py-[8px] px-[32px] bg-[${background}]` : `bg-transparent`}
      h-[54px] rounded-[27px] ${hover && `hover:bg-[#ee854d]`} hover:text-white 
      text-[${color}]
      gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]`}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}

export function ConditionalButtons({ onClickHandler, condition, label }) {
  return (
    <div className="pt-[26px]">
      <button
        className={` ${
          condition == true ? "bg-[#F19B6C]" : "bg-[#3E3E3E]"
        } py-[12px] px-[24px] h-[54px] w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full ${
          condition == true
            ? "hover:bg-[#ee854d] "
            : "disabled:hover:bg-[#ee854d] cursor-no-drop "
        } text-black gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]`}
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
}
export function OrangeButtons({ onClickHandler, label, noPadding }) {
  return (
    <div className={`${!noPadding && "pt-[26px]"}`}>
      <button
        className="border border-[#F19B6C] text-[#F19B6C]  py-[6px] px-[12px] w-[111px] rounded-full hover:bg-[#ee854d] hover:text-black not-italic font-medium text-base leading-6 font-Inter"
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
}
