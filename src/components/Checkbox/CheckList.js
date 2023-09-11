import ChecklistDisplay from '@/components/Checkbox/checklistDisplay';
import { emptyAllChecklist, FilterData, getChecklists, setUserRolid } from '@/store/slices/checklist';
import { getUserRoles } from '@/store/slices/manageusers';
import { getOutlets } from '@/store/slices/outlet';
import NewCheckListAccordian from '@/utils/Accordian/New Cheklist Accordian/NewCheckListAccordian';
import { CustomSelectForBrandsFullGray } from '@/utils/CustomSelect';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NewChecklistDisplay from './NewChecklistDisplay';

function CheckList() {
    const { outlets } = useSelector((state) => state.outlets)
    const { checklist } = useSelector(state => state.checklist)
    const [outletArray, setOutletArray] = useState([])
    const [checklistArray, setCheckList] = useState([])
    const [currentValue, setCurrentValues] = useState({ role: '', outlet_id: '' })
    const dispatch = useDispatch()
    const [userroles, setUserRoles] = useState([])
    useEffect(() => {
        dispatch(getOutlets())
        dispatch(getUserRoles()).then((res) => { setUserRoles(res) })
        dispatch(getChecklists())
        return () => {
            dispatch(emptyAllChecklist())
        }
    }, [])
    useEffect(() => {
        if (outlets.length > 0) {
            let outletss = outlets.map((e) => { return { value: e.outlet_id, label: e.outlet_name } })
            setOutletArray([...outletss])
            // sedefaultvalue([outletss[0]])
        }
    }, [outlets])

    useEffect(() => {
        if (checklist.length > 0) {
            setCheckList([...checklist])
        }
        else setCheckList([])
    }, [checklist])
    function FilterFunction(type, dataValue, value) {
        console.log(type, dataValue, value);
        if (type == 'outlet_id') {
            if ((dataValue.role == '' || dataValue.role == 'None') && value != '') {
                dispatch(FilterData({
                    outlet_id: value,
                    date: moment().format("YYYY-MM-DD")
                }))
            }
            if ((dataValue.role == '' || dataValue.role == 'None') && value == '') {
                if (dataValue.role == 'None')
                    dispatch(getChecklists())
                if (dataValue.role == '' && dataValue.outlet_id != '')
                    dispatch(getChecklists())
            }
            if ((dataValue.role != '' && dataValue.role != 'None') && value != '') {
                dispatch(FilterData({
                    userRole: [dataValue.role],
                    outlet_id: value,
                    date: moment().format("YYYY-MM-DD")
                }))
            }
            if ((dataValue.role != '' && dataValue.role != 'None') && value == '') {
                dispatch(FilterData({
                    userRole: [dataValue.role],
                    date: moment().format("YYYY-MM-DD")
                }))
            }
        }
        if (type == 'role') {
            if (dataValue.outlet_id == '' && value != 'None') {
                dispatch(FilterData({
                    userRole: [value],
                    date: moment().format("YYYY-MM-DD")
                }))
            }
            if (dataValue.outlet_id != '' && value != 'None') {
                dispatch(FilterData({
                    userRole: [value],
                    outlet_id: dataValue.outlet_id,
                    date: moment().format("YYYY-MM-DD")
                }))
            }
            if (dataValue.outlet_id != '' && value == 'None') {
                dispatch(FilterData({
                    outlet_id: dataValue.outlet_id,
                    date: moment().format("YYYY-MM-DD")
                }))
            }
            if (dataValue.outlet_id == '' && value == 'None') {
                dispatch(getChecklists())
            }

        }
        setCurrentValues(prev => { return { ...prev, [type]: value } })
    }
    return (
        <div>
            <div className="flex items-start sm:items-center sm:flex-row flex-col mb-[33px] w-full  sm:justify-between">

                <h5 className='not-italic font-semibold text-[32px] font-Inter leading-tight text-white mb-[2px]'>
                    {`Checklists`}
                </h5>
                <div className='flex items-center sm:flex-row flex-col'>

                    <div className='input-desc flex flex-col sm:ml-[25px]'>
                        <CustomSelectForBrandsFullGray items={[...outletArray, { value: '', label: 'None' }]}
                            text={'Filter By Outlet'}
                            // defaultSelect={outletSelected ? { ...outletSelected } : null}
                            optionalFunction={(e) => {
                                console.log(e);
                                FilterFunction('outlet_id', currentValue, e.value)

                            }} />
                    </div>
                    <div className='input-desc flex flex-col sm:ml-[25px]'>
                        <CustomSelectForBrandsFullGray items={[...userroles, { value: '', label: 'None' }]}
                            text={'Filter By Role'}
                            // defaultSelect={outletSelected ? { ...outletSelected } : null}
                            optionalFunction={(e) => {
                                console.log(e);
                                // setCurrentValues(prev => { return { ...prev, role: e.label } })
                                FilterFunction('role', currentValue, e.label)
                                // setDrinkBrand({ brand_id: e.value, brand_name: e.label })
                                // setCurrentHotelMappingId(e?.body[`${subcategory}_id`])
                                // dispatch(getProductById(subcategory, e?.body[`${subcategory}_id`]))
                            }} />
                    </div>

                </div>
            </div>
            {checklistArray.length > 0 ? <>

                <div className='w-full'>

                    {
                        checklistArray.map(
                            (dataelement, i) =>

                                <NewCheckListAccordian
                                    key={i}
                                    title={dataelement.title}
                                    type='user'
                                    content={dataelement?.checklist_categories?.map(
                                        (checklist, ci) => {

                                            return <div className='ml-[20px]'>
                                                <NewCheckListAccordian
                                                    key={ci}
                                                    title={checklist.title}
                                                    type='checklist'
                                                    categoryid={checklist.checklist_category_id}
                                                    isprogressBar={true}
                                                    completed={checklist.isCompleted == 'completed' ? true : false}
                                                    inProgress={checklist.isCompleted == 'in-progress' ? true : false}
                                                    tasks={checklist.taskCount}
                                                    progress={20}
                                                    onClickFunction={() => {
                                                        dispatch(setUserRolid(dataelement.user_role_id))

                                                    }}
                                                // content={
                                                //     <NewChecklistDisplay tasks={checklist.tasks} onflagged={(taskindex, ischeckedStatus) => { flagcheckbox(i, ci, taskindex, ischeckedStatus) }} onClickCheck={(taskindex, ischeckedStatus) => { checkboxClick(i, ci, taskindex, ischeckedStatus) }} onCompleted={() => { onClearAllClick(i, ci) }} />
                                                // }
                                                />
                                            </div>
                                        }
                                    )}
                                />
                        )
                    }
                </div>
            </>
                : <>
                    <div className='w-full h-[400px] flex items-center justify-center flex-col'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="40pt" height="40pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                stroke="none" className='fill-primary-base'>
                                <path d="M2370 5104 c-38 -16 -85 -57 -103 -89 -6 -11 -14 -63 -17 -115 l-5
-95 -235 -5 c-260 -6 -276 -9 -324 -72 -26 -35 -46 -96 -46 -140 l0 -28 -342
0 c-368 0 -397 -3 -474 -53 -59 -37 -100 -85 -131 -152 l-28 -60 0 -2015 0
-2015 26 -56 c37 -79 90 -133 167 -171 l67 -33 1635 0 1635 0 67 33 c77 38
130 92 167 171 l26 56 3 900 c2 647 -1 907 -9 927 -15 36 -56 50 -97 32 -18
-7 -33 -14 -34 -16 -2 -2 -5 -413 -8 -915 l-5 -911 -30 -43 c-16 -23 -50 -53
-74 -66 l-44 -23 -1597 0 -1597 0 -44 23 c-24 13 -57 43 -74 66 l-30 43 -3
1975 c-1 1339 1 1988 8 2014 14 50 55 98 105 120 36 17 72 19 376 19 l336 0 7
-52 c14 -101 68 -160 166 -179 l60 -12 0 -63 0 -64 -387 0 c-444 0 -440 1
-481 -80 l-22 -45 2 -1755 3 -1755 24 -34 c45 -63 25 -61 746 -61 l656 0 24
25 c30 29 32 64 6 96 l-19 24 -646 3 -646 2 0 1715 0 1715 370 0 370 0 0 -84
c0 -94 17 -131 79 -173 l34 -23 577 0 577 0 34 23 c62 42 79 79 79 173 l0 84
370 0 370 0 0 -1715 0 -1715 -646 -2 -646 -3 -19 -24 c-26 -32 -24 -67 6 -96
l24 -25 658 0 c747 0 708 -4 751 80 l22 44 0 1741 0 1741 -22 44 c-41 81 -37
80 -480 80 l-388 0 0 64 0 63 60 12 c98 19 152 78 166 179 l7 52 336 0 c304 0
340 -2 376 -19 50 -22 91 -69 105 -119 6 -24 10 -357 10 -963 l0 -926 23 -21
c33 -31 80 -29 107 5 l20 26 -2 951 -3 951 -28 60 c-31 67 -72 115 -131 152
-77 50 -106 53 -473 53 l-343 0 0 28 c0 44 -20 105 -46 140 -48 63 -64 66
-324 72 l-235 5 -5 95 c-3 52 -11 104 -17 115 -19 33 -66 73 -105 89 -52 22
-327 22 -378 0z m338 -146 c7 -7 12 -42 12 -85 l0 -73 -160 0 -160 0 0 73 c0
43 5 78 12 85 17 17 279 17 296 0z m612 -327 c16 -31 13 -263 -4 -287 -14 -19
-33 -19 -756 -19 -723 0 -742 0 -756 19 -17 24 -20 256 -4 287 10 19 29 19
760 19 731 0 750 0 760 -19z m-220 -526 l0 -65 -540 0 -540 0 0 65 0 65 540 0
540 0 0 -65z m0 -280 l0 -65 -540 0 -540 0 0 65 0 65 540 0 540 0 0 -65z"/>
                                <path d="M2030 3374 c-19 -8 -96 -75 -170 -150 l-136 -134 -39 41 c-53 54
-103 79 -161 79 -100 0 -176 -68 -190 -171 -5 -36 -1 -53 23 -96 32 -60 237
-274 285 -299 40 -21 126 -21 164 -1 41 22 448 435 469 476 27 53 18 148 -19
196 -51 67 -148 93 -226 59z m108 -164 c2 -21 -30 -59 -189 -223 -105 -109
-200 -202 -211 -208 -17 -9 -34 3 -127 96 -122 120 -141 146 -121 170 24 28
51 16 116 -54 78 -83 109 -99 151 -77 16 8 96 85 178 171 125 132 152 156 174
153 19 -2 27 -10 29 -28z"/>
                                <path d="M2510 3060 c-27 -27 -26 -81 1 -106 20 -18 45 -19 601 -19 l580 0 25
29 c28 33 25 70 -9 99 -19 16 -62 17 -599 17 -566 0 -579 0 -599 -20z"/>
                                <path d="M2085 2505 c-5 -2 -23 -6 -40 -10 -21 -4 -76 -52 -175 -151 l-146
-144 -44 46 c-78 81 -155 102 -235 65 -98 -44 -141 -167 -92 -258 27 -49 252
-276 292 -294 53 -24 109 -24 160 1 47 23 441 424 468 477 10 18 17 55 17 86
0 90 -67 166 -160 181 -19 3 -39 3 -45 1z m45 -159 c6 -8 10 -24 8 -35 -4 -28
-394 -421 -417 -421 -19 0 -241 230 -241 249 0 14 29 41 43 41 7 0 48 -36 92
-80 114 -114 101 -118 310 90 94 94 176 170 182 170 6 0 16 -7 23 -14z"/>
                                <path d="M2510 2150 c-27 -27 -26 -81 1 -106 20 -18 47 -19 578 -22 370 -2
568 0 592 8 62 18 75 100 20 129 -13 8 -209 11 -595 11 -563 0 -576 0 -596
-20z"/>
                                <path d="M2025 1601 c-23 -11 -93 -73 -169 -150 l-129 -130 -53 48 c-63 58
-108 75 -175 69 -121 -12 -199 -142 -151 -251 24 -54 224 -270 284 -306 47
-28 127 -32 173 -8 41 21 448 434 470 476 27 53 18 148 -19 196 -53 70 -151
93 -231 56z m113 -162 c2 -21 -29 -58 -189 -222 -105 -109 -200 -202 -211
-208 -17 -9 -35 4 -134 102 -118 117 -134 140 -114 164 23 28 50 15 120 -59
74 -77 105 -94 143 -76 12 6 92 83 178 172 128 131 160 159 180 156 17 -2 25
-10 27 -29z"/>
                                <path d="M2510 1240 c-27 -27 -26 -81 1 -106 20 -18 47 -19 578 -22 370 -2
568 0 592 8 62 18 75 100 20 129 -13 8 -209 11 -595 11 -563 0 -576 0 -596
-20z"/>
                            </g>
                        </svg>
                        <h3 className='text-white mt-[10px]'>No Checklist Group Available</h3>



                    </div>
                </>
            }

        </div>
    )
}

export default CheckList