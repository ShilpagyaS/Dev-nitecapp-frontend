import Breadcrumb from '@/components/Breadcrumb'
import { ConditionalButtons } from '@/utils/Buttons'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import QuizQuestion from './QuizQuestion'

function QuizDetailPage() {
  const [localQuiz, setlocalQuiz] = useState([])

  const onAddQuiz = () => {
    const local = [...localQuiz]
    local.push({ question: "" })
    setlocalQuiz(local)
  }
  const onQuizDelete = (i) => {
    const local = [...localQuiz]
    local.splice(i, 1)
    setlocalQuiz(local)
  }

  return (
    <div>
      <Breadcrumb />
      <div className='bg-transparent col-span-3 flex items-center justify-between'>
        <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
          Quize Name
        </h5>

        <ChipWithLeftButton condition={true} label={'Add Next Question'} srcPath={'/asset/PlusVector.svg'}
          onClickHandler={() => { onAddQuiz() }} />
      </div>
      {localQuiz.map((i, inx) => <div className='mt-3'>
        <QuizQuestion onDeleteClick={() => {
          onQuizDelete(inx)
        }} index={inx} />
      </div>)}

    </div>
  )
}

export default QuizDetailPage