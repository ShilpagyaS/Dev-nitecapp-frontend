import Image from "next/image";
import useMediaQuery from "@/Hooks/useMediaQuery";

export function CoctailCard({ image, title, isNew, onclickHandler }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div className=" cursor-pointer w-[161px] h-[195px] md:w-[197px] md:h-[242px] px-[11px] py-[15px] lg:py-[18px]  border-[1.3354px] border-[#3C3C3C] rounded-[21.3665px]"
      onClick={onclickHandler}
    >
      <div
        className={`relative image-container ${isTablet ? "w-[137px] h-[137px]" : "w-[171px] h-[171px]"
          } `}
      >
        <Image src={image || '/asset/nodrinkinverted.webp'} alt="slider-image" fill priority />
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
export function FoodCard({ image, title, no, onclickHandler }) {
  const isTablet = useMediaQuery("(max-width: 786px)");
  return (
    <div className=" relative cursor-pointer md:w-[161px] md:h-[195px] h=[180px] w-full max-w-[161px] px-[11px] py-[15px] lg:py-[18px]  border-[1.3354px] border-[#3C3C3C] rounded-[21.3665px]"
      onClick={onclickHandler}
    >
      <div
        className={`relative image-container md:w-[137px] h-[137px] w-full   `}
      >
        <Image src={image || '/asset/nodrinkinverted.webp'} alt="slider-image" fill priority />


      </div>
      {/* <p className="text-primary-base text-[14px] bg-transparent absolute top-2 left-3 ">
        {`No. ${no}`}
      </p> */}
      <div className="mt-2 w-full">
        <h2 className=" text-white text-[16px] leading-[24px] font-semibold text-center truncate">
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
          priority
        />
      ) : (
        <Image
          className="mb-10 object-cover"
          src={image}
          alt="slider-image"
          fill
          priority
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
          src={image || '/asset/nodrinkinverted.webp'}
          alt="slider-image"
          fill
          priority
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
          src={image || '/asset/nodrinkinverted.webp'}
          alt="slider-image"
          fill
          priority
        />
      </div>
      <div className="bg-transparent ">
        <h2 className=" text-white text-[18px] text-center leading-[27px] font-semibold bg-transparent">
          {title}
        </h2>
      </div>
    </div>
  );
}
export function CircularTrendingCardDash({ image, title }) {
  return (
    <div className="image-container w-full ">
      <div className="mb-2 rounded-full">
        <Image
          className="object-cover rounded-full "
          src={image || '/asset/nodrinkinverted.webp'}
          alt="slider-image"
          width={160}
          height={188}
          priority
        />
      </div>
      {/* <div className="bg-transparent ">
        <h2 className=" text-white text-[18px] text-center leading-[27px] font-semibold bg-transparent">
          {title}
        </h2>
      </div> */}
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
        <Image src={image} alt="slider-image" fill priority />
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
      className={`flex items-center w-full rounded-[10px] border-[1px] hover:-translate-y-1 transition-all shadow-[0px_5px_35px] hover:shadow-slate-700 shadow-black  border-[#3C3C3C] ${circularImg ? " px-4 py-3 " : " px-4 py-4 "
        }`}
    >
      <div
        className={`relative image-container mr-[16px] ${circularImg ? "w-[57px] h-[57px]" : "w-[81px] h-[81px] rounded-lg"
          }`}
      >
        {!image &&
          <Image src={'/asset/nodrinkinverted.webp'}
            alt={title}
            fill
            priority
            style={{ objectFit: 'contain' }}
            className={`${circularImg ? " rounded-full " : "rounded-lg"}`}


          />
        }
        {image &&
          <Image
            src={image}
            className={`${circularImg ? " rounded-full " : "rounded-lg"}`}
            fill
            alt={title}
            priority
            style={{ objectFit: "cover" }}
          />
        }

      </div>
      <div className="text-container">
        <h2 className="text-white text-[18px] leading-[24px] mb-2 font-medium">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[14px] leading-[24px] text-slate-400">{subtitle}</p>
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
          priority
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
