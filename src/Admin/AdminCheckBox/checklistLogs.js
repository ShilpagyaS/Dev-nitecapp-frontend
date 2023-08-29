import { ReviewTaskUser } from '@/components/modal/ChecklistModals'
import { getUserRoles } from '@/store/slices/manageusers'
import { getOutlets } from '@/store/slices/outlet'
import { CustomSelectForBrandsFullGray } from '@/utils/CustomSelect'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ChecklistLogs() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
                                isChecked: true,
                                isFlagged: false,
                            },
                            {
                                task: 'Set out bar tools & Equipment',
                                isChecked: true,
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
    const [isreview, setReview] = useState(false)
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
    return (
        <>
            {isreview &&
                <ReviewTaskUser
                    data={data[0].checklistCategory[0].tasks}
                    flagged={3}
                    completed={1}
                    notes={'dummy Notes'}
                    isModalOpen={isreview}
                    onClickCancel={() => { setReview(false) }}

                    isAdmin={true}
                    onSave={() => { onClickCancel() }}
                />
            }
            <div>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center mb-[10px] mt-[10px]">

                        <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                            {`Submitted Checklists`}
                        </h5>

                    </div>
                    {/* <ChipWithLeftButton condition={true} label={'Create Checklist Group'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} /> */}
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
                <div className='grid grid-cols-12 bg-[#181818] rounded-lg p-2 mb-[10px]'>
                    <div className='col-span-3 flex items-center justify-start bg-transparent pl-[10px]'>
                        <div className='w-[16px] h-[16px] border border-[#959595] rounded-md mr-[10px]'>

                        </div>
                        <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                            Checklist
                        </h3>
                    </div>
                    <div className='col-span-2 flex items-center justify-center bg-transparent'>
                        <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                            Group
                        </h3>
                    </div>
                    <div className='col-span-2 flex items-center justify-center bg-transparent'>
                        <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                            {`Submitted(Role)`}
                        </h3>
                    </div>
                    <div className='col-span-2 flex items-center justify-center bg-transparent'>
                        <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                            Submitted by
                        </h3>
                    </div>
                    <div className='col-span-3 flex items-center justify-center bg-transparent'>
                        <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                            Date / Time
                        </h3>
                    </div>
                </div>
                {
                    list.map(() =>
                        <div className='grid grid-cols-12 bg-transparent border border-x-0 border-t-0 border-b-[#161616] rounded-lg p-2 mb-[10px] hover:bg-[#222222] hover:border-white hover:border cursor-pointer'
                            onClick={() => { setReview(true) }}
                        >
                            <div className='col-span-3 flex items-center justify-start bg-transparent pl-[10px]'>
                                <div className='w-[16px] h-[16px] border border-[#959595] rounded-md mr-[10px]'>

                                </div>
                                <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                    Bartender Opening List (4/5)
                                </h3>
                            </div>
                            <div className='col-span-2 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white font-semibold truncate rounded-[4px] not-italic text-[14px] bg-primary-base py-[2px] px-[8px] '>
                                    The Delphi Cafe Coffee | Tea
                                </h3>
                            </div>
                            <div className='col-span-2 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                    Server
                                </h3>
                            </div>
                            <div className='col-span-2 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                    Shubham Namdev
                                </h3>
                            </div>
                            <div className='col-span-3 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                    08/12/2023 (10:24 AM)
                                </h3>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default ChecklistLogs