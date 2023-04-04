import CocktailTable from '@/Admin/AdminDashboard-comp/CocktailTable'
import SpecsTable from '@/Admin/specsTable'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import React from 'react'
function AdminSpecs() {
    return (
        <>
            <div className="Header-container md:flex-row lg:flex-row flex-col flex justify-between lg:items-center md:items-center mb-6 w-full ">
                <div className="heading-text lg:mb-0 md:mb-0 mb-[20px]">
                    <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
                        Specs
                    </h1>
                </div>
                <ChipWithLeftButton condition={true} label={'ADD A DRINK BRAND'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { }} />
            </div>

            <SpecsTable />

        </>
    )
}

export default AdminSpecs