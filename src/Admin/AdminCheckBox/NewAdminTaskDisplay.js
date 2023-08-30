import Breadcrumb from '@/components/Breadcrumb'
import { AddSubtask, AddTasks, DeleteChecklist, EditChecklist } from '@/components/modal/ChecklistModals'
import { emptyAllChecklist, EmptyUserRoleID, getTasksBasedonIds, MasterAPIForupdateAndDelete } from '@/store/slices/checklist'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function NewAdminTaskDisplay({ title, id }) {
    const dispatch = useDispatch()
    const { tasks, userRoleId } = useSelector(state => state.checklist)
    const [task, setTask] = useState([])
    const [EditModal, setEditmodal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [globaldata, setGlobalData] = useState(null)
    const [newtitle, setTitle] = useState(false)
    const [addTasks, setAddTasks] = useState(false)
    const [addSubTasks, setAddSubTasks] = useState(false)


    useEffect(() => {
        dispatch(getTasksBasedonIds(id))
        return () => {
            dispatch(emptyAllChecklist())
            dispatch(EmptyUserRoleID())
        }
    }, [])
    useEffect(() => {
        if (tasks) {
            console.log('task', tasks.checklist_tasks);
            if (tasks?.checklist_tasks?.length > 0) {
                console.log('checklist', tasks.checklist_tasks);
                setTask([...tasks.checklist_tasks])
            }
        }


    }, [tasks])

    function EditFunction(e, data) {
        setGlobalData(data)
        console.log(data);
        e.stopPropagation();
        setEditmodal(true)
    }
    function AddtasksFunction(data) {
        setGlobalData(data)
        console.log(data);
        setAddTasks(true)
    }
    function DeleteFunctionality(e, data) {
        setGlobalData(data)
        console.log(data);
        e.stopPropagation();
        setDeleteModal(true)
    }
    function Addsubtask(e, data) {
        setGlobalData(data)
        console.log(data);
        e.stopPropagation();
        setAddSubTasks(true)
    }

    return (
        <>
            {DeleteModal &&
                <DeleteChecklist
                    isModalOpen={DeleteModal}
                    onClickCancel={() => { setDeleteModal(false) }}
                    title={newtitle}
                    onSave={() => {

                        dispatch(MasterAPIForupdateAndDelete(globaldata, 2, id, 'Deleted'))
                    }
                    }
                />}
            {addTasks &&
                <AddTasks
                    isModalOpen={addTasks}
                    onClickCancel={() => { setAddTasks(false) }}
                    title={'Tasks'}
                    onSave={() => { }}
                    data={globaldata}
                    type={2}
                    id={id}
                />
            }
            {addSubTasks &&
                <AddSubtask
                    isModalOpen={addSubTasks}
                    onClickCancel={() => { setAddSubTasks(false) }}
                    title={'Sub Tasks'}
                    onSave={() => { }}
                    id={id}
                    data={globaldata}
                />
            }
            {EditModal &&
                <EditChecklist
                    isModalOpen={EditModal}
                    onClickCancel={() => { setEditmodal(false) }}
                    title={newtitle}
                    onSave={() => { }}
                    data={globaldata}
                    type={2}
                    id={id}

                />
            }
            <div>
                <Breadcrumb />
                <div className='flex items-center justify-between mb-[10px]'>
                    <div className="flex items-center mb-[10px] mt-[10px]">

                        <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                            {title}
                        </h5>

                    </div>
                    <ChipWithLeftButton condition={true} label={'Add Task'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => {
                        AddtasksFunction({
                            user_role_id: userRoleId,
                            checklist_category_id: tasks.checklist_category_id
                        })
                    }} />
                </div>
                {
                    task.map((taskinner, i) =>
                        <>  {

                            <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer duration-200 border border-[#363636] transition-all'

                                onClick={() => { }}>
                                <div className='flex items-center my-[12px]'>

                                    <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                    </div>
                                    <h3 className='h-full w-full ml-[15px] bg-transparent text-white'>
                                        {taskinner.title}
                                    </h3>
                                </div>
                                <div className='flex items-center bg-transparent'>
                                    <div className='flex items-center cursor-pointer' onClick={(e) => {
                                        Addsubtask(e, {
                                            checklist_task_id: taskinner.checklist_task_id
                                        })
                                    }}>
                                        <span className={`bg-transparent mr-[3px]`}>
                                            {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                                <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                            </svg>

                                        </span>

                                        <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add Subtask</p>
                                    </div>
                                    <div className='flex items-center cursor-pointer ml-[10px]' onClick={(e) => {
                                        setTitle('Task')
                                        EditFunction(e, {
                                            title: taskinner.title,
                                            id: taskinner.checklist_task_id,
                                            type: 'checklist_task'

                                        })
                                    }}>

                                        <span className={`bg-transparent mr-[3px]`}>
                                            {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                                <path d="M6.162 12.6706H14V14.004H2V11.1753L8.6 4.5753L11.428 7.40463L6.16133 12.6706H6.162ZM9.542 3.6333L10.9567 2.21863C11.0817 2.09365 11.2512 2.02344 11.428 2.02344C11.6048 2.02344 11.7743 2.09365 11.8993 2.21863L13.7853 4.10463C13.9103 4.22965 13.9805 4.39919 13.9805 4.57596C13.9805 4.75274 13.9103 4.92228 13.7853 5.0473L12.3707 6.4613L9.54267 3.6333H9.542Z" />
                                            </svg>


                                        </span>
                                        <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Edit</p>
                                    </div>
                                    <button className='h-[20px] w-[20px] rounded-full bg-transparent flex items-center justify-center ml-[10px]'
                                        // <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                                        onClick={(e) => {
                                            setTitle('Task')
                                            DeleteFunctionality(e, {
                                                id: taskinner.checklist_task_id,
                                                type: 'checklist_task',
                                                isActive: false

                                            })

                                        }}>
                                        <Image
                                            src={'/asset/DeleteVector.svg'}
                                            width={20}
                                            height={20}
                                            className="bg-transparent"
                                        // className="bg-[#171717]"
                                        />
                                    </button>
                                </div>

                            </div>
                        }


                            {
                                taskinner?.checklist_sub_tasks?.length > 0 &&
                                <>
                                    {
                                        taskinner?.checklist_sub_tasks.map((
                                            innersubtask
                                        ) =>

                                            <div className='ml-[50px]'>
                                                <div className='rounded-[10px] flex justify-between w-full h-full my-[10px] px-[12px] bg-black cursor-pointer duration-200 border border-[#363636] transition-all'

                                                    onClick={() => { }}>
                                                    <div className='flex items-center my-[12px]'>

                                                        <div className='checkboxcircle shrink-0 h-[18px] w-[18px] rounded-full border-[1px] border-primary-base bg-[#262323]'>

                                                        </div>
                                                        <h3 className='h-full w-full ml-[15px] bg-transparent text-white'>
                                                            {innersubtask.title}
                                                        </h3>
                                                    </div>
                                                    <div className='flex items-center bg-transparent'>
                                                        <div className='flex bg-transparent'>
                                                            <div className='flex items-center cursor-pointer ml-[10px]' onClick={(e) => {
                                                                setTitle('Sub Task')
                                                                EditFunction(e, {
                                                                    title: innersubtask.title,
                                                                    id: innersubtask.checklist_sub_task_id,
                                                                    type: 'checklist_sub_task'

                                                                })
                                                            }}>

                                                                <span className={`bg-transparent mr-[3px]`}>
                                                                    {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                                                        <path d="M6.162 12.6706H14V14.004H2V11.1753L8.6 4.5753L11.428 7.40463L6.16133 12.6706H6.162ZM9.542 3.6333L10.9567 2.21863C11.0817 2.09365 11.2512 2.02344 11.428 2.02344C11.6048 2.02344 11.7743 2.09365 11.8993 2.21863L13.7853 4.10463C13.9103 4.22965 13.9805 4.39919 13.9805 4.57596C13.9805 4.75274 13.9103 4.92228 13.7853 5.0473L12.3707 6.4613L9.54267 3.6333H9.542Z" />
                                                                    </svg>


                                                                </span>
                                                                <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Edit</p>
                                                            </div>
                                                            <button className='h-[20px] w-[20px] rounded-full bg-transparent flex items-center justify-center ml-[10px]'
                                                                // <button className='h-[40px] w-[40px] rounded-full bg-[#171717] flex items-center justify-center mx-[5px]'
                                                                onClick={(e) => {
                                                                    setTitle('Sub Task')
                                                                    DeleteFunctionality(e, {
                                                                        id: innersubtask.checklist_sub_task_id,
                                                                        type: 'checklist_sub_task',
                                                                        isActive: false

                                                                    })

                                                                }}>
                                                                <Image
                                                                    src={'/asset/DeleteVector.svg'}
                                                                    width={20}
                                                                    height={20}
                                                                    className="bg-transparent"
                                                                // className="bg-[#171717]"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                </>
                            }
                        </>
                    )
                }

            </div>
        </>
    )
}

export default NewAdminTaskDisplay