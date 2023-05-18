import Breadcrumb from '@/components/Breadcrumb'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsShuffle } from 'react-icons/bs'
import Bigbutton from '../Learnutils/Bigbutton'
import BigFlashcard from './BigFlashcard'

function Flashcarddetailcomponent() {
  return (
    <div>
      <Breadcrumb />
      <div className="flex items-center mb-[33px]">

        <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
          {`Bar 101`}
        </h5>
      </div>
      <div className='flex justify-evenly '>
        <div className=' flex flex-col'>
          <BigFlashcard />
          <div className=' w-full p-[20px] flex items-center justify-between'>
            <Bigbutton text={'I don’t know this yet'} colorTrue={false} onClickHandle={() => { }} />
            <Bigbutton text={'I know this'} colorTrue={true} onClickHandle={() => { }} />
          </div>
        </div>
        <div className=' flex flex-col p-[20px]'>
          <div className='flex flex-col mb-[30px]'>
            <h2 className='not-italic font-semibold text-[18px] text-white font-Inter'> Total</h2>
            <p className='not-italic font-normal text-[16px] text-white font-Inter'>12 / 52 cards</p>
          </div>
          <div className='flex flex-col mb-[30px]'>
            <h2 className='not-italic font-semibold text-[18px] text-white font-Inter'> Learned</h2>
            <p className='not-italic font-normal text-[16px] text-white font-Inter'>10 cards</p>
          </div>
          <div className='flex flex-col mb-[30px]'>
            <h2 className='not-italic font-semibold text-[18px] text-white font-Inter'> Missed</h2>
            <p className='not-italic font-normal text-[16px] text-white font-Inter'>1 cards</p>
          </div>
          <div className='flex w-full items-center'>
            <div className='h-[45px] w-[45px] flex items-center justify-center border border-[#3C3C3C] rounded-md'>
              <AiOutlineHeart size="25px" color="#fff" />

            </div>
            <div className='h-[45px] w-[45px] flex items-center ml-[25px] justify-center border border-[#3C3C3C] rounded-md'>
              <BsShuffle size="25px" className='fill-primary-base' />

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Flashcarddetailcomponent