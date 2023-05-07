import Breadcrumb from '@/components/Breadcrumb'
import useNavDetails from '@/Hooks/useNavDetails'
import { OrangeButtons } from '@/utils/Buttons'
import Link from 'next/link'
import React from 'react'
import FoodTable from './FoodTable'

function AdminFood() {

    return (
        <div className="coctail-container">
            {/* <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                <Breadcrumb />
            </div> */}

            <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
                <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
                    Food
                </h1>
                <Link href={`/food/ingredients`}>
                    <OrangeButtons label="Ingredients" noPadding={true} />
                </Link>
            </div>
            <FoodTable />
        </div>
    )
}

export default AdminFood