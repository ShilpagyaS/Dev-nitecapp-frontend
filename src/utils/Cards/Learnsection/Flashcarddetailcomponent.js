import Breadcrumb from '@/components/Breadcrumb'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import useMediaQuery from '@/Hooks/useMediaQuery'
import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsShuffle } from 'react-icons/bs'
import Bigbutton from '../Learnutils/Bigbutton'
import BigFlashcard from './BigFlashcard'
import MobileFlashcardCompoenet from './MobileFlashcardCompoenet'

function Flashcarddetailcomponent({ data, onNext, currentCard, totalcards, stats, setStats }) {
  const [reset, setReset] = useState(false)
  const isMobile = useMediaQuery("(max-width: 414px)");
  console.log(data);
  return (
    <div>
      <div className='flex justify-evenly '>
        <div className=' flex flex-col'>
          {!isMobile ?
            <BigFlashcard data={data} reset={reset} setResetFalse={() => { setReset(false) }} />
            :
            <MobileFlashcardCompoenet data={data} reset={reset} setResetFalse={() => { setReset(false) }} />
          }
          <div className=' w-full p-[20px] flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between'>
            <Bigbutton text={'I don’t know this yet'} colorTrue={false} onClickHandle={() => { setStats('missed'); onNext(); setReset(true) }} />
            <div className='mt-[20px] sm:mt-[0px]'>

              <Bigbutton text={'I know this'} colorTrue={true} onClickHandle={() => { setStats('learned'); onNext(); setReset(true) }} />
            </div>
          </div>
        </div>
        {!isMobile &&

          <div className=' flex flex-col p-[20px]'>
            <div className='flex flex-col mb-[30px]'>
              <h2 className='not-italic font-semibold text-[18px] text-white font-Inter'> Total</h2>
              <p className='not-italic font-normal text-[16px] text-white font-Inter'>{`${currentCard + 1} / ${totalcards} cards`}</p>
            </div>
            <div className='flex flex-col mb-[30px]'>
              <h2 className='not-italic font-semibold text-[18px] text-white font-Inter'> Learned</h2>
              <p className='not-italic font-normal text-[16px] text-white font-Inter'>{`${stats.learned} cards`}</p>
            </div>
            <div className='flex flex-col mb-[30px]'>
              <h2 className='not-italic font-semibold text-[18px] text-white font-Inter'> Missed</h2>
              <p className='not-italic font-normal text-[16px] text-white font-Inter'>{`${stats.missed} cards`}</p>
            </div>
            {/* <div className='flex w-full items-center'>
            <div className='h-[45px] w-[45px] flex items-center justify-center border border-[#3C3C3C] rounded-md'>
              <AiOutlineHeart size="25px" color="#fff" />

            </div>
            <div className='h-[45px] w-[45px] flex items-center ml-[25px] justify-center border border-[#3C3C3C] rounded-md'>
              <BsShuffle size="25px" className='fill-primary-base' />

            </div>

          </div> */}
          </div>
        }
      </div>
    </div>
  )
}

export default Flashcarddetailcomponent