import { AddChecklistCategory } from '@/components/modal/ChecklistModals'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import React, { useState } from 'react'
import NewChecklistListComponent from './NewChecklistListComponent'

function NewAdminChecklistHomePage() {
    const [addCourseButton, setAddCourse] = useState(false)

    return (
        <>
         {addCourseButton &&
                <AddChecklistCategory
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Checklist Group'}
                    onSave={() => { }}
                />
            }
            <div>
                <div className='flex items-center justify-between mb-[10px]'>
                    <div className="flex items-center mb-[10px] mt-[10px]">

                        <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                            {`Checklists`}
                        </h5>

                    </div>
                    <ChipWithLeftButton condition={true} label={'Create Checklist Group'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                </div>
                <NewChecklistListComponent />
            </div>
        </>
    )
}

export default NewAdminChecklistHomePage