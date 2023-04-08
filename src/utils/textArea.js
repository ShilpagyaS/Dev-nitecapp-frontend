import React, { useState } from "react";
import { _INITIAL, _PASS } from "./Constants";

function TextAreaField({
  placeholder,
  label,
  value,
  name,
  onChangeHandler,
  type,
  error,
  touched,
  showerror,
  fullwidth,
  ...rest
}) {
  const [isfocused, setisFocused] = useState(false);

  return (
    <div className={`flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px] ${fullwidth?'w-full ':''}`}>
      <h5
        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight 
         ${!touched && !error
            ? "text-[#959595]" :
            touched && !error ?
              "text-white" :
              error && touched ?
                "text-[#EB4949]" :
                "text-[#959595]"
          }`}
      >
        {label}
      </h5>

      <textarea
        className={`box-border mt-[4px] py-[8px] pr-[13px] pl-[16px] rounded-[9px] h-[50px] ${fullwidth ?`w-full`:`min-w-[328px] max-w-[328px] sm:min-w-[302px] sm:max-w-[302px]`}  border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px]  placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none 
        ${!touched && !error
            ? "focus:border-[#959595]  focus:ring-offset-white focus:ring-1 "
            : touched && !error ?
              "focus:border-white  focus:ring-offset-white focus:ring-1 "
              :
              error && touched && "border-[#EB4949] ring-1 ring-[#EB4949]"
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
        {...rest}
      />

      {showerror && error && touched && <ul className='list-disc max-w-[302px]  pl-4 '>

        <li className={`text-[12px] font-Inter font-normal leading-tight tracking-[0.42px] 
                            ${'text-[#EB4949]'}
                            `}>
          <div className='min-h-[19px] flex items-center mt-[1px]'>
            {error}
          </div>
        </li>



      </ul>}
    </div>
  );
}

export default TextAreaField;
