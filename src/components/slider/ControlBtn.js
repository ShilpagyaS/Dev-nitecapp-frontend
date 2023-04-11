export function NextButton({ onClickHandler, condition, label }) {
  return (
    <div className="pt-[26px]">
      <button
        className={` ${true ? "bg-primary-base" : "bg-[#3E3E3E]"
          } py-[12px] px-[24px] h-[41px]w-[118px] max-w-[118px] sm:w-[118pxpx] sm:max-w-[118pxpx] rounded-full ${condition == true
            ? "hover:bg-primary-hoverbase "
            : "disabled:hover:bg-primary-hoverbase cursor-no-drop "
          } text-black gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
}

export function SkipButton({ onClickHandler, condition, label }) {
  return (
    <div className="pt-[26px]">
      <button
        className={` "bg-[transparent]" text-white
         py-[12px] px-[24px] h-[41px]w-[118px] max-w-[118px] sm:w-[118px] sm:max-w-[118pxpx] rounded-full
         gap-1 font-semibold font-Inter tracking-[0.42px] text-[16px]`}
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
}
