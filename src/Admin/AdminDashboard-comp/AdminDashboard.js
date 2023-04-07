import { NotificationModal } from '@/components/modal/NewDminFlowModals'
import { CustomButton } from '@/utils/Buttons'
import FileUpdate from '@/utils/Cards/FileUpdate'
import MethodCard from '@/utils/Cards/Text card/MethodCard'
import PrepText from '@/utils/Cards/Text card/PrepText'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import CustomSelect from '@/utils/CustomSelect'
import Empty from '@/utils/Empty'
import Search from '@/utils/Search'
import TableComp from '@/utils/TableComp'
import TableComponent from '@/utils/TableComponent'
import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import Image from 'next/image'
import React, { useState } from 'react'
import CocktailDetailPage from '../../components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page'
import EmptyUSerLayout from '../../components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/EmptyUSerLayout'


function AdminDashboard() {
    return (
        <>

            <Empty componentName={'Items'} />

        </>
    )
}

export default AdminDashboard