import { ReviewHsitoryTask, ReviewTaskUser } from '@/components/modal/ChecklistModals'
import Pagination from '@/components/pagination'
import { gethistory } from '@/store/slices/checklist'
import { getUserRoles } from '@/store/slices/manageusers'
import { getOutlets } from '@/store/slices/outlet'
import { CustomSelectForBrandsFullGray } from '@/utils/CustomSelect'
import { GetNameOnly } from '@/utils/Util Functions/GetName'
import moment from 'moment/moment'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Datepicker from "tailwind-datepicker-react"
const options = {
    // title: "Demo Title",
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    // maxDate: new Date("2030-01-01"),
    // minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-black text-white ",
        todayBtn: "bg-primary-base text-white hover:bg-primary-base",
        clearBtn: "",
        icons: "bg-transparent hover:bg-primary-base text-primary-base hover:text-black",
        text: "text-white rounded-[50px] hover:bg-primary-base",
        disabledText: "text-[#959595]",
        input: "",
        inputIcon: "",
        selected: "bg-primary-base",
    },
    icons: {

        prev: () => <span className='bg-transparent'>{`<`}</span>,
        next: () => <span className='bg-transparent'>{`>`}</span>,
    },
    datepickerClassNames: "bottom-0 bg-transparent",
    defaultDate: new Date(),
    language: "en",
}
function ChecklistLogs() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const pageSize = 6
    const [currentPage, setcurrentPage] = useState(1)

    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState('')

    const handleChange = (selectedDate) => {
        setSelectedDate(selectedDate)
        console.log(selectedDate)
    }
    const handleClose = (state) => {
        setShow(state)
    }
    const [data, setdata] = useState(
        [
            {
                user: 'Bartender',
                checklistCategory: [
                    {
                        title: 'Bartender Opening Checklist',
                        tasks: [
                            {
                                title: 'Set out chairs',
                                isCompleted: false,
                                isFlag: true,
                                checklist_sub_tasks: [
                                    {
                                        title: 'Right Chair',
                                        isCompleted: true,
                                        isFlag: false
                                    },
                                    {
                                        title: 'Left Chair',
                                        isCompleted: true,
                                        isFlag: false
                                    },
                                    {
                                        title: 'Central Chair',
                                        isCompleted: true,
                                        isFlag: false
                                    },

                                ]
                            },
                            {
                                title: 'Take clean glassware from dishwasher and set out',
                                isCompleted: true,
                                isFlag: false
                            },
                            {
                                title: 'Set out floor mats',
                                isCompleted: true,
                                isFlag: false,
                            },
                            {
                                title: 'Set out bar tools & Equipment',
                                isCompleted: true,
                                isFlag: false,
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
    const { historySection } = useSelector((state) => state.checklist)
    const [outletArray, setOutletArray] = useState([])
    const dispatch = useDispatch()
    const [userroles, setUserRoles] = useState([])
    const [categoryDetail, setCategoryDetail] = useState(null)
    useEffect(() => {
        dispatch(getOutlets())

        dispatch(getUserRoles()).then((res) => { setUserRoles(res) })

    }, [])

    useEffect(() => {
        dispatch(gethistory(currentPage, pageSize))
    }, [currentPage])


    useEffect(() => {
        if (outlets.length > 0) {
            let outletss = outlets.map((e) => { return { value: e.outlet_id, label: e.outlet_name } })
            setOutletArray([...outletss])
            // sedefaultvalue([outletss[0]])
        }
    }, [outlets])

    return (
        <div className='flex flex-col h-full '>
            {isreview &&
                <div className='h-[10vh]'>
                    <ReviewHsitoryTask
                        data={data[0].checklistCategory[0].tasks}
                        categoryId={categoryDetail.id}
                        taskDate={categoryDetail.date}
                        flagged={3}
                        completed={1}
                        notes={'dummy Notes'}
                        isModalOpen={isreview}
                        onClickCancel={() => { setReview(false) }}
                        title={categoryDetail.title}
                        // title={title}
                        isAdmin={true}
                        onSave={() => { onClickCancel() }}
                    />
                </div>
            }
            <div className='flex-auto '>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center mb-[10px] mt-[10px]">

                        <h5 className='not-italic font-semibold text-2xl font-Inter leading-tight text-white mb-[2px]'>
                            {`Submitted Checklists`}
                        </h5>

                    </div>
                    {/* <ChipWithLeftButton condition={true} label={'Create Checklist Group'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddCourse(true) }} /> */}
                    <div className='flex items-center mb-[10px]'>
                        <div className='calender shrink-0'>

                            <div className='relative'>
                                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
                                    <div className="flex items-center cursor-pointer " onClick={() => { setShow(prev => !prev) }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#929292" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.6959 13.6992H15.7049M15.6959 16.6992H15.7049M11.9959 13.6992H12.0059M11.9959 16.6992H12.0059M8.29492 13.6992H8.30492M8.29492 16.6992H8.30492" stroke="#929292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className='font-Inter text-[14px] text-[#929292] font-normal not-italic ml-[10px]'>
                                            {selectedDate == '' ? 'Select Date' : moment(selectedDate).format("MMM Do YYYY")}
                                        </div>
                                    </div>
                                </Datepicker>
                            </div>
                        </div>
                        <div className='input-desc flex flex-col ml-[25px]'>
                            <CustomSelectForBrandsFullGray items={[...outletArray, { value: '', label: 'None' }]}
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
                            <CustomSelectForBrandsFullGray items={[...userroles, { value: '', label: 'None' }]}
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
                    historySection?.data?.map((x, i) =>
                        <div className='grid grid-cols-12 bg-transparent border border-x-0 border-t-0 border-b-[#161616] rounded-lg p-2 mb-[10px] hover:bg-[#222222] hover:border-white hover:border cursor-pointer'
                            onClick={() => {
                                setCategoryDetail({
                                    id: x.checklist_category_id,
                                    date: moment(x.updatedAt).format('YYYY-MM-DD'),
                                    title: x.checklist_category_name
                                }); setReview(true)
                            }}
                        >
                            <div className='col-span-3 flex items-center justify-start bg-transparent pl-[10px]'>
                                <div className='w-[16px] h-[16px] mr-[10px] text-white bg-transparent flex items-center justify-center'>
                                    {i + 1}.
                                </div>
                                {/* <div className='w-[16px] h-[16px] border border-[#959595] rounded-md mr-[10px]'>

                                </div> */}
                                <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                    {`${x.checklist_category_name} (${x.total_task})`}
                                </h3>
                            </div>
                            <div className='col-span-2 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white font-semibold truncate rounded-[4px] not-italic text-[14px] bg-primary-base py-[2px] px-[8px] '>
                                    {x.checklist_name}
                                </h3>
                            </div>
                            <div className='col-span-2 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                    {x.role}
                                </h3>
                            </div>
                            <div className='col-span-2 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white capitalize font-normal not-italic text-[14px] bg-transparent'>
                                    {GetNameOnly(x.submitted_by)}
                                </h3>
                            </div>
                            <div className='col-span-3 flex items-center justify-center bg-transparent'>
                                <h3 className='text-white font-normal not-italic text-[14px] bg-transparent'>
                                    {`${moment(x.updatedAt).format('L')} (${moment(x.updatedAt).format('LT')})`}
                                </h3>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='w-full flex justify-center h-[60px]'>
                <Pagination
                    totalelements={historySection.count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    setcurrentPage={setcurrentPage}
                />
            </div>

        </div>
    )
}

export default ChecklistLogs