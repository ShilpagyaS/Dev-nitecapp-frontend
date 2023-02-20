import Image from "next/image";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    //for logo url
  }, []);

  return (
    <div className="flex left-0 flex-col items-start justify-center h-20 w-full  bg-black">
      <Image
        className="sm:w-[115px] sm:h-[60px] lg:w-[120px] lg:h-[57px] object-cover"
        src="/asset/nitecapp_logo.png"
        width="100"
        height="51"
      />
    </div>
  );
}

export default Header;
