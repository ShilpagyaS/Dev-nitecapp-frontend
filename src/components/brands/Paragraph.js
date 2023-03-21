import { CustomButton } from "@/utils/Buttons";

function Paragraph({ title, desc, btnLabel }) {
  return (
    <>
      <div className="paragraph-container lg:text-left text-center ">
        <h4 className="heading text-[20px] text-white leading-[32px] lg:mb-9 mb-3 font-semibold">
          {title}
        </h4>
        <p className="heading text-[16px] text-white leading-[25px] lg:mb-8 mb-3 ">
          {desc}
        </p>
        <CustomButton
          background="#F19B6C"
          rounded="27px"
          color="#111"
          label={btnLabel}
        />
      </div>
    </>
  );
}

export default Paragraph;
