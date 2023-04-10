import React, { useState } from "react";
import { _INITIAL, _PASS } from "./Constants";

function InputFieldWirhAutoWidth({
  placeholder,
  label,
  value,
  name,
  onChangeHandler,
  type,
  errorResponnse,
  required
}) {
  const [isfocused, setisFocused] = useState(false);
  return (
    <div className=" flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
      <h5
        className={` w-full not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  ${errorResponnse == _INITIAL
          ? isfocused == false
            ? "text-[#959595]"
            : "text-white"
          : errorResponnse == _PASS
            ? "text-[#3FD79C]"
            : "text-[#EB4949]"
          }`}
      >
        {label} {required && <sup>*</sup>}
      </h5>

      <input
        className={`box-border mt-[4px] py-[8px] pr-[13px] pl-[16px] rounded-[9px] h-[50px] min-w-[328px] sm:min-w-[302px] border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px]  placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none ${errorResponnse == _INITIAL
          ? "focus:border-white  focus:ring-offset-white focus:ring-1 "
          : errorResponnse == _PASS
            ? "border-[#3FD79C] ring-1 ring-[#3FD79C]"
            : "border-[#EB4949] ring-1 ring-[#EB4949]"
          } block w-full  appearance-none`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChangeHandler}
        type={type}
        onFocus={(e) => {
          setisFocused(true);
        }}
        onBlur={(e) => {
          setisFocused(false);
        }}
      />
    </div>
  );
}

export default InputFieldWirhAutoWidth;
