import React from "react";

function Layout({ children }) {
  return <div className="w-full mt-2">
    {children}
    {
      (process.env.NEXT_PUBLIC_TESTING === "true") &&
      < div className='absolute bottom-2 right-2 z-50 border border-[#959595] p-[5px] rounded-lg animate-pulse bg-transparent'
      >
        <h1 className='bg-transparent italic text-[#959595] text-[12px]'> Testing Mode </h1>
      </div>
    }
  </div >;
}

export default Layout;
