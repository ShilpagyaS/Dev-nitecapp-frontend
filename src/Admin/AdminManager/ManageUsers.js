import { NotificationModal } from '@/components/modal/NewDminFlowModals'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React, { useState } from 'react'
import ManageUserTable from './ManageUserTable'

function ManageUsers() {
  const [AddModal, setAddModal] = useState(false)

  return (<>
    {AddModal &&
      <NotificationModal
        isModalOpen={AddModal}
        onClickCancel={() => { setAddModal(false) }}
        title={'Notification'}
        onSave={(data) => {

          // return dispatch(createProductAndUpdatingList('beer', data))
        }}
      />
    }
    <div className="Header-container md:flex-row lg:flex-row flex-col flex justify-between lg:items-center md:items-center mb-6 w-full ">
      <div className="heading-text lg:mb-0 md:mb-0 mb-[20px]">
        <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
          Manage Users / Admins
        </h1>
      </div>
    </div>
    <ManageUserTable />
    <div className='w-full flex items-center justify-end mt-[35px]'>
      <ConditionalButton label={'Send Notifications'} condition={true} onClickHandler={() => { setAddModal(true)}} />
    </div>
  </>
  )
}

export default ManageUsers