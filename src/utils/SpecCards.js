import Image from "next/image";
import useMediaQuery from "@/Hooks/useMediaQuery";

export function CoctailCard({ image, title, isNew }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div className=" w-[161px] h-[195px] md:w-[197px] md:h-[242px] px-[11px] py-[15px] lg:py-[18px]  border-[1.3354px] border-[#3C3C3C] rounded-[21.3665px]">
      <div
        className={`relative image-container ${isTablet ? "w-[137px] h-[137px]" : "w-[171px] h-[171px]"
          } `}
      >
        <Image src={image} alt="slider-image" fill />
        {isNew && (
          <p className="text-primary-base text-[14px] absolute top-0 left-3 ">
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
    <div className="image-container w-full h-[103px] relative">
      {!isTablet ? (
        <Image
          className="mb-10 object-cover"
          src={image}
          alt="slider-image"
          fill
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

export function TrendingCardDash({ image, title }) {
  return (
    <div className="image-container w-fit ">
      <div className="h-[160px] lg:h-[188px]  w-full md:w-[300px] relative mb-2">
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

export function CoctailCard2({ image, title, isNew, sequence }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div
      className=" w-[161px] h-[195px]  px-[11px] py-[15px] lg:py-[18px]  border-[1.3354px]
     border-[#3C3C3C] rounded-[21.3665px]"
    >
      <div className={`relative image-container ${"w-[137px] h-[137px]"} `}>
        <Image src={image} alt="slider-image" fill />
        {(isNew || sequence) && (
          <p className="text-primary-base text-[14px] absolute top-0 left-3 ">
            {isNew ? "New" : `No. ${sequence}`}
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

export function RectangularCard({ image, title, subtitle, circularImg }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div
      className={`flex items-center w-full rounded-[10px] border-[1px] border-[#3C3C3C]${circularImg ? " px-4 py-3 " : " px-4 py-4 "
        }`}
    >
      <div
        className={`relative image-container mr-[16px] ${circularImg ? "w-[57px] h-[57px]" : "w-[81px] h-[81px] rounded-lg"
          }`}
      >
        <Image
          src={image}
          className={`${circularImg ? " rounded-full " : "rounded-lg"}`}
          fill
          alt={title}
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-container">
        <h2 className="text-white text-[18px] leading-[24px] mb-2 font-semibold">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white text-[16px] leading-[24px]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export function RectangularCard2({ image, title, subtitle, circularImg }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div
      className={`flex items-center w-full rounded-[10px] border-[1px] border-[#3C3C3C]${circularImg ? " px-4 py-3 " : " px-4 py-1 "
        }`}
    >
      <div
        className={`relative image-container mr-[16px] ${circularImg ? "w-[57px] h-[57px]" : "w-[81px] h-[81px]"
          }`}
      >
        <Image
          src={image}
          alt="slider-image"
          className={`${circularImg && " rounded-full "}`}
          fill
        />
      </div>
      <div className="text-container">
        <h2 className="text-white text-[18px] leading-[24px] mb-2 font-semibold">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white text-[16px] leading-[24px]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
