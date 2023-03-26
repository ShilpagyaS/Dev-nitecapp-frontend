import React from "react";

export function Buttons({ onClickHandler, label, ...rest }) {
  return (
    <div className="pt-[26px]">
      <button
        className="bg-[#F19B6C] py-[12px] px-[24px] h-[54px] w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full hover:bg-[#ee854d] text-black gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]"
        onClick={onClickHandler}
        {...rest}
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
  icon,
}) {
  return (
    <button
      className={` h-fit
     ${background ? `py-[8px] px-[32px] bg-[${background}]` : `bg-transparent`}
      h-[54px] rounded-[27px] ${hover && `hover:bg-[#ee854d]`
        } hover:text-white text-black
      ${color && `text-[${color}]`}
      gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px] flex items-center justify-center`}
      onClick={onClickHandler}
    >
      {icon} {label}
    </button>
  );
}

export function TextButton({ onClickHandler, label, color, icon }) {
  return (
    <button
      className={` h-fit bg-transparent rounded-[27px] hover:text-white 
      ${color && `text-[${color}]`}
      gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[14px] flex items-center justify-center`}
      onClick={onClickHandler}
    >
      {icon} {label}
    </button>
  );
}

export function GrayButton({ onClickHandler, label, color, icon }) {
  return (
    <button
      className={` h-fit py-[8px] px-[32px] bg-[#414141]
     hover:text-white text-black
     rounded-[27px] 
      ${color && `text-[${color}]`}
      gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px] flex items-center justify-center`}
      onClick={onClickHandler}
    >
      {icon} {label}
    </button>
  );
}

export function LongButton({ onClickHandler, label }) {
  return (
    <button
      className={`w-full max-w-[407px] py-[8px] px-[32px] bg-[#F19B6C]
      h-[54px] rounded-[27px] hover:bg-[#ee854d] hover:text-white 
      text-black underline
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
        className={` ${condition == true ? "bg-[#F19B6C]" : "bg-[#3E3E3E]"
          } py-[12px] px-[24px] h-[54px] w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full ${condition == true
            ? "hover:bg-[#ee854d]"
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
