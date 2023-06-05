import DashboardLiberaryCard from '@/utils/Cards/Learnsection/DashboardLiberaryCard'
import React, { useState } from 'react'
import { EditCourse } from '../modal/LearnModals'

function LIberaryComponents({ allCourses, isAdmin }) {
    const [EditaCourse, setEditCourse] = useState(false)
    const [selectedData, setselectedData] = useState(false)
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
            <div className='w-full mt-[35px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                    {allCourses.map((item) =>
                        <div className='w-full  mb-[10px]' >
                            <DashboardLiberaryCard item={item} completionPercentageOuter={0} image={item.img} name={item.name} desc={item.desc} isAdmin={isAdmin}
                                onclickEdit={() => {
                                    setselectedData(item.data);
                                    setEditCourse(true)
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