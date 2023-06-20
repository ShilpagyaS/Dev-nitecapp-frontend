import Breadcrumb from '@/components/Breadcrumb'
import { AddFlashcardSubCategory, DeleteLearn, EditFlashCard, EditFlashcardSubCategory } from '@/components/modal/LearnModals'
import { emptycourses, getFlashcardSubcategories } from '@/store/slices/learnslice'
import AdminFlashcard from '@/utils/Cards/Learnsection/AdminFlashcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import { enUrl } from '@/utils/encoderfunc'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AdminFlashcardChapterPage({ categoryid, subcategory }) {
    const [addCourseButton, setAddCourse] = useState(false)
    const [EditCourseButton, setEditCourse] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [elementItem, setElementItem] = useState({
        title: '',
        id: ''
    })
    const route = useRouter()
    const { course } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFlashcardSubcategories(categoryid))
        return () => {
            dispatch(emptycourses())
        }
    }, [])

    return (
        <>
            {addCourseButton &&
                <AddFlashcardSubCategory
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Flashcard Deck'}
                    onSave={() => { }}
                />
            }
            {EditCourseButton &&
                <EditFlashcardSubCategory
                    isModalOpen={EditCourseButton}
                    onClickCancel={() => { setEditCourse(false) }}
                    title={'Flashcard Deck'}
                    onSave={() => { }}
                />
            }
            {DeleteModal &&
                <DeleteLearn
                    isModalOpen={DeleteModal}
                    onClickCancel={() => { setDeleteModal(false) }}
                    title={elementItem.title}
                    onSave={() => { console.log(elementItem.title); }}
                />}

            <div>
                <Breadcrumb />
                <div className='bg-transparent col-span-3 flex items-center justify-between mb-[10px]'>
                    <h5 className='not-italic font-semibold capitalize text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                        {subcategory}
                    </h5>


                    <ChipWithLeftButton condition={true} label={'Add Flashcard Deck'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {course?.map((sub) =>
                        <AdminFlashcard
                            data={sub}
                            onDeleteClick={() => {
                                setElementItem({
                                    title: sub.name,
                                    id: sub.flashcard_subcategory_id
                                })
                                setDeleteModal(true)
                            }} onClickHandler={() => { route.push(`/learn/flashcards/${enUrl(subcategory)}/${enUrl(sub.name)}?id=${sub.flashcard_subcategory_id}&typeid=${categoryid}`) }} onEditCick={() => { setEditCourse(true) }} />
                    )}

                    {/* <AdminFlashcard onClickHandler={() => { route.push(`/learn/flashcards/${enUrl(subcategory2)}/${enUrl(subcategory3)}?id=${productId}&typeid=${typeid}`) }} /> */}
                </div>

            </div>
        </>
    )
}

export default AdminFlashcardChapterPage