import useNavDetails from '@/Hooks/useNavDetails'
import React from 'react'
import SpiritBrandTable from './spiritBrandTable'

function AdminSpiritCategory({ productId, subcategory }) {
    const { category } = useNavDetails()
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
                    Spirits
                </h2>
            </div>

            <SpiritBrandTable productId={productId} subcategory={subcategory} />
        </div>
    )
}

export default AdminSpiritCategory