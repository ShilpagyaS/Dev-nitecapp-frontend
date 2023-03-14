import TableContainerWithButtons from '@/utils/TableContainerWithButtons'
import React from 'react'
const mockData = ['Coctail', 'Beverage Categories']
function AdminSpecs() {
    return (
        <>
            <div className="Header-container md:flex-row lg:flex-row flex-col flex justify-between lg:items-center md:items-center mb-6 w-full ">
                <div className="heading-text w-full lg:mb-0 md:mb-0 mb-[20px]">
                    <h1 className="heading text-white text-[32px] leading-[48px] font-bold">
                        Specs
                    </h1>
                </div>
            </div>
            {mockData.map((element) =>
                <div className='admincomponents mt-[23px]'>
                    <div className='not-italic font-semibold text-[20px] font-Inter text-white mb-[20px]'>
                        <p>
                            {element}
                        </p>
                    </div>
                    <TableContainerWithButtons />
                </div>
            )}
        </>
    )
}

export default AdminSpecs