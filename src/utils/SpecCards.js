import Image from "next/image";
import useMediaQuery from "@/Hooks/useMediaQuery";

export function CoctailCard({ image, title, isNew }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div className=" w-[161px] h-[195px] md:w-[197px] md:h-[242px] px-[11px] py-[15px] lg:py-[18px]  border-[1.3354px] border-[#3C3C3C] rounded-[21.3665px]">
      <div
        className={`relative image-container ${
          isTablet ? "w-[137px] h-[137px]" : "w-[171px] h-[171px]"
        } `}
      >
        <Image src={image} alt="slider-image" fill />
        {isNew && (
          <p className="text-[#F19B6C] text-[14px] absolute top-0 left-3 ">
            New
          </p>
        )}
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
    <div className="image-container w-[155px] lg:w-[220px]">
      <div className="h-[148px] lg:h-[137px] w-full relative mb-2">
        <Image
          className="object-cover rounded-[5.48718px]"
          src={image}
          alt="slider-image"
          fill
        />
      </div>
      <div className="bg-transparent ">
        <h2 className=" text-white text-[18px] leading-[27px] font-semibold bg-transparent">
          {title}
        </h2>
      </div>
    </div>
  );
}

export function CoctailCard2({ image, title, isNew }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div
      className=" w-[161px] h-[195px]  px-[11px] py-[15px] lg:py-[18px]  border-[1.3354px]
     border-[#3C3C3C] rounded-[21.3665px]"
    >
      <div className={`relative image-container ${"w-[137px] h-[137px]"} `}>
        <Image src={image} alt="slider-image" fill />
        {isNew && (
          <p className="text-[#F19B6C] text-[14px] absolute top-0 left-3 ">
            New
          </p>
        )}
      </div>
      <div className="mt-2">
        <h2 className=" text-white text-[16px] leading-[24px] font-semibold text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}
