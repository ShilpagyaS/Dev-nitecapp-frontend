import Image from 'next/image'
import React from 'react'

function LeaderShipTableCards({ img, name, number, star, thunder }) {
  return (
    <div className='mb-[8px] flex flex-row items-center h-[68px] w-[348px] rounded-[12px] bg-[#2C2C2C] justify-around pl-[16px]'>
      <div className='not-italic font-normal text-base leading-9 font-Inter text-white bg-[#2C2C2C]'>{number}</div>
      <div className='w-[42px] h-[42px] bg-gray-400 rounded-full relative'>
        <Image
          src={img}
          width={42}
          height={42}
          className="text-[#A8A8A8] bg-[#2C2C2C] rounded-full"
        />
      </div>
      <div className='flex flex-col'>
        <div className='w-[234px] h-[26px] not-italic font-normal text-base text-white font-Inter bg-[#2C2C2C]'>
          {name}
        </div>
        <div className='w-[234px] h-[26px] bg-[#2C2C2C] flex items-center justify-between'>
          <div className='flex flex-row items-center p-1 w-[72px] h-[26px] bg-[#2C2C2C]'>
            <Image
              src={'/asset/StarVector.svg'}
              width={13}
              height={13}
              className="text-[#A8A8A8] bg-[#2C2C2C]"
            />
            <p className='not-italic font-light text-base  pl-[8px] text-gray-500 font-Inter tracking-[-0.41px] bg-[#2C2C2C]'>
              {star}
            </p>
          </div>
          <div className='flex flex-row items-center p-1 w-[72px] h-[26px] bg-[#2C2C2C] '>
            <Image
              src={'/asset/flashicongray.svg'}
              width={13}
              height={13}
              className="fill-[#A8A8A8] bg-[#2C2C2C]"
            />
            <p className='not-italic font-light text-base pl-[8px] text-gray-500 font-Inter tracking-[-0.41px] bg-[#2C2C2C]'>
              {thunder}
            </p>
          </div>
          <div className='flex flex-row items-center p-1 w-[72px] h-[26px] bg-[#2C2C2C]'>
            <Image
              src={'/asset/flashicongray.svg'}
              width={13}
              height={13}
              className="fill-[#A8A8A8] bg-[#2C2C2C]"
            />
            <p className='not-italic font-light text-base  pl-[8px] text-gray-500 font-Inter tracking-[-0.41px] bg-[#2C2C2C]'>
              14
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LeaderShipTableCards