import Breadcrumb from '@/components/Breadcrumb'
import { AddModulePage, EditModulePage } from '@/components/modal/LearnModals'
import { emptycourses, getModuleDetail } from '@/store/slices/learnslice'
import ModuleAdminCard from '@/utils/Cards/Learnsection/ModuleAdminCard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLearnModuleContentCard from './AdminLearnModuleContentCard'

function LiberaryModulContentList({ moduleId }) {
    const [showDetail, setShowDetail] = useState(false)
    const [addCourseButton, setAddCourse] = useState(false)
    const [editmp, setEditmp] = useState(false)
    const [mpid, setmpid] = useState(null)
    const [selecteddata, setselected] = useState(null)
    const { courseDetail } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getModuleDetail(moduleId))
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    useEffect(() => {
        console.log(courseDetail);
    }, [courseDetail])

    return (
        <>
            {addCourseButton &&
                <AddModulePage
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Module Page'}
                    onSave={() => { }}
                    moduleid={moduleId}
                />
            }
            {editmp &&
                <EditModulePage
                    isModalOpen={editmp}
                    onClickCancel={() => { setEditmp(false) }}
                    title={'Module Page'}
                    onSave={() => { }}
                    moduleid={moduleId}
                    modulepageid={mpid}
                    data={selecteddata}
                />
            }
            <div>
                {
                    !showDetail ?
                        <>
                            <Breadcrumb />
                            <div className='flex items-center justify-between mb-[10px]'>

                                <h2 className="text-white text-[24px] leading-9 font-bold mb-[20px] mt-[10px]">
                                    {courseDetail?.name}
                                </h2>
                                <ChipWithLeftButton condition={true} label={'Add Page'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                            </div>

                            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                                {
                                    courseDetail?.modules_pages?.map((page) =>
                                        <ModuleAdminCard onDeleteButtonClick={() => { }} onnavigateClick={() => { setShowDetail(true) }} onEditButtonClick={() => { setmpid(page?.course_module_page_id), setselected(page), setEditmp(true) }} data={page} />
                                    )
                                }
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