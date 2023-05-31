import LIberaryComponents from '@/components/Learn/LIberaryComponents'
import { AddCourse } from '@/components/modal/LearnModals'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import Image from 'next/image'
import React, { useState } from 'react'

function LiberaryPage() {
    const [addCourseButton, setAddCourse] = useState(false)

    return (
        <>
            {addCourseButton &&
                <AddCourse
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Course'}
                    onSave={() => { }}
                />
            }
            <div>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center mb-[33px] mt-[35px]">

                        <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                            {`Learning Library`}
                        </h5>
                        <Image src={'/asset/Vector 5.svg'} height={15} width={8} className={'ml-[20px]'} />
                    </div>
                    <ChipWithLeftButton condition={true} label={'Add Course'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />
                </div>
                <LIberaryComponents />
            </div>
        </>
    )
}

export default LiberaryPage