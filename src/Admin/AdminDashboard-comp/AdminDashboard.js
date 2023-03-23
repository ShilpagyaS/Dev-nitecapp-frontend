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
import React from 'react'
import CocktailDetailPage from '../../components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page'
import EmptyUSerLayout from '../../components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/EmptyUSerLayout'


function AdminDashboard() {
    return (
        <>
            {/* <div className="Header-container flex-col flex justify-between lg:items-center md:items-center mb-8 w-full ">
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h1 className="heading text-white text-[32px] leading-tight font-semibold font-Inter">
                        Dashboard
                    </h1>
                </div>
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h5 className='text-white not-italic font-normal text-base font-Inter'>Welcome back, Zaylan! Finish a module to continue your Streak.</h5>
                </div>
            </div> */}
            {/* <TableContainerWithButtons />
            <ChipWithLeftButton />
            <CustomSelect />
            <TableComp />
            <TableComponent />
            <Search /> */}
            {/* 

            <MethodCard i={1} method="Combine all ingredients into small shaker tin" />
            <div className='w-[500px]'>

                <MethodCard i={2} method="Strain into coupe glass (if egg white) or rocks glass (if no egg white) using Hawthorne strainer" />
            </div>
            <PrepText /> */}

            {/* <CocktailDetailPage /> */}
            <Empty componentName={'Items'} />
            {/* <EmptyUSerLayout /> */}
            {/* <FileUpdate /> */}
        </>
    )
}

export default AdminDashboard