import { ViewComment } from '@/components/modal/ChecklistModals'
import React, { useState } from 'react'
import FlagIcon from './FlagIcon'
import MessageIcon from './MessageIcon'

function ReviewCard({ tasks }) {
    return (
        <div>
            <TasksAndSubtask tasks={tasks} />
        </div>
    )
}

export default ReviewCard
function TasksAndSubtask({ tasks }) {
    const [data, setData] = useState('')
    const [isViewComment, setIsViewCommetn] = useState(false)

    return (
        <>
            {isViewComment &&

                <ViewComment
                    data={data}

                    isModalOpen={isViewComment}
                    onClickCancel={() => { setIsViewCommetn(false) }}

                    onSave={() => { onClickCancel() }}
                />
            }
            <div>
                {
                    tasks.map((task, i) =>
                        <>  {
                            (task.isCompleted == false && task?.isFlag != true) &&
                            <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-[#363636] hover:border-white transition-all'

                                onClick={() => { }}>
                                <div className='flex items-center my-[12px]'>

                                    <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent'>
                                        {task.title}
                                    </h3>
                                </div>
                                <div className='flex bg-transparent'>
                                    {
                                        task?.checklist_sub_tasks?.length < 1 &&
                                        <div className='flex items-center mx-[2px] bg-transparent ' onClick={(e) => {
                                            // setData('Dummy Comment')
                                            // setIsViewCommetn(true)
                                        }}>
                                            <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                e.stopPropagation()
                                                setData(task.comment)
                                                setIsViewCommetn(true)
                                            }} />

                                        </div>
                                    }
                                    {
                                        task?.checklist_sub_tasks?.length < 1 &&
                                        <div className='flex items-center ml-[15px]' onClick={(e) => { }}>
                                            <FlagIcon condition={task?.isFlag} />

                                        </div>
                                    }
                                </div>

                            </div>
                        }{
                                (task.isCompleted == false && task?.isFlag == true) &&
                                <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-[#191919] cursor-pointer duration-200 border border-white transition-all'

                                    onClick={() => {
                                        //  onClickCheck(i, true)
                                    }}>
                                    <div className='flex items-center my-[12px] bg-transparent'>

                                        <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                        </div>
                                        <h3 className='h-full w-full ml-[15px] bg-transparent text-white'>
                                            {task.title}
                                        </h3>
                                    </div>
                                    <div className='flex bg-transparent'>
                                        <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                            <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                Ritwik K. (08/10/23) 10:32pm
                                            </h3>
                                        </div>
                                        {
                                            (!task?.checklist_sub_tasks || task?.checklist_sub_tasks?.length < 1) &&
                                            <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => {
                                                // setData('Dummy Comment')
                                                // setIsViewCommetn(true)
                                            }}>
                                                <MessageIcon comment={task?.comment} onMessageClick={(e) => {
                                                    e.stopPropagation()
                                                    setData(task.comment)
                                                    if (task?.comment != '')
                                                        setIsViewCommetn(true)
                                                }} />

                                            </div>
                                        }

                                        <div className='flex items-center ml-[15px] bg-transparent' onClick={(e) => { }}>
                                            <FlagIcon condition={task?.isFlag} />

                                        </div>

                                    </div>

                                </div>
                            }
                            {
                                task.isCompleted == true &&
                                // <div className='rounded-[10px] flex items-center w-full h-full my-[10px] p-[12px] bg-[#191919]  border border-white  cursor-pointer'
                                <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black  border border-white  cursor-pointer'
                                    onClick={() => {

                                    }}>
                                    <div className='flex items-center my-[12px]'>

                                        <div className='checkboxcircle h-[18px] w-[18px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                        </div>
                                        <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-white'>
                                            {/* <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-[#7B7B7B]'> */}
                                            {task.title}
                                        </h3>
                                    </div>
                                    <div className='flex bg-transparent'>
                                        <div className='h-full bg-transparent flex items-end pb-[5px] '>
                                            <h3 className='italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                Ritwik K. (08/10/23) 10:32pm
                                            </h3>
                                        </div>
                                        {
                                            (!task?.checklist_sub_tasks || task?.checklist_sub_tasks?.length < 1) &&
                                            <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => {
                                                // setData('Dummy Comment')
                                                // setIsViewCommetn(true)
                                            }}>
                                                <MessageIcon comment={task?.comment} onMessageClick={(e) => {
                                                    e.stopPropagation()
                                                    setData(task.comment)
                                                    if (task?.comment != '')
                                                        setIsViewCommetn(true)
                                                }} />
                                            </div>
                                        }
                                        {
                                            task?.checklist_sub_tasks?.length < 1 &&
                                            <div className='flex items-center ml-[15px] bg-transparent' onClick={(e) => {

                                            }}>
                                                <FlagIcon condition={task?.isFlag} />

                                            </div>
                                        }
                                    </div>

                                </div>
                            }
                            {
                                task?.checklist_sub_tasks?.length > 0 &&
                                <div className='ml-[40px]'>
                                    <TasksAndSubtask tasks={task?.checklist_sub_tasks} onClickCheck={() => { }} onCompleted={() => { }} />
                                </div>
                            }
                        </>
                    )
                }

            </div>
        </>
    )
}