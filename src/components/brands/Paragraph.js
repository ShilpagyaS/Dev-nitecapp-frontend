import { CustomButton, CustomButtonRound } from "@/utils/Buttons";

function Paragraph({ title, desc, btnLabel, onClickHandler }) {
  return (
    <>
      <div className="paragraph-container lg:text-left text-center ">
        <h4 className="heading text-[20px] text-white leading-[32px] lg:mb-9 mb-3 font-semibold">
          {title}
        </h4>
        <p className="heading text-[16px] text-white leading-[25px] lg:mb-8 mb-3 ">
          {desc}
        </p>
        <div className="flex justify-center">
          <CustomButtonRound
            background="#F19B6C"
            rounded="27px"
            color="#111"
            label={btnLabel}
            className={"rounded-[27px]"}
            onClickHandler={onClickHandler}
          />
        </div>

      </div>
    </>
  );
}

export default Paragraph;
