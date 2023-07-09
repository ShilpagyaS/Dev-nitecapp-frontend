import { deleteCourse } from '@/store/slices/learnslice'
import DashboardLiberaryCard from '@/utils/Cards/Learnsection/DashboardLiberaryCard'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteLearn, EditCourse } from '../modal/LearnModals'

function LIberaryComponents({ allCourses, isAdmin }) {
    const [EditaCourse, setEditCourse] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [selectedData, setselectedData] = useState({})
    const dispatch = useDispatch()
    return (
        <>{EditaCourse &&
            <EditCourse
                isModalOpen={EditaCourse}
                onClickCancel={() => { setEditCourse(false) }}
                title={'Course'}

                onSave={(data) => { }}
                data={selectedData}
            />
        }
            {DeleteModal &&
                <DeleteLearn
                    isModalOpen={DeleteModal}
                    onClickCancel={() => { setDeleteModal(false) }}
                    title={selectedData.name}
                    onSave={() => {
                        console.log(selectedData.name, selectedData);
                        dispatch(deleteCourse(selectedData.id))
                    }}
                />}

            <div className='w-full mt-[35px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                    {allCourses.map((item) =>
                        <div className='w-full  mb-[10px]' >
                            <DashboardLiberaryCard item={item} completionPercentageOuter={0} image={item.img} name={item.name} desc={item.desc} isAdmin={isAdmin}
                                onclickEdit={() => {
                                    setselectedData(item);
                                    setEditCourse(true)
                                }}
                                onDelete={() => {
                                    console.log(item);
                                    setselectedData(item);
                                    setDeleteModal(true)
                                }} />
                        </div>
                    )

                    }

                </div>
            </div>
        </>
    )
}

export default LIberaryComponents