import useMediaQuery from '@/Hooks/useMediaQuery';
import { CircularProgressForCheckbox } from '@/utils/CircularProgress'
import FlagIcon from '@/utils/FlagIcon';
import MessageIcon from '@/utils/MessageIcon';
import GetName from '@/utils/Util Functions/GetName';
import React, { useEffect, useState } from 'react'

function NewChecklistDisplay({ tasks, onClickCheck, onflagged, isCompleted, setProgresspercentage, setFlagged, onCommentClicked, setchecked, checksubTask, flagSubTask }) {
    const isMobile = useMediaQuery("(max-width: 414px)");
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (tasks.length > 0) {
            let dummy = tasks.filter((t) => t.isCompleted || t.isFlag)
            let cheked = tasks.filter((t) => t.isCompleted)
            let flagged = tasks.filter((t) => t.isFlag)
            setProgress(parseInt((dummy.length / tasks.length) * 100))
            setProgresspercentage(parseInt((cheked.length / tasks.length) * 100))
            setchecked(cheked.length)
            setFlagged(flagged.length)
        }
    }, [tasks])

    return (
        <div className='bg-transparent w-full  px-[15px]'>
            {
                tasks?.map((task, i) =>
                    <>  {
                        (task.isCompleted == false && task?.isFlag != true) &&
                        <>
                            {!isMobile ?

                                <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-[#363636] hover:border-white transition-all'

                                    onClick={() => { if (task?.checklist_sub_tasks?.length < 1) { onClickCheck(i, true, task.checklist_task_id) } }}>
                                    <div className='flex items-center sm:my-[12px] my-[8px]'>

                                        <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px]  rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                        </div>
                                        <h3 className='h-full text-[14px] sm:text-[16px] w-full sm:ml-[15px] ml-[10px] bg-transparent'>
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

                                            < div className='flex items-center mx-[2px] ' onClick={(e) => { e.stopPropagation() }}>
                                                {/* OLD MESSAGE */}
                                                {/* <div className='relative'>

                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5068 0H4.50225C2.01701 0 0 2.008 0 4.48424V9.86893V10.7694C0 13.2456 2.01701 15.2536 4.50225 15.2536H5.85293C6.09605 15.2536 6.42021 15.4157 6.57329 15.6138L7.92396 17.4057C8.51826 18.1981 9.49075 18.1981 10.085 17.4057L11.4357 15.6138C11.6068 15.3887 11.8769 15.2536 12.1561 15.2536H13.5068C15.992 15.2536 18.009 13.2456 18.009 10.7694V4.48424C18.009 2.008 15.992 0 13.5068 0ZM5.4027 9.0045C4.89845 9.0045 4.50225 8.5993 4.50225 8.10405C4.50225 7.6088 4.90745 7.2036 5.4027 7.2036C5.89795 7.2036 6.30315 7.6088 6.30315 8.10405C6.30315 8.5993 5.90695 9.0045 5.4027 9.0045ZM9.0045 9.0045C8.50025 9.0045 8.10405 8.5993 8.10405 8.10405C8.10405 7.6088 8.50926 7.2036 9.0045 7.2036C9.49975 7.2036 9.90495 7.6088 9.90495 8.10405C9.90495 8.5993 9.50876 9.0045 9.0045 9.0045ZM12.6063 9.0045C12.1021 9.0045 11.7059 8.5993 11.7059 8.10405C11.7059 7.6088 12.1111 7.2036 12.6063 7.2036C13.1016 7.2036 13.5068 7.6088 13.5068 8.10405C13.5068 8.5993 13.1106 9.0045 12.6063 9.0045Z"
                                                className='fill-primary-base bg-transparent'
                                            />
                                        </svg>
                                        <div className='w-[10px] h-[10px] border-black animate-bounce  bg-[#959595] border-[2px]  absolute right-[-2px] top-[-3px] rounded-full '>

                                        </div>
                                    </div> */}
                                                <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                    e.stopPropagation(),
                                                        onCommentClicked(
                                                            {
                                                                type: 'checklist_task',
                                                                type_id: task.checklist_task_id,
                                                                title: task.title,
                                                                comment: task.comment
                                                            }
                                                        )
                                                }} />

                                            </div>
                                        }
                                        {
                                            task?.checklist_sub_tasks?.length < 1 &&
                                            <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_task_id) }}>
                                                <FlagIcon condition={task?.isFlag} />



                                            </div>
                                        }
                                    </div>

                                </div>

                                :
                                <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-[#363636] hover:border-white transition-all'

                                    onClick={() => { if (task?.checklist_sub_tasks?.length < 1) { onClickCheck(i, true, task.checklist_task_id) } }}>
                                    <div className='flex items-center sm:my-[12px] my-[8px]'>

                                        <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px]  rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                        </div>
                                        <h3 className='h-full text-[14px] sm:text-[16px] w-full sm:ml-[15px] ml-[10px] bg-transparent'>
                                            {task.title}
                                        </h3>
                                    </div>

                                    <div className='flex bg-transparent items-center justify-between'>
                                        {task?.user_id > 0 ?
                                            < div className='h-full bg-transparent flex items-end pb-[2px] '>
                                                <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                    {GetName(task.user_name, task.updatedAt)}
                                                </h3>
                                            </div>
                                            : <div></div>
                                        }
                                        <div className='flex my-[2px] pb-[2px]'>

                                            {
                                                task?.checklist_sub_tasks?.length < 1 &&

                                                < div className='flex items-center mx-[2px] ' onClick={(e) => { e.stopPropagation() }}>

                                                    <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                        e.stopPropagation(),
                                                            onCommentClicked(
                                                                {
                                                                    type: 'checklist_task',
                                                                    type_id: task.checklist_task_id,
                                                                    title: task.title,
                                                                    comment: task.comment
                                                                }
                                                            )
                                                    }} />

                                                </div>
                                            }
                                            {
                                                task?.checklist_sub_tasks?.length < 1 &&
                                                <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_task_id) }}>
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
                                        <div className='flex items-center sm:my-[12px] my-[8px] bg-transparent'>

                                            <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                            </div>
                                            <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent'>
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
                                                <div className='flex items-center bg-transparent ml-[10px]' >


                                                    <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                        e.stopPropagation(),
                                                            onCommentClicked(
                                                                {
                                                                    type: 'checklist_task',
                                                                    type_id: task.checklist_task_id,
                                                                    title: task.title,
                                                                    comment: task.comment
                                                                }
                                                            )
                                                    }} />
                                                </div>
                                            }
                                            <div className='flex items-center ml-[5px] bg-transparent'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (task?.checklist_sub_tasks?.length < 1)
                                                        onflagged(i, false, task.checklist_task_id)
                                                }}>

                                                <FlagIcon condition={task?.isFlag} />
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-[#191919] cursor-pointer duration-200 border border-white transition-all'

                                        onClick={() => {
                                            //  onClickCheck(i, true)
                                        }}>
                                        <div className='flex items-center sm:my-[12px] my-[8px] bg-transparent'>

                                            <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                            </div>
                                            <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent'>
                                                {task.title}
                                            </h3>
                                        </div>
                                        <div className='flex items-center bg-transparent justify-between'>
                                            {task?.user_id > 0 ?
                                                < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                    <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                        {GetName(task.user_name, task.updatedAt)}
                                                    </h3>
                                                </div>
                                                : <div></div>
                                            }
                                            <div className='flex my-[2px] pb-[2px] bg-transparent'>


                                                {
                                                    task?.checklist_sub_tasks?.length < 1 &&
                                                    <div className='flex items-center bg-transparent ml-[10px]' >


                                                        <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                            e.stopPropagation(),
                                                                onCommentClicked(
                                                                    {
                                                                        type: 'checklist_task',
                                                                        type_id: task.checklist_task_id,
                                                                        title: task.title,
                                                                        comment: task.comment
                                                                    }
                                                                )
                                                        }} />
                                                    </div>
                                                }
                                                <div className='flex items-center ml-[5px] bg-transparent'
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (task?.checklist_sub_tasks?.length < 1)
                                                            onflagged(i, false, task.checklist_task_id)
                                                    }}>

                                                    <FlagIcon condition={task?.isFlag} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                            </>
                        }
                        {
                            task.isCompleted == true &&
                            <>     {!isMobile ?
                                <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black  border border-white  cursor-pointer'
                                    onClick={() => { if (task?.checklist_sub_tasks?.length < 1) { onClickCheck(i, false, task.checklist_task_id) } }}>
                                    <div className='flex items-center sm:my-[12px] my-[8px]'>

                                        <div className='checkboxcircle sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                        </div>
                                        <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent line-through italic text-white'>
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
                                            task?.checklist_sub_tasks?.length < 1 &&
                                            <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => { e.stopPropagation(); onCommentClicked('') }}>
                                                <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                    e.stopPropagation(),
                                                        onCommentClicked(
                                                            {
                                                                type: 'checklist_task',
                                                                type_id: task.checklist_task_id,
                                                                title: task.title,
                                                                comment: task.comment
                                                            }
                                                        )
                                                }} />

                                            </div>
                                        }
                                        {
                                            task?.checklist_sub_tasks?.length < 1 &&
                                            <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_task_id) }}>
                                                <FlagIcon condition={task?.isFlag} />



                                            </div>
                                        }
                                    </div>

                                </div>
                                : <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-black  border border-white  cursor-pointer'
                                    onClick={() => { if (task?.checklist_sub_tasks?.length < 1) { onClickCheck(i, false, task.checklist_task_id) } }}>
                                    <div className='flex items-center sm:my-[12px] my-[8px]'>

                                        <div className='checkboxcircle sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                        </div>
                                        <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent line-through italic text-white'>
                                            {/* <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-[#7B7B7B]'> */}
                                            {task.title}
                                        </h3>
                                    </div>
                                    <div className='flex bg-transparent items-center justify-between'>
                                        {task?.user_id > 0 ?
                                            < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                    {GetName(task.user_name, task.updatedAt)}
                                                </h3>
                                            </div>
                                            : <div>
                                            </div>
                                        }
                                        <div className='flex my-[2px] pb-[2px] bg-transparent'>
                                            {
                                                task?.checklist_sub_tasks?.length < 1 &&
                                                <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => { e.stopPropagation(); onCommentClicked('') }}>
                                                    <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                        e.stopPropagation(),
                                                            onCommentClicked(
                                                                {
                                                                    type: 'checklist_task',
                                                                    type_id: task.checklist_task_id,
                                                                    title: task.title,
                                                                    comment: task.comment
                                                                }
                                                            )
                                                    }} />

                                                </div>
                                            }
                                            {
                                                task?.checklist_sub_tasks?.length < 1 &&
                                                <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_task_id) }}>
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
                            <div className='sm:ml-[40px] ml-[10px]'>
                                <NewSubtaskList tasks={task?.checklist_sub_tasks}
                                    onClickCheck={(subtaskInex, status, subtaskid, title) => { checksubTask(subtaskInex, i, status, task.checklist_task_id, subtaskid, title) }}
                                    onflagged={(subtaskInex, status, subtaskid, title) => { flagSubTask(subtaskInex, i, status, task.checklist_task_id, subtaskid, title) }}
                                    onCompleted={() => { }} onCommentClicked={onCommentClicked} />
                            </div>
                        }
                    </>
                )
            }
        </div >
    )
}

