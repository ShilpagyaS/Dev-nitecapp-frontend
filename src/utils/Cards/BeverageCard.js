import Image from 'next/image'
import React from 'react'

function BeverageCard({imageSrc,beverageName,alcoholLevel}) {
  return (
    <div className="flex border border-[#3C3C3C]  rounded-[10px] px-4 py-[4px] items-center h-24 w-[358px] ">
              <div className="w-[81px] h-[81px] ">
                <Image
                  className=""
                  src={imageSrc}
                  alt="bevreage-image"
                  width={81}
                  height={81}
                />
              </div>
              <div className="pl-4 items-center ">
                <div className=" not-italic font-semibold text-lg leading-7 font-Inter tracking-[0.624131px]">
                  {beverageName}
                </div>
                <div className="not-italic font-normal text-base leading-6 text-white font-Inter">
                 {alcoholLevel}

                </div>
              </div>

            </div>
  )
}

export default BeverageCard


// example call <BeverageCard imageSrc={'/asset/Group 604 2.png'}  beverageName={'Old Fashion'} alcoholLevel={`Medium(12%)`} />