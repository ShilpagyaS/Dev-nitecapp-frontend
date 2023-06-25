import Breadcrumb from '@/components/Breadcrumb'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import { useEffect, useState } from 'react'
import QuizQuestion from './QuizQuestion'
import { useDispatch, useSelector } from 'react-redux'
import useNavDetails from '@/Hooks/useNavDetails'
import { addQuestion, deleteQuizQuestionById, getQuizById, updateQuizQuestionById } from '@/store/slices/quiz'
import { DeleteLearn } from '@/components/modal/LearnModals'

function QuizDetailPage() {
  const [localQuiz, setlocalQuiz] = useState([])
  const dispatch = useDispatch()
  const [deletetemp, setdeletetemp] = useState(null)
  const { productId } = useNavDetails()
  const { quiz } = useSelector((state) => state.quiz)
  const [deleteModal, setdeleteModal] = useState(false)
  useEffect(() => {
    if (productId)
      dispatch(getQuizById(productId))
  }, [productId])

  useEffect(() => {
    if (quiz)
      setlocalQuiz(quiz)
  }, [quiz])

  const onAddQuiz = () => {
    const local = [...localQuiz]
    local.push({
      question: "",
      isActive: true,
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: null,
      isEdit: true,
      quiz_id: productId
    })
    setlocalQuiz(local)
  }

  useEffect(() => {
    if (localQuiz?.[localQuiz.length - 1]?.question === "") {
      var objDiv = document.getElementById(`q${localQuiz.length}`);
      objDiv.scrollIntoView({
        behavior: "smooth"
      })
    }

  }, [localQuiz])


  const onQuizDelete = (d, inx) => {
    const local = { ...d, index: inx }
    setdeletetemp(local)
    setdeleteModal(true)
  }

  const onFinalQuestionDelete = () => {
    if (deletetemp.quiz_question_id || deletetemp.quiz_question_id === 0)
      dispatch(deleteQuizQuestionById(deletetemp.quiz_question_id, productId))
    else {
      const local = [...localQuiz]
      local.splice(deletetemp.index, 1)
      setlocalQuiz(local)
    }
  }

  return (
    <div id="questiondiv">
      <DeleteLearn isModalOpen={deleteModal} title={"Question"} onSave={onFinalQuestionDelete}
        onClickCancel={() => { setdeleteModal(false); setdeletetemp(null) }} />
      <Breadcrumb />
      <div className='bg-transparent col-span-3 flex items-center justify-between'>
        <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
          Quiz Name
        </h5>

        <ChipWithLeftButton condition={true} label={'Add Next Question'} srcPath={'/asset/PlusVector.svg'}
          onClickHandler={() => { onAddQuiz() }} />
      </div>
      <div >
        {localQuiz?.map((i, inx) => <div className='mt-3' id={`q${inx + 1}`}>
          <QuizQuestion onDeleteClick={(d) => {
            onQuizDelete(d, inx)
          }} index={inx} data={i}
            setdata={(d, inx) => {
              const local = [...localQuiz]
              local[inx] = d
              if (d.quiz_question_id) {
                dispatch(updateQuizQuestionById(d.quiz_question_id, productId, d))
              } else {
                dispatch(addQuestion(d))
              }
            }} />
        </div>)}
      </div>
    </div>
  )
}

export default QuizDetailPage