import Breadcrumb from '@/components/Breadcrumb'
import useNavDetails from '@/Hooks/useNavDetails'
import { OrangeButtons } from '@/utils/Buttons'
import Link from 'next/link'
import React from 'react'
import WineTable from './WineTable'

function AdminWine() {

    return (
        <div className="coctail-container">
            <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                <Breadcrumb />
            </div>

            <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
                <h2 className="text-white text-[24px] leading-9 font-bold ">
                    Wine Categories
                </h2>
                <Link href={`/specs/wine/brands`} >

                    <OrangeButtons label="Brands" noPadding={true} />
                </Link>
            </div>

            <WineTable />
        </div>
    )
}

export default AdminWine