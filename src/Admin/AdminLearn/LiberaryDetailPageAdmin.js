import Breadcrumb from '@/components/Breadcrumb'
import { AddChapter, AddModule, EditChapter } from '@/components/modal/LearnModals'
import CourseFileUpload from '@/utils/Cards/Learnsection/CourseUpload'
import LearnFileUpload from '@/utils/Cards/Learnsection/LearnUploadImage'
import LibraryDetailcard from '@/utils/Cards/Learnsection/LibraryDetailcard'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import Image from 'next/image'
import React, { useState } from 'react'

function LiberaryDetailPageAdmin() {
    const [addCourseButton, setAddCourse] = useState(false)
    const [EditaChapter, setEditChapter] = useState(false)
    const [Addmodule, setaddmodule] = useState(false)

    return (
        <>
            {addCourseButton &&
                <AddChapter
                    isModalOpen={addCourseButton}
                    onClickCancel={() => { setAddCourse(false) }}
                    title={'Chapter'}
                    onSave={() => { }}
                />
            }
            {EditaChapter &&
                <EditChapter
                    isModalOpen={EditaChapter}
                    onClickCancel={() => { setEditChapter(false) }}
                    title={'Chapter'}
                    onSave={() => { }}
                />
            }
            {Addmodule &&
                <AddModule
                    isModalOpen={Addmodule}
                    onClickCancel={() => { setaddmodule(false) }}
                    title={'Module'}
                    onSave={() => { }}
                />
            }
            <div>
                <Breadcrumb />
                <h2 className="text-white text-[24px] leading-9 font-bold mb-[20px] ">
                    The Delphi Orientation
                </h2>
                <div className='relative w-full h-[243px] rounded-md'>
                    {/* <Image src={'https://s3-alpha-sig.figma.com/img/9770/d818/a32e7194911e9df4c2a5d70359966994?Expires=1685318400&Signature=RgW9nRp4fhiRCAwyTeo98tdo33EC3vgMXfmNqOMGpzXAzkKLEQUIDe0FcLYdPXRMc8ctftepWNkZ2phTc3R8q1~rqhRRPO13XPmk7py3vwuL9PwqxlKo18oEd2RHzMCFmG3P65Iw4P7DbwP-6BOT6gk698mPaQJqhnwcQvjC4Xh0kANHdTwbhep6ujyrpigWZ19Bb8i78IaOBpHopz08VApgIs5eojobqZMcWQ35NuEIznUJz3ti66Ichw-9RGfn22YKTo075LRR52IOYebAggGdtudze390JoWqUDbqy6dfTN5gPfxu6vcjOlx4Fmw0YPJRLPCiF7bpnc327KggaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} fill className='object-cover rounded-md' /> */}

                    <CourseFileUpload isEdit={true} defaultImage={'https://s3-alpha-sig.figma.com/img/9770/d818/a32e7194911e9df4c2a5d70359966994?Expires=1685318400&Signature=RgW9nRp4fhiRCAwyTeo98tdo33EC3vgMXfmNqOMGpzXAzkKLEQUIDe0FcLYdPXRMc8ctftepWNkZ2phTc3R8q1~rqhRRPO13XPmk7py3vwuL9PwqxlKo18oEd2RHzMCFmG3P65Iw4P7DbwP-6BOT6gk698mPaQJqhnwcQvjC4Xh0kANHdTwbhep6ujyrpigWZ19Bb8i78IaOBpHopz08VApgIs5eojobqZMcWQ35NuEIznUJz3ti66Ichw-9RGfn22YKTo075LRR52IOYebAggGdtudze390JoWqUDbqy6dfTN5gPfxu6vcjOlx4Fmw0YPJRLPCiF7bpnc327KggaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
                </div>
                <div className='my-[24px] flex items-center justify-end'>
                    <ChipWithLeftButton condition={true} label={'Add Chapter'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} />

                </div>
                <LibraryDetailcard isAdmin={true} onEditClick={() => { setEditChapter(true) }} onaddmoculeclick={() => { setaddmodule(true) }} />
                <LibraryDetailcard />
            </div>
        </>
    )
}

export default LiberaryDetailPageAdmin