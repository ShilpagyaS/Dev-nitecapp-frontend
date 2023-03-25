import useNavDetails from '@/Hooks/useNavDetails'
import { OrangeButtons } from '@/utils/Buttons'
import Link from 'next/link'
import React from 'react'
import LowAbvtable from './LowAbvtable'

function AdminLowAbv() {
    const { category, subcategory, productId } = useNavDetails()
    let crun = ""
    if (category) crun = crun + `${category} /`
    if (subcategory) crun = crun + ` ${subcategory} `
    return (
        <div className="coctail-container">
            <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                <div className="text-container ">
                    <p className="text-white text-[14px]">
                        <span className="text-[#CCCCCC] capitalize">{crun}</span>
                    </p>
                </div>
            </div>

            <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
                <h2 className="text-white text-[24px] leading-9 font-bold ">
                    Low / No ABV
                </h2>
                <Link href={`/specs/low_no_abv/brands`} >
                    <OrangeButtons label="Brands" noPadding={true} />
                </Link>
            </div>

            <LowAbvtable />
        </div>
    )
}

export default AdminLowAbv