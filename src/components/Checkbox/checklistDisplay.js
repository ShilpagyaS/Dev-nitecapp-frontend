import { CircularProgressForCheckbox } from '@/utils/CircularProgress'
import React, { useEffect, useState } from 'react'

function ChecklistDisplay({ tasks, onClickCheck, onCompleted }) {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        if (tasks.length > 0) {
            let dummy = tasks.filter((t) => t.isChecked)
            setProgress(parseInt((dummy.length / tasks.length) * 100))
        }
    }, [tasks])

    // const [arrayOfTasks, setArrayOfTasks] = useState([])
    // useEffect(() => {
    //     if (tasks.length > 0) {
    //         setArrayOfTasks(tasks)
    //     }
    // }, [tasks])

    return (
        <div className='bg-transparent w-full p-[15px]'>
            {
                tasks.map((task, i) =>
                    <>  {
                        task.isChecked == false &&
                        <div className='rounded-[10px] flex items-center w-full h-full my-[10px] p-[12px] bg-[#191919] cursor-pointer hover:-translate-y-1 hover:border hover:border-primary-base transition-all'

                            onClick={() => { onClickCheck(i, true) }}>
                            <div className='checkboxcircle h-[18px] w-[18px] rounded-full border-[1px] border-white bg-transparent'>

                            </div>
                            <h3 className='h-full w-full ml-[15px] bg-transparent'>
                                {task.task}
                            </h3>

                        </div>
                    }
                    </>
                )
            }
            <div className='flex items-center justify-between w-full mt-[10px]'>

                <h3 className='text-base not-italic font-[16px] font-Inter text-white'>
                    Completed
                </h3>
                <div className='flex items-center'>
                    {
                        progress == 100 &&
                        <h3 className='text-base not-italic text-[16px] font-Inter text-primary-base cursor-pointer font-semibold mr-[10px] ' onClick={() => { onCompleted() }}>
                            All Done
                        </h3>
                    }

                    <CircularProgressForCheckbox innerText={progress} percentage={progress} />
                </div>
            </div>
            {
                tasks.map((task, i) =>
                    <>  {
                        task.isChecked == true &&
                        <div className='rounded-[10px] flex items-center w-full h-full my-[10px] p-[12px] bg-[#191919] cursor-pointer'
                            onClick={() => { onClickCheck(i, false) }}>
                            <div className='checkboxcircle h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-primary-base'>

                            </div>
                            <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-[#7B7B7B]'>
                                {task.task}
                            </h3>

                        </div>
                    }
                    </>
                )
            }


        </div>
    )
}

export default ChecklistDisplay