import { ViewComment } from '@/components/modal/ChecklistModals'
import useMediaQuery from '@/Hooks/useMediaQuery'
import React, { useState } from 'react'
import FlagIcon from './FlagIcon'
import MessageIcon from './MessageIcon'
import GetName from './Util Functions/GetName'

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
    const isMobile = useMediaQuery("(max-width: 414px)");
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
                            <>
                                {!isMobile ?
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
                                            {task?.user_id > 0 &&
                                                < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                    <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                        {GetName(task.user_name, task.updatedAt)}
                                                    </h3>
                                                </div>
                                            }
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
                                    :
                                    <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-[#363636] hover:border-white transition-all'

                                        onClick={() => { }}>
                                        <div className='flex items-center my-[12px]'>

                                            <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                            </div>
                                            <h3 className='h-full w-full ml-[15px] bg-transparent'>
                                                {task.title}
                                            </h3>
                                        </div>
                                        <div className='flex bg-transparent item-center justify-between'>
                                            {task?.user_id > 0 ?
                                                < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                    <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                        {GetName(task.user_name, task.updatedAt)}
                                                    </h3>
                                                </div>
                                                : <div></div>
                                            }
                                            <div className='flex my-[2px] pb-[2px]'>
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

                                    </div>}
                            </>
                        }{
                                (task.isCompleted == false && task?.isFlag == true) &&
                                <>
                                    {!isMobile ?
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
                                                {task?.user_id > 0 &&
                                                    < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                        <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                            {GetName(task.user_name, task.updatedAt)}
                                                        </h3>
                                                    </div>
                                                }
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
                                        :
                                        <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-[#191919] cursor-pointer duration-200 border border-white transition-all'

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
                                            <div className='flex bg-transparent item-center justify-between'>
                                                {task?.user_id > 0 ?
                                                    < div className='h-full bg-transparent flex items-center justify-center '>
                                                        <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                            {GetName(task.user_name, task.updatedAt)}
                                                        </h3>
                                                    </div>
                                                    : <div></div>
                                                }
                                                <div className='flex my-[2px] pb-[2px] bg-transparent'>
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

                                        </div>}
                                </>
                            }
                            {
                                task.isCompleted == true &&
                                // <div className='rounded-[10px] flex items-center w-full h-full my-[10px] p-[12px] bg-[#191919]  border border-white  cursor-pointer'
                                <>
                                    {!isMobile ?
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
                                                {task?.user_id > 0 &&
                                                    < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                        <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                            {GetName(task.user_name, task.updatedAt)}
                                                        </h3>
                                                    </div>
                                                }
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
                                        :
                                        <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-black  border border-white  cursor-pointer'
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
                                            <div className='flex bg-transparent item-center justify-between'>
                                                {task?.user_id > 0 ?
                                                    < div className='h-full bg-transparent flex items-center  '>
                                                        <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                            {GetName(task.user_name, task.updatedAt)}
                                                        </h3>
                                                    </div>
                                                    : <div></div>
                                                }
                                                <div className='flex my-[2px] pb-[2px] bg-transparent'>
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

                                        </div>}
                                </>
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