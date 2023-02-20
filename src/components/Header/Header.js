import Image from "next/image";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    //for logo url
  }, []);

  return (
    <div className="flex left-0 flex-col items-start justify-center h-20 w-full sm:py-[12px] sm:px-[36px] py-[10px] px-[20px] bg-black">
      <Image
        className="sm:w-[48px] sm:h-[60px] lg:w-[120px] lg:h-[57px] object-cover"
        src="/asset/nitecapp_logo.png"
        width="100"
        height="51"
      />
    </div>
  );
}

export default Header;
