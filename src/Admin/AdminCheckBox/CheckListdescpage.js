import Breadcrumb from '@/components/Breadcrumb'
import React, { useState } from 'react'
import NewChecklistDisplay from './NewChecklistDisplay'

function CheckListdescpage() {
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
                                isChecked: false,
                                isFlagged: true,
                                subtasks: [
                                    {
                                        task: 'Right Chair',
                                        isChecked: true
                                    },
                                    {
                                        task: 'Left Chair',
                                        isChecked: true
                                    },
                                    {
                                        task: 'Central Chair',
                                        isChecked: true
                                    },

                                ]
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out',
                                isChecked: true,
                                isFlagged: false
                            },
                            {
                                task: 'Set out floor mats',
                                isChecked: false,
                                isFlagged: false,
                            },
                            {
                                task: 'Set out bar tools & Equipment',
                                isChecked: false,
                                isFlagged: false,
                            },
                        ]

                    },
                    {
                        title: 'Bartender Closing Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isChecked: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isChecked: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isChecked: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isChecked: false
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
                                isChecked: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isChecked: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isChecked: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isChecked: false
                            },
                        ]
                    },
                    {
                        title: 'Housekeeper Closing Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isChecked: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isChecked: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isChecked: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isChecked: false
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
                                isChecked: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isChecked: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isChecked: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isChecked: false
                            },
                        ]
                    },
                    {
                        title: 'Manager Closing Checklist',
                        tasks: [
                            {
                                task: 'Set out chairs2',
                                isChecked: false
                            },
                            {
                                task: 'Take clean glassware from dishwasher and set out2',
                                isChecked: false
                            },
                            {
                                task: 'Set out floor mats2',
                                isChecked: false
                            },
                            {
                                task: 'Set out bar tools & Equipment2',
                                isChecked: false
                            },
                        ]
                    },
                ]
            },
        ])
    const [progress, setprogress] = useState(0)
    const [checked, setChecked] = useState(0)
    function checkboxClick(userindex, checklistCategoryindex, taskindex, ischeckedStatus) {
        let dummydata = []
        console.log(userindex, checklistCategoryindex, taskindex, ischeckedStatus);
        dummydata = data.map((dataelement, i) => {
            if (i == userindex)
                return {
                    ...dataelement,
                    checklistCategory: dataelement.checklistCategory.map((checkboxelement, i2) => {
                        if (i2 == checklistCategoryindex)
                            return {
                                ...checkboxelement,
                                tasks: checkboxelement.tasks.map((tasks, i3) => {
                                    if (i3 == taskindex)
                                        return {
                                            ...tasks,
                                            isChecked: ischeckedStatus
                                        }
                                    else
                                        return { ...tasks }
                                })
                            }
                        else
                            return { ...checkboxelement }
                    })

                }
            else
                return { ...dataelement }


        })
        console.log(dummydata);
        setdata(dummydata)
    }
    function flagcheckbox(userindex, checklistCategoryindex, taskindex, ischeckedStatus) {
        let dummydata = []
        console.log(userindex, checklistCategoryindex, taskindex, ischeckedStatus);
        dummydata = data.map((dataelement, i) => {
            if (i == userindex)
                return {
                    ...dataelement,
                    checklistCategory: dataelement.checklistCategory.map((checkboxelement, i2) => {
                        if (i2 == checklistCategoryindex)
                            return {
                                ...checkboxelement,
                                tasks: checkboxelement.tasks.map((tasks, i3) => {
                                    if (i3 == taskindex)
                                        return {
                                            ...tasks,
                                            isFlagged: ischeckedStatus
                                        }
                                    else
                                        return { ...tasks }
                                })
                            }
                        else
                            return { ...checkboxelement }
                    })

                }
            else
                return { ...dataelement }


        })
        console.log(dummydata);
        setdata(dummydata)
    }
    function onClearAllClick(userindex, checklistCategoryindex) {
        let dummydata = []
        dummydata = data.map((dataelement, i) => {
            if (i == userindex)
                return {
                    ...dataelement,
                    checklistCategory: dataelement.checklistCategory.map((checkboxelement, i2) => {
                        if (i2 == checklistCategoryindex)
                            return {
                                ...checkboxelement,
                                tasks: checkboxelement.tasks.map((tasks, i3) => {

                                    return {
                                        ...tasks,
                                        isChecked: false,
                                        isFlagged: false
                                    }

                                })
                            }
                        else
                            return { ...checkboxelement }
                    })

                }
            else
                return { ...dataelement }


        })
        console.log(dummydata);
        setdata(dummydata)
    }
    return (
        <div>
            <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                <Breadcrumb />
            </div>

            <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
                <h2 className="text-white text-[24px] leading-9 font-bold ">
                    Bartender Opening Checklist
                </h2>
                <div className='flex items-center pr-[15px]'>
                    <h3 className='text-primary-base'>Progress</h3>
                    <div className='mx-[7px] flex flex-row  justify-start items-center w-[150px] shrink-0 h-[4px] bg-[#2F2F2F] rounded-full mt-[5px]'>
                        <div className='bg-primary-base h-full rounded-full transition-all duration-300 ease-in-out ' style={{ width: `${progress ? progress : 0}%` }}></div>
                    </div>
                    <h3 className='text-white'>{`${checked}/${data[0].checklistCategory[0].tasks.length}`}</h3>
                    <div className='ml-[15px] cursor-pointer' onClick={() => { onClearAllClick(0,0)}}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='transition-all duration-500 ease-in-out hover:rotate-180'>
                            <path d="M9.4987 3.16732C7.32275 3.16732 5.40189 4.26477 4.26137 5.93815H6.33203V7.52148H1.58203V2.77148H3.16536V4.75014C4.60921 2.82822 6.90808 1.58398 9.4987 1.58398C13.8709 1.58398 17.4154 5.12839 17.4154 9.50065H15.832C15.832 6.00285 12.9965 3.16732 9.4987 3.16732ZM3.16536 9.50065C3.16536 12.9985 6.00089 15.834 9.4987 15.834C11.6747 15.834 13.5955 14.7365 14.736 13.0632H12.6654V11.4798H17.4154V16.2298H15.832V14.2511C14.3882 16.1731 12.0893 17.4173 9.4987 17.4173C5.12644 17.4173 1.58203 13.8729 1.58203 9.50065H3.16536Z"
                             className='fill-primary-base'
                              />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='w-full text-white'>

                <NewChecklistDisplay
                    tasks={data[0].checklistCategory[0].tasks}
                    onflagged={(taskindex, ischeckedStatus) => { flagcheckbox(0, 0, taskindex, ischeckedStatus) }}
                    onClickCheck={(taskindex, ischeckedStatus) => { checkboxClick(0, 0, taskindex, ischeckedStatus) }}
                    onCompleted={() => { onClearAllClick(0, 0) }}
                    setProgresspercentage={setprogress}
                    setchecked={setChecked}
                />
            </div>

        </div>
    )
}

export default CheckListdescpage