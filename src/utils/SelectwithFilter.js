import React, { useEffect, useState } from "react";

const SelectWithSearch = ({
  placeholder,
  label,
  value,
  onChangeHandler,
  options,
}) => {
  const [enableOption, setEnableOption] = useState(false);

  const filteredOptions =
    value !== ""
      ? [...options].filter((option) =>
          option?.label?.toLowerCase().includes(value.toLowerCase())
        )
      : options;

  return (
    <div className="flex flex-col gap-[4px] items-start lg:mb-[11px] mb-[8px]">
      <h5
        className={`h-[22px] w-[302px] not-italic font-normal font-Inter text-[14px] flex items-center leading-tight  
                ${enableOption == false ? "text-[#959595]" : "text-white"}`}
      >
        {label}
      </h5>
      <div className="relative ">
        <input
          className={`box-border mt-[4px] py-[8px] pl-[16px] rounded-[9px] h-[50px] min-w-[328px] max-w-[328px] sm:min-w-[302px] sm:max-w-[302px] border border-solid border-[#3C3C3C] text-white font-Inter not-italic font-normal text-[14px] 
                     placeholder-[#959595] placeholder:font-Inter placeholder:text-[14px] focus:outline-none
              focus:border-white  focus:ring-offset-white focus:ring-1 
                block w-full  appearance-none pr-[35px]`}
          type="text"
          name="concept"
          placeholder={placeholder}
          value={value}
          onChange={(e) =>
            onChangeHandler({
              target: { name: "concept", value: e.target.value },
            })
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
        {enableOption && filteredOptions.length > 0 && (
          <div className="relative">
            <div className="absolute z-10  max-h-[200px] scrollbar overflow-y-scroll  w-full px-1 bg-black border border-white rounded-lg shadow-md mt-1">
              {filteredOptions.map((option, i) => (
                <div
                  key={i}
                  className="block cursor-pointer w-full text-left px-[15px] py-2 text-[#A8A8A8] hover:bg-white focus:outline-none"
                  onClick={() => {
                    onChangeHandler(
                      {
                        target: { name: "concept", value: option.label },
                      },
                      option.value
                    );
                    debugger;
                    setEnableOption(false);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectWithSearch;
