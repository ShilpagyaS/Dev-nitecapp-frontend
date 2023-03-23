import React from 'react'
import BrandSuperTable from './BrandSuperTable'

function SuperAdminBrand() {
    return (
        <div className="coctail-container">
            <div className="search-container flex justify-between items-center lg:mb-5 mb-1 ">
                <div className="text-container ">
                    <p className="text-white text-[14px]">
                        <span className="text-[#CCCCCC] capitalize">Brands</span>
                    </p>
                </div>
            </div>

            <div className="heading-container flex items-center justify-between lg:mb-8 mb-3">
                <h2 className="text-white text-[24px] leading-9 font-bold ">
                    Existing Brands
                </h2>
            </div>
            <BrandSuperTable />
        </div>
    )
}

export default SuperAdminBrand