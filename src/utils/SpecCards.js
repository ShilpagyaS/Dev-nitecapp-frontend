import Image from "next/image";

export function CoctailCard({ image, title, isNew }) {
  return (
    <div className="w-[197px] h-[242px] px-[13px] py-[18px]  border-[1.3354px] border-[#3C3C3C] rounded-[21.3665px]">
      <div className="image-container mx-[13px] my-[20px]">
        <Image
          className="mb-10"
          src={image}
          alt="slider-image"
          width={171}
          height={171}
        />
      </div>
      <div className="mt-2">
        <h2 className=" text-white text-[16px] leading-[24px] font-semibold text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}

export function BeverageCard({ image, title }) {
  return (
    <div className="image-container w-[390px] h-[103px] relative">
      <Image
        className="mb-10 object-cover"
        src={image}
        alt="slider-image"
        width={390}
        height={103}
      />
      <div className="mt-2 absolute top-[24px] left-[30px] bg-transparent ">
        <h2 className=" text-white text-[18px] leading-[27px] font-semibold text-center bg-transparent ">
          {title}
        </h2>
      </div>
    </div>
  );
}
