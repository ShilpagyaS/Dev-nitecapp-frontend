import ChecklistDisplay from '@/components/Checkbox/checklistDisplay';
import { getUserRoles } from '@/store/slices/manageusers';
import { getOutlets } from '@/store/slices/outlet';
import NewCheckListAccordian from '@/utils/Accordian/New Cheklist Accordian/NewCheckListAccordian';
import { CustomSelectForBrandsFullGray } from '@/utils/CustomSelect';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NewChecklistDisplay from './NewChecklistDisplay';

function CheckList() {
    const { outlets } = useSelector((state) => state.outlets)
    const [outletArray, setOutletArray] = useState([])
    const dispatch = useDispatch()
    const [userroles, setUserRoles] = useState([])
    useEffect(() => {
        dispatch(getOutlets())
        dispatch(getUserRoles()).then((res) => { let d = res.filter((e) => e.value != 1); setUserRoles(d) })

    }, [])
    useEffect(() => {
        if (outlets.length > 0) {
            let outletss = outlets.map((e) => { return { value: e.outlet_id, label: e.outlet_name } })
            setOutletArray([...outletss])
            // sedefaultvalue([outletss[0]])
        }
    }, [outlets])
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
                                        isChecked: false
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
            <div className="flex items-center mb-[33px] w-full  justify-between">

                <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Checklist`}
                </h5>
                <div className='flex items-center'>

                    <div className='input-desc flex flex-col ml-[25px]'>
                        <CustomSelectForBrandsFullGray items={[...outletArray]}
                            text={'Filter By Outlet'}
                            // defaultSelect={outletSelected ? { ...outletSelected } : null}
                            optionalFunction={(e) => {
                                console.log(e);
                                // setDrinkBrand({ brand_id: e.value, brand_name: e.label })
                                // setCurrentHotelMappingId(e?.body[`${subcategory}_id`])
                                // dispatch(getProductById(subcategory, e?.body[`${subcategory}_id`]))
                            }} />
                    </div>
                    <div className='input-desc flex flex-col ml-[25px]'>
                        <CustomSelectForBrandsFullGray items={[...userroles]}
                            text={'Filter By Role'}
                            // defaultSelect={outletSelected ? { ...outletSelected } : null}
                            optionalFunction={(e) => {
                                console.log(e);
                                // setDrinkBrand({ brand_id: e.value, brand_name: e.label })
                                // setCurrentHotelMappingId(e?.body[`${subcategory}_id`])
                                // dispatch(getProductById(subcategory, e?.body[`${subcategory}_id`]))
                            }} />
                    </div>

                </div>
            </div>
            <div className='border border-[#404040] w-full'>

                {
                    data.map(
                        (dataelement, i) =>
                            <NewCheckListAccordian
                                key={i}
                                title={dataelement.user}
                                type='user'
                                content={dataelement.checklistCategory.map(
                                    (checklist, ci) =>
                                        <NewCheckListAccordian
                                            key={ci}
                                            title={checklist.title}
                                            type='checklist'
                                            isprogressBar={true}
                                            tasks={checklist.tasks.length}
                                            progress={20}
                                        // content={
                                        //     <NewChecklistDisplay tasks={checklist.tasks} onflagged={(taskindex, ischeckedStatus) => { flagcheckbox(i, ci, taskindex, ischeckedStatus) }} onClickCheck={(taskindex, ischeckedStatus) => { checkboxClick(i, ci, taskindex, ischeckedStatus) }} onCompleted={() => { onClearAllClick(i, ci) }} />
                                        // }
                                        />
                                )}
                            />
                    )
                }

            </div>


        </div>
    )
}

export default CheckList