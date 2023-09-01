import Breadcrumb from '@/components/Breadcrumb'
import { createHistory, emptyAllChecklist, getTasksBasedonIds } from '@/store/slices/checklist'
import { DescriptionTextAreaGrayWintBorder } from '@/utils/Cards/Text card/DescriptionTextArea'
import moment from 'moment/moment'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddComment, ResetModal, ReviewTaskUser } from '../modal/ChecklistModals'
import ConditionalButton from '../spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import NewChecklistDisplay from './NewChecklistDisplay'

function CheckListdescpage({ id, title }) {
    const textAreaRef = useRef()
    const [Addcomment, setAddComment] = useState(false)
    const [globaldata, setGlobalData] = useState(null)
    const [reset, isReset] = useState(false)
    const [resetModal, setresetModal] = useState(false)
    const { tasks } = useSelector(state => state.checklist)
    const [task, setTask] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTasksBasedonIds(id, moment().format("YYYY-MM-DD")))
        return () => {
            dispatch(emptyAllChecklist())
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
    const [data, setdata] = useState(
        [
            {
                user: 'Bartender',
                checklistCategory: [
                    {
                        title: 'Bartender Opening Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs',
                                isCompleted: false,
                                isFlag: true,
                                subtasks: [
                                    {
                                        task: 'Right Chair',
                                        isCompleted: true
                                    },
                                    {
                                        task: 'Left Chair',
                                        isCompleted: true
                                    },
                                    {
                                        task: 'Central Chair',
                                        isCompleted: true
                                    },

                                ]
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out',
                                isCompleted: true,
                                isFlag: false
                            },
                            {
                                task: 'Set out floor mats',
                                isCompleted: false,
                                isFlag: false,
                            },
                            {
                                task: 'Set out bar tools & Equipment',
                                isCompleted: false,
                                isFlag: false,
                            },
                        ]

                    },
                    {
                        title: 'Bartender Closing Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isCompleted: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isCompleted: false
                            },
                        ]

                    },
                ]
            },
            {
                user: 'Housekeeper',
                checklistCategory: [
                    {
                        title: 'Housekeeper Opening Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isCompleted: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isCompleted: false
                            },
                        ]
                    },
                    {
                        title: 'Housekeeper Closing Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isCompleted: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isCompleted: false
                            },
                        ]
                    },
                ]
            },
            {
                user: 'Manager',
                checklistCategory: [
                    {
                        title: 'Manager Opening Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isCompleted: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isCompleted: false
                            },
                        ]
                    },
                    {
                        title: 'Manager Closing Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isCompleted: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isCompleted: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isCompleted: false
                            },
                        ]
                    },
                ]
            },
        ])
    const [progress, setprogress] = useState(0)
    const [checked, setChecked] = useState(0)
    const [flagged, setflagged] = useState(0)
    const [isreview, setReview] = useState(false)
    function checkboxClick(userindex, checklistCategoryindex, taskindex, ischeckedStatus, taskid) {
        // let dummydata = []
        // console.log(userindex, checklistCategoryindex, taskindex, ischeckedStatus);
        // dummydata = data.map((dataelement, i) => {
        //     if (i == userindex)
        //         return {
        //             ...dataelement,
        //             checklistCategory: dataelement.checklistCategory.map((checkboxelement, i2) => {
        //                 if (i2 == checklistCategoryindex)
        //                     return {
        //                         ...checkboxelement,
        //                         tasks: checkboxelement.tasks.map((tasks, i3) => {
        //                             if (i3 == taskindex)
        //                                 return {
        //                                     ...tasks,
        //                                     isCompleted: ischeckedStatus
        //                                 }
        //                             else
        //                                 return { ...tasks }
        //                         })
        //                     }
        //                 else
        //                     return { ...checkboxelement }
        //             })

        //         }
        //     else
        //         return { ...dataelement }


        // })
        // console.log(dummydata);
        // setdata(dummydata)
        let dummy2 = []
        dummy2 = task.map((taskElement, i3) => {
            if (i3 == taskindex)
                return {
                    ...taskElement,
                    isCompleted: ischeckedStatus
                }
            else
                return { ...taskElement }
        })
        setTask([...dummy2])
        dispatch(createHistory(
            {
                type: 'checklist_task',
                type_id: taskid,
                date: moment().format("YYYY-MM-DD"),
                title: dummy2[taskindex].title,
                isCompleted: ischeckedStatus
            }, id, moment().format("YYYY-MM-DD")))

    }
    function flagcheckbox(userindex, checklistCategoryindex, taskindex, ischeckedStatus, taskid) {
        let dummy2 = []
        dummy2 = task.map((taskElement, i3) => {
            if (i3 == taskindex)
                return {
                    ...taskElement,
                    isFlag: ischeckedStatus
                }
            else
                return { ...taskElement }
        })
        setTask([...dummy2])
        dispatch(createHistory(
            {
                type: 'checklist_task',
                type_id: taskid,
                date: moment().format("YYYY-MM-DD"),
                title: dummy2[taskindex].title,
                isFlag: ischeckedStatus
            }, id, moment().format("YYYY-MM-DD")))

    }
    function checkboxSubtask(subtaskIndex, taskindex, ischeckedStatus, taskid, subtaskid, subtaskTitle) {
        let dummy2 = []
        dummy2 = task.map((taskElement, i3) => {
            if (i3 == taskindex)
                return {
                    ...taskElement,
                    checklist_sub_tasks: taskElement.checklist_sub_tasks.map((subtask, i4) => {
                        if (i4 == subtaskIndex) {
                            return {
                                ...subtask,
                                isCompleted: ischeckedStatus
                            }
                        }
                        else {
                            return { ...subtask }
                        }

                    })
                }
            else
                return { ...taskElement }
        })
        let dummy3 = dummy2[taskindex].checklist_sub_tasks.filter(ele => ele.isCompleted)

        if (dummy3.length == dummy2[taskindex].checklist_sub_tasks.length && dummy2[taskindex].isFlag == false) {
            dummy2[taskindex].isCompleted = true
            checkboxClick(0, 0, taskindex, true, taskid)
        }
        if (dummy3.length !== dummy2[taskindex].checklist_sub_tasks.length && dummy2[taskindex].isCompleted == true && dummy2[taskindex].isFlag == false) {
            dummy2[taskindex].isCompleted = false
            checkboxClick(0, 0, taskindex, false, taskid)
        }

        setTask([...dummy2])
        dispatch(createHistory(
            {
                type: 'checklist_sub_task',
                type_id: subtaskid,
                date: moment().format("YYYY-MM-DD"),
                title: subtaskTitle,
                isCompleted: ischeckedStatus
            }, id, moment().format("YYYY-MM-DD")))


    }
    function flagcsubtask(subtaskIndex, taskindex, ischeckedStatus, taskid, subtaskid, subtaskTitle) {
        let dummy2 = []
        dummy2 = task.map((taskElement, i3) => {
            if (i3 == taskindex)
                return {
                    ...taskElement,
                    checklist_sub_tasks: taskElement.checklist_sub_tasks.map((subtask, i4) => {
                        if (i4 == subtaskIndex) {
                            return {
                                ...subtask,
                                isFlag: ischeckedStatus
                            }
                        }
                        else {
                            return { ...subtask }
                        }

                    })
                }
            else
                return { ...taskElement }
        })
        let dummy3 = dummy2[taskindex].checklist_sub_tasks.filter(ele => ele.isFlag)
        if (dummy3.length > 0) {
            dummy2[taskindex].isFlag = true
            flagcheckbox(0, 0, taskindex, true, taskid)
        }
        if (dummy3.length == 0 && dummy2[taskindex].isFlag) {
            dummy2[taskindex].isFlag = false
            flagcheckbox(0, 0, taskindex, false, taskid)
        }
        setTask([...dummy2])
        dispatch(createHistory(
            {
                type: 'checklist_sub_task',
                type_id: subtaskid,
                date: moment().format("YYYY-MM-DD"),
                title: subtaskTitle,
                isFlag: ischeckedStatus
            }, id, moment().format("YYYY-MM-DD")))
    }
    function onClearAllClick(userindex, checklistCategoryindex) {
        let dummy2 = []
        dummy2 = task.map((taskElement) => {
            return {
                ...taskElement,
                checklist_sub_tasks: taskElement.checklist_sub_tasks.map((element) => {
                    return {
                        ...element,
                        isCompleted: false,
                        isFlag: false,
                        comment: ''
                    }
                }),
                isCompleted: false,
                isFlag: false,
                comment: ''
            }
        })
        setTask([...dummy2])
        isReset(true)
        setTimeout(() => {
            isReset(false)
        }, 100);

    }
    return (
        <>
            {Addcomment &&
                <AddComment
                    isModalOpen={Addcomment}
                    onClickCancel={() => { setAddComment(false) }}
                    title={'Checklist'}
                    onSave={() => { }}
                    data={globaldata}
                    id={id}
                />
            }
            {isreview &&
                <ReviewTaskUser
                    data={task}
                    flagged={flagged}
                    completed={checked}
                    notes={textAreaRef.current.value}
                    isModalOpen={isreview}
                    onClickCancel={() => { setReview(false) }}

                    onSave={() => { onClickCancel() }}
                />
            }
            {resetModal &&
                <ResetModal
                    isModalOpen={resetModal}
                    onClickCancel={() => { setresetModal(false) }}
                    title={''}
                    onSave={() => {
                        onClearAllClick(0, 0)
                    }}
                />}
            <div>
                <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                    <Breadcrumb />
                </div>

                <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
                    <div className='flex items-center'>

                        <h2 className="text-white text-[24px] leading-9 font-bold ">
                            {title}
                        </h2>
                        <div className='ml-[15px] cursor-pointer flex items-center' onClick={() => {
                            //  onClearAllClick(0, 0)
                            setresetModal(true)
                        }}>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='transition-all duration-500 ease-in-out hover:rotate-180'>
                                <path d="M9.4987 3.16732C7.32275 3.16732 5.40189 4.26477 4.26137 5.93815H6.33203V7.52148H1.58203V2.77148H3.16536V4.75014C4.60921 2.82822 6.90808 1.58398 9.4987 1.58398C13.8709 1.58398 17.4154 5.12839 17.4154 9.50065H15.832C15.832 6.00285 12.9965 3.16732 9.4987 3.16732ZM3.16536 9.50065C3.16536 12.9985 6.00089 15.834 9.4987 15.834C11.6747 15.834 13.5955 14.7365 14.736 13.0632H12.6654V11.4798H17.4154V16.2298H15.832V14.2511C14.3882 16.1731 12.0893 17.4173 9.4987 17.4173C5.12644 17.4173 1.58203 13.8729 1.58203 9.50065H3.16536Z"
                                    className='fill-primary-base'
                                />
                            </svg>
                            <h3 className='text-primary-base ml-[5px]'>Reset</h3>
                        </div>
                    </div>

                    <div className='flex items-center pr-[15px]'>
                        <h3 className='text-primary-base'>Progress</h3>
                        <div className='mx-[7px] flex flex-row  justify-start items-center w-[150px] shrink-0 h-[4px] bg-[#2F2F2F] rounded-full mt-[5px]'>
                            <div className='bg-primary-base h-full rounded-full transition-all duration-300 ease-in-out ' style={{ width: `${progress ? progress : 0}%` }}></div>
                        </div>
                        <h3 className='text-white'>{`${checked}/${task.length}`}</h3>
                    </div>
                </div>
                <div className='w-full text-white'>

                    <NewChecklistDisplay
                        checksubTask={(subtaskIndex, tashindex, isCheckStatus, taskid, subtaskid, subtaskTitle) => { checkboxSubtask(subtaskIndex, tashindex, isCheckStatus, taskid, subtaskid, subtaskTitle) }}
                        flagSubTask={(subtaskIndex, tashindex, isCheckStatus, taskid, subtaskid, subtaskTitle) => { flagcsubtask(subtaskIndex, tashindex, isCheckStatus, taskid, subtaskid, subtaskTitle) }}

                        setFlagged={setflagged}
                        onCommentClicked={(data) => { setGlobalData({ ...data, date: moment().format("YYYY-MM-DD") }); setAddComment(true) }}
                        tasks={task}
                        onflagged={(taskindex, ischeckedStatus, taskid) => { flagcheckbox(0, 0, taskindex, ischeckedStatus, taskid) }}
                        onClickCheck={(taskindex, ischeckedStatus, taskid) => { checkboxClick(0, 0, taskindex, ischeckedStatus, taskid) }}
                        onCompleted={() => { onClearAllClick(0, 0) }}
                        setProgresspercentage={setprogress}
                        setchecked={setChecked}
                    />
                </div>
                <h3 className='text-primary-base text-[18px] font-[600] not-italic mb-[7px] px-[15px] mt-[10px] '>Notes</h3>
                <div className='w-full px-[15px]'>

                    <DescriptionTextAreaGrayWintBorder textAreaRef={textAreaRef} isEdit={true} content={tasks.comment} infiniteHeight={true} isSAve={reset} />
                </div>

                <div className='w-full flex items-center justify-center mt-[20px]'>
                    <ConditionalButton label={'Review & Submit'} condition={checked + flagged == task.length ? true : false} onClickHandler={() => { setReview(true) }} />
                </div>
                {
                    checked + flagged != task.length &&
                    < div className='mt-[10px] w-full flex items-center justify-center'>

                        <h3 className='text-primary-base text-[12px] font-[400] italic mb-[7px] px-[15px]  animate-pulse '>Please perform each task and sub task to submit</h3>
                    </div>
                }
            </div>
        </>
    )
}

export default CheckListdescpage