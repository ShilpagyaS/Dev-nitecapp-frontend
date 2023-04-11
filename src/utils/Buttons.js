import React from "react";

export function Buttons({ onClickHandler, label, ...rest }) {
  return (
    <div className="pt-[26px]">
      <button
        className="bg-primary-base py-[12px] px-[24px] h-[54px] w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full hover:bg-primary-hoverbase text-black gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]"
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
  className,
  ...rest
}) {
  return (
    <button
      className={` h-fit p-3
     ${background ? `py-[8px] px-[32px] bg-[${background}]` : `bg-transparent`}
      h-[54px] rounded-[10px] ${hover && `hover:bg-primary-hoverbase`
        } hover:text-white 
      ${`text-[${color || "black"}]`}
      gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px] flex items-center justify-center ${className}`}
      onClick={onClickHandler}
      {...rest}
    >
      {icon} {label}
    </button>
  );
}

export function CustomButtonRound({
  onClickHandler,
  label,
  color,
  background,
  rounded,
  hover,
  icon,
  className,
  ...rest
}) {
  return (
    <button
      className={` h-fit p-3
     ${background ? `py-[8px] px-[32px] bg-[${background}]` : `bg-transparent`}
      h-[54px]  ${hover && `hover:bg-primary-hoverbase`
        } hover:text-white 
      ${`text-[${color || "black"}]`}
      gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px] flex items-center justify-center ${className}`}
      onClick={onClickHandler}
      {...rest}
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
      className={`w-full max-w-[407px] py-[8px] px-[32px] bg-primary-base
      h-[54px] rounded-[27px] hover:bg-primary-hoverbase hover:text-white 
      text-black underline
      gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]`}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}

export function ConditionalButtons({ condition, label, ...rest }) {
  return (
    <div className="pt-[26px]">
      <button
        className={` ${condition == true ? "bg-primary-base" : "bg-[#3E3E3E]"
          } py-[12px] px-[24px] h-[54px] w-[288px] max-w-[288px] sm:w-[302px] sm:max-w-[302px] rounded-full ${condition == true
            ? "hover:bg-primary-hoverbase"
            : "disabled:hover:bg-primary-hoverbase cursor-no-drop "
          } text-black gap-1 font-semibold font-Inter leading-[30px] tracking-[0.42px] text-[16px]
          
          `}
        disabled={!condition}
        {...rest}
      >
        {label}
      </button>
    </div>
  );
}

export function OrangeButtons({ onClickHandler, label, noPadding, width }) {
  return (
    <div className={`${!noPadding && "pt-[26px]"}`}>
      <button
        className={`border border-primary-base text-primary-base  py-[6px] px-[12px] w-[${width ? width : '111'}px] rounded-full hover:bg-primary-hoverbase hover:text-black not-italic font-medium text-base leading-6 font-Inter`}
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
}
