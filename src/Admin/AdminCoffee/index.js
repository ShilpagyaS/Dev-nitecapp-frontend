import Breadcrumb from '@/components/Breadcrumb'
import useNavDetails from '@/Hooks/useNavDetails'
import { OrangeButtons } from '@/utils/Buttons'
import Link from 'next/link'
import React from 'react'
import CoffeeTable from './coffeeTable'

function AdminCoffee() {
  
    return (
        <div className="coctail-container">
            <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                <Breadcrumb />
            </div>

            <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
                <h2 className="text-white text-[24px] leading-9 font-bold ">
                    Cocktail
                </h2>
                {/* <Link href={`/specs/cocktail/cocktail_ingredients`}>
                    <OrangeButtons label="Ingredients" noPadding={true} />
                </Link> */}
            </div>
            <CoffeeTable />
        </div>
    )
}

export default AdminCoffee