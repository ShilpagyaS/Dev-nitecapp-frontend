import CocktailTable from '@/Admin/AdminDashboard-comp/CocktailTable'
import SpecsTable from '@/Admin/specsTable'
import { AddDrinkBrandsModal } from '@/components/modal/NewDminFlowModals'
import { createBrandAndUpdatingList } from '@/store/slices/brands'
import ChipWithLeftButton from '@/utils/ChipWithLeftButton'
import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
function AdminSpecs() {
    const [AddModal, setAddModal] = useState(false)
    const dispatch = useDispatch()
    return (
        <>
            {AddModal &&
                <AddDrinkBrandsModal
                    isModalOpen={AddModal}
                    onClickCancel={() => { setAddModal(false) }}
                    label={'Brands'}
                    title={'Drink Brand'}
                    onSave={(data) => {
                        console.log(data);
                        return dispatch(createBrandAndUpdatingList(data.type, data))
                    }}
                />
            }
            <div className="Header-container sm:flex-row lg:flex-row flex-col flex justify-between lg:items-center md:items-center mb-6 w-full ">
                <div className="heading-text lg:mb-0 md:mb-0 mb-[20px]">
                    <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
                        Specs
                    </h1>
                </div>
                <ChipWithLeftButton condition={true} label={'ADD A DRINK BRAND'} srcPath={'/asset/PlusVector.svg'} onClickHandler={() => { setAddModal(true) }} />
            </div>

            <SpecsTable />

        </>
    )
}

export default AdminSpecs