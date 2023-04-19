import { NotificationModal } from '@/components/modal/NewDminFlowModals'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import { getAllusers, getRoles } from '@/store/slices/manageusers'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ManageUserTable from './ManageUserTable'

function ManageUsers() {
  const [AddModal, setAddModal] = useState(false)
  // const { allUsers } = useSelector((state) => state.manageusers)

  const dispatch = useDispatch()
  const [roles, setroles] = useState([])
  useEffect(() => {

    dispatch(getRoles()).then((res) => { let d = res.filter((e) => e.value != 1); setroles(d) })

  }, [])

  return (<>
    {AddModal &&
      <NotificationModal
        isModalOpen={AddModal}
        onClickCancel={() => { setAddModal(false) }}
        title={'Notification'}
        roles={roles}
        // list={allUsers}
        onSave={(data) => {

          // return dispatch(createProductAndUpdatingList('beer', data))
        }}
      />
    }
    <div className="Header-container md:flex-row lg:flex-row flex-col flex justify-between lg:items-center md:items-center mb-6 w-full ">
      <div className="heading-text w-full flex items-center justify-between lg:mb-0 md:mb-0 mb-[20px]">
        <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
          Manage Admins / Users
        </h1>
        <ConditionalButton label={'Send Notifications'} condition={true} onClickHandler={() => { setAddModal(true) }} />
      </div>
    </div>
    <ManageUserTable />
    {/* <div className='w-full flex items-center justify-end mt-[35px]'>
      <ConditionalButton label={'Send Notifications'} condition={true} onClickHandler={() => { setAddModal(true) }} />
    </div> */}
  </>
  )
}

export default ManageUsers