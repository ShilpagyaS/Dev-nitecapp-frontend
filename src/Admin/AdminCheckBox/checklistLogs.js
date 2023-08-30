import { ReviewTaskUser } from '@/components/modal/ChecklistModals'
import { getUserRoles } from '@/store/slices/manageusers'
import { getOutlets } from '@/store/slices/outlet'
import { CustomSelectForBrandsFullGray } from '@/utils/CustomSelect'
import moment from 'moment/moment'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ChecklistLogs() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const [title, setTitle] = useState('')
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
    const [date, setDate] = useState('')

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
                    title={'Bartender Opening List'}
                    // title={title}
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
                    <div className='flex items-center mb-[10px]'>
                        <div className='calender '>
                            {/* <label className='flex items-center cursor-pointer' for='dateInput' >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#929292" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.6959 13.6992H15.7049M15.6959 16.6992H15.7049M11.9959 13.6992H12.0059M11.9959 16.6992H12.0059M8.29492 13.6992H8.30492M8.29492 16.6992H8.30492" stroke="#929292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className='font-Inter text-[14px] text-[#929292] font-normal not-italic ml-[10px]'>
                                    {date == '' ? 'Select Date' : moment(date).format("MMM Do YYYY")}
                                </div>
                           
                            </label> */}
                            <input type='date' placeholder='Select Date' value={date} id='dateInput' forma

                                onChange={(e) => { console.log(e.target.value); setDate(e.target.value) }}
                                className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none' />
                            {/* <input type='date' value={date} id='dateInput'  onChange={(e) => { console.log(e.target.value); setDate(e.target.value) }} className='not-italic font-normal text-base leading-6 text-white font-Inter bg-[#2C2C2C] pl-[20px] h-[44px] pr-[5px] rounded outline-none focus:outline-none' /> */}

                        </div>
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
                        <div className='w-[16px] h-[16px] bg-transparent mr-[10px] '>

                        </div>
                        {/* <div className='w-[16px] h-[16px] border border-[#959595] rounded-md mr-[10px] '>

                        </div> */}
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
                    list.map((x, i) =>
                        <div className='grid grid-cols-12 bg-transparent border border-x-0 border-t-0 border-b-[#161616] rounded-lg p-2 mb-[10px] hover:bg-[#222222] hover:border-white hover:border cursor-pointer'
                            onClick={() => { setReview(true) }}
                        >
                            <div className='col-span-3 flex items-center justify-start bg-transparent pl-[10px]'>
                                <div className='w-[16px] h-[16px] mr-[10px] text-white bg-transparent flex items-center justify-center'>
                                    {i + 1}.
                                </div>
                                {/* <div className='w-[16px] h-[16px] border border-[#959595] rounded-md mr-[10px]'>

                                </div> */}
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