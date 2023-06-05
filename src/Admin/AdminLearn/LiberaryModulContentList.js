import Breadcrumb from '@/components/Breadcrumb'
import { AddModuleContent } from '@/components/modal/LearnModals'
import ModuleAdminCard from '@/utils/Cards/Learnsection/ModuleAdminCard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLearnModuleContentCard from './AdminLearnModuleContentCard'

function LiberaryModulContentList({ moduleId }) {
    const [showDetail, setShowDetail] = useState(false)
    const [addCourseButton, setAddCourse] = useState(false)
    const { courseDetail } = useSelector((state) => state.learn)
    const dispatch = useDispatch()



    return (
        <>
            {addCourseButton &&
                <AddModuleContent
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Module Content'}
                    onSave={() => { }}
                />
            }
            <div>
                {
                    !showDetail ? <>
                        <Breadcrumb />
                        <div className='flex items-center justify-between mb-[10px]'>

                            <h2 className="text-white text-[24px] leading-9 font-bold mb-[20px] mt-[10px]">
                                Introduction to Beer
                            </h2>
                            <ChipWithLeftButton condition={true} label={'Add Content'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                        </div>

                        <div className='grid grid-cols-3 gap-4'>
                            <ModuleAdminCard onDeleteButtonClick={() => { }} onEditButtonClick={() => { setShowDetail(true) }} />
                        </div>
                    </>
                        :
                        <AdminLearnModuleContentCard onCancelButton={() => { setShowDetail(false) }} />
                }
            </div>
        </>
    )
}

export default LiberaryModulContentList