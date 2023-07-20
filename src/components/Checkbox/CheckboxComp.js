import React, { useState } from 'react'
import AccordianForCheckBox from './AccordianForCheckBox'
import ChecklistDisplay from './checklistDisplay'


function CheckboxComp() {
    const [data, setdata] = useState([
        {
            user: 'Bartender',
            checklistCategory: [
                {
                    title: 'Bartender Opening Checklist',
                    tasks: [
                        {
                            task: 'Set out chairs',
                            isChecked: false
                        },
                        {
                            task: 'Take clean glassware from dishwasher and set out',
                            isChecked: true
                        },
                        {
                            task: 'Set out floor mats',
                            isChecked: false
                        },
                        {
                            task: 'Set out bar tools & Equipment',
                            isChecked: false
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

                },
                {
                    title: 'Housekeeper Closing Checklist',

                },
            ]
        },
        {
            user: 'Manager',
            checklistCategory: [
                {
                    title: 'Manager Opening Checklist',

                },
                {
                    title: 'Manager Closing Checklist',

                },
            ]
        },
    ])
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
    return (
        <div>
            <div className="flex items-center mb-[33px] w-full justify-between">

                <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Checkbox`}
                </h5>
            </div>
            {
                data.map(
                    (dataelement, i) =>
                        <AccordianForCheckBox
                            key={i}
                            title={dataelement.user}
                            type='user'
                            content={dataelement.checklistCategory.map(
                                (checklist, ci) =>
                                    <AccordianForCheckBox
                                        key={ci}
                                        title={checklist.title}
                                        type='checklist'
                                        content={
                                            <ChecklistDisplay tasks={checklist.tasks} onClickCheck={(taskindex, ischeckedStatus) => { checkboxClick(i, ci, taskindex, ischeckedStatus) }} />
                                        }
                                    />
                            )}
                        />
                )
            }

        </div>
    )
}

export default CheckboxComp