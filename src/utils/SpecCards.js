import Image from "next/image";
import useMediaQuery from "@/Hooks/useMediaQuery";

export function CoctailCard({ image, title, isNew }) {
  return (
    <div className="w-[161px] h-[195px] md:w-[197px] md:h-[242px] px-[13px] py-[10px] lg:py-[18px]  border-[1.3354px] border-[#3C3C3C] rounded-[21.3665px]">
      <div className="image-container mx-[13px]  my-[15px] md:my-[20px]">
        <Image
          className=""
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
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div className="image-container lg:w-[390px] w-full h-[103px] relative">
      {!isTablet ? (
        <Image
          className="mb-10 object-cover"
          src={image}
          alt="slider-image"
          width={390}
          height={103}
        />
      ) : (
        <Image
          className="mb-10 object-cover"
          src={image}
          alt="slider-image"
          fill
        />
      )}
      <div className="mt-2 absolute top-[24px] left-[30px] bg-transparent ">
        <h2 className=" text-white text-[18px] leading-[27px] font-semibold text-center bg-transparent ">
          {title}
        </h2>
      </div>
    </div>
  );
}

export function TrendingCard({ image, title }) {
  return (
    <div className="image-container w-[390px] h-auto">
      <Image
        className="mb-5 object-cover"
        src={image}
        alt="slider-image"
        width={390}
        height={103}
      />
      <div className="bg-transparent ">
        <h2 className=" text-white text-[18px] leading-[27px] font-semibold bg-transparent">
          {title}
        </h2>
      </div>
    </div>
  );
}
