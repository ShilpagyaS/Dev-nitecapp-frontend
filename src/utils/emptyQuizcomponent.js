import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import Image from 'next/image'
import React from 'react'

function EmptyQuizcomponent() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <Image
        className="bg-transparent"
        src="/asset/emptyQuiz.svg"
        width={302}
        height={186}
        alt="Empty"
      />
      <p className='not-italic font-bold text-xl font-Inter text-white mt-[54px]'>You have not added, any quizes yet</p>
      <p className='not-italic font-semibold text-base leading-6 text-[#959595] mt-[10px] mb-[17px]'>Please add Quiz to Show</p>
      <ConditionalButton label={`Add Quiz`} condition={true} onClickHandler={() => { }} />
    </div>)
}

export default EmptyQuizcomponent