export default NewChecklistDisplay

function NewSubtaskList({ tasks, onClickCheck, onCompleted, onCommentClicked, onflagged }) {
    const [checked, setChecked] = useState(0)
    const [subtask, setTask] = useState([])
    const isMobile = useMediaQuery("(max-width: 414px)");
    useEffect(() => {
        setTask(tasks)
    }, [tasks])
    return (
        <div className='bg-transparent w-full pl-[15px]'>
            {
                subtask.map((task, i) =>
                    <>  {
                        (task.isCompleted == false && task?.isFlag != true) &&
                        <>
                            {!isMobile ?
                                <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-[#363636] hover:border-white transition-all'

                                    onClick={() => { onClickCheck(i, true, task.checklist_sub_task_id, task.title) }}>
                                    <div className='flex items-center sm:my-[12px] my-[8px]'>

                                        <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                        </div>
                                        <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent text-white'>
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
                                        <div className='flex items-center mx-[2px] ml-[10px] bg-transparent '
                                        // onClick={(e) => { e.stopPropagation(), onCommentClicked('Already Present Comment') }}
                                        >
                                            <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                e.stopPropagation(),
                                                    onCommentClicked(
                                                        {
                                                            type: 'checklist_sub_task',
                                                            type_id: task.checklist_sub_task_id,
                                                            title: task.title,
                                                            comment: task.comment
                                                        }
                                                    )
                                            }} />

                                        </div>
                                        <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_sub_task_id, task.title) }}>
                                            <FlagIcon condition={task?.isFlag} />
                                        </div>
                                    </div>

                                </div> :
                                <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer hover:-translate-y-[2px] duration-200 border border-[#363636] hover:border-white transition-all'

                                    onClick={() => { onClickCheck(i, true, task.checklist_sub_task_id, task.title) }}>
                                    <div className='flex items-center sm:my-[12px] my-[8px]'>

                                        <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                        </div>
                                        <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent text-white'>
                                            {task.title}
                                        </h3>
                                    </div>
                                    <div className='flex bg-transparent  items-center justify-between'>
                                        {task?.user_id > 0 ?
                                            < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                    {GetName(task.user_name, task.updatedAt)}
                                                </h3>
                                            </div>
                                            : <div></div>
                                        }
                                        <div className='flex my-[2px] pb-[2px] bg-transparent'>
                                            <div className='flex items-center mx-[2px] ml-[10px] bg-transparent '
                                            // onClick={(e) => { e.stopPropagation(), onCommentClicked('Already Present Comment') }}
                                            >
                                                <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                    e.stopPropagation(),
                                                        onCommentClicked(
                                                            {
                                                                type: 'checklist_sub_task',
                                                                type_id: task.checklist_sub_task_id,
                                                                title: task.title,
                                                                comment: task.comment
                                                            }
                                                        )
                                                }} />

                                            </div>
                                            <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_sub_task_id, task.title) }}>
                                                <FlagIcon condition={task?.isFlag} />
                                            </div>
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
                                        <div className='flex items-center sm:my-[12px] my-[8px] bg-transparent'>

                                            <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                            </div>
                                            <h3 className='h-full text-[14px] sm:text-[16px] w-full sm:ml-[15px] ml-[10px] bg-transparent'>
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
                                            <div className='flex items-center mx-[2px] ml-[10px] bg-transparent '
                                            // onClick={(e) => { e.stopPropagation(), onCommentClicked('Already Present Comment') }}
                                            >
                                                <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                    e.stopPropagation(),
                                                        onCommentClicked(
                                                            {
                                                                type: 'checklist_sub_task',
                                                                type_id: task.checklist_sub_task_id,
                                                                title: task.title,
                                                                comment: task.comment
                                                            }
                                                        )
                                                }} />

                                            </div>
                                            <div className='flex items-center ml-[5px] bg-transparent' onClick={(e) => { e.stopPropagation(); onflagged(i, false, task.checklist_sub_task_id, task.title) }}>
                                                <FlagIcon condition={task?.isFlag} />

                                            </div>
                                        </div>

                                    </div> :
                                    <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-[#191919] cursor-pointer duration-200 border border-white transition-all'

                                        onClick={() => {
                                            //  onClickCheck(i, true)
                                        }}>
                                        <div className='flex items-center sm:my-[12px] my-[8px] bg-transparent'>

                                            <div className='checkboxcircle shrink-0 sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                            </div>
                                            <h3 className='h-full text-[14px] sm:text-[16px] w-full sm:ml-[15px] ml-[10px] bg-transparent'>
                                                {task.title}
                                            </h3>
                                        </div>
                                        <div className='flex bg-transparent items-center justify-between'>
                                            {task?.user_id > 0 ?
                                                < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                    <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                        {GetName(task.user_name, task.updatedAt)}
                                                    </h3>
                                                </div>
                                                : <div></div>
                                            }
                                            <div className='flex my-[2px] pb-[2px] bg-transparent'>
                                                <div className='flex items-center mx-[2px] ml-[10px] bg-transparent '
                                                // onClick={(e) => { e.stopPropagation(), onCommentClicked('Already Present Comment') }}
                                                >
                                                    <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                        e.stopPropagation(),
                                                            onCommentClicked(
                                                                {
                                                                    type: 'checklist_sub_task',
                                                                    type_id: task.checklist_sub_task_id,
                                                                    title: task.title,
                                                                    comment: task.comment
                                                                }
                                                            )
                                                    }} />

                                                </div>
                                                <div className='flex items-center ml-[5px] bg-transparent' onClick={(e) => { e.stopPropagation(); onflagged(i, false, task.checklist_sub_task_id, task.title) }}>
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
                                        onClick={() => { onClickCheck(i, false, task.checklist_sub_task_id, task.title) }}>
                                        <div className='flex items-center sm:my-[12px] my-[8px] '>

                                            <div className='checkboxcircle sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                            </div>
                                            <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent line-through italic text-white'>
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
                                            {/* <div className='flex items-center ml-[10px] bg-transparent' onClick={(e) => { e.stopPropagation(); onCommentClicked('') }}>
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
                                            <path d="M13.5068 0H4.50225C2.01701 0 0 2.008 0 4.48424V9.86893V10.7694C0 13.2456 2.01701 15.2536 4.50225 15.2536H5.85293C6.09605 15.2536 6.42021 15.4157 6.57329 15.6138L7.92396 17.4057C8.51826 18.1981 9.49075 18.1981 10.085 17.4057L11.4357 15.6138C11.6068 15.3887 11.8769 15.2536 12.1561 15.2536H13.5068C15.992 15.2536 18.009 13.2456 18.009 10.7694V4.48424C18.009 2.008 15.992 0 13.5068 0ZM5.4027 9.0045C4.89845 9.0045 4.50225 8.5993 4.50225 8.10405C4.50225 7.6088 4.90745 7.2036 5.4027 7.2036C5.89795 7.2036 6.30315 7.6088 6.30315 8.10405C6.30315 8.5993 5.90695 9.0045 5.4027 9.0045ZM9.0045 9.0045C8.50025 9.0045 8.10405 8.5993 8.10405 8.10405C8.10405 7.6088 8.50926 7.2036 9.0045 7.2036C9.49975 7.2036 9.90495 7.6088 9.90495 8.10405C9.90495 8.5993 9.50876 9.0045 9.0045 9.0045ZM12.6063 9.0045C12.1021 9.0045 11.7059 8.5993 11.7059 8.10405C11.7059 7.6088 12.1111 7.2036 12.6063 7.2036C13.1016 7.2036 13.5068 7.6088 13.5068 8.10405C13.5068 8.5993 13.1106 9.0045 12.6063 9.0045Z"
                                                className='fill-primary-base bg-transparent'
                                            />
                                        </svg>
                                    </div> */}
                                            <div className='flex items-center mx-[2px] ml-[10px] bg-transparent '
                                            // onClick={(e) => { e.stopPropagation(), onCommentClicked('Already Present Comment') }}
                                            >
                                                <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                    e.stopPropagation(),
                                                        onCommentClicked(
                                                            {
                                                                type: 'checklist_sub_task',
                                                                type_id: task.checklist_sub_task_id,
                                                                title: task.title,
                                                                comment: task.comment
                                                            }
                                                        )
                                                }} />

                                            </div>
                                            <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_sub_task_id, task.title) }}>
                                                <FlagIcon condition={task?.isFlag} />
                                            </div>
                                        </div>

                                    </div> :
                                    <div className='rounded-[10px] flex flex-col justify-between w-full h-full my-[10px] px-[12px] bg-black  border border-white  cursor-pointer'
                                        onClick={() => { onClickCheck(i, false, task.checklist_sub_task_id, task.title) }}>
                                        <div className='flex items-center sm:my-[12px] my-[8px] '>

                                            <div className='checkboxcircle sm:h-[18px] sm:w-[18px] h-[12px] w-[12px] rounded-full shrink-0 border-[1px] border-primary-base bg-primary-base'>

                                            </div>
                                            <h3 className='h-full w-full text-[14px] sm:text-[16px] sm:ml-[15px] ml-[10px] bg-transparent line-through italic text-white'>
                                                {/* <h3 className='h-full w-full ml-[15px] bg-transparent line-through italic text-[#7B7B7B]'> */}
                                                {task.title}
                                            </h3>
                                        </div>
                                        <div className='flex bg-transparent items-center justify-between'>
                                            {task?.user_id > 0 ?
                                                < div className='h-full bg-transparent flex items-end pb-[5px] '>
                                                    <h3 className='capitalize italic text-[10px] text-[#959595] align-bottom bg-transparent'>
                                                        {GetName(task.user_name, task.updatedAt)}
                                                    </h3>
                                                </div>
                                                :
                                                <div></div>
                                            }
                                            <div className='flex my-[2px] pb-[2px] bg-transparent'>
                                                <div className='flex items-center mx-[2px] ml-[10px] bg-transparent '
                                                // onClick={(e) => { e.stopPropagation(), onCommentClicked('Already Present Comment') }}
                                                >
                                                    <MessageIcon comment={task.comment} onMessageClick={(e) => {
                                                        e.stopPropagation(),
                                                            onCommentClicked(
                                                                {
                                                                    type: 'checklist_sub_task',
                                                                    type_id: task.checklist_sub_task_id,
                                                                    title: task.title,
                                                                    comment: task.comment
                                                                }
                                                            )
                                                    }} />

                                                </div>
                                                <div className='flex items-center ml-[5px]' onClick={(e) => { e.stopPropagation(); onflagged(i, true, task.checklist_sub_task_id, task.title) }}>
                                                    <FlagIcon condition={task?.isFlag} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>}
                            </>
                        }
                    </>
                )
            }

        </div >
    )
}