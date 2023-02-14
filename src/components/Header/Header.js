import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    //for logo url
  }, []);

  return (
    <div className='flex left-0 flex-col items-start justify-center h-20 w-full sm:py-[12px] sm:px-[36px] py-[10px] px-[20px] bg-black'>
        <img className='w-[40px] h-[51px] sm:w-[48px] sm:h-[60px] lg:w-[56px] lg:h-[57px]' src='https://seekvectorlogo.com/wp-content/uploads/2021/12/marriott-vector-logo-small.png'/>
    </div>
  );
}

export default Header;